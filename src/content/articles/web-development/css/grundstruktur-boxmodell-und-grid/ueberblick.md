---
title: "CSS-Grundstruktur, Boxmodell und Grid"
description: "Technische Referenz zu CSS-Regeln, Kaskade, Boxmodell und CSS Grid als Grundlage für Layout und Gestaltung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "grundstruktur-boxmodell-und-grid"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS", "Boxmodell", "Grid", "Layout", "Kaskade"]
draft: false
---

CSS beschreibt die Darstellung eines HTML-Dokuments. HTML legt die Struktur fest, CSS legt Abstände, Farben, Schrift, Größen und Layoutverhalten fest. Saubere CSS-Arbeit beginnt deshalb nicht mit Effekten, sondern mit der Trennung von Inhalt und Gestaltung.

## Definition und Grundidee

CSS steht für **Cascading Style Sheets**. Eine CSS-Regel ordnet einem oder mehreren Selektoren Eigenschaften zu:

```css
main {
  max-width: 72rem;
  margin-inline: auto;
  padding: 2rem;
}
```

Die Regel besteht aus:

- **Selektor:** wählt Elemente aus, hier `main`.
- **Deklarationsblock:** steht zwischen geschweiften Klammern.
- **Eigenschaft:** etwa `padding`.
- **Wert:** etwa `2rem`.
- **Semikolon:** trennt Deklarationen.

## Kaskade und Reihenfolge

Die Kaskade entscheidet, welche Deklaration am Ende gilt. Wichtige Faktoren sind:

1. Herkunft der Regel,
2. Wichtigkeit,
3. Spezifität,
4. Reihenfolge im Stylesheet.

Bei gleicher Spezifität gewinnt die später geladene Regel:

```css
p {
  color: black;
}

p {
  color: blue;
}
```

Der Absatz wird blau. Das ist kein Zufall, sondern Teil der CSS-Kaskade.

## Externe Stylesheets

CSS kann direkt im Dokument oder in einer externen Datei stehen. Für wartbare Seiten ist ein externes Stylesheet meist sinnvoll:

```html
<link rel="stylesheet" href="/styles/base.css">
```

Mehrere Dokumente können dieselbe Datei verwenden. Änderungen an gemeinsamen Layoutregeln wirken dann konsistent über viele Seiten hinweg.

## Boxmodell

Browser stellen viele Elemente als rechteckige Boxen dar. Das CSS-Boxmodell unterscheidet:

- **content:** eigentlicher Inhalt,
- **padding:** Innenabstand,
- **border:** Rahmen,
- **margin:** Außenabstand.

Beim klassischen `content-box` bezieht sich `width` nur auf den Inhalt. Padding und Border kommen hinzu. Beim alternativen `border-box` umfasst `width` Inhalt, Padding und Border:

```css
* {
  box-sizing: border-box;
}
```

`border-box` macht Layouts oft berechenbarer, weil eine Breitenangabe die sichtbare Box stabiler beschreibt.

## Abstände und Zentrierung

Ein häufiges Muster für begrenzte Inhaltsbreite:

```css
.article {
  max-width: 70ch;
  margin-inline: auto;
  padding-inline: 1rem;
}
```

`max-width` begrenzt die Breite. `margin-inline: auto` verteilt freien Platz links und rechts. `padding-inline` verhindert, dass Text auf kleinen Bildschirmen am Rand klebt.

## CSS Grid

CSS Grid ist ein zweidimensionales Layoutsystem. Es ordnet direkte Kindelemente eines Grid-Containers in Zeilen und Spalten an:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
}
```

Der Container definiert das Raster. Die direkten Kinder werden Grid-Items. Grid eignet sich besonders für Seitenlayouts, Kartenraster und Bereiche, bei denen Zeilen und Spalten gleichzeitig wichtig sind.

## Grid-Items platzieren

Ein Grid-Item kann über Linien oder Bereiche platziert werden:

```css
.sidebar {
  grid-column: 1;
}

.content {
  grid-column: 2;
}
```

Mit `span` kann ein Element mehrere Tracks einnehmen:

```css
.header {
  grid-column: 1 / span 2;
}
```

Die Reihenfolge im HTML sollte trotzdem fachlich sinnvoll bleiben. Grid darf die Darstellung verändern, aber nicht eine schlechte Dokumentstruktur kaschieren.

## Boxmodell und Grid zusammen denken

Grid bestimmt, wo eine Box liegt. Das Boxmodell bestimmt, wie groß diese Box mit Inhalt, Abstand und Rahmen tatsächlich ist. Viele Layoutfehler entstehen, weil beide Ebenen verwechselt werden:

- Das Raster ist korrekt, aber Padding sprengt die Box.
- Die Box ist korrekt, aber Grid-Tracks sind falsch definiert.
- `gap` wird mit `margin` vermischt.
- Content-Breite und Border-Box-Breite werden gleichgesetzt.

## Typische Fehler

- **CSS als HTML-Ersatz verwenden:** CSS gestaltet, ersetzt aber keine semantische Struktur.
- **Spezifität hochschrauben statt Ursache finden:** Immer längere Selektoren machen Stylesheets schwer wartbar.
- **`width: 100%` mit Padding falsch einschätzen:** Ohne `border-box` kann die sichtbare Box breiter werden.
- **Grid für eindimensionale Ausrichtung erzwingen:** Für eine Zeile oder Spalte reicht oft Flexbox.
- **Grid-Items mit beliebig verschachtelten Elementen verwechseln:** Nur direkte Kinder des Grid-Containers sind Grid-Items.
- **Alte Layouttricks beibehalten:** Tabellenlayout oder float-basierte Grundlayouts sind für moderne Seitenlayouts meist nicht nötig.

## Abgrenzung

CSS-Grundstruktur beschreibt Regeln, Kaskade und Basiseigenschaften. Das Boxmodell beschreibt Größen und Abstände. Grid beschreibt zweidimensionale Layouts. Flexbox, Responsive Design, Container Queries und Design Tokens sind angrenzende Themen, aber nicht dasselbe.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/web-development/web-css-grundstruktur-boxmodell-grid/` neu geschrieben und adaptiert, insbesondere aus `css_grundstruktur.html`, `css_syntax.html`, `CSS_box_modell.html` und `css_grid_layout.html`. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt; für Teile des Grid-Materials ist Autorenkürzel JW mit Datum 16.07.2021 angegeben. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
