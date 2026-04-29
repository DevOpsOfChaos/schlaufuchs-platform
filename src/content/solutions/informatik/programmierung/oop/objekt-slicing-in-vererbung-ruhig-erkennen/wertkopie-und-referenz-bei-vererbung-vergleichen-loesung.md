---
title: "Loesung – Wertkopie und Referenz bei Vererbung vergleichen"
description: "Musterloesung zur Aufgabe ueber Objekt Slicing in Vererbung."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "objekt-slicing-in-vererbung-ruhig-erkennen", "wertkopie-und-referenz-bei-vererbung-vergleichen"]
taskId: "INF-PROG-OOP-026"
relatedExercise: "informatik/programmierung/oop/objekt-slicing-in-vererbung-ruhig-erkennen/wertkopie-und-referenz-bei-vererbung-vergleichen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Beim Kopieren in einen Basisklassenwert entsteht ein eigener neuer Wert auf Basisklassenebene. Dadurch bleiben im Ziel oft nur die Basisklassenanteile erhalten und Spezialisierungen der Unterklasse gehen verloren.

### Aufgabe 2

Ein Basisklassenwert ist eine eigene Kopie und kann deshalb Slicing ausloesen. Eine Referenz bleibt dagegen mit dem konkreten urspruenglichen Objekt verbunden und schneidet keinen neuen Basisklassenwert daraus heraus.

### Aufgabe 3

Es reicht nicht, nur den Basistyp zu nennen. Entscheidend ist, ob eine Wertkopie in einen kleineren Basisklassenbehaelter entsteht oder ob der Bezug auf das konkrete Unterklassenobjekt erhalten bleibt.
