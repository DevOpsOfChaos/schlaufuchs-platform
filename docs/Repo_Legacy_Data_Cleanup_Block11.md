# Repo Legacy Data Cleanup – Block 11

## Ziel
Alte `*_leaf_pages.ts`-Dateien nicht mehr als Quelle fachlicher Platzhalter-Inhalte verwenden.

## Änderung in diesem Block
- `src/data/informatik_leaf_pages.ts`
- `src/data/mathematik_leaf_pages.ts`
- `src/data/linux_leaf_pages.ts`

wurden auf einen gemeinsamen generischen Fallback-Store umgestellt.

## Wirkung
Verbliebene alte statische Fachpfadseiten beziehen damit **keine hartcodierten alten Platzhaltertexte** mehr, sondern nur noch neutrale Legacy-Metadaten. Die eigentliche Fachlogik liegt jetzt in:

- `/wissen/...`
- `src/pages/fachbereiche/[subject]/[...parts].astro`
- `src/components/content/LeafInfoPage.astro`

## Warum das wichtig ist
Selbst wenn alte statische `index.astro`-Dateien noch physisch im Repo liegen, konservieren sie dadurch nicht länger fachlich veraltete Leaf-Platzhaltertexte.
