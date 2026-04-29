---
title: "Musterlösung – Iteratorpositionen und Änderungen erklären"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-ITERATOR-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "iteratoren-bei-vector-verstehen", "iteratorpositionen-und-aenderungen-erklaeren"]
taskId: "INF-PROG-CPP-ITERATOR-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/iteratoren-bei-vector-verstehen/iteratorpositionen-und-aenderungen-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: begin und end beschreiben

`begin()` steht für die Startposition am ersten Element des vectors. `end()` steht für die Position direkt hinter dem letzten Element. Darum ist `end()` gerade nicht das letzte gespeicherte Element selbst.

## Aufgabe 2: Position statt Wert

Ein Iterator ist sinnvoller als Position gedacht, weil er angibt, wo im Container gerade gearbeitet wird. Der gespeicherte Wert an dieser Stelle kann sich ändern oder entfernt werden, die Positionsidee bleibt dabei zentral.

## Aufgabe 3: Löschen bewerten

Beim Löschen verändert sich die Struktur des Containers. Elemente können nachrücken, und damit passt die vorherige Positionslage nicht mehr automatisch unverändert weiter. Genau deshalb braucht Iteration mit `erase()` besondere Aufmerksamkeit.

## Worauf man bei der Korrektur achten sollte

- `end()` nicht mit dem letzten Element verwechseln.
- Wert und Position sprachlich sauber trennen.
- Strukturänderung beim Löschen klar benennen.
