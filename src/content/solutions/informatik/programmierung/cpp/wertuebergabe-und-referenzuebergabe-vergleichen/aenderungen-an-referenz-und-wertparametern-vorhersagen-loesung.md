---
title: Musterlösung – Änderungen an Referenz- und Wertparametern vorhersagen
description: Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-008.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - wertuebergabe-und-referenzuebergabe-vergleichen
  - aenderungen-an-referenz-und-wertparametern-vorhersagen-loesung
taskId: INF-PROG-CPP-FUNC-008
relatedExercise: src/content/exercises/informatik/programmierung/cpp/wertuebergabe-und-referenzuebergabe-vergleichen/aenderungen-an-referenz-und-wertparametern-vorhersagen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Lokale Änderung oder sichtbare Änderung?

Beim Wertparameter bleibt die Änderung lokal in der Funktion. Beim Referenzparameter bleibt die Änderung nach außen sichtbar, weil direkt auf die Ursprungsvariable zugegriffen wird.

## Aufgabe 2: Denkfehler prüfen

Diese Aussage gilt nur bei Referenzübergabe oder ähnlichen indirekten Mechanismen. Bei normaler Wertübergabe wird nur eine Kopie verändert.

## Aufgabe 3: Rückgabe nötig?

Der Referenzparameter arbeitet direkt mit der ursprünglichen Variable. Deshalb kann die Funktion den Wert verändern, ohne ihn zusätzlich zurückzugeben.
