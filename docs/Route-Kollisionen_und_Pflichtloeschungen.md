# Route-Kollisionen und Pflichtloeschungen

Im Sammelbundle liegen weiterhin statische Leaf-Indexseiten unter `src/pages/fachbereiche/.../index.astro`. Diese Pfade kollidieren mit den generischen Leaf-Routen:

- `src/pages/fachbereiche/[subject]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro`

Fuer den finalen Einspielstand muessen die folgenden statischen Leaf-Dateien aus dem Repo geloescht werden, damit die generischen Routen allein die Endpfade uebernehmen:

- `src/pages/fachbereiche/informatik/grundlagen/algorithmen/index.astro`
- `src/pages/fachbereiche/informatik/programmieren/python-grundlagen/index.astro`
- `src/pages/fachbereiche/informatik/systemnah/prozesse/index.astro`
- `src/pages/fachbereiche/linux/praxis/nano/index.astro`
- `src/pages/fachbereiche/linux/praxis/terminal-nutzen/index.astro`
- `src/pages/fachbereiche/linux/shell/dateien-und-ordner/index.astro`
- `src/pages/fachbereiche/linux/shell/hilfe-im-terminal/index.astro`
- `src/pages/fachbereiche/linux/system/benutzer-und-gruppen/index.astro`
- `src/pages/fachbereiche/linux/system/dateirechte/index.astro`
- `src/pages/fachbereiche/mathematik/funktionen/lineare-funktionen/index.astro`
- `src/pages/fachbereiche/mathematik/geometrie/flaechen-und-volumen/index.astro`
- `src/pages/fachbereiche/mathematik/grundlagen/zahlen-und-terme/index.astro`
- `src/pages/fachbereiche/web-development/css/flexbox/index.astro`
- `src/pages/fachbereiche/web-development/html/grundstruktur/index.astro`
- `src/pages/fachbereiche/web-development/praxis/erste-webseite/index.astro`

Danach sollten die Leaf-Pfade nur noch als Redirects ueber die generischen Routen laufen.
