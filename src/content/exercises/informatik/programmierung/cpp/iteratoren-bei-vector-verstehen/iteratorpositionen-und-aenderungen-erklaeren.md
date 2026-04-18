---
title: Iteratorpositionen und Änderungen erklären
description: Beschreibe, wie Iteratoren Positionen in einem vector markieren und warum Löschen besondere Aufmerksamkeit braucht.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - vector-und-container
  - iteratoren-bei-vector-verstehen
  - iteratorpositionen-und-aenderungen-erklaeren
taskId: INF-PROG-CPP-ITERATOR-001
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - iterator
  - vector
hintPoints:
  - "Unterscheide Wert und Position bewusst."
  - "Achte darauf, dass end() hinter dem letzten Element liegt."
selfCheckPoints:
  - "Ist begin() als Startposition und end() als Position dahinter erklärt?"
  - "Wird klar, warum Löschen die Struktur verändert?"
transferIdeas:
  - "Übertrage die Aufgabe auf Einfügen oder Entfernen in anderen linearen Strukturen."
reflectionPrompt: "Warum wird Iteration schwieriger, sobald die Datenstruktur während des Durchlaufens verändert wird?"
---

## Aufgabe 1: begin und end beschreiben

Erkläre in eigenen Worten den Unterschied zwischen `begin()` und `end()` bei einem `std::vector`.

## Aufgabe 2: Position statt Wert

Warum ist es sinnvoll, einen Iterator eher als Position denn als gespeicherten Wert zu denken?

## Aufgabe 3: Löschen bewerten

Erkläre, warum das Entfernen eines Elements während einer Iteration besondere Aufmerksamkeit verlangt.
