# Repo Physical Delete Manifest – Block 12

Dieser Block markiert den Punkt, an dem ein reines Overlay-ZIP **nicht mehr ausreicht**, weil vorhandene Dateien im Repo durch Entpacken **nicht physisch gelöscht** werden.

## Ziel

Die alte statische Fachpfad-Logik unter `src/pages/fachbereiche/...` soll **physisch entfernt** werden, sobald sie noch eine historische Leaf-Ansicht rendert statt die neue kanonische Wissenslogik zu nutzen.

## Sicher löschen

Diese Altdateien und Altquellen sind nach dem aktuellen Stand für die neue Architektur nicht mehr gewollt:

- `src/data/informatik_leaf_pages.ts`
- `src/data/mathematik_leaf_pages.ts`
- `src/data/linux_leaf_pages.ts`

Zusätzlich sollen **alle statischen Fachpfad-`index.astro`-Dateien** entfernt werden, die eines der folgenden Muster verwenden:

- Import einer alten Leaf-Datenquelle wie `informatik_leaf_pages`, `mathematik_leaf_pages`, `linux_leaf_pages`
- `LeafInfoPage page={page}`
- alte handgepflegte Breadcrumb-/Related-Arrays nur für historische Leaf-Unterseiten

## Bereits bestätigtes echtes Beispiel

Dieser Pfad ist im echten `main` weiterhin vorhanden und gehört in den Löschblock:

- `src/pages/fachbereiche/informatik/grundlagen/algorithmen/ablaeufe/index.astro`

## Löschregel

Wenn eine statische Fachpfadseite **nicht** auf die neue generische Routing-Logik verweist, sondern noch eine historische Leaf-Seite auf Basis eines `*_leaf_pages`-Datensatzes rendert, soll sie entfernt werden.

## Reihenfolge

1. alte statische `index.astro`-Leaf-Dateien unter `src/pages/fachbereiche/...` entfernen
2. danach die nicht mehr referenzierten `*_leaf_pages.ts`-Dateien entfernen
3. danach Build und Routing auf Kollisionen prüfen

## Warum dieser Block wichtig ist

Die neue Architektur ist im echten Repo bereits aktiv:

- generische Leaf-Routen leiten auf `/wissen/...`
- Catch-all dient als Themenpfad-/Überblicksebene
- `topicPath`-Logik und Related-Logik sind zentralisiert

Solange aber alte statische Fachpfad-Leafs physisch im Repo bleiben, können sie neue Routen weiter übersteuern oder zumindest historisches Parallelverhalten konservieren.
