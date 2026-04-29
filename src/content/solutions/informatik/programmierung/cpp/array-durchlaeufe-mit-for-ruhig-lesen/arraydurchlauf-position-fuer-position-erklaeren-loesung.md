---
title: "Musterlösung – Arraydurchlauf Position für Position erklären"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-LOOPARRAY-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-durchlaeufe-mit-for-ruhig-lesen", "arraydurchlauf-position-fuer-position-erklaeren"]
taskId: "INF-PROG-CPP-LOOPARRAY-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/array-durchlaeufe-mit-for-ruhig-lesen/arraydurchlauf-position-fuer-position-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Schleifenrolle erklären

`i` ist hier der Positionszähler. Er nimmt nacheinander die Werte 0, 1, 2 und 3 an und bestimmt damit, auf welches Array-Element jeweils zugegriffen wird.

## Aufgabe 2: Grenze prüfen

Bei vier Elementen sind nur die Indizes 0 bis 3 gültig. Deshalb ist `i < 4` richtig. Mit `i <= 4` würde auch der ungültige Index 4 erreicht werden.
