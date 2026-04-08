---
title: CSS-Box-Modell, Padding, Margin und Border
description: Diese Aufgabe vertieft das CSS-Box-Modell und die sichere Unterscheidung von Innenabstand, Rand und Außenabstand.
subject: web-development
section: Grundlagen
level: mittel
draft: false
---

## Arbeitsauftrag

Bearbeite die Aufgaben mit Blick auf Layout und Struktur. Es geht darum, die Wirkung von content, padding, border und margin sicher zu verstehen.

## Aufgabe 1

Erkläre in eigenen Worten:

1. Was der Content-Bereich ist.
2. Was Padding ist.
3. Was Border ist.
4. Was Margin ist.

## Aufgabe 2

Ordne zu, ob es sich um Innen- oder Außenabstand handelt:

- `padding-top`
- `margin-bottom`
- `padding-left`
- `margin-right`

## Aufgabe 3

Gegeben ist:

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #ccc;
}
```

Erkläre kurz:

1. Welcher Bereich der Inhalt ist.
2. Warum das Element insgesamt breiter als 300px wirken kann.
3. Welche Rolle `box-sizing: border-box;` hier spielen könnte.

## Aufgabe 4

Schreibe eine CSS-Regel für eine Karte, die:

- innen 16px Abstand hat,
- einen sichtbaren Rand hat,
- außen 24px Abstand hat.

## Aufgabe 5

Erkläre kurz:

1. Warum Padding nicht dasselbe ist wie Margin.
2. Warum klare Abstände ein Layout ruhiger und verständlicher machen.

## Hinweise

- Padding liegt innerhalb der Box.
- Margin liegt außerhalb der Box.
- Border trennt Inhalt und Außenraum sichtbar.
