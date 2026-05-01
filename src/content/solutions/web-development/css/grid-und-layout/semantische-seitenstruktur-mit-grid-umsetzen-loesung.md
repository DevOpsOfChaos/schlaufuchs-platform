---
title: "Lösung – Semantische Seitenstruktur mit CSS Grid umsetzen"
description: "Musterlösung zu einer semantischen HTML5-Seitenstruktur mit CSS Grid, grid-template-areas und responsiver Einspalten-Darstellung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "grid-und-layout", "semantische-seitenstruktur-mit-grid-umsetzen"]
taskId: "web-css-grid-semantisches-layout"
relatedExercise: "src/content/exercises/web-development/css/grid-und-layout/semantische-seitenstruktur-mit-grid-umsetzen"
tags: ["web-development", "CSS", "CSS Grid", "HTML5", "Semantik", "loesung"]
level: "mittel"
draft: false
---

## Lösungsidee

Die semantische Struktur entsteht im HTML. Das Raster entsteht im CSS. Beide Ebenen sollten nicht vermischt werden: `header`, `nav`, `main`, `aside` und `footer` beschreiben die Bedeutung der Bereiche; `grid-template-areas` beschreibt ihre räumliche Anordnung.

## Beispiel für das HTML

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Semantisches Grid-Layout</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class="page">
    <header class="page__header">
      <h1>Projektübersicht</h1>
    </header>

    <nav class="page__nav" aria-label="Hauptnavigation">
      <a href="#inhalt">Inhalt</a>
      <a href="#details">Details</a>
    </nav>

    <main class="page__main" id="inhalt">
      <h2>Hauptinhalt</h2>
      <p>Hier steht der zentrale Inhalt der Seite.</p>
    </main>

    <aside class="page__aside" id="details">
      <h2>Zusatzinformationen</h2>
      <p>Hier stehen ergänzende Hinweise.</p>
    </aside>

    <footer class="page__footer">
      <p>Stand: heute</p>
    </footer>
  </body>
</html>
```

Wichtig ist: Das `main`-Element kommt nur einmal vor. Die Navigation erhält über `aria-label` einen konkreten Namen, damit ihre Rolle nicht nur visuell, sondern auch semantisch klar bleibt.

## Beispiel für das CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

.page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr) 14rem;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  gap: 1rem;
  padding: 1rem;
}

.page__header {
  grid-area: header;
}

.page__nav {
  grid-area: nav;
}

.page__main {
  grid-area: main;
}

.page__aside {
  grid-area: aside;
}

.page__footer {
  grid-area: footer;
}

.page > * {
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
}
```

`minmax(0, 1fr)` verhindert, dass der Inhaltsbereich durch lange Wörter oder breite Inhalte unkontrolliert überläuft. Das ist bei Grid-Layouts robuster als ein nacktes `1fr`.

## Responsive Vereinfachung

Bei kleinen Breiten wird das Layout nicht künstlich zusammengequetscht. Die Bereiche stehen dann untereinander:

```css
@media (max-width: 760px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
  }
}
```

Damit bleibt die Reihenfolge verständlich und die Bereiche behalten ihre semantische Bedeutung.

## Warum Grid hier passt

Dieses Layout ist zweidimensional: Es besitzt Zeilen und Spalten. `header` und `footer` überspannen alle Spalten, während `nav`, `main` und `aside` nebeneinander liegen. Genau dafür ist CSS Grid geeignet.

Flexbox wäre für eine einzelne Navigationsleiste oder eine Kartenreihe passend. Für eine ganze Seitenstruktur mit benannten Flächen ist `grid-template-areas` lesbarer, weil der Textplan direkt zeigt, welche Bereiche wo liegen.

## Typische Fehler

- **Semantik durch `div` ersetzen:** Ein Raster aus `div`-Containern beschreibt keine inhaltliche Bedeutung. Semantische Elemente bleiben sinnvoll, auch wenn CSS ausfällt.
- **`grid-area`-Namen verwechseln:** Die Namen in `grid-template-areas` müssen exakt zu den `grid-area`-Werten passen.
- **Kleine Breiten ignorieren:** Drei Spalten funktionieren auf schmalen Displays nicht zuverlässig. Eine Einspalten-Regel ist kein Zusatz, sondern Teil des Layouts.
- **Grid und Inhalt vermischen:** CSS entscheidet über die Anordnung, nicht über die fachliche Bedeutung der HTML-Elemente.

## Quellenhinweis

Diese Lösung wurde aus dem legacy Schlaufuchs-Material `legacy/selected/web-development/web-css-aufgabe-02-grid-layout/css_aufgabe_02.html` und der zugehörigen Layoutabbildung fachlich neu erstellt. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datumsangabe 15.06.2020. Text, Code und Diagramm wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
