---
title: Lösung – Flex-Größenverhalten der Items begründen
description: Musterlösung zur Aufgabe über flex-grow, flex-shrink und flex-basis.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-grow-flex-shrink-und-flex-basis-verstehen
taskId: WEB-CSS-FLEX-206
relatedExercise: web-development/css/flex-grow-flex-shrink-und-flex-basis-verstehen/flex-groessenverhalten-der-items-begruenden
tags:
  - css
  - flexbox
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

Beide Items starten mit derselben Basisgröße. Das Item mit `flex-grow: 2` darf zusätzlichen freien Platz stärker mitnutzen als das Item mit `flex-grow: 1`.

### Aufgabe 2

`flex-shrink` beschreibt, wie ein Item bei Platzmangel kleiner werden darf. Es wird also relevant, wenn der Container enger ist als die Summe der gewünschten Größen.

### Aufgabe 3

`flex: 0 1 auto` bedeutet:
- nicht zusätzlich wachsen,
- bei Platzmangel schrumpfen dürfen,
- als Ausgangspunkt von einer automatischen Basisgröße ausgehen.
