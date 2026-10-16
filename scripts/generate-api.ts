import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { generateFilesOnly } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

// Only these generated directories are replaced, never hand-written guides.
for (const version of ['v2', 'v1']) {
  const output = `docs/apis/${version}`;
  const legacy = version === 'v1';
  const api = createOpenAPI({ input: { [version]: `./apis/${version}.yml` } });
  const files = await generateFilesOnly({
    input: api,
    per: 'operation',
    groupBy: 'tag',
    name: (entry) => entry.info.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    meta: true,
    includeDescription: true,
    frontmatter: (title) => ({ title: `${title} (${version})` }),
    beforeWrite(files) {
      const lines = [
        '---',
        `title: API ${version}${legacy ? ' (legacy)' : ''}`,
        `description: ${legacy ? 'Reference for older MCSS releases.' : 'API reference for MC Server Soft v13.7.0 and later.'}`,
        '---', '',
        ...(legacy ? ['<Callout type="warn" title="Legacy API">', 'This API is retained for older MCSS installations. Use the [v2 reference](/apis/v2) for current integrations.', '</Callout>', ''] : []),
        '[Set up API access](/API/about) · [Admin permissions](/API/admin) · '+
          `[Download OpenAPI specification](/apis/${version}.yml)`, '',
      ];
      for (const group of this.generatedEntries[version]) {
        if (group.type !== 'group') continue;
        // Keep Redoc tag bookmarks such as /apis/v2#tag/Users working.
        lines.push(`## ${group.info.title} [#tag/${group.info.title}]`, '', '<Cards>');
        for (const entry of group.entries) {
          if (entry.type !== 'operation') continue;
          const href = `/apis/${version}/${entry.path.replace(/\.mdx$/, '')}`;
          const description = `${entry.item.method.toUpperCase()} ${entry.item.path}`;
          lines.push(`<Card href=${JSON.stringify(href)} title=${JSON.stringify(entry.info.title)} description=${JSON.stringify(description)} />`);
        }
        lines.push('</Cards>', '');
      }
      files.push({ path: 'index.mdx', content: lines.join('\n') });
      const meta = files.find((file) => file.path === 'meta.json');
      if (meta) {
        const data = JSON.parse(meta.content);
        meta.content = JSON.stringify({ ...data, title: `API ${version}${legacy ? ' (legacy)' : ''}`, pages: ['index', ...data.pages] }, null, 2);
      }
    },
  });
  if (new Set(files.map((file) => file.path)).size !== files.length) {
    throw new Error(`Duplicate generated API page paths in ${version}. Give operations distinct summaries.`);
  }
  await rm(output, { recursive: true, force: true });
  for (const file of files) {
    await mkdir(dirname(`${output}/${file.path}`), { recursive: true });
    await writeFile(`${output}/${file.path}`, file.content);
  }
  console.log(`Generated ${files.filter((file) => file.path.endsWith('.mdx')).length - 1} API ${version} endpoint pages.`);
  await mkdir('public/apis', { recursive: true });
  await writeFile(`public/apis/${version}.yml`, await readFile(`apis/${version}.yml`, 'utf8'));
}
