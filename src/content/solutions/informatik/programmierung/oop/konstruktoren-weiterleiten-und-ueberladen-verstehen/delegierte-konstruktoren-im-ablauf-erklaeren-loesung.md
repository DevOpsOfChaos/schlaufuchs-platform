---
title: Loesung – Delegierte Konstruktoren im Ablauf erklaeren
description: Musterloesung zur Aufgabe ueber ueberladene und delegierte Konstruktoren.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoren-weiterleiten-und-ueberladen-verstehen
taskId: INF-PROG-OOP-008
relatedExercise: informatik/programmierung/oop/konstruktoren-weiterleiten-und-ueberladen-verstehen/delegierte-konstruktoren-im-ablauf-erklaeren
tags:
  - informatik
  - oop
  - loesung
draft: false
---

## Musterloesung

### Aufgabe 1

Mehrere Konstruktoren bedeuten zuerst nur, dass es mehrere Startwege gibt. Wenn delegiert wird, landet die eigentliche Initialisierung trotzdem gesammelt in einem Kernkonstruktor.

### Aufgabe 2

Ein Konstruktor leitet nur weiter, wenn er selbst kaum Logik traegt und stattdessen an einen anderen Konstruktor derselben Klasse verweist. Der Kernkonstruktor ist dort, wo Attribute wirklich gesetzt oder zentrale Startwerte vorbereitet werden.

### Aufgabe 3

Ueberladung meint mehrere Konstruktoren mit unterschiedlichen Parameterlisten. Delegation meint, dass einer dieser Konstruktoren einen anderen Konstruktor derselben Klasse aufruft.
