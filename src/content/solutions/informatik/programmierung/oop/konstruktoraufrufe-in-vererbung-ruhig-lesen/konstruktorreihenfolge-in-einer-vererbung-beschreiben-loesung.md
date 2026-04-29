---
title: "Loesung – Konstruktorreihenfolge in einer Vererbung beschreiben"
description: "Musterloesung zur Aufgabe ueber Basisklasse, Unterklasse und Reihenfolge."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "konstruktoraufrufe-in-vererbung-ruhig-lesen", "konstruktorreihenfolge-in-einer-vererbung-beschreiben"]
taskId: "INF-PROG-OOP-009"
relatedExercise: "informatik/programmierung/oop/konstruktoraufrufe-in-vererbung-ruhig-lesen/konstruktorreihenfolge-in-einer-vererbung-beschreiben"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Der Basisklassenteil gehoert bereits zum Objekt der Unterklasse. Deshalb muss er zuerst vorbereitet werden, bevor die Spezialisierung der Unterklasse sinnvoll aufgebaut werden kann.

### Aufgabe 2

Die Unterklasse wird nicht zuerst fertig konstruiert und die Basisklasse spaeter angehaengt. Ruhiger gedacht ist, dass zuerst das Fundament der Basisklasse entsteht und darauf danach der Unterklassenteil aufgebaut wird.

### Aufgabe 3

Ein Basisklassenaufruf betrifft die Initialisierung einer Oberklasse in einer Vererbungshierarchie. Delegation betrifft dagegen nur Konstruktoren derselben Klasse.
