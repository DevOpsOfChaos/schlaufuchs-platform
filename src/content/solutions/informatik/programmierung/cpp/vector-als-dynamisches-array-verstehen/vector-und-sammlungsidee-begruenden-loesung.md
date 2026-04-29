---
title: "Musterlösung – vector und Sammlungsidee begründen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-VECTOR-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "vector-als-dynamisches-array-verstehen", "vector-und-sammlungsidee-begruenden"]
taskId: "INF-PROG-CPP-VECTOR-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/vector-als-dynamisches-array-verstehen/vector-und-sammlungsidee-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Einsatz begründen

Ein `std::vector` passt gut, weil die Trefferliste in ihrer Größe nicht von Anfang an feststeht. Sie kann leer starten, später mehrere Einträge enthalten und danach wieder kleiner werden. Genau dieses Wachsen und Schrumpfen ist die typische Stärke eines vectors.

## Aufgabe 2: Methoden deuten

- `size()` gibt an, wie viele Elemente aktuell gespeichert sind.
- `push_back("Neu")` hängt hinten ein neues Element an.
- `pop_back()` entfernt das letzte Element wieder.

Die Methoden lassen sich also gut über die Wirkung auf die ganze Sammlung lesen.

## Aufgabe 3: Denkfehler prüfen

Der vector ist nicht „nur das letzte Element hinten“. Er ist die gesamte Sammlung mit eigener Größe, Reihenfolge und Methoden. Wer nur auf ein einzelnes Element schaut, verfehlt den Containergedanken.

## Worauf man bei der Korrektur achten sollte

- Container und Einzelelement trennen.
- Die Dynamik der Größe benennen.
- Methoden über Wirkung statt über Namen erklären.
