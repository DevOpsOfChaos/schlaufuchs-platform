---
title: Musterloesung - Methodenwahl bei virtual und Referenzen begruenden
description: Musterloesung zur Aufgabe INF-PROG-OOP-011.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - statisches-und-dynamisches-binden-unterscheiden
  - methodenwahl-bei-virtual-und-referenzen-begruenden-loesung
taskId: INF-PROG-OOP-011
relatedExercise: src/content/exercises/informatik/programmierung/oop/statisches-und-dynamisches-binden-unterscheiden/methodenwahl-bei-virtual-und-referenzen-begruenden.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1: Grundidee erklaeren

Statisches Binden bedeutet, dass die Entscheidung fuer eine Methode schon beim Kompilieren feststeht.

## Aufgabe 2: Vergleich sauber machen

Dynamisches Binden bedeutet, dass die konkrete Methodenwahl erst zur Laufzeit anhand des wirklichen Objekttyps getroffen wird.

## Aufgabe 3: Beispiel deuten

Typisch wird dynamisches Binden gebraucht, wenn eine Oberklassenreferenz auf ein Objekt einer Unterklasse zeigt und die Methode als virtual deklariert ist.
