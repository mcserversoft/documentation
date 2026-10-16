# MCSS exploration and screenshot handoff

This runbook is for the agent with access to a Windows installation of MC Server
Soft. Explore the application, verify the documentation against it, capture new
screenshots, and write missing guides. No hands-on MCSS testing has been performed
as part of the documentation migration. The checklist below is pending work.

## Product facts and sources

- The maintainer identified **MCSS 13.10.0** as the current version for this work.
  Record the actual installed version before testing. Do not silently substitute
  another version or label older screenshots as 13.10.0.
- **MCSS is version agnostic.** Do not invent a Minecraft version whitelist or
  infer MCSS compatibility limits from a Java, loader, or server requirement.
- **https://www.mcserversoft.com/** is the official product source.
- Do not assume how MCSS works. Existing guides and screenshots are leads to
  investigate, not proof of current behavior. Distinguish MCSS behavior from
  Minecraft, Java, Windows, plugins, loaders, and third-party tools.
- Read [CONTENT_REVIEW.md](CONTENT_REVIEW.md) before exploring. It records the
  inherited product details, known API limitations, and claims deliberately
  removed from the old documentation.

## Establish the environment

1. Read [AGENTS.md](AGENTS.md) and [README.md](README.md). Inspect Git status and
   preserve unrelated work. The documentation work currently lives on `dev`;
   verify the checkout rather than resetting or switching over local changes.
2. Confirm the available tools can see and operate the Windows desktop. Shell or
   filesystem access alone does not establish that ability. If desktop control is
   unavailable, explain the missing access and continue only with evidence the
   available tools can actually obtain. Never claim to have seen an interface
   from command output alone.
3. Prefer a dedicated test installation or VM with disposable servers, worlds,
   users, and API keys. Confirm which installation and data may be modified before
   experimenting. Preserve existing data; do not test destructive actions on a
   live server. If only a live installation is available, continue with read-only
   inspection and leave disruptive tests pending.
4. Record MCSS version/build, Windows version, display resolution/scaling, app
   theme/language, Java versions, and the exact server/loader versions tested.
   Record existing prerequisites separately from prerequisites you actually
   verified on a clean installation.
5. Use neutral example names and disposable credentials. Avoid opening real
   player data, private chats, production configuration, or unrelated apps.

## Work in this order

Each item is an investigation, not an assertion that MCSS exposes a particular
feature. If a control is absent, document the observation and the version tested;
do not manufacture a workflow or infer universal absence from one screen.

### 1. First launch, server creation, and imports

- Verify installation and first-launch instructions, prerequisite prompts, and
  where configuration and logs are stored. Consult official requirements rather
  than guessing native runtime or Windows support requirements.
- Walk through creating and starting a simple server, stopping it cleanly, and
  starting it again. Record exact control labels and how success is confirmed.
- Import an existing server and world. Inspect the accepted file selectors and
  launch options. Test representative JAR and generated launcher/argument-file
  setups, including a loader or modpack where practical.
- Verify global Java selection and per-server overrides. Keep runtime
  requirements specific to the tested server software and release.
- Prioritise the existing first-server, create/import, Java, and server-settings
  guides when replacing screenshots and instructions.

### 2. Backups and recovery

- Discover the available backup controls, destination settings, filename
  substitutions, scheduling, retention, and restore workflow, if present.
- Demonstrate recovery using a disposable world with identifiable test data.
  Record whether the server was running, stopped, or explicitly saved.
- Inspect what the archive actually contains: world files, server configuration,
  plugins/mods, MCSS configuration, and anything excluded.
- Do not equate a successful archive with a consistent live backup. One restore
  test does not establish guarantees about crash consistency, external databases,
  or every server implementation. Seek official evidence or maintainer
  confirmation for those claims.

### 3. Everyday operation

- Verify console input, start/stop/restart behavior, launch settings, and Keep
  Online modes. Distinguish normal shutdown from forced termination.
- Inspect scheduling: available triggers and actions, enabled/disabled state,
  timing/time zone, and interaction with restart behavior. Document missed-task
  behavior only if tested or authoritatively specified.
- Investigate multi-server controls and player administration, allowlists,
  operators, bans, and plugin/mod management where available. Clearly identify
  actions performed through Minecraft commands or files rather than MCSS UI.

### 4. Web panel and permissions

- Reproduce setup, login, user creation, and server access with test accounts.
- Build a permission matrix using a restricted account and an administrator.
  Verify allowed and denied actions; hidden buttons alone do not prove that
  authorization is enforced.
