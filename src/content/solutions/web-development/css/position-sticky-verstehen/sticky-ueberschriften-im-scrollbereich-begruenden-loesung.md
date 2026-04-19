---
title: Lösung – Sticky-Überschriften im Scrollbereich begründen
description: Musterlösung zur Aufgabe über sticky, fixed und Scrollbereiche.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - position-sticky-verstehen
taskId: WEB-CSS-POS-202
relatedExercise: web-development/css/position-sticky-verstehen/sticky-ueberschriften-im-scrollbereich-begruenden
tags:
  - css
  - sticky
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

`position: sticky` passt besser, weil die Überschrift weiter Teil des Inhaltsbereichs bleibt und nur beim Scrollen an einer Kante haftet. `position: fixed` würde die Überschrift global am Viewport festhalten und damit stärker wie eine dauerhafte Leiste wirken.

### Aufgabe 2

Mögliche Gründe sind:

- Es gibt gar keinen relevanten Scrollbereich.
- Die Scrollstrecke ist zu klein, damit das Haftverhalten sichtbar wird.

### Aufgabe 3

Sticky bedeutet: Das Element bewegt sich zunächst normal mit dem Inhalt mit und beginnt erst später an einer definierten Kante zu haften.
