---
title: "Flexbox-Grundlagen"
description: "Flexbox hilft dabei, Elemente in einer Zeile oder Spalte sauber auszurichten, zu verteilen und flexibel auf verschiedene Breiten zu reagieren."
subject: "web-development"
section: "CSS und Layout"
topicPath: ["flexbox-grundlagen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS und Layout"]
draft: false
---
## Überblick

Sobald mehrere Elemente in einer Leiste, Karte oder Navigation angeordnet werden sollen, wird reines Blockdenken schnell unpraktisch. Flexbox ist ein CSS-Modell, das genau für solche Anordnungen gemacht ist. Es hilft beim Ausrichten, Verteilen und Umbrechen von Elementen, ohne dass viele starre Breiten oder umständliche Tricks nötig sind.

## Flex-Container und Flex-Items

Flexbox arbeitet mit zwei Ebenen:

- dem **Flex-Container**,
- den darin liegenden **Flex-Items**.

Sobald auf einem Container `display: flex;` gesetzt wird, verhalten sich seine direkten Kinder als Flex-Items.

```css
.nav {
  display: flex;
}
```

## Hauptachse und Querachse

Flexbox denkt immer in Achsen:

- Die **Hauptachse** verläuft standardmäßig horizontal.
- Die **Querachse** verläuft dazu senkrecht.

Mit `flex-direction` lässt sich die Richtung ändern, etwa auf eine Spaltenanordnung.

## Wichtige Eigenschaften des Containers

Besonders wichtig sind:

- `display: flex;`
- `justify-content` für die Verteilung auf der Hauptachse
- `align-items` für die Ausrichtung auf der Querachse
- `gap` für Abstände zwischen Elementen
- `flex-wrap` für Zeilenumbrüche bei zu wenig Platz

Ein typisches Beispiel:

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

## Eigenschaften der Items

Auch einzelne Flex-Items lassen sich beeinflussen. Typische Eigenschaften sind:

- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `align-self`

Damit kann ein Element mehr Platz erhalten, schrumpfen oder sich anders ausrichten als die übrigen.

## Wann ist Flexbox besonders sinnvoll?

Flexbox eignet sich gut für:

- Navigationen,
- Button-Reihen,
- Kartenleisten,
- Formulargruppen,
- horizontale und vertikale Zentrierung.

Für sehr komplexe Raster mit vielen Zeilen und Spalten ist CSS Grid oft die passendere Wahl. Für lineare Anordnungen bleibt Flexbox aber meist die einfachere Lösung.

## Typische Fehler

- `justify-content` und `align-items` verwechseln.
- Flexbox auf das Kind statt auf den Container setzen.
- Keine Umbrüche erlauben, obwohl die Zeile auf kleinen Geräten zu eng wird.
- Abstände mit komplizierten Einzel-Margins statt mit `gap` lösen.

## Merksätze

- Flexbox ordnet Elemente entlang einer Hauptachse.
- `justify-content` verteilt entlang der Hauptachse.
- `align-items` richtet entlang der Querachse aus.
- Für lineare Layouts ist Flexbox oft schnell, klar und robust.
