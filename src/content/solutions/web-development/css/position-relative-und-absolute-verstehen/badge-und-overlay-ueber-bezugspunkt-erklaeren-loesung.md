---
title: Lösung – Badge und Overlay über Bezugspunkt erklären
description: Musterlösung zur Aufgabe über relative und absolute Positionierung.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - position-relative-und-absolute-verstehen
taskId: WEB-CSS-POS-201
relatedExercise: web-development/css/position-relative-und-absolute-verstehen/badge-und-overlay-ueber-bezugspunkt-erklaeren
tags:
  - css
  - position
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

Die Karte braucht oft `position: relative`, damit das Badge einen klaren Bezugspunkt hat. Dann bezieht sich `top` und `right` nicht auf irgendeinen äußeren Kontext, sondern auf genau diese Karte.

### Aufgabe 2

Es fehlt der passende Anker in der Struktur. Nur `position: absolute` auf dem Badge zu setzen beschreibt die Lage des schwebenden Elements, aber noch nicht, woran diese Lage festgemacht wird.

### Aufgabe 3

Der wichtigste Bezugspunkt ist meist der Container, an dessen Ecke oder Kante das Badge sichtbar haften soll.
