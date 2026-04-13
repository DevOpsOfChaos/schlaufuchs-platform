# Overlay Apply Checklist

## Vor dem Einspielen

- aktuelles Repo sichern oder Branch/Backup anlegen
- ZIP vollständig entpacken
- nicht selektiv nur Einzeldateien übernehmen, sondern den Overlay-Stand als Gesamtstand behandeln

## Einspielen

1. Inhalte aus dem Overlay auf das echte Repo kopieren
2. vorhandene Dateien in `src/` und `docs/` ersetzen
3. prüfen, dass keine alten Austauschordner wie `files/src/...` versehentlich aktiv bleiben

## Direkt danach lokal prüfen

- `src/pages/fachbereiche/[subject]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro`
- `src/pages/fachbereiche/[subject]/[...parts].astro`
- `src/components/content/LeafInfoPage.astro`
- `src/pages/wissen/[...slug].astro`
- `src/pages/aufgaben/[...slug].astro`

## Fachliche Sichtprüfung

- Wissensseiten einspaltig, ohne Sidebar
- Aufgabenkarten unten ruhig und scanbar
- Linux-Shell auf Linux-Seiten sichtbar, aber nicht auf fachfremden Seiten
- `/wissen` und `/aufgaben` mit Themenpfad-Hotspots sichtbar
- Catch-all-Pfade zeigen Überblick statt zweiter Wissensseiten-Kopie

## Erst danach committen

- alle Änderungen gesammelt prüfen
- Build / Preview testen
- dann als ein sauberer Gesamtcommit übernehmen
