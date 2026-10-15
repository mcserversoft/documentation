# MC Server Soft documentation

Self-hosted guides and API reference built with Fumadocs and Next.js. The build
exports a static site to `out/`, including a browser-side search index. No Node
server, database, hosted search provider, or API credentials are needed to serve it.

## Development

Install Node.js 24 and Bun 1.3.11 (the versions used by CI), then run:

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. Edit guides in `docs/` and navigation in `meta.json`
files. API endpoint pages are generated from `apis/v1.yml` and `apis/v2.yml` before
each development session and production build. After editing a spec during a
session, run `bun run generate:api` again.

```sh
bun run build          # Generates API pages and exports the site to out/
bun run typecheck
bun run check:export   # Checks exported links, assets, API coverage, and search
bun run preview        # Serves the production files locally
```

Bun manages dependencies and runs project scripts. Next.js uses Node.js at build
time. Commit `bun.lock`; do not introduce npm, Yarn, or pnpm lockfiles.

## Hosting

### GitHub Pages (existing deployment)

`.github/workflows/deploy.yml` builds and validates pull requests. Pushes to `main`
publish `out/` to the `gh-pages` branch using the existing deployment mechanism.
In repository Settings → Pages, use **Deploy from a branch**, `gh-pages`, `/ (root)`.

The existing custom domain `docs.mcserversoft.com` is retained in `public/CNAME`.
`public/.nojekyll` ensures GitHub serves Next.js assets under `/_next/`. The site
assumes a domain root, not a `/documentation/` project subpath.

### Cloudflare Pages (alternative)

Use a static deployment, without a Next.js Workers adapter:

- Framework preset: **None**
- Build command: `bun run build`
- Output directory: `out`
- Node.js version: **24**
- Bun version: **1.3.11** (`BUN_VERSION` in build environment variables)

If automatic dependency installation is disabled, use
`bun install --frozen-lockfile && bun run build` as the build command. Configure the
custom domain in Cloudflare; the GitHub `CNAME` file does not configure it there.
Only keep the deployment workflow for the host you actively publish to.

### Other static hosting / Docker

Upload the contents of `out/` to a static web server with directory index support.
The Dockerfile builds with Bun and serves the export through nginx:

```sh
docker build -t mcss-docs .
docker run --rm -p 8080:80 mcss-docs
```

## Content and API reference

- `docs/`: hand-written MDX guides and Fumadocs `meta.json` navigation.
- `apis/`: original OpenAPI specifications; edit these to change API reference.
- `docs/apis/v1/` and `docs/apis/v2/`: generated and ignored by Git.
- `public/`: images, favicon, domain configuration, and other static assets.
- `app/`, `components/`, `lib/`: layouts, rendering, and static search integration.

Both API versions share the guide layout and search. Endpoint pages include
parameters, request/response schemas, and an interactive playground. Requests run
from the reader's browser to their MCSS instance. The instance must be reachable
and allow that browser origin; HTTPS/mixed-content and certificate rules still
apply. There is no hosted request proxy.

The guides target MCSS 13.10.0 and retain published guide routes and custom
heading anchors. Minecraft/Java and upstream software guidance was reviewed on
15 October 2026. See `CONTENT_REVIEW.md` for product evidence, retained MCSS
behavior, source limitations, and remaining opportunities for authoritative detail.
The public `docs/reference/versions-and-sources.mdx` page lists primary sources.

For the agent exploring MCSS on Windows and capturing replacement screenshots,
follow [MCSS_EXPLORATION.md](MCSS_EXPLORATION.md). It sets the investigation order,
evidence requirements, screenshot standards, and documentation validation steps.
