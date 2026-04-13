# Repo Check After Block 10

## Sofort prüfen

- alte Leaf-URL eines vorhandenen Themas aufrufen
- Erwartung: Weiterleitung auf `/wissen/...`

## Ohne kanonische Wissensseite prüfen

- alten statischen Fachpfad ohne echten Artikel öffnen
- Erwartung: kein alter Platzhaltertext als Fachinfo-Hauptansicht
- stattdessen neutraler Legacy-Hinweis mit Rückwegen

## Danach

- lokale Build-Prüfung
- Astro-Router auf Kollisionen prüfen
- verbleibende statische `index.astro`-Bäume fachweise löschen
