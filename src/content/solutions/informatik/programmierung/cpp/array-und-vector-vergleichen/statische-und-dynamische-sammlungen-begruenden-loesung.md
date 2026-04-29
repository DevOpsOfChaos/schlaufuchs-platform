---
title: "Musterlösung – Statische und dynamische Sammlungen begründen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-COLL-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-und-vector-vergleichen", "statische-und-dynamische-sammlungen-begruenden"]
taskId: "INF-PROG-CPP-COLL-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/array-und-vector-vergleichen/statische-und-dynamische-sammlungen-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Sammlung auswählen

- Die Wochentage passen eher zu einem Array, weil ihre Anzahl feststeht.
- Eine Einkaufsliste passt eher zu einem <code>vector</code>, weil während des Programms weitere Einträge hinzukommen können.

## Aufgabe 2: Unterschied erklären

<code>push_back(...)</code> ergänzt Elemente am Ende einer dynamischen Sammlung. Genau diese Änderbarkeit gehört zur Idee des <code>vector</code>. Ein Array ist dagegen auf eine feste Größe ausgelegt.

## Aufgabe 3: Denkfehler prüfen

Beide Strukturen speichern zwar geordnete Werte desselben Typs, aber sie unterscheiden sich stark in der Änderbarkeit ihrer Größe. Deshalb sind sie fachlich nicht einfach identisch.
