---
title: "Musterlösung – Datei-Handle und Dateiinhalt fachlich trennen"
description: "Musterlösung zur Aufgabe INF-PHP-FILES-004."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "datei-handle-und-ressource-beim-php-dateizugriff-verstehen", "datei-handle-und-dateiinhalt-fachlich-trennen"]
taskId: "INF-PHP-FILES-004"
relatedExercise: "src/content/exercises/informatik/programmierung/php/datei-handle-und-ressource-beim-php-dateizugriff-verstehen/datei-handle-und-dateiinhalt-fachlich-trennen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Der Dateiname beschreibt die Zieldatei. Das Handle ist der geöffnete Zugriff auf diese Datei. Der Dateiinhalt sind die eigentlichen Daten oder Zeilen.

## Aufgabe 2

Weil diese Funktionen denselben laufenden Zugriff weiterverwenden: erst öffnen, dann damit arbeiten, dann schließen.

## Aufgabe 3

Weil <code>fopen</code> nur den Zugriff eröffnet. Das eigentliche Lesen passiert erst später über Funktionen wie <code>fgets</code>.