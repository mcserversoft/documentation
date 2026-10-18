# Content review: MCSS 13.10.0

General source review: 15 October 2026. Selected Windows workflows tested:
16 October 2026; see the [dated evidence report](contributor-notes/mcss-exploration/2026-10-16-windows-13-10-0.md).

## Product authority and scope

The maintainer confirmed in this task that **13.10.0 is current**,
**mcserversoft.com is authoritative**, and **MCSS is version agnostic**. These are
explicit product facts, not deductions from the Minecraft or loader projects.

The initial migration rewrote product controls from inherited documentation.
The 16 October Windows investigation uses a separate, disposable MCSS installation.
Executable metadata reports `13.10.0.0`, and the actual UI displays `v13.10.0`.
New captures carry `13-10-0` filenames; inherited captures remain historical
illustrations. Verification is workflow-specific, not a blanket product approval.

## Windows evidence added on 16 October 2026

Test environment: Windows 11 Pro build 26300, English dark interface, reported
2560 × 1440 display / 96 DPI, portable Temurin 25.0.4.1. This was not a clean
Windows/runtime prerequisite test. The evidence report records executable/JAR
hashes, actual controls, failed cases, and limitations.

- **Create/start/stop:** welcome Create and File → New Server.., Paper selection,
  JAR picker, creation fields, optional EULA acceptance, the `eula=false` failure,
  successful Paper 26.3 build 194 readiness, and normal Stop were exercised.
  MCSS copied the JAR as `paper.jar`. Minecraft client login was not tested.
- **Java:** a global executable with an empty local override launched the expected
  runtime. A valid per-server override also launched successfully while the global
  path deliberately referenced a nonexistent executable. This verifies precedence
  for the tested Startup Line method, not batch launchers or picker discovery.
- **Settings/screenshots:** General, Advanced, Crash Handling, server type chooser,
  first launch, backup filename/retention controls, scheduler forms, and disabled
  panel/empty credential manager were captured from the actual application.
  Images with personal paths or the automatically displayed public IP are not
  published. The backup-settings image is a crop of an actual capture.
- **Backup:** an empty-blacklist, stopped-server backup reached BACKUP DONE using
  an existing absolute destination. A relative destination was accepted by the
  form but failed at execution. The inspected ZIP includes world data, server
  properties/JAR/libraries/logs, per-server MCSS configuration, and plugin/mod text
  fixtures. It does not include the application-wide resources configuration.
  Blacklist matching, retention deletion, live consistency, and Suspend server's
  automatic stop/start behavior remain untested.
- **Recovery/import:** extracted into a new directory, checked identical scoreboard
  file hashes, imported by selecting `server.properties`, started on a separate
  loopback port, and queried the recovered objective from the console. Import
  copied the source and created a new server ID/configuration, with no inherited
  local Java override or backup templates. Other selector files and real
  loader/modpack imports require their own tests.
- **Scheduler:** a non-repeating ten-second interval command job ran ten seconds
  after Paper's readiness message. New `/running/scheduling` documents this tested
  path, inspected trigger/job controls, and untested timing/condition cases.
- **Restart:** Restart produced a normal shutdown/save sequence and another
  successful startup. Elevated restarted the disposable server after its verified
  Java child was terminated externally, while normal MCSS Stop left it offline.
  A Minecraft stop command entered through MCSS also left it offline. Aggressive
  restarted after MCSS Stop. Broader
  crash causes and server implementations have not been established by this test.
- **Remote/API:** setup changes applied on leaving Program Settings without an
  application restart; the management listener was wildcard `::`. Disposable
  API keys/users were created, authentication and actual response permissions
  were tested, and all were revoked. Restricted panel sessions returned expected
  403s in the exercised cases, but restricted API-key results exceeded intended
  permissions and varied after restart. These discrepancies require maintainer
  review. Exact sanitized transcripts accompany the report; no guarantee of
  API-key isolation or complete matrix is asserted. Browser login/CORS and
  certificate trust deployment were not verified; no browser barrier was bypassed.
- **Relocation/arguments:** a stopped full installation copied to another folder
  on the same computer loaded both servers. Paper started using `java @launch.args`
  and returned the restored objective. Java remained at its existing absolute
  path outside MCSS. This is not a loader/modpack, new-computer, or upgrade test.

