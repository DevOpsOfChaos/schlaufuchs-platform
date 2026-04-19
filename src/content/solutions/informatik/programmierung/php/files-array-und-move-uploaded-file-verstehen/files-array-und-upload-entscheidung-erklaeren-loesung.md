---
title: Musterlösung – $_FILES und Upload-Entscheidung erklären
description: Musterlösung zur Aufgabe INF-PHP-UPLOAD-005.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - files-array-und-move-uploaded-file-verstehen
  - files-array-und-upload-entscheidung-erklaeren-loesung
taskId: INF-PHP-UPLOAD-005
relatedExercise: src/content/exercises/informatik/programmierung/php/files-array-und-move-uploaded-file-verstehen/files-array-und-upload-entscheidung-erklaeren.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Lösung

name ist der ursprüngliche Dateiname auf der Client-Seite. tmp_name bezeichnet den temporären Speicherort oder Namen auf dem Server, unter dem PHP die Datei zunächst abgelegt hat.

move_uploaded_file sollte erst nach Prüfungen aufgerufen werden, damit Größe, Fehlercode, Dateityp und weitere Regeln kontrolliert sind.
