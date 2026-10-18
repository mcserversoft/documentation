import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { parseHTML } from 'linkedom';
import { parse as parseYaml } from 'yaml';
import { staticClient } from 'fumadocs-core/search/client/orama-static';

const root = resolve('out');
const siteOrigin = 'https://docs.mcserversoft.com';
const failures = new Set<string>();
const documents = new Map<string, ReturnType<typeof parseHTML>['document']>();
const externalLinks = new Map<string, Set<string>>();
let linkCount = 0;
let anchorCount = 0;
async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]))).flat();
}
const files = await walk(root);
// Match exact URL casing even when this check runs on Windows.
const exportedFiles = new Map(files.map((file) => [relative(root, file).replaceAll('\\', '/'), file]));
function target(path: string) {
  const key = path.replace(/^\//, '');
  return exportedFiles.get(key) ?? exportedFiles.get(key.replace(/\/?$/, '/index.html').replace(/^\//, ''));
}
async function documentFor(file: string) {
  if (!documents.has(file)) documents.set(file, parseHTML(await readFile(file, 'utf8')).document);
  return documents.get(file)!;
}
function hasAnchor(document: ReturnType<typeof parseHTML>['document'], id: string) {
  return document.getElementById(id) || [...document.querySelectorAll('a[name]')].some((a) => a.getAttribute('name') === id);
}
function headingText(text: string | null | undefined) {
  return (text ?? '').replaceAll('Copy Anchor Link', '').replace(/[\u200b-\u200d]/g, '').replace(/\s+/g, ' ').trim();
}
async function checkLink(href: string, pageUrl: string, origin: string) {
  if (href.includes('\\')) failures.add(`${origin}: URL contains a Windows path separator ${href}`);
  let url: URL;
  try { url = new URL(href, `${siteOrigin}${pageUrl}`); }
  catch { failures.add(`${origin}: invalid URL ${href}`); return; }
  if (url.origin !== siteOrigin) {
    if (['http:', 'https:'].includes(url.protocol)) {
      if (!externalLinks.has(url.href)) externalLinks.set(url.href, new Set());
      externalLinks.get(url.href)!.add(origin);
    }
    return;
  }
  linkCount++;
  let path: string;
  let id: string;
  try {
    path = decodeURIComponent(url.pathname);
    id = decodeURIComponent(url.hash.slice(1));
  } catch { failures.add(`${origin}: invalid URL encoding ${href}`); return; }
  const file = target(path);
  if (!file) {
    failures.add(`${origin}: missing ${href}`); return;
  }
  if (id && file.endsWith('.html')) {
    anchorCount++;
    if (!hasAnchor(await documentFor(file), id)) failures.add(`${origin}: missing anchor ${href}`);
  }
}
for (const file of files.filter((file) => file.endsWith('.html'))) {
  const rel = relative(root, file).replaceAll('\\', '/');
  const url = '/' + rel.replace(/index\.html$/, '');
  const document = await documentFor(file);
  for (const element of document.querySelectorAll('a[href], img[src], script[src], link[href]')) {
    const href = element.getAttribute('href') ?? element.getAttribute('src');
    if (href) await checkLink(href, url, rel);
  }
  for (const link of document.querySelectorAll('#nd-toc a[href^="#"]')) {
    const href = link.getAttribute('href')!;
    const heading = document.getElementById(decodeURIComponent(href.slice(1)));
    if (headingText(link.textContent) !== headingText(heading?.textContent)) failures.add(`${rel}: table of contents label does not match ${href}`);
  }
}
// Published guide URLs and bookmarks captured before the migration.
const legacy: Record<string, string[]> = JSON.parse(await readFile('scripts/legacy-routes.json', 'utf8'));
for (const [url, anchors] of Object.entries(legacy)) {
  await checkLink(url, '/', 'Legacy route');
  for (const anchor of anchors) await checkLink(`${url}#${anchor}`, '/', 'Legacy bookmark');
}
// Every operation in both input specifications must have an exported page.
let operationCount = 0;
for (const version of ['v1', 'v2']) {
  const schema = parseYaml(await readFile(`apis/${version}.yml`, 'utf8'));
  const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'];
  const count = Object.values(schema.paths).reduce<number>((sum, path) => sum + Object.keys(path as object).filter((key) => methods.includes(key)).length, 0);
  const generated = (await walk(`docs/apis/${version}`)).filter((file) => file.endsWith('.mdx') && !file.endsWith('/index.mdx'));
  if (count !== generated.length) failures.add(`${version}: expected ${count} operations, got ${generated.length}`);
  for (const file of generated) await checkLink('/' + file.replace(/^docs\//, '').replace(/\.mdx$/, ''), '/', 'API endpoint');
  operationCount += count;
}
// Exercise the same client search engine used in the browser, using the export.
const searchJson = await readFile(resolve(root, 'search-index.json'), 'utf8');
const searchIndex = JSON.parse(searchJson);
const searchEntries = Object.values(searchIndex.docs.docs) as { url: string; type: string; content: string }[];
const searchUrls = new Set(searchEntries.map((entry) => entry.url));
for (const url of searchUrls) await checkLink(url, '/', 'Search index');
for (const entry of searchEntries.filter((entry) => entry.type === 'heading')) {
  const url = new URL(entry.url, siteOrigin);
  const file = target(decodeURIComponent(url.pathname));
  if (!file) continue; // Already reported by checkLink.
  const heading = (await documentFor(file)).getElementById(decodeURIComponent(url.hash.slice(1)));
  if (headingText(entry.content) !== headingText(heading?.textContent)) failures.add(`Search heading label does not match ${entry.url}`);
}
const client = staticClient({ from: 'data:application/json;base64,' + Buffer.from(searchJson).toString('base64') });
for (const [query, expected] of [
  ['port forwarding', '/networking/port-forwarding'],
  ['Get API version', '/apis/v2/general/get-api-version'],
  ['Get API version', '/apis/v1/general/get-api-version'],
] as const) {
  const results = await client.search(query);
  if (!results.some((result) => 'url' in result && result.url === expected)) failures.add(`Search "${query}" did not return ${expected}`);
}
const sitemap = parseHTML(await readFile(resolve(root, 'sitemap.xml'), 'utf8')).document;
for (const entry of sitemap.querySelectorAll('loc')) await checkLink(entry.textContent!, '/', 'Sitemap');
for (const filename of ['.nojekyll', 'CNAME', 'sitemap.xml', '404.html']) {
  if (!(await stat(resolve(root, filename)).catch(() => null))?.isFile()) failures.add(`Missing deployment file: ${filename}`);
}
// Network checks are opt-in so transient upstream outages do not break CI.
if (process.argv.includes('--external')) {
  const pending = [...externalLinks];
  let cursor = 0;
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (cursor < pending.length) {
      const [href, origins] = pending[cursor++];
      const origin = [...origins][0];
      try {
        const response = await fetch(href, {
          signal: AbortSignal.timeout(25000),
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MCSSDocumentationLinkCheck/1.0)' },
        });
        if (!response.ok) {
          failures.add(`${origin}: external HTTP ${response.status} ${href}`);
          await response.body?.cancel();
        } else if (new URL(href).hash && response.headers.get('content-type')?.includes('text/html')) {
          const id = decodeURIComponent(new URL(href).hash.slice(1));
          if (!hasAnchor(parseHTML(await response.text()).document, id)) failures.add(`${origin}: missing external anchor ${href}`);
        } else {
          await response.body?.cancel();
        }
      } catch (error) { failures.add(`${origin}: external request failed ${href}: ${String(error)}`); }
    }
  }));
  console.log(`Checked ${externalLinks.size} unique external URLs (including redirects and fragments).`);
}
if (failures.size) {
  console.error([...failures].join('\n'));
  process.exit(1);
}
console.log(`Verified ${documents.size} HTML pages, ${linkCount} internal links/assets, ${anchorCount} section targets, ${operationCount} API operations, ${Object.keys(legacy).length} legacy routes, ${searchUrls.size} search destinations, and sitemap links.`);
