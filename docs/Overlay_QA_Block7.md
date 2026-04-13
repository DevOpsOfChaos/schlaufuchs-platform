# Overlay QA – Block 7

Stand dieses Blocks:
- Kanonische Wissensseiten laufen über `/wissen/...`.
- Historische Leaf-Routen unter `/fachbereiche/...` nutzen jetzt eine gemeinsame Redirect-Komponente.
- Die Catch-all-Route `src/pages/fachbereiche/[subject]/[...parts].astro` dient nur noch als Themenpfad-Übersicht und nicht mehr als zweite Wissensseiten-Ansicht.

## Technische Änderungen

- `src/components/content/LeafInfoPage.astro` neu angelegt
- `src/pages/fachbereiche/[subject]/[slug].astro` auf gemeinsame Redirect-Komponente umgestellt
- `src/pages/fachbereiche/[subject]/[section]/[slug].astro` auf gemeinsame Redirect-Komponente umgestellt
- `src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro` auf gemeinsame Redirect-Komponente umgestellt
- `src/pages/fachbereiche/[subject]/[...parts].astro` als reine Themenübersicht bereinigt

## Wirkung

- weniger doppelte Inhaltsdarstellung zwischen `/fachbereiche/...` und `/wissen/...`
- klarere URL-Logik: Themenblöcke unter `/fachbereiche/...`, Wissensseiten unter `/wissen/...`
- geringeres Risiko, dass historische Leaf-Pfade als inoffizielle zweite Detailansicht bestehen bleiben

## Prüfpunkte nach Einspielen

1. Leaf-URL eines Themas aufrufen, z. B. ein direktes `/fachbereiche/.../...`-Leaf
2. prüfen, ob sauber auf `/wissen/...` weitergeleitet wird
3. Themenblock-URL mit Unterthemen aufrufen
4. prüfen, ob dort nur Überblick, Unterthemen, Wissensseiten und Aufgaben erscheinen
5. Build und Astro-Router erneut gegen Kollisionen prüfen
