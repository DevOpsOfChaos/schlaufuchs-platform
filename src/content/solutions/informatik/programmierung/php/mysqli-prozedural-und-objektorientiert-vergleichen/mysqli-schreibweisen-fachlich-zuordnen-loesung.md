---
title: Musterlösung – MySQLi-Schreibweisen fachlich zuordnen
description: Musterlösung zur Aufgabe INF-PHP-MYSQL-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-prozedural-und-objektorientiert-vergleichen
  - mysqli-schreibweisen-fachlich-zuordnen-loesung
taskId: INF-PHP-MYSQL-003
relatedExercise: src/content/exercises/informatik/programmierung/php/mysqli-prozedural-und-objektorientiert-vergleichen/mysqli-schreibweisen-fachlich-zuordnen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

<code>mysqli_connect(...)</code> und <code>new mysqli(...)</code> bauen fachlich eine Verbindung auf. <code>mysqli_query($con, $sql)</code> und <code>$con->query($sql)</code> schicken fachlich eine Anfrage. <code>$con->close()</code> schließt die Verbindung.

## Aufgabe 2

Weil dieselbe Art von Aktion dann mal wie Funktion und mal wie Methode aussieht. Das erschwert ruhiges Lesen und macht die Struktur eines Projekts unnötig uneinheitlich.
