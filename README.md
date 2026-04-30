# Schlaufuchs Platform

Schlaufuchs ist eine ruhige Lern- und Informationsplattform für technische Fächer. Sie verbindet klare Fachbereiche, sichtbare Wissensseiten, passende Aufgaben und zwei zuschaltbare Nutzungssichten.

- **Lernmodus** für eine stärkere lernorientierte Nutzung
- **Präsentationsmodus** für eine ruhige Unterrichtsansicht ohne störende Elemente

Der Fokus liegt auf einer belastbaren fachlichen Plattform, die im Unterricht, zum Nachschlagen und zum eigenständigen Lernen funktioniert.

## Content Governance

Die verbindlichen Inhaltsregeln stehen in [`CONTENT_GOVERNANCE.md`](./CONTENT_GOVERNANCE.md).

Diese Datei ist maßgeblich für alle künftige Content-Arbeit. Schlaufuchs soll nicht in Richtung generischer Lernplattform, künstlicher Situationsseiten oder massenhaft erzeugter Mini-Inhalte weiterentwickelt werden. Der Zielkern ist ein übersichtliches technisches Nachschlagewerk mit optionalen Aufgaben und interaktiven Modulen.

Vor größeren Inhaltsänderungen muss geprüft werden, ob sie zu diesem Zielmodell passen.

## Fachlogik

Die Plattform arbeitet bewusst mit fünf sichtbaren Hauptfächern:

- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

Wichtige inhaltliche Regeln:

- **Daten & Signale** wird nicht als eigenes Hauptfach behandelt, sondern der Elektrotechnik zugeordnet.
- **HTML/CSS** wird nicht als eigenes Hauptfach behandelt, sondern liegt im Bereich Web Development.
- Fachlogik wird zentral gepflegt und nicht mehrfach über verschiedene Seiten verteilt.

## Projektziel

Schlaufuchs soll drei Dinge gleichzeitig sauber verbinden:

1. **Informationssammlung mit klarer Struktur**
2. **Aufgaben als echten Plattformbestandteil**
3. **optionale Lernsicht statt dauerhafter Lernüberfrachtung**

Die Grundseite bleibt bewusst ruhig und informationsorientiert. Der Lernmodus ergänzt zusätzliche Lernhinweise und Lernführung, ohne das ursprüngliche Nutzungskonzept der Plattform zu zerstören.

## Aktueller Stand

Bereits umgesetzt sind unter anderem:

- Startseite mit ruhiger Hauptfachlogik
- Fachübersichten und Fachdetailseiten
- Wissensseiten, Aufgabenseiten, Lösungsseiten und News-Seiten auf Collection-Basis
- zentralisierte Fachmetadaten und Content-Abfragen
- feinere Themenstruktur für Fachbereiche und Unterthemen
- Lernmodus und Präsentationsmodus mit gemeinsamer Zustandslogik
- Tastenkürzel und URL-Parameter für die Modi
- sichtbare Inhaltsinventur unter `/inhaltsstand`
- Qualitätsprüfungen für Encoding, Mojibake und Strukturfehler

Der technische Unterbau ist damit deutlich weiter als ein Astro-Starter und auf den tatsächlichen Plattformaufbau ausgerichtet.

## Aktuelle Content-Richtung

Die Inhaltspflege folgt inzwischen klar dem Prinzip **Qualität vor Masse**.

Neue Seiten sollen nicht nur Spezialfälle sammeln, sondern wichtige Themen zuerst allgemein einordnen. Zu zentralen Themen und Unterthemen entstehen deshalb **Überblicksseiten im Lexikonstil**. Diese Seiten erklären Begriffe, Zweck, Zusammenhang, typische Teilaspekte, Abgrenzungen, Beispiele und häufige Missverständnisse ruhig und neutral.

Wichtig für neue Inhalte:

- allgemeine Überblicksseiten vor vielen Spezialfällen
- sichtbares Deutsch mit korrekten Umlauten
- technische Slugs weiterhin ASCII halten
- keine Mojibake-Zeichen wie `Ã¤`, `Ã¶`, `Ã¼`, `Â` oder `â€“`
- keine breiten Sammelmonster ohne klare Einordnung
- lieber kleine, geprüfte Inhaltsblöcke als große Massenimporte

## Nutzungssichten

### Standardansicht

Die Plattform startet als ruhige Informations- und Aufgabenplattform.

### Lernmodus

