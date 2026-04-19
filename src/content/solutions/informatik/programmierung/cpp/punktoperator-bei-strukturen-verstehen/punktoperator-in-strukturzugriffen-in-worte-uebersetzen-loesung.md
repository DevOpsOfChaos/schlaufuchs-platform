---
title: Musterlösung – Punktoperator in Strukturzugriffen in Worte übersetzen
description: Musterlösung zur Aufgabe INF-PROG-CPP-STRUCTMEM-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - strukturen
  - punktoperator-bei-strukturen-verstehen
  - punktoperator-in-strukturzugriffen-in-worte-uebersetzen-loesung
taskId: INF-PROG-CPP-STRUCTMEM-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/punktoperator-bei-strukturen-verstehen/punktoperator-in-strukturzugriffen-in-worte-uebersetzen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Vor und nach dem Punkt

Bei <code>P1.x</code> ist <code>P1</code> die Strukturvariable und <code>x</code> die ausgewählte Komponente. Dasselbe gilt bei <code>P1.name</code>, nur dass hier die Komponente <code>name</code> gemeint ist. Der Punktoperator wählt also eine konkrete Eigenschaft innerhalb der Strukturvariable aus.

## Aufgabe 2: Unterschied benennen

<code>P1</code> bezeichnet die gesamte Strukturvariable. <code>P1.x</code> bezeichnet nur eine einzelne Komponente dieser Struktur. Deshalb ist <code>P1.x</code> ein Teilzugriff innerhalb von <code>P1</code> und nicht das ganze Objekt.
