# Repo Legacy Leaf Neutralization – Block 10

## Ziel

Historische statische Leaf-Seiten unter `src/pages/fachbereiche/...` sollen die neue generische Routing-Logik nicht mehr übersteuern.

## Umsetzung in diesem Block

- `src/components/content/LeafInfoPage.astro` unterstützt jetzt zwei Modi:
  - kanonischer Redirect-Modus für die generischen neuen Leaf-Routen
  - Legacy-Modus für alte statische Fachpfadseiten
- Im Legacy-Modus wird der aktuelle Pfad gegen die sichtbaren Artikel im echten Content abgeglichen.
- Bei einem exakten Treffer erfolgt die Weiterleitung auf `/wissen/<entry.id>`.
- Ohne exakten Treffer wird kein alter Platzhalterinhalt mehr bevorzugt, sondern ein neutraler Hinweis mit sicheren Rückwegen gerendert.

## Wirkung

- alte statische Leaf-Dateien können zunächst im Repo verbleiben
- sie erzeugen aber keine konkurrierende zweite Wissensseiten-Ansicht mehr
- die kanonische Wissensansicht unter `/wissen/...` wird auch aus alten Fachpfadseiten heraus bevorzugt

## Danach weiterhin sinnvoll

1. alte statische Leaf-Dateien fachweise physisch entfernen
2. `*_leaf_pages.ts`-Dateien danach löschen
3. echten Astro-Build lokal prüfen
4. Routing-/Kollisionsprüfung erneut durchlaufen
