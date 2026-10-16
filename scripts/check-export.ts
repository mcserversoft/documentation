import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { parseHTML } from 'linkedom';
import { parse as parseYaml } from 'yaml';
import { staticClient } from 'fumadocs-core/search/client/orama-static';

const root = resolve('out');
const failures = new Set<string>();
const documents = new Map<string, ReturnType<typeof parseHTML>['document']>();
async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(`${dir}/${entry.name}`) : [`${dir}/${entry.name}`]))).flat();
}
function fileFor(path: string) {
  if (path.endsWith('/')) return resolve(root, `.${path}index.html`);
  return resolve(root, `.${path}`);
}
async function target(path: string) {
  const file = fileFor(path);
  const info = await stat(file).catch(() => null);
  if (info?.isFile()) return file;
  if (info?.isDirectory()) return `${file}/index.html`;
  return null;
}
async function documentFor(file: string) {
  if (!documents.has(file)) documents.set(file, parseHTML(await readFile(file, 'utf8')).document);
  return documents.get(file)!;
}
async function checkLink(href: string, pageUrl: string, origin: string) {
  const url = new URL(href, `https://docs.mcserversoft.com${pageUrl}`);
  if (url.origin !== 'https://docs.mcserversoft.com') return;
  const path = decodeURIComponent(url.pathname);
  const file = await target(path);
  if (!file || !(await stat(file).catch(() => null))?.isFile()) {
    failures.add(`${origin}: missing ${href}`); return;
  }
  if (url.hash && file.endsWith('.html')) {
    const id = decodeURIComponent(url.hash.slice(1));
    if (id && !(await documentFor(file)).getElementById(id)) failures.add(`${origin}: missing anchor ${href}`);
  }
}
const files = await walk(root);
for (const file of files.filter((file) => file.endsWith('.html'))) {
  const rel = relative(root, file);
  const url = '/' + rel.replace(/index\.html$/, '');
  const document = await documentFor(file);
  for (const element of document.querySelectorAll('a[href], img[src], script[src], link[href]')) {
    const href = element.getAttribute('href') ?? element.getAttribute('src');
    if (href) await checkLink(href, url, rel);
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
const searchJson = await readFile(resolve(root, 'api/search'), 'utf8');
const client = staticClient({ from: 'data:application/json;base64,' + Buffer.from(searchJson).toString('base64') });
for (const [query, expected] of [
  ['port forwarding', '/networking/port-forwarding'],
  ['Get API version', '/apis/v2/general/get-api-version'],
  ['Get API version', '/apis/v1/general/get-api-version'],
] as const) {
  const results = await client.search(query);
  if (!results.some((result) => 'url' in result && result.url === expected)) failures.add(`Search "${query}" did not return ${expected}`);
}
for (const filename of ['.nojekyll', 'CNAME', 'sitemap.xml', '404.html']) {
  if (!(await stat(resolve(root, filename)).catch(() => null))?.isFile()) failures.add(`Missing deployment file: ${filename}`);
}
if (failures.size) {
  console.error([...failures].join('\n'));
  process.exit(1);
}
console.log(`Verified ${documents.size} HTML pages, ${operationCount} API operations, ${Object.keys(legacy).length} legacy routes, links/assets/bookmarks, and guide + API search.`);
