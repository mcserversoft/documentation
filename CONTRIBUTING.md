# Contributing

Edit a guide using its **Edit on GitHub** link, or fork this repository and work
locally with `bun install --frozen-lockfile` and `bun run dev`.

Write guides as `.mdx` files in `docs/`, with at least a `title` in YAML frontmatter.
Use each folder's `meta.json` to set its title and page order. Keep existing URLs
and heading anchors stable when editing published content.

Fumadocs components such as `Callout`, `Tabs`, `Tab`, `Cards`, and `Card` are
available in MDX. Custom heading anchors use `## Heading [#anchor-name]`.
Use root-relative links for internal pages and images so they also work on the
static site, for example `/advanced/java-version` and `/img/docs/example.png`.

Edit API reference in `apis/v1.yml` or `apis/v2.yml`. Do not edit generated files
under `docs/apis/v1/` or `docs/apis/v2/`; the next build replaces them.

Before opening a pull request, run:

```sh
bun run build
bun run typecheck
bun run check:export
```

For product questions, visit [MCSS Discord](https://www.mcserversoft.com/discord).

## Content evidence

MCSS is version agnostic; keep Minecraft/Java/loader requirements separate from
MCSS application behavior. Use mcserversoft.com, maintainer-confirmed facts, and
existing documented behavior for product claims. Do not infer new controls,
defaults, or guarantees from how another server manager works.

For changing external facts, use primary project documentation and link the
source near the claim. Bound version ranges, distinguish minimum requirements
from recommended runtimes, and date runtime/version reviews. Keep screenshot
examples distinct from current exact filenames. Update CONTENT_REVIEW.md when
new product evidence resolves a listed source gap.
