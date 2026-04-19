---
title: $_FILES und Upload-Entscheidung erklären
description: Erkläre die Rolle von $_FILES und begründe, warum vor dem Speichern geprüft wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - files-array-und-move-uploaded-file-verstehen
  - files-array-und-upload-entscheidung-erklaeren
taskId: INF-PHP-UPLOAD-005
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - upload
hintPoints:
  - "Trenne ursprünglichen Dateinamen und temporären Servernamen."
  - "Achte auf error, size und tmp_name."
selfCheckPoints:
  - "Habe ich die Rolle von $_FILES fachlich erklärt?"
  - "Habe ich das Prüfen vor dem Verschieben begründet?"
transferIdeas:
  - "Übertrage die Idee auf Bilduploads, PDF-Uploads oder Avatar-Dateien."
reflectionPrompt: "Warum ist der Upload technisch schon angekommen, fachlich aber oft noch nicht akzeptiert?"
---

## Aufgabe 1

Erkläre den Unterschied zwischen:

- <code>$_FILES['Datei']['name']</code>
- <code>$_FILES['Datei']['tmp_name']</code>

## Aufgabe 2

Warum sollte <code>move_uploaded_file</code> erst nach Prüfungen aufgerufen werden?
