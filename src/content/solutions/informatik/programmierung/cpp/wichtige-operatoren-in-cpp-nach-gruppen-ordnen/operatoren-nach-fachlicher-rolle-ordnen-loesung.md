---
title: Musterlösung – Operatoren nach fachlicher Rolle ordnen
description: Musterlösung zur Aufgabe INF-PROG-CPP-OP-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-ausdruecke
  - wichtige-operatoren-in-cpp-nach-gruppen-ordnen
  - operatoren-nach-fachlicher-rolle-ordnen-loesung
taskId: INF-PROG-CPP-OP-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/wichtige-operatoren-in-cpp-nach-gruppen-ordnen/operatoren-nach-fachlicher-rolle-ordnen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Gruppen bilden

- <code>+</code>: arithmetischer Operator
- <code>==</code>: Vergleichsoperator
- <code>&amp;&amp;</code>: logischer Operator
- <code>=</code>: Zuweisungsoperator
- <code>|</code>: Bitoperator

## Aufgabe 2: Zuweisung und Vergleich trennen

<code>=</code> speichert einen Wert in einer Variablen. <code>==</code> prüft, ob zwei Werte gleich sind und erzeugt daraus eine wahre oder falsche Aussage.

## Aufgabe 3: Denkfehler prüfen

<code>&amp;&amp;</code> ist der logische UND-Operator. <code>&amp;</code> hat in C++ andere Rollen, etwa bitweises UND oder Referenz-/Adresskontext. Die Symbole sehen ähnlich aus, ihre Fachrolle ist aber nicht dieselbe.
