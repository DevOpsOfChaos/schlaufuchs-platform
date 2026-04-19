---
title: Musterloesung - Objektlebenszyklus mit Konstruktor und Destruktor erklaeren
description: Musterloesung zur Aufgabe INF-PROG-OOP-005.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoren-und-destruktoren-verstehen
  - objektlebenszyklus-mit-konstruktor-und-destruktor-erklaeren-loesung
taskId: INF-PROG-OOP-005
relatedExercise: src/content/exercises/informatik/programmierung/oop/konstruktoren-und-destruktoren-verstehen/objektlebenszyklus-mit-konstruktor-und-destruktor-erklaeren.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1: Start beschreiben

Der Konstruktor wird beim Erzeugen eines Objekts genutzt. Er sorgt dafuer, dass das Objekt direkt in einen sinnvollen Anfangszustand kommt.

## Aufgabe 2: Ende beschreiben

Der Destruktor gehoert zum Ende des Objektlebenszyklus. Er dient vor allem dazu, sauber aufzuraeumen, wenn das Objekt verschwindet.

## Aufgabe 3: Fall unterscheiden

Ein automatisch erzeugtes Objekt endet typischerweise mit dem Verlassen seines Bereichs. Ein mit <code>new</code> erzeugtes Objekt bleibt bestehen, bis es ausdruecklich mit <code>delete</code> freigegeben wird.
