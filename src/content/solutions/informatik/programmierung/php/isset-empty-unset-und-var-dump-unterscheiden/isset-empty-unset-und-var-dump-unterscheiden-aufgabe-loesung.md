---
title: Musterlösung – isset, empty, unset und var_dump sinnvoll auswählen
description: Musterlösung zur Aufgabe INF-PHP-ADV-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - isset-empty-unset-und-var-dump-unterscheiden
  - isset-empty-unset-und-var-dump-unterscheiden-aufgabe-loesung
taskId: INF-PHP-ADV-002
relatedExercise: src/content/exercises/informatik/programmierung/php/isset-empty-unset-und-var-dump-unterscheiden/isset-empty-unset-und-var-dump-unterscheiden-aufgabe.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---
## Aufgabe 1

- Existiert die Variable? → `isset()`
- Ist der Wert leer? → `empty()`
- Ich will Typ und Inhalt sehen. → `var_dump()`
- Die Variable soll entfernt werden. → `unset()`

## Aufgabe 2

`isset($x)` fragt nach Existenz beziehungsweise gesetztem Wert. `empty($x)` fragt nach einem leer wirkenden Inhalt. Eine Variable kann also gesetzt und trotzdem leer sein.
