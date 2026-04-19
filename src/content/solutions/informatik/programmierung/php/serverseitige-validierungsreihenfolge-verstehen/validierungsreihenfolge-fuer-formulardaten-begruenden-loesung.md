---
title: Musterlösung – Validierungsreihenfolge für Formulardaten begründen
description: Musterlösung zur Aufgabe INF-PHP-VALID-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - serverseitige-validierungsreihenfolge-verstehen
  - validierungsreihenfolge-fuer-formulardaten-begruenden-loesung
taskId: INF-PHP-VALID-003
relatedExercise: src/content/exercises/informatik/programmierung/php/serverseitige-validierungsreihenfolge-verstehen/validierungsreihenfolge-fuer-formulardaten-begruenden.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Lösung

Sinnvolle Reihenfolge: Existenzprüfung → Typprüfung → Längen- oder Mengenprüfung → Inhaltsprüfung.

Formularattribute wie maxlength oder type="number" helfen nur auf der Client-Seite. Manipulierte Formulare oder direkte Requests umgehen diese Regeln leicht, deshalb muss der Server erneut prüfen.
