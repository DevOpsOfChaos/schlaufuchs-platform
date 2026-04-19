---
title: Musterlösung – Dateizugriff als Ablauf ordnen
description: Musterlösung zur Aufgabe INF-PHP-FILES-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dateizugriff-mit-fopen-fgets-und-fclose-verstehen
  - dateizugriff-als-ablauf-ordnen-loesung
taskId: INF-PHP-FILES-001
relatedExercise: src/content/exercises/informatik/programmierung/php/dateizugriff-mit-fopen-fgets-und-fclose-verstehen/dateizugriff-als-ablauf-ordnen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Sinnvolle Reihenfolge: Datei öffnen → Dateiende prüfen → Zeile lesen → Datei schließen.

## Aufgabe 2

<code>fgets(...)</code> liest Inhalt aus der Datei. <code>feof(...)</code> liest nicht selbst, sondern prüft, ob das Ende der Datei erreicht wurde.

## Aufgabe 3

<code>fclose(...)</code> beendet den Zugriff sauber. Fachlich gehört es zum Abschluss des Dateizugriffs und verhindert, dass eine geöffnete Datei unnötig offen bleibt.
