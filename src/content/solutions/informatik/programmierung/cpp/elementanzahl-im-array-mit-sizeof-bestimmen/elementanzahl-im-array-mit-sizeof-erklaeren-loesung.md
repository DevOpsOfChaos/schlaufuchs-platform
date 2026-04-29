---
title: "Musterlösung – Elementanzahl im Array mit sizeof erklären"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-ARRAYS-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "elementanzahl-im-array-mit-sizeof-bestimmen", "elementanzahl-im-array-mit-sizeof-erklaeren"]
taskId: "INF-PROG-CPP-ARRAYS-003"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/elementanzahl-im-array-mit-sizeof-bestimmen/elementanzahl-im-array-mit-sizeof-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Formel erklären

Die Formel teilt die gesamte reservierte Array-Größe durch die Größe eines einzelnen Elements. Dadurch wird sichtbar, wie viele gleich große Plätze insgesamt im Feld enthalten sind.

## Aufgabe 2: Begriffe trennen

<code>sizeof(A)</code> liefert nur die Speichergröße des kompletten Arrays. Erst wenn diese Gesamtgröße durch die Größe eines einzelnen Elements geteilt wird, erhält man eine Anzahl von Elementen.

## Aufgabe 3: Denkmodell bilden

Ein gutes Alltagsbild ist ein Regal: Wenn das Regal 20 cm lang ist und jede Schachtel 5 cm breit, dann ergibt 20 geteilt durch 5 die Anzahl der Schachteln.
