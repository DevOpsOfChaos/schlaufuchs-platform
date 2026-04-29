# Status v187 – Web Development Sanierung

## Ziel

Der v187-Block zieht Web Development deutlich näher an die bereits sanierten Bereiche Elektrotechnik, Informatik und Linux heran. Er ergänzt ruhige Grundlagen- und Überblicksseiten, ohne alte Inhalte umzubauen.

## Gelieferte Austauschdateien

- `src/content/articles/web-development/sanierung-v187/` – 32 neue Erklärseiten
- `src/content/exercises/web-development/sanierung-v187/` – 64 neue Aufgaben
- `src/content/solutions/web-development/sanierung-v187/` – 64 neue Lösungen
- `public/images/web-development/sanierung-v187/` – 32 passende didaktische SVGs
- `docs/audit-nachtraege/v187-web-development-sanierung.md` – Audit-Nachtrag
- `docs/status/v187-web-development-sanierung.md` – dieser Status

## Lokale Prüfung in diesem Arbeitscontainer

Durchgeführt wurden strukturierte Prüfungen auf:

- Frontmatter-Grenzen und Pflichtfelder der Collections
- gültige `subject`-, `level`- und `draft`-Werte
- eindeutige `taskId`-Werte
- vollständige 1:1-Zuordnung Aufgabe → Lösung
- gültige `relatedExercise`-Verweise
- existierende SVG-Referenzen in allen Artikeln
- XML-Parsebarkeit der SVG-Dateien
- ausgeglichene Markdown-Codefences
- bekannte Mojibake-Marker
- ZIP-Inhaltsprüfung nach dem Packen

Nicht durchgeführt wurde ein vollständiger Astro-Build, weil im Container kein kompletter Repo-Checkout mit installierten Node-Abhängigkeiten verfügbar war. Die Dateien wurden deshalb gegen das gelesene Collection-Schema und die bekannten Projektregeln geprüft.

## Einspielen unter Windows / PowerShell

ZIP in den lokalen Repo-Root entpacken:

```powershell
cd C:\Users\mries\Documents\LocalRepos\schlaufuchs-platform
Expand-Archive -Path C:\Users\mries\Downloads\schlaufuchs_v187_web_development_sanierung.zip -DestinationPath . -Force
```

Nach mehreren kumulativen Blöcken oder vor Push:

```powershell
npm run quality
```
