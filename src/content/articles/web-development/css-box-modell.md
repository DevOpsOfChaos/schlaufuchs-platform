---
title: "CSS-Box-Modell"
description: "Das CSS-Box-Modell beschreibt Inhaltsbereich, Padding, Border und Margin als Grundlage von Größe und Abstand."
subject: "web-development"
section: "CSS"
topicPath: ["css", "box-modell"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Im CSS wird fast jedes Element als rechteckige Box berechnet. Diese Box besteht aus Inhaltsbereich, Innenabstand, Rahmen und Außenabstand. Das Modell erklärt, warum ein Element größer wirkt als sein Text oder Bild und warum Abstand nicht immer an derselben Stelle entsteht.

## Zentrale Begriffe

- **Content:** eigentlicher Inhaltsbereich eines Elements.
- **Padding:** Innenabstand zwischen Inhalt und Rahmen.
- **Border:** Rahmen der Box.
- **Margin:** Außenabstand zu anderen Boxen.
- **`box-sizing`:** legt fest, ob `width` und `height` nur den Inhalt oder auch Padding und Border umfassen.

## Struktur

```css
.karte {
  width: 240px;
  padding: 16px;
  border: 2px solid #334155;
  margin: 24px;
}
```

Bei der Standardberechnung beschreibt `width` zuerst die Inhaltsbreite. Links und rechts kommen jeweils `16px` Padding und `2px` Border hinzu. Die sichtbare Box ist dadurch `276px` breit. Mit linker und rechter Margin benötigt sie im Layout insgesamt `324px` Platz.

```text
sichtbare Boxbreite = content + padding links/rechts + border links/rechts
gesamter Platzbedarf = sichtbare Boxbreite + margin links/rechts
```

## `box-sizing: border-box`

Mit `box-sizing: border-box` umfasst die angegebene Breite den Inhaltsbereich, Padding und Border. Dadurch lassen sich Komponenten oft stabiler planen, weil `width: 240px` dann die sichtbare Boxbreite beschreibt.

```css
* {
  box-sizing: border-box;
}
```

## Typische Fehler

- Padding und Margin verwechseln.
- Margin verwenden, obwohl Innenabstand gemeint ist.
- Border nicht in die sichtbare Größe einrechnen.
- Breiten mit Padding kombinieren, ohne `box-sizing` zu beachten.
- Layoutprobleme mit zufälligen Pixelwerten lösen, statt die betroffene Box-Schicht zu identifizieren.

## Abgrenzung

Das Box-Modell erklärt Größe und Abstand einzelner Boxen. Flexbox, Grid, Positionierung und normaler Dokumentfluss regeln zusätzlich, wie mehrere Boxen zueinander angeordnet werden.

## Verwandte Themen

- CSS-Selektoren
- Flexbox
- CSS Grid
- Responsive Design
