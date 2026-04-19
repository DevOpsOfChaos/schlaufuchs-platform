---
title: Musterloesung - Kopierstart und Zuweisung sauber unterscheiden
description: Musterloesung zur Aufgabe INF-PROG-OOP-016.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - copy-konstruktor-verstehen
  - kopierstart-und-zuweisung-sauber-unterscheiden-loesung
taskId: INF-PROG-OOP-016
relatedExercise: src/content/exercises/informatik/programmierung/oop/copy-konstruktor-verstehen/kopierstart-und-zuweisung-sauber-unterscheiden.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1

Beim Kopierstart entsteht ein neues Objekt auf Basis eines vorhandenen Objekts. Eine Zuweisung aendert dagegen ein Objekt, das schon existiert.

## Aufgabe 2

Die wichtigste Unterscheidung ist: Kopieren beschreibt einen neuen Objektstart, Zuweisen einen spaeteren Zustandswechsel. Darum sind Kopier-Konstruktor und Zuweisungsoperator fachlich nicht dasselbe.

## Aufgabe 3

Ein typisches Missverstaendnis ist, dass beim Kopieren nur ein zweiter Name entsteht. Korrekt ist: Es entsteht eine neue Instanz.
