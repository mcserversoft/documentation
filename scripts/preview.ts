import { resolve, sep } from 'node:path';
import { stat } from 'node:fs/promises';

const root = resolve('out');
const port = Number(process.env.PORT ?? 3000);
const server = Bun.serve({
  port,
  hostname: '127.0.0.1',
  async fetch(request) {
    const url = new URL(request.url);
    let path: string;
    try { path = resolve(root, `.${decodeURIComponent(url.pathname)}`); }
    catch { return new Response('Bad request', { status: 400 }); }
    if (path !== root && !path.startsWith(root + sep)) return new Response('Forbidden', { status: 403 });
    if ((await stat(path).catch(() => null))?.isDirectory()) path += '/index.html';
    const file = Bun.file(path);
    if (await file.exists()) {
      return new Response(file);
    }
    return new Response(Bun.file(resolve(root, '404.html')), { status: 404 });
  },
});
console.log(`Static documentation preview: ${server.url}`);
