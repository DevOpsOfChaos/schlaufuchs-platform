# Build-Hinweise – generische Leaf-Routen

Dieser Sammelstand enthält jetzt wieder explizit die drei generischen Leaf-Routen als Ersatzdateien:

- `src/pages/fachbereiche/[subject]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro`

Wichtig:

- 1-Level nutzt `../../../layouts/BaseLayout.astro`
- 2-Level nutzt `../../../../layouts/BaseLayout.astro`
- 3-Level nutzt `../../../../../layouts/BaseLayout.astro`

Zusätzlich ist die 2-Level-Route jetzt wieder korrekt auf `tail.length === 2` und die passenden Params (`subject`, `section`, `slug`) gezogen.
