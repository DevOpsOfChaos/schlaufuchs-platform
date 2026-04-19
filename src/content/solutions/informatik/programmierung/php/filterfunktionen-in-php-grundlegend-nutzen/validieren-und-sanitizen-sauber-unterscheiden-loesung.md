---
title: Musterlösung – Validieren und Sanitizen sauber unterscheiden
description: Musterlösung zur Aufgabe INF-PHP-FILTER-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filterfunktionen-in-php-grundlegend-nutzen
  - validieren-und-sanitizen-sauber-unterscheiden-loesung
taskId: INF-PHP-FILTER-001
relatedExercise: src/content/exercises/informatik/programmierung/php/filterfunktionen-in-php-grundlegend-nutzen/validieren-und-sanitizen-sauber-unterscheiden.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Validieren prüft, ob ein Wert fachlich zu einem erwarteten Format passt. Sanitizen bereinigt oder entschärft einen Wert, damit er sicherer weiterverarbeitet werden kann.

## Aufgabe 2

Bereinigen kann problematische Zeichen entfernen, aber es garantiert nicht automatisch, dass der Wert fachlich korrekt oder vollständig gültig ist.

## Aufgabe 3

<code>filter_input</code> ist praktisch, weil ein Wert direkt aus einer Eingabequelle gelesen und dabei zugleich geprüft oder bereinigt werden kann.
