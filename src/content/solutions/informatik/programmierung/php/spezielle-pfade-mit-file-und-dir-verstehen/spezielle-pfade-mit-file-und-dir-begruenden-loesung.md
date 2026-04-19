---
title: Musterlösung – __FILE__ und __DIR__ fachlich zuordnen
description: Musterlösung zur Aufgabe INF-PHP-ADV-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - spezielle-pfade-mit-file-und-dir-verstehen
  - spezielle-pfade-mit-file-und-dir-begruenden-loesung
taskId: INF-PHP-ADV-001
relatedExercise: src/content/exercises/informatik/programmierung/php/spezielle-pfade-mit-file-und-dir-verstehen/spezielle-pfade-mit-file-und-dir-begruenden.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---
## Aufgabe 1

`__FILE__` beschreibt die aktuelle Datei mit vollständigem Pfad und Dateiname. `__DIR__` beschreibt nur das Verzeichnis dieser Datei.

## Aufgabe 2

`__DIR__` ist hilfreich, wenn eine Datei relativ zum aktuellen Verzeichnis eingebunden werden soll, weil der Bezugspunkt klar im Dateisystem des Servers liegt.

## Aufgabe 3

Der Fehler ist die Verwechslung von Serverpfad und Browser-URL. `__DIR__` beschreibt einen Ort auf dem Server, nicht die Adresse im Browser.
