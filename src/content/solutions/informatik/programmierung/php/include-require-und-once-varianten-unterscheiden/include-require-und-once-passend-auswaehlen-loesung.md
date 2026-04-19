---
title: Musterlösung – include, require und once passend auswählen
description: Musterlösung zur Aufgabe INF-PHP-MODULAR-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - include-require-und-once-varianten-unterscheiden
  - include-require-und-once-passend-auswaehlen-loesung
taskId: INF-PHP-MODULAR-001
relatedExercise: src/content/exercises/informatik/programmierung/php/include-require-und-once-varianten-unterscheiden/include-require-und-once-passend-auswaehlen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Konfigurationsdatei → eher require oder require_once. Optionale Infobox → eher include. Hilfsdatei mit gemeinsamen Funktionen → eher include_once oder require_once, je nach Wichtigkeit.

## Aufgabe 2

Eine doppelte Einbindung kann dazu führen, dass Definitionen mehrfach auftauchen oder derselbe Hilfscode unnötig wiederholt wird.

## Aufgabe 3

Modularisierung hält Code verständlicher, wiederverwendbarer und wartbarer. Wiederkehrende Teile müssen nicht an vielen Stellen getrennt gepflegt werden.
