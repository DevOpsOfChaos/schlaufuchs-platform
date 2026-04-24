---
title: Musterlösung – Pointerparameter und Referenzparameter sauber vergleichen
description: Musterlösung zur Aufgabe INF-PROG-CPP-PARAM-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - pointerparameter-und-referenzparameter-unterscheiden
  - pointerparameter-und-referenzparameter-sauber-vergleichen-loesung
taskId: INF-PROG-CPP-PARAM-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/pointerparameter-und-referenzparameter-unterscheiden/pointerparameter-und-referenzparameter-sauber-vergleichen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---
## Aufgabe 1: Vertrag der Schnittstelle lesen

Der Pointerparameter <code>int *wert</code> erwartet eine Adresse auf ein Zielobjekt. Der Referenzparameter <code>int &amp;wert</code> arbeitet direkt mit einem vorhandenen Objekt, das an den Parameternamen gebunden wird.

## Aufgabe 2: Aufrufbild vergleichen

Beim Pointerparameter muss die Adresse von <code>zahl</code> übergeben werden. Deshalb steht im Aufruf <code>&amp;zahl</code>. Beim Referenzparameter reicht <code>zahl</code>, weil die Funktion direkt an das vorhandene Objekt gebunden wird.

## Aufgabe 3: Optionales Ziel einordnen

Weil der Pointerparameter ausdrücklich auch einen Fall ohne echtes Ziel mitdenken kann, hier durch <code>nullptr</code>. Eine Referenzschnittstelle liest sich dagegen so, als müsse ein echtes Objekt vorhanden sein.

## Aufgabe 4: Rumpf ruhig lesen

- <code>*wert = 0;</code> gehört eher zu einem Pointerparameter, weil erst über den Pointer zum Zielwert gegangen wird.
- <code>wert = 0;</code> gehört eher zu einem Referenzparameter, weil direkt mit dem gebundenen Objekt gearbeitet wird.

## Aufgabe 5: Passende Schnittstelle wählen

1. **Pointerparameter** – weil „kein Ziel“ ausdrücklich mitgedacht werden kann.
2. **Referenzparameter** – weil sich die Funktion so liest, als arbeite sie direkt mit einem vorhandenen Objekt.
3. **Pointerparameter** – weil die Adresse im Aufruf sichtbar gemacht wird.

Die wichtige Trennlinie ist also nicht nur die Wirkung, sondern der Vertrag der Schnittstelle.
