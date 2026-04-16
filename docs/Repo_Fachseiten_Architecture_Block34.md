# Repo Fachseiten – Block 34

Dieser Stand baut kumulativ auf dem zuletzt ruhiger gezogenen Fachseiten-System auf.

## Fokus von Block 34

- Blatt-Ebene klarer von Themenblöcken trennen
- Suchdarstellung beruhigen
- Themenkarten fachlich verständlicher machen
- keine neue Führungslogik einführen

## Änderungen

### 1. Eigene Blatt-Karte
Neue Komponente:
- `src/components/content/AreaLeafResourceCard.astro`

Sie wird für Wissensseiten und Aufgaben auf Fach- und Fachthemenseiten eingesetzt.

### 2. Ruhige Abschnittsflächen
Neue Komponente:
- `src/components/content/AreaSectionSurface.astro`

Damit bekommen:
- Unterthemen
- Wissensseiten
- Aufgaben

eigene, leicht getrennte Flächen, ohne das Design zu überladen.

### 3. Themenkarten mit Inhalts-Chips
`AreaTopicCard.astro` und `areaStructure.ts` wurden erweitert:
- kompakte, nicht klickbare Inhalts-Chips
- fachlich kuratierte Begriffe
- ruhigere Orientierung innerhalb eines Themenblocks

### 4. Einheitliche Suchlogik
Auf Fach- und Fachthemenseiten:
- getrennte Treffer für Themenblöcke / Wissensseiten / Aufgaben
- leere Gruppen werden ausgeblendet
- globaler Leerzustand nur bei wirklich null Treffern

## Zielwirkung

Die Seiten sollen weniger wie technische Such-/Listenoberflächen wirken und mehr wie ruhige Fachnavigation mit klarer Blatt-Ebene.