Der Lernmodus macht zusätzliche lernbezogene Hinweise sichtbar und unterstützt eine stärkere Lernführung über Fachbereiche, Wissensseiten und Aufgaben.

### Präsentationsmodus

Der Präsentationsmodus ist für Unterricht und Projektion gedacht. Er blendet aus, was beim Präsentieren stören kann, zum Beispiel zusätzliche Lernhinweise, Such- und Filterelemente oder aufgabenzentrierte Zusatzflächen.

## Tech-Stack

- **Astro 6**
- **TypeScript**
- **Astro Content Collections**
- GitHub Pages Deployment über GitHub Actions
- schlanke, framework-nahe Seitenlogik ohne unnötige Zusatzkomplexität

Die aktuelle Node-Anforderung liegt bei **Node >= 22.12.0**.

## Content-Modell

Der sichtbare Plattforminhalt wird über Collections gepflegt:

- `subjects` für Fachbereiche
- `articles` für Wissensseiten
- `exercises` für Aufgaben
- `solutions` für Lösungen
- `news` für sichtbare Plattform-Updates

Die Collections sind in `src/content.config.ts` definiert.

Zusätzliche zentrale Datenlogik liegt in:

- `src/data/subjects.ts` für Fachmetadaten
- `src/data/areaStructure.ts` für die Fachbereichs- und Themenstruktur
- `src/data/content.ts` für zentrale Content-Abfragen, Inventur und Gruppierungen

## Projektstruktur

Eine vereinfachte Struktur des Projekts:

```text
src/
├── components/
├── content/
│   ├── articles/
│   ├── exercises/
│   ├── news/
│   ├── solutions/
│   └── subjects/
├── data/
│   ├── areaStructure.ts
│   ├── content.ts
│   └── subjects.ts
├── layouts/
├── pages/
│   ├── aufgaben/
│   ├── fachbereiche/
│   ├── inhaltsstand/
│   ├── news/
│   ├── suchen/
│   ├── wissen/
│   └── index.astro
└── styles/
```

## Lokale Entwicklung

Installation:

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Produktionsbuild erzeugen:

```bash
npm run build
```

Build lokal prüfen:

```bash
npm run preview
```

Astro CLI direkt nutzen:

```bash
npm run astro -- --help
```

## Qualitätssicherung

Für Content- und Encoding-Prüfungen gibt es zusätzliche Skripte:

```bash
npm run repair:mojibake
npm run check:content
npm run quality
```

`npm run quality` führt die Mojibake-Reparatur, den Content-Strukturcheck und den Produktionsbuild nacheinander aus.

Bei Änderungen an `src/data/areaStructure.ts` besonders prüfen:

- keine doppelten Kommas wie `},,` oder `],,`
- keine leeren Array-Einträge
- keine Knoten ohne `slug`, `title`, `description` oder `icon`
- keine kaputten Prefix- oder Children-Strukturen

## Arbeitsregeln im Projekt

Diese Regeln sind für die Weiterentwicklung wichtig:

- `CONTENT_GOVERNANCE.md` ist vor größerer Content-Arbeit zu beachten
- alte HTML-Seiten nicht direkt übernehmen, sondern Inhalte neu und plattformgerecht aufbauen
- Bilder stark reduzieren und nur gezielt einsetzen
- keine doppelte Fachlogik aufbauen
- Aufgaben nicht als Zusatz behandeln, sondern als festen Plattformbestandteil
- nur mit den fünf Hauptfächern arbeiten
- bei Build- oder CI-Problemen zuerst Routen, Importpfade, Frontmatter und `areaStructure.ts` prüfen
- bei Encoding-Problemen zuerst `npm run repair:mojibake` und `npm run check:content` ausführen

## Inhaltspflege

Der sichtbare Inhaltsstand ist noch nicht vollständig. Darum gibt es mit `/inhaltsstand` eine eigene Seite, die den aktuellen Ausbau pro Fachbereich sichtbar macht und die nächsten sinnvollen Inhaltswellen priorisiert.

Neue Inhaltsblöcke sollen klein, nachvollziehbar und gut prüfbar bleiben. Der aktuelle Schwerpunkt liegt auf allgemeinen Überblicksseiten, die Unterthemen verständlich einordnen, bevor Spezialseiten folgen.

---

Schlaufuchs ist kein Starter mehr, sondern der laufende Aufbau einer echten Fach- und Lernplattform.
