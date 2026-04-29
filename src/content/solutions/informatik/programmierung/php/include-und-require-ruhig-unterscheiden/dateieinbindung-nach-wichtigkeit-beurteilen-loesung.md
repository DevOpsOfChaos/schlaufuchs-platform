---
title: "Loesung – Dateieinbindung nach Wichtigkeit beurteilen"
description: "Musterloesung zur Aufgabe ueber include und require in PHP."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "include-und-require-ruhig-unterscheiden", "dateieinbindung-nach-wichtigkeit-beurteilen"]
taskId: "INF-PHP-STRUCT-004"
relatedExercise: "informatik/programmierung/php/include-und-require-ruhig-unterscheiden/dateieinbindung-nach-wichtigkeit-beurteilen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Eine zentrale Konfigurationsdatei ist oft unverzichtbar fuer die gesamte Programmlogik. Eine optionale Zusatzdatei kann dagegen stoeren, ohne dass die ganze Anwendung sofort sinnlos wird.

### Aufgabe 2

<code>include</code> und <code>require</code> binden beide Dateien ein, reagieren aber unterschiedlich streng auf ihr Fehlen. Die ruhigste Unterscheidung liegt deshalb in der Wichtigkeit des eingebundenen Bausteins.

### Aufgabe 3

Es ist nicht nur Schreibstil, weil die Programmlogik bei fehlenden Dateien unterschiedlich hart betroffen sein kann. Genau deshalb ist die Wahl fachlich bedeutsam.
