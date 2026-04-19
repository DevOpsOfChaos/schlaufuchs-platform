---
title: Musterloesung - Konstruktorreihenfolge in einer Vererbung beschreiben
description: Musterloesung zur Aufgabe INF-PROG-OOP-009.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoraufrufe-in-vererbung-ruhig-lesen
  - konstruktorreihenfolge-in-einer-vererbung-beschreiben-loesung
taskId: INF-PROG-OOP-009
relatedExercise: src/content/exercises/informatik/programmierung/oop/konstruktoraufrufe-in-vererbung-ruhig-lesen/konstruktorreihenfolge-in-einer-vererbung-beschreiben.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1: Grundidee erklaeren

Konstruktoren werden nicht vererbt. Die Unterklasse bekommt also nicht einfach den Konstruktor der Oberklasse als eigenen Konstruktor.

## Aufgabe 2: Vergleich sauber machen

Beim Erzeugen eines Objekts einer Unterklasse wird zuerst der Basisklassenteil vorbereitet. Deshalb wird der Konstruktor der Oberklasse vor dem Konstruktor der Unterklasse ausgefuehrt.

## Aufgabe 3: Beispiel deuten

Erst danach ist das neue Objekt als Ganzes sinnvoll aufgebaut, weil sowohl der geerbte als auch der spezialisierte Teil initialisiert wurden.
