---
title: Musterlösung – Wert- und Referenzparameter im Aufruf unterscheiden
description: Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-007.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - wertuebergabe-und-referenzuebergabe-vergleichen
  - wert-und-referenzparameter-im-aufruf-unterscheiden-loesung
taskId: INF-PROG-CPP-FUNC-007
relatedExercise: src/content/exercises/informatik/programmierung/cpp/wertuebergabe-und-referenzuebergabe-vergleichen/wert-und-referenzparameter-im-aufruf-unterscheiden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Zwei Signaturen lesen

- <code>halbieren(int zahl)</code> arbeitet mit einer Kopie.
- <code>halbierenDirekt(int &zahl)</code> arbeitet mit einer Referenz auf das Original.

## Aufgabe 2: Wirkung vorhersagen

Bei <code>halbierenDirekt(x)</code> wird nicht nur ein neuer lokaler Wert verändert. Die Funktion arbeitet mit derselben Variable <code>x</code>, deshalb kann sich ihr Wert nach dem Aufruf ändern.

## Aufgabe 3: Begriff klären

Ein Referenzparameter ist ein Alias, weil er keinen neuen unabhängigen Wert erzeugt. Stattdessen spricht die Funktion die ursprüngliche Variable über einen zweiten Namen an.
