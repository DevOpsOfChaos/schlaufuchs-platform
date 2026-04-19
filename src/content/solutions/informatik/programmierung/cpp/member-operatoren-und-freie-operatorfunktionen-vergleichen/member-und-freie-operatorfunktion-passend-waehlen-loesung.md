---
title: Musterloesung - Member- und freie Operatorfunktion passend waehlen
description: Musterloesung zur Aufgabe INF-PROG-CPP-OPLOAD-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - member-operatoren-und-freie-operatorfunktionen-vergleichen
  - member-und-freie-operatorfunktion-passend-waehlen-loesung
taskId: INF-PROG-CPP-OPLOAD-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/member-operatoren-und-freie-operatorfunktionen-vergleichen/member-und-freie-operatorfunktion-passend-waehlen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
draft: false
---

## Aufgabe 1: Zwei Lesarten

Bei <code>A.operator+(B)</code> ist A das aktuelle Objekt. Bei <code>operator+(A, B)</code> werden beide Operanden offen uebergeben.

## Aufgabe 2: Linkes Argument benennen

Bei einer Member-Operatorfunktion steckt das linke Argument implizit in <code>this</code>. Es erscheint also nicht zusaetzlich als normaler Parameter.

## Aufgabe 3: Stream-Fall begruenden

Beim Stream-Operator <code>&lt;&lt;</code> ist der linke Operand oft ein Streamobjekt. Deshalb ist eine freie Funktion haeufig naheliegender als eine Member-Funktion der eigenen Fachklasse.
