---
title: Musterlösung – Default-Parameter bei Aufrufen ruhig ergänzen
description: Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-005.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - default-parameter-verstehen
  - default-parameter-bei-aufrufen-ruhig-ergaenzen-loesung
taskId: INF-PROG-CPP-FUNC-005
relatedExercise: src/content/exercises/informatik/programmierung/cpp/default-parameter-verstehen/default-parameter-bei-aufrufen-ruhig-ergaenzen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Aufruf ergänzen

Beim Aufruf wird der Preis <code>19.95</code> explizit übergeben. Für <code>stellen</code> fehlt ein Argument, deshalb wird der Vorgabewert <code>2</code> eingesetzt.

## Aufgabe 2: Pflicht und optional trennen

- <code>preis</code> ist Pflicht, weil dafür kein Defaultwert vorhanden ist.
- <code>stellen</code> ist optional, weil in der Signatur bereits ein Standardwert festgelegt wurde.

## Aufgabe 3: Denkfehler prüfen

Default-Parameter müssen am Ende stehen, damit spätere Argumente eindeutig zugeordnet werden können. Ein Vorgabewert mitten in der Liste würde Aufrufe unnötig unklar machen.
