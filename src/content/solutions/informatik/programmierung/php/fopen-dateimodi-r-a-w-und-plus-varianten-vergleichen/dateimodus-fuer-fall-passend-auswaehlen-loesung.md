---
title: Musterlösung – Dateimodus für einen Fall passend auswählen
description: Musterlösung zur Aufgabe INF-PHP-FILES-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - fopen-dateimodi-r-a-w-und-plus-varianten-vergleichen
  - dateimodus-fuer-fall-passend-auswaehlen-loesung
taskId: INF-PHP-FILES-002
relatedExercise: src/content/exercises/informatik/programmierung/php/fopen-dateimodi-r-a-w-und-plus-varianten-vergleichen/dateimodus-fuer-fall-passend-auswaehlen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Nur auslesen → <code>r</code>. Logdatei ergänzen → <code>a</code>. Datei neu schreiben → <code>w</code>.

## Aufgabe 2

<code>w</code> ist riskanter, weil dabei vorhandener Inhalt überschrieben oder neu begonnen werden kann. <code>a</code> hängt nur hinten an und bewahrt den bisherigen Inhalt besser.
