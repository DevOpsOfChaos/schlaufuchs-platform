---
title: Musterlösung – Ergebnisobjekt und Datenzeile trennen
description: Musterlösung zur Aufgabe INF-PHP-MYSQL-004.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-ergebnisse-mit-fetch-array-lesen
  - ergebnisobjekt-und-datenzeile-trennen-loesung
taskId: INF-PHP-MYSQL-004
relatedExercise: src/content/exercises/informatik/programmierung/php/mysqli-ergebnisse-mit-fetch-array-lesen/ergebnisobjekt-und-datenzeile-trennen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Das Query-Ergebnis ist die gesamte Rückgabe der Abfrage. Eine einzelne Datenzeile ist nur ein Datensatz daraus, der erst mit <code>fetch_array</code> gelesen wird.

## Aufgabe 2

<code>$row['email']</code> greift über den Spaltennamen zu. <code>$row[0]</code> greift über die Feldposition zu. Fachlich lesen beide dieselbe Zeile, aber über unterschiedliche Bezugspunkte.
