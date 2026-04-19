---
title: Musterlösung – Cookie-Ablauf über zwei Requests beschreiben
description: Musterlösung zur Aufgabe INF-PHP-COOKIE-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - cookie-ablauf-bis-zum-naechsten-request-verstehen
  - cookie-ablauf-ueber-zwei-requests-beschreiben-loesung
taskId: INF-PHP-COOKIE-003
relatedExercise: src/content/exercises/informatik/programmierung/php/cookie-ablauf-bis-zum-naechsten-request-verstehen/cookie-ablauf-ueber-zwei-requests-beschreiben.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Lösung

Typischer Ablauf: Der Server setzt in einer Antwort ein Cookie → der Browser speichert dieses Cookie → bei einem späteren Request sendet der Browser das Cookie wieder mit.

Eine Servervariable liegt direkt auf dem Server vor. Ein Cookie wird dagegen über den Browser gespeichert und bei späteren Requests zurückgetragen.
