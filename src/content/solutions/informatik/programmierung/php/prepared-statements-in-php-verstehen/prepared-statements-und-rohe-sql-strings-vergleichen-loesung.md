---
title: Musterlösung – Prepared Statements und rohe SQL-Strings vergleichen
description: Musterlösung zur Aufgabe INF-PHP-MYSQL-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - prepared-statements-in-php-verstehen
  - prepared-statements-und-rohe-sql-strings-vergleichen-loesung
taskId: INF-PHP-MYSQL-002
relatedExercise: src/content/exercises/informatik/programmierung/php/prepared-statements-in-php-verstehen/prepared-statements-und-rohe-sql-strings-vergleichen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Prepared Statements bereiten zuerst die Struktur der SQL-Anfrage mit Platzhaltern vor. Die konkreten Werte werden später getrennt gebunden.

## Aufgabe 2

Benutzereingaben werden dadurch nicht als Teil des eigentlichen SQL-Textes missverstanden. Das macht den Ablauf robuster und schützt besser vor SQL-Injection.

## Aufgabe 3

Rohe String-Verkettung vermischt Anfrage und Eingabedaten in einem Text. Dadurch steigt das Risiko für Fehler und problematische Manipulationen deutlich.
