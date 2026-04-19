---
title: Musterloesung - Gemeinsame Klassenvariablen ueber zwei Objekte erklaeren
description: Musterloesung zur Aufgabe INF-PROG-OOP-022.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - zugriff-auf-statische-member-ueber-klasse-und-objekt-vergleichen
  - gemeinsame-klassenvariablen-ueber-zwei-objekte-erklaeren-loesung
taskId: INF-PROG-OOP-022
relatedExercise: src/content/exercises/informatik/programmierung/oop/zugriff-auf-statische-member-ueber-klasse-und-objekt-vergleichen/gemeinsame-klassenvariablen-ueber-zwei-objekte-erklaeren.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1

Wenn ein Member static ist, existiert er nur einmal pro Klasse. Darum sehen zwei Objekte beim Zugriff auf denselben gemeinsamen Klassenwert dieselbe Information.

## Aufgabe 2

Die wichtigste Unterscheidung ist: Instanzdaten gehoeren jedem Objekt extra, Klassendaten nur einmal der ganzen Klasse.

## Aufgabe 3

Ein typisches Missverstaendnis ist, dass der Objektzugriff automatisch eine eigene Objektkopie meint. Korrekt ist: Bei static bleibt der Bezug zur Klasse gleich.
