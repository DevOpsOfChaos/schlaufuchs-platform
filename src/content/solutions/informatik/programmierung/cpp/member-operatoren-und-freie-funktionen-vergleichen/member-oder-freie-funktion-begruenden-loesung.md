---
title: Musterlösung – Member oder freie Funktion begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-OPERATOR-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-klassen
  - member-operatoren-und-freie-funktionen-vergleichen
  - member-oder-freie-funktion-begruenden-loesung
taskId: INF-PROG-CPP-OPERATOR-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/member-operatoren-und-freie-funktionen-vergleichen/member-oder-freie-funktion-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - operatoren
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: this erklären

Bei einem Member-Operator steckt die linke Seite des Ausdrucks in `this`. Wenn also `a + b` als Member-Funktion umgesetzt ist, wird die Funktion auf `a` aufgerufen, und `b` kommt als Argument dazu.

## Aufgabe 2: Beispiel begründen

Beim Stream-Operator `<<` liegt links der Ausgabestream und rechts das eigene Objekt. Deshalb ist eine freie Funktion oft natürlicher, weil beide Seiten explizit behandelt werden und der Stream nicht das eigene Klassenobjekt ist.

## Aufgabe 3: Nur als Member

Ein typisches Beispiel ist der Zuweisungsoperator `=`. Er gehört eng zur linken Seite des Objekts, das verändert wird, und muss deshalb als Member-Funktion umgesetzt werden.

## Worauf man bei der Korrektur achten sollte

- Die linke Seite als Rolle von `this` erklären.
- Freie Funktion nicht nur als „steht außerhalb“ beschreiben, sondern ihren Nutzen benennen.
- Ein klares Member-pflichtiges Beispiel nennen.