- Separate game ports from management ports. Record actual protocol, address,
  certificate, and browser-origin behavior without disabling security checks as
  a default workaround. Do not expose the test instance publicly just to obtain
  screenshots.

### 5. API evidence and examples

- Look for a current official API export, ideally from the installed version.
  Record its provenance. Compare it with `apis/v1.yml` and `apis/v2.yml`.
- The existing specs contain historical examples and captured UUID paths; v1
  also has a nonstandard security scheme. Do not repair contracts by guessing.
- Verify authentication, server discovery, status, commands, and permitted
  control operations against disposable servers. Record exact requests and
  responses with secrets removed, including relevant authentication/permission
  failures. Revoke temporary keys when finished.
- Do not infer pagination, rate limits, endpoint completeness, or universal error
  behavior from a few successful calls. Never run destructive API operations on
  real servers without explicit authorization for those operations.

### 6. Updates, moving an installation, and troubleshooting

- Verify application upgrades, server software updates, and moving an MCSS
  installation as separate workflows. Test only on copies with a recovery path.
- Capture useful reproducible failures, their exact messages, relevant logs,
  diagnosis, and the verified fix. Avoid presenting one observed cause as the
  explanation for every similar symptom.
- Record useful support information and how to obtain it without publishing
  credentials, personal paths, or player information.

## Record evidence as you go

Create a dated Markdown report under `contributor-notes/mcss-exploration/`.
Keep private/raw logs and captures outside Git; commit only reviewed, sanitised
evidence. Use a record like this for each workflow:

```text
Workflow / target guide:
Date, MCSS build, Windows version, relevant server and Java versions:
Starting state and prerequisites:
Exact steps and control labels:
Observed result and how it was checked:
Failure cases or permission tests performed:
Screenshot paths:
Official source URL, if relevant:
Evidence status: observed / official source / maintainer-confirmed / unresolved
Limits and follow-up questions:
```

Separate expected behavior from observed results. Record failed tests and
incomplete investigations too. A successful path through the UI does not prove
behavior across all versions, server types, or permission combinations.

## Screenshot standards

- Capture the actual Windows application with the available desktop tools.
  Never generate, redraw, or fabricate MCSS UI, labels, dialogs, or success states.
- Use a consistent resolution, scaling, theme, and language. Capture enough
  context to locate the control; omit unrelated desktop areas. Prefer a focused
  application window or dialog over a full desktop screenshot.
- Prepare neutral names and non-sensitive content before capture. Inspect every
  image for API keys, tokens, passwords, personal paths, addresses, and player
  data. Retake unsafe images before adding them to Git.
- Save new captures under `public/img/docs/<topic>/` with descriptive lowercase
  hyphenated names, for example `create-server-select-file-13-10-0.png`. Record
  capture version and date in the evidence report; do not imply that an inherited
  image is new. Use a web-friendly format with readable UI text and reasonable
  file size.
- Add useful alt text and captions where they clarify the step. Explain the
  action in text so readers do not depend on the image or an arrow alone.
- Check screenshots at the rendered documentation size, including a narrow
  viewport. Replace old captures only when the new image supports the associated
  instructions, and remove obsolete assets only after checking references.

## Turn findings into documentation

- Edit handwritten guides in `docs/` and their `meta.json` navigation. Reorganise
  or split content when it improves the reader's task, while preserving published
  URLs and custom anchors or providing compatible routes.
- Keep general Minecraft operations distinct from verified MCSS controls. Use
  official upstream sources for changing Java/Minecraft/loader requirements.
- Edit API source specifications in `apis/` only with adequate evidence. Do not
  edit generated pages in `docs/apis/v1/` or `docs/apis/v2/`.
- Update `CONTENT_REVIEW.md` to identify newly verified behavior, replaced
  screenshots, sources, and remaining gaps. Do not mark a whole area verified
  because one workflow passed. Update review dates only where work was done.
- Follow the Bun workflow in the README. Before changing application code, read
  the relevant installed Next.js guide as required by `AGENTS.md`.
- After content, image, navigation, or API changes, run `bun run build`,
  `bun run typecheck`, and `bun run check:export`. Preview changed guides and
  search results; inspect screenshots, links, and any changed API rendering.
- Finish with a concise account of what was tested, what changed, checks run,
  and unresolved questions. Leave a reviewable diff. Pushes, merges, deployments,
  and changes to real servers require authorization from the active task; this
  handoff does not grant it. Pushing `main` publishes the documentation.
