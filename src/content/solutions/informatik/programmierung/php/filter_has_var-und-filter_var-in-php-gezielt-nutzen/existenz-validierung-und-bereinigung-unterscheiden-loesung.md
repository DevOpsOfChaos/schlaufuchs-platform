---
title: Musterlösung – Existenz, Validierung und Bereinigung unterscheiden
description: Musterlösung zur Aufgabe INF-PHP-FILTER-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filter_has_var-und-filter_var-in-php-gezielt-nutzen
  - existenz-validierung-und-bereinigung-unterscheiden-loesung
taskId: INF-PHP-FILTER-002
relatedExercise: src/content/exercises/informatik/programmierung/php/filter_has_var-und-filter_var-in-php-gezielt-nutzen/existenz-validierung-und-bereinigung-unterscheiden.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Reihenfolge: zuerst prüfen, ob das Feld vorhanden ist → dann prüfen, ob es fachlich gültig ist → vor einer Ausgabe oder weiteren Nutzung bei Bedarf bereinigen.

## Aufgabe 2

Weil ein vorhandener Wert trotzdem fachlich falsch sein kann. Ein Feld kann existieren, aber zum Beispiel keine gültige E-Mail enthalten.
