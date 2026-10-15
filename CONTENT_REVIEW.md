# Content review: MCSS 13.10.0

Reviewed: 15 October 2026.

## Product authority and scope

The maintainer confirmed in this task that **13.10.0 is current**,
**mcserversoft.com is authoritative**, and **MCSS is version agnostic**. These are
explicit product facts, not deductions from the Minecraft or loader projects.

MCSS controls, import selectors, Java overrides, backup-name substitutions,
Keep Online modes, panel/user controls, and log locations are rewritten from the
existing repository documentation. Screenshots are retained as illustrations;
they have not been relabeled as captures of a newly tested 13.10.0 installation.
No running Windows MCSS installation was available for behavioral testing.

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

The public [Versions and sources](docs/reference/versions-and-sources.mdx) page
and inline links record the primary references. Version-dependent pages carry a
review date and direct readers to exact upstream release requirements.

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

The v2 document's malformed introductory description was replaced with readable
Markdown. Its already-documented `apiKey` header is now represented by an OpenAPI
`type: apiKey`, `in: header` security scheme, so clients and the playground can
supply it. Existing operation paths, status codes, request bodies, response
schemas, example IDs, and `info.version` remain unchanged.

The v2 export is **not** asserted to be a newly generated complete 13.10.0 schema:

- Several paths contain captured UUIDs instead of declared path parameters.
  Regenerate these from an authoritative API source rather than guessing parameter
  definitions and constraints from the IDs.
- `info.version`, captured response versions/dates, and examples predate this
  content review. Readers are directed to `GET /api/v2` for live instance data.
- The v1 security scheme uses a nonstandard HTTP `apikey` scheme. This historical
  contract has not been reinterpreted as a particular header/token convention.
- A complete permission matrix, rate limits, pagination rules, and coverage of
  any additional 13.10.0 endpoints require an authoritative current API export.
  No such behavior was invented to fill the gaps.

## Follow-up evidence that would improve product-specific detail

The Windows exploration and screenshot workflow is in
[MCSS_EXPLORATION.md](MCSS_EXPLORATION.md). Its checklist is pending investigation,
not additional evidence of product behavior.

- A current official prerequisite list for MCSS 13.10.0, including Windows and
  native runtime requirements, rather than extrapolating old 12.x/13.x notes.
- Current screenshots and a walkthrough of the existing creation/import and
  panel settings, to replace older interface examples.
- An authoritative 13.10.0 API export and authorization matrix.
- A demonstrated MCSS backup/restore procedure and exact backup scope before
  documenting new product controls or consistency guarantees.

These are source-quality opportunities. They do not block the rewritten general
Minecraft operation guides or imply a version-compatibility restriction in MCSS.