The [official API link](https://www.mcserversoft.com/apidocs) currently redirects to
the historical API_2.4.1 reference. It is not an installed-build export and does
not resolve the existing contract gaps. API source specifications remain unchanged.

## External facts updated

- Bounded Vanilla/Fabric runtime ranges through Minecraft 26.3; Java 25 from
  26.1 and Java 21 from 1.20.5. Paper's differing historical recommendations are
  separated rather than applied to Vanilla or every loader.
- NeoForge installation, generated launcher/argument-file use, and complete
  modpack installation are distinct from single-JAR servers.
- Waterfall is retired; Geyser is a protocol bridge, not a mod loader or ordinary
  Java network proxy. Download links now favor original project publishers.
- Private IPv4 includes 192.168/16. A private WAN address can be local double NAT;
  it is not proof of ISP CGNAT. Wi-Fi/mobile/satellite are not categorically ruled
  out. NAT loopback is described as router-dependent rather than an ISP diagnosis.
- Java TCP and Bedrock/Geyser UDP checks are distinguished. Game access does not
  require exposing the MCSS management service.
- JVM encoding changes are distinguished from Windows console/application
  encoding. DLL/runtime architecture is not inferred from the OS architecture.

The public [Official downloads and resources](docs/reference/versions-and-sources.mdx) page
and inline links record the primary upstream download and documentation references. All dated
lab-test notes and caveats are kept in this file and the [dated evidence report](contributor-notes/mcss-exploration/2026-10-16-windows-13-10-0.md)
rather than inside user-facing guides.

## Assumptions deliberately removed

The rewrite does not promise that a particular Java issue explains every frozen
MCSS graph, that killing all Java processes is an ordinary fix, that an inaccessible
JAR proves another process holds it, or that an old registry/performance-counter
repair is a prerequisite for MCSS 13.10.0. It removes automatic certificate-warning
bypass advice and false blanket claims about certificates. It does not invent
MCSS controls for certificate import, backup restoration, scheduled backup
creation, or arbitrary pack script conversion.

Backup/restore, update planning, and performance investigation are explicit
operator workflows. They do not claim that an MCSS backup automatically captures
the application configuration, external databases, or consistent live data.

## API source work and remaining source limitations

The v2 document's introductory description was replaced with readable Markdown,
and its `apiKey` header is represented by an OpenAPI `type: apiKey`, `in: header`
security scheme so clients and the playground can supply it. Hardcoded UUIDs in
`apis/v2.yml` (26 paths) and `apis/v1.yml` (17 paths) were replaced with OpenAPI
path parameter slugs (`{serverId}`, `{taskId}`, `{backupId}`, `{webhookId}`,
`{userId}`, `{apiKeyId}`) preserving the original UUIDs as parameter examples,
and `GET /events` in `apis/v2.yml` was given a sample response and realistic
header example.

The v2 export is **not** asserted to be a newly generated complete 13.10.0 schema:

- `info.version`, captured response versions/dates, and examples predate this
  content review. Readers are directed to `GET /api/v2` for live instance data.
- The v1 security scheme uses a nonstandard HTTP `apikey` scheme. This historical
  contract has not been reinterpreted as a particular header/token convention.
- A complete permission matrix, rate limits, pagination rules, and coverage of
  any additional 13.10.0 endpoints require an authoritative current API export.
  No such behavior was invented to fill the gaps.

## Follow-up evidence that would improve product-specific detail

The Windows exploration and screenshot workflow is in
[MCSS_EXPLORATION.md](MCSS_EXPLORATION.md). Its unchecked items remain investigation
targets, not additional evidence of product behavior. The dated report identifies
the completed subset.

- A current official prerequisite list for MCSS 13.10.0, including Windows and
  native runtime requirements, rather than extrapolating old 12.x/13.x notes.
- Further current captures for real loader/modpack imports and browser panel
  login, beyond the creation/settings/permission forms captured in this run.
- An authoritative 13.10.0 API export and investigation of the observed API-key
  authorization discrepancies before claiming an enforced permission matrix.
- Backup blacklist, retention deletion, Suspend server, and live-consistency
  evidence beyond the demonstrated stopped-Paper backup and recovery.

These are source-quality opportunities. They do not block the rewritten general
Minecraft operation guides or imply a version-compatibility restriction in MCSS.
