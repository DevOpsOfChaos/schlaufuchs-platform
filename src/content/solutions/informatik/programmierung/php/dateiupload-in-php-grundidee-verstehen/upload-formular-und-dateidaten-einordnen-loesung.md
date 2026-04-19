---
title: Musterlösung – Upload-Formular und Dateidaten einordnen
description: Musterlösung zur Aufgabe INF-PHP-UPLOAD-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dateiupload-in-php-grundidee-verstehen
  - upload-formular-und-dateidaten-einordnen-loesung
taskId: INF-PHP-UPLOAD-001
relatedExercise: src/content/exercises/informatik/programmierung/php/dateiupload-in-php-grundidee-verstehen/upload-formular-und-dateidaten-einordnen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Typisch sind <code>type="file"</code> im Formular und <code>enctype="multipart/form-data"</code> für die richtige Übertragung.

## Aufgabe 2

<code>name</code> ist der ursprüngliche Dateiname beim Benutzer. <code>tmp_name</code> ist der temporäre Speicherort auf dem Server nach dem Upload.

## Aufgabe 3

Weil Dateityp, Größe oder Inhalt problematisch sein können. Fachlich gehört vor dem dauerhaften Speichern immer eine Prüfung der Uploaddaten.
