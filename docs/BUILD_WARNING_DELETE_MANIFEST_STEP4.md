# Build-Warnungen: exakte Löschliste

## 1) Diese drei Dateien bitte physisch löschen
Die flachen Seiten sollen bleiben. Die `index.astro`-Duplikate müssen weg.

- `src/pages/datenschutz/index.astro`
- `src/pages/impressum/index.astro`
- `src/pages/kontakt/index.astro`

## 2) Diese Dateien bitte behalten
- `src/pages/datenschutz.astro`
- `src/pages/impressum.astro`
- `src/pages/kontakt.astro`

## 3) Austauschdatei aus diesem ZIP
- `src/pages/fachbereiche/[subject]/[...parts].astro`

Diese Austauschdatei sorgt dafür, dass der Catch-all nur noch Überblickspfade rendert
und keine exakten Leaf-Pfade mehr erzeugt, die bereits von den spezifischen Leaf-Routen
abgedeckt werden.
