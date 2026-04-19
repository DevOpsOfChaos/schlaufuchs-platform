---
title: Musterlösung – Mehrdimensionale Arrays und Stringzugriff unterscheiden
description: Musterlösung zur Aufgabe INF-PHP-ADV-004.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mehrdimensionale-arrays-und-stringzugriff-verstehen
  - mehrdimensionale-arrays-und-stringzugriff-begruenden-loesung
taskId: INF-PHP-ADV-004
relatedExercise: src/content/exercises/informatik/programmierung/php/mehrdimensionale-arrays-und-stringzugriff-verstehen/mehrdimensionale-arrays-und-stringzugriff-begruenden.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---
## Aufgabe 1

Bei `$A[1][2]` wird zuerst das Element mit Index 1 aus `$A` gewählt. Dieses Element ist selbst wieder ein Array. Daraus wird dann das Element mit Index 2 gelesen.

## Aufgabe 2

Stringzugriff zeigt nur, dass einzelne Zeichen über Positionen gelesen werden können. Ein String bleibt trotzdem ein String und ist nicht automatisch dieselbe Struktur wie ein Array.
