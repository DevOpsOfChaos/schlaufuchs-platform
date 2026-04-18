---
title: Gesamtbreite von Boxen begründen
description: Erkläre, warum Boxen mit Padding und Border breiter wirken können und wann <code>border-box</code> hilfreich ist.
subject: web-development
section: CSS
topicPath:
  - css
  - box-modell
  - box-sizing-border-box-verstehen
  - gesamtbreite-von-boxen-begruenden
level: einfach
draft: false
tags:
  - css
  - box-model
  - box-sizing
hintPoints:
  - "Frage zuerst, ob die width nur den Inhalt oder die ganze Box meint."
  - "Denke Padding und Border ausdrücklich mit."
  - "Begründe sichtbar, nicht nur technisch."
selfCheckPoints:
  - "Ist klar, warum die Box breiter wirkt?"
  - "Beziehst du Padding und Border in deine Erklärung ein?"
  - "Kannst du sagen, was border-box daran ändert?"
transferIdeas:
  - "Übertrage die Aufgabe auf Kartenraster oder zweispaltige Layouts."
  - "Vergleiche eine Box mit und ohne border-box."
reflectionPrompt: "Warum hilft border-box besonders bei Layouts mit festen oder halbierten Breiten?"
---

## Aufgabe 1: Breite deuten

Eine Karte hat:

```css
width: 300px;
padding: 20px;
border: 2px solid;
```

Erkläre in Worten, warum die sichtbare Gesamtbreite größer als 300px wirken kann.

## Aufgabe 2: Border-Box begründen

Beschreibe, warum <code>box-sizing: border-box</code> in einem zweispaltigen Layout oft ruhiger ist.

## Aufgabe 3: Denkweise formulieren

Formuliere in einem kurzen Satz den Unterschied zwischen „Inhaltsbreite“ und „Gesamtbreite“.
