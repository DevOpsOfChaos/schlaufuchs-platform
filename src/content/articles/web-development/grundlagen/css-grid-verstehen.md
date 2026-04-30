---
title: "CSS Grid verstehen"
description: "CSS Grid hilft dabei, zweidimensionale Layouts mit Zeilen und Spalten ruhig, klar und flexibel aufzubauen."
subject: "web-development"
section: "Grundlagen"
topicPath: ["grundlagen", "css-grid-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "Grundlagen"]
draft: false
---
## Überblick

Sobald Inhalte nicht nur in einer einzelnen Reihe, sondern in einem ganzen Raster angeordnet werden sollen, stößt einfaches Blockdenken schnell an Grenzen. Genau hier ist CSS Grid besonders stark. Es erlaubt die Arbeit mit Zeilen und Spalten gleichzeitig und eignet sich daher hervorragend für strukturierte Layouts.

## Was ist CSS Grid?

CSS Grid ist ein Layout-Modell für zweidimensionale Anordnungen.

Das bedeutet:

- Elemente können in Zeilen **und** Spalten organisiert werden.
- Ein Container definiert das Raster.
- Die darin liegenden Elemente werden in diesem Raster angeordnet.

## Grid-Container und Grid-Items

Sobald ein Element `display: grid;` erhält, wird es zum Grid-Container. Die direkten Kindelemente werden zu Grid-Items.

Beispiel:

```css
.cards {
  display: grid;
}
```

## Spalten definieren

Mit `grid-template-columns` wird festgelegt, wie viele Spalten ein Raster besitzt.

Beispiel:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Das bedeutet:

- drei gleich breite Spalten

## Zeilen und Abstände

Grid arbeitet nicht nur mit Spalten, sondern auch mit Zeilen. Außerdem können Abstände mit `gap` gesetzt werden.

Beispiel:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Das schafft ein ruhiges Raster mit klaren Zwischenräumen.

## Warum Grid nützlich ist

CSS Grid ist besonders gut für:

- Kartenraster,
- Übersichtsseiten,
- Dashboard-Strukturen,
- Seiten mit mehreren Bereichen,
- zweidimensionale Layouts.

Während Flexbox eher für lineare Anordnungen gedacht ist, eignet sich Grid besonders für Flächenaufteilungen.

## Responsive Denken mit Grid

Grid ist auch deshalb nützlich, weil sich die Anzahl der Spalten leicht an kleinere Breiten anpassen lässt.

Beispiel:

- auf großen Breiten 3 Spalten,
- auf kleinen Breiten 1 Spalte.

## Grid ist nicht einfach „nur hübscher“

Grid löst ein strukturelles Problem:

- Wie ordne ich Inhalte in einem klaren Raster an?

Es geht also nicht um bloße Dekoration, sondern um saubere Layoutlogik.

## Typische Fehler

- Grid und Flexbox als völlig austauschbar behandeln.
- Zu viele starre Spalten auf kleinen Breiten erzwingen.
- Abstände mit unruhigen Einzel-Margins statt mit `gap` lösen.
- Den Grid-Container falsch setzen.

## Gute Denkweise

Bei Grid helfen diese Fragen:

1. Wie viele Spalten braucht das Layout?
2. Wie sollen die Abstände aussehen?
3. Wie reagiert das Raster auf kleinere Breiten?
4. Ist Grid hier passender als eine lineare Flex-Anordnung?

## Merksätze

- CSS Grid arbeitet mit Zeilen und Spalten.
- Grid eignet sich für zweidimensionale Layouts.
- `grid-template-columns` legt die Spalten fest.
- `gap` schafft ruhige Abstände.
- Grid ist besonders stark bei Karten, Übersichten und Rasterlayouts.
