---
title: "Loesung – Aktuelles Objekt in einer Methode deuten"
description: "Musterloesung zur Aufgabe ueber this und Selbstbezug in Instanzmethoden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "this-zeiger-und-selbstbezug-verstehen", "aktuelles-objekt-in-einer-methode-deuten"]
taskId: "INF-PROG-OOP-027"
relatedExercise: "informatik/programmierung/oop/this-zeiger-und-selbstbezug-verstehen/aktuelles-objekt-in-einer-methode-deuten"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

`this` verweist in einer Instanzmethode auf genau das aktuelle Objekt, dessen Methode gerade ausgefuehrt wird. Es ist also ein Selbstbezug des laufenden Objekts und kein beliebiger Klassenhinweis.

### Aufgabe 2

Bei Namensgleichheit hilft `this`, weil damit das Attribut des aktuellen Objekts klar von einem gleichnamigen Parameter getrennt werden kann.

### Aufgabe 3

`this` zeigt nicht auf irgendein Objekt derselben Klasse. Es zeigt auf genau das Objekt, fuer das die Methode in diesem Moment laeuft.
