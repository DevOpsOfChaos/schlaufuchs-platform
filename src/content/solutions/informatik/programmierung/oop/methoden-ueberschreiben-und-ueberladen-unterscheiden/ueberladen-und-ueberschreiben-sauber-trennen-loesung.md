---
title: "Loesung – Ueberladen und Ueberschreiben sauber trennen"
description: "Musterloesung zur Aufgabe ueber gleiche Methodennamen, Signaturen und Vererbung."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "methoden-ueberschreiben-und-ueberladen-unterscheiden", "ueberladen-und-ueberschreiben-sauber-trennen"]
taskId: "INF-PROG-OOP-010"
relatedExercise: "src/content/exercises/informatik/programmierung/oop/methoden-ueberschreiben-und-ueberladen-unterscheiden/ueberladen-und-ueberschreiben-sauber-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Ueberladen erkennst du daran, dass der Name gleich bleibt, die Signatur aber unterschiedlich ist. Ueberschreiben erkennst du daran, dass eine Unterklasse dieselbe Methode mit identischer Signatur erneut definiert.

### Aufgabe 2

Ein typischer Fall fuer Ueberladen ist `fkt()` neben `fkt(int)` in derselben Klasse. Ein typischer Fall fuer Ueberschreiben ist eine Methode `fkt()` in der Unterklasse, die die geerbte Variante `fkt()` der Basisklasse ersetzt.

### Aufgabe 3

Gleicher Name reicht nicht als Urteil. Erst Signatur und Vererbungsbezug zusammen entscheiden, ob ueberladen oder ueberschrieben wird.
