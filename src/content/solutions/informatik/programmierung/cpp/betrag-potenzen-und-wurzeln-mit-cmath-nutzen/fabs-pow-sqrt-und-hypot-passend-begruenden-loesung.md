---
title: Musterlösung – fabs, pow, sqrt und hypot passend begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-CMATHOPS-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - cmath
  - betrag-potenzen-und-wurzeln-mit-cmath-nutzen
  - fabs-pow-sqrt-und-hypot-passend-begruenden-loesung
taskId: INF-PROG-CPP-CMATHOPS-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/betrag-potenzen-und-wurzeln-mit-cmath-nutzen/fabs-pow-sqrt-und-hypot-passend-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Richtige Funktion wählen

Für die Größe ohne Vorzeichen passt <code>fabs</code>. Für 3 hoch 2 passt <code>pow</code>. Für die Hypotenuse zu 3 und 4 passt <code>hypot</code>, weil diese Funktion direkt die Pythagoras-Idee zusammenfasst.

## Aufgabe 2: Verwechslungsgefahr klären

<code>pow</code> beschreibt eine Potenz wie x hoch y. <code>sqrt</code> beschreibt die Quadratwurzel. Beide hängen mathematisch zusammen, erfüllen aber im Code unterschiedliche Rechenziele und dürfen deshalb nicht einfach gleichgesetzt werden.
