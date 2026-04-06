# Schlaufuchs Platform

Schlaufuchs ist der Neuaufbau einer ruhigen, modernen und professionellen Lern- und Informationsplattform für technische Fächer.

Die Plattform verbindet **klare Fachbereiche**, **sichtbare Wissensseiten**, **passende Aufgaben** und zwei zuschaltbare Nutzungssichten:

- **Lernmodus** für eine stärkere lernorientierte Nutzung
- **Präsentationsmodus** für eine ruhige Unterrichtsansicht ohne störende Elemente

Der Fokus liegt nicht auf einer verspielten Demo, sondern auf einer belastbaren fachlichen Plattform, die im Unterricht, zum Nachschlagen und zum eigenständigen Lernen funktioniert.

## Fachlogik

Die Plattform arbeitet bewusst nur mit den fünf sichtbaren Hauptfächern:

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

Die Grundseite bleibt deshalb bewusst ruhig und informationsorientiert.
Der Lernmodus ergänzt zusätzliche Lernhinweise und Lernführung, ohne das ursprüngliche Nutzungskonzept der Plattform zu zerstören.

## Aktueller Stand

Bereits umgesetzt sind unter anderem:

- neue Startseite mit ruhiger Hauptfachlogik
- Fachübersichten und Fachdetailseiten
- Wissensseiten, Aufgabenseiten und News-Seiten auf Collection-Basis
- zentralisierte Fachmetadaten
- zentralisierte Content-Abfragen
- Lernmodus und Präsentationsmodus mit gemeinsamer Zustandslogik
- Tastenkürzel und URL-Parameter für die Modi
- sichtbare Inhaltsinventur unter `/inhaltsstand`
- Status- und Ausbauhinweise auf Startseite und Fachübersicht

Der technische Unterbau ist damit deutlich weiter als ein Astro-Starter und inzwischen auf den tatsächlichen Plattformaufbau ausgerichtet.

## Nutzungssichten

### Standardansicht
Die Plattform startet bewusst als ruhige Informations- und Aufgabenplattform.

### Lernmodus
Der Lernmodus macht zusätzliche lernbezogene Hinweise sichtbar und unterstützt eine stärkere Lernführung über Fachbereiche, Wissensseiten und Aufgaben.

### Präsentationsmodus
Der Präsentationsmodus ist für Unterricht und Projektion gedacht.
Er blendet alles aus, was beim Präsentieren stören kann, zum Beispiel zusätzliche Lernhinweise, Such- und Filterelemente oder aufgabenzentrierte Zusatzflächen.

## Tech-Stack

- **Astro 6**
- **TypeScript**
- **Astro Content Collections**
- schlanke, framework-nahe Seitenlogik ohne unnötige Zusatzkomplexität

Die aktuelle Node-Anforderung liegt bei **Node >= 22.12.0**.

## Content-Modell

Der sichtbare Plattforminhalt wird über Collections gepflegt:

- `subjects` für Fachbereiche
- `articles` für Wissensseiten
- `exercises` für Aufgaben
- `news` für sichtbare Plattform-Updates

Die Collections sind in `src/content.config.ts` definiert.

Zusätzliche zentrale Datenlogik liegt in:

- `src/data/subjects.ts` für Fachmetadaten
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
│   └── subjects/
├── data/
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

## Arbeitsregeln im Projekt

Diese Regeln sind für die Weiterentwicklung wichtig:

- alte HTML-Seiten nicht direkt übernehmen, sondern Inhalte neu und plattformgerecht aufbauen
- Bilder stark reduzieren und nur gezielt einsetzen
- keine doppelte Fachlogik aufbauen
- Aufgaben nicht als Zusatz behandeln, sondern als festen Plattformbestandteil
- nur mit den fünf Hauptfächern arbeiten
- bei Build- oder CI-Problemen zuerst alte Routen und falsche Importpfade prüfen

## Inhaltspflege

Der sichtbare Inhaltsstand ist noch nicht vollständig.
Darum gibt es mit `/inhaltsstand` eine eigene Seite, die den aktuellen Ausbau pro Fachbereich sichtbar macht und die nächsten sinnvollen Inhaltswellen priorisiert.

## Anspruch an die README

Diese README beschreibt bewusst das reale Projekt und nicht mehr den ursprünglichen Astro-Minimalzustand.
Sie soll neuen Mitwirkenden sofort zeigen:

- was die Plattform ist
- wie die Fachlogik funktioniert
- wie Inhalte organisiert sind
- welche Regeln für die Weiterentwicklung gelten

---

Schlaufuchs ist kein Starter mehr, sondern der laufende Aufbau einer echten Fach- und Lernplattform.
