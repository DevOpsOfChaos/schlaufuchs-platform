---
title: Musterloesung - virtual und konkretes Objekt bei Methodenwahl erklaeren
description: Musterloesung zur Aufgabe INF-PROG-OOP-019.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - virtual-methoden-und-override-verstehen
  - virtual-und-konkretes-objekt-bei-methodenwahl-erklaeren-loesung
taskId: INF-PROG-OOP-019
relatedExercise: src/content/exercises/informatik/programmierung/oop/virtual-methoden-und-override-verstehen/virtual-und-konkretes-objekt-bei-methodenwahl-erklaeren.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1

Bei virtual entscheidet nicht nur der Basistyp der Referenz, sondern das konkrete Objekt zur Laufzeit ueber die passende Methode. Dadurch wird polymorphes Verhalten moeglich.

## Aufgabe 2

Die wichtigste Unterscheidung ist: Ohne virtual wird eher statisch gebunden, mit virtual kann die Methodenwahl spaeter und objektnaher erfolgen.

## Aufgabe 3

Ein typisches Missverstaendnis ist, dass jedes Ueberschreiben automatisch polymorph sei. Korrekt ist: Dazu braucht es die passende virtuelle Basismethode.
