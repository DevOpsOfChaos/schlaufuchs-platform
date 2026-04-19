---
title: Musterloesung - Bereichsoperator beim Rueckgriff auf die Basisklasse deuten
description: Musterloesung zur Aufgabe INF-PROG-OOP-020.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - verdeckte-basismethoden-mit-bereichsoperator-aufrufen
  - bereichsoperator-beim-rueckgriff-auf-die-basisklasse-deuten-loesung
taskId: INF-PROG-OOP-020
relatedExercise: src/content/exercises/informatik/programmierung/oop/verdeckte-basismethoden-mit-bereichsoperator-aufrufen/bereichsoperator-beim-rueckgriff-auf-die-basisklasse-deuten.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1

Der Bereichsoperator zeigt, dass bewusst auf die Methode einer bestimmten Oberklasse zugegriffen wird. Er macht verdeckte Basismethoden wieder gezielt erreichbar.

## Aufgabe 2

Die wichtigste Unterscheidung ist: Ein normaler Aufruf folgt der aktuellen Sicht der Unterklasse, ein qualifizierter Aufruf springt bewusst zu einer Klassenebene zurueck.

## Aufgabe 3

Ein typisches Missverstaendnis ist, dass verdeckte Basismethoden ganz verschwinden. Korrekt ist: Sie koennen explizit wieder angesprochen werden.
