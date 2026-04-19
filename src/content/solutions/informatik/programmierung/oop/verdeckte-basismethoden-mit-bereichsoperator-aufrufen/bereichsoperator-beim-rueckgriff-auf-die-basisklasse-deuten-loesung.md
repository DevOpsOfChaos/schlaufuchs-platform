---
title: Loesung – Bereichsoperator beim Rueckgriff auf die Basisklasse deuten
description: Musterloesung zur Aufgabe ueber verdeckte Basismethoden und qualifizierten Zugriff.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - verdeckte-basismethoden-mit-bereichsoperator-aufrufen
taskId: INF-PROG-OOP-020
relatedExercise: informatik/programmierung/oop/verdeckte-basismethoden-mit-bereichsoperator-aufrufen/bereichsoperator-beim-rueckgriff-auf-die-basisklasse-deuten
tags:
  - informatik
  - oop
  - loesung
draft: false
---

## Musterloesung

### Aufgabe 1

Ein Aufruf mit Klassenname und Bereichsoperator macht sichtbar, dass nicht die naechstliegende Methode der Unterklasse gemeint ist, sondern bewusst die Variante aus einer bestimmten Basisklasse.

### Aufgabe 2

Beim normalen Methodenaufruf gilt zuerst die aktuelle Sicht der Klasse. Der qualifizierte Aufruf mit Bereichsoperator fuehrt dagegen bewusst zu einer bestimmten Klassenebene zurueck.

### Aufgabe 3

Eine verdeckte Basismethode ist nicht verschwunden. Sie wird nur nicht mehr als naechstliegende Standardvariante gesehen und kann deshalb gezielt qualifiziert aufgerufen werden.
