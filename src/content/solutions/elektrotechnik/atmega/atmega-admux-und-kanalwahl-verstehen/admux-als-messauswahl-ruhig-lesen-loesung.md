---
title: "Musterlösung – ADMUX als Messauswahl ruhig lesen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-303."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-admux-und-kanalwahl-verstehen", "admux-als-messauswahl-ruhig-lesen"]
taskId: "ET-ATMEGA-ADC-303"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-admux-und-kanalwahl-verstehen/admux-als-messauswahl-ruhig-lesen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Gleich bleibt in beiden Zeilen die Referenzwahl über `REFS0`. Geändert wird der Kanal: Im ersten Fall ist ADC0 gemeint, im zweiten ADC1. Die eigentliche Messfrage wechselt also den Eingang, nicht die Bezugsbasis.

### Aufgabe 2

`ADMUX` wählt hier nur aus, welcher Eingang und welche Referenz gelten sollen. Das ist noch keine eigentliche Wandlung. Der Messstart muss an anderer Stelle ausgelöst werden, etwa über das passende Startbit im ADC-Steuerregister.

### Aufgabe 3

- `ADMUX = (1 << REFS0) | 0;` → „Miss die Spannung an ADC0 mit der gewählten Referenz.“
- `ADMUX = (1 << REFS0) | 1;` → „Miss die Spannung an ADC1 mit derselben Referenz.“

### Aufgabe 4

Ein möglicher Merksatz wäre:

> Die Referenz sagt, gegen was gemessen wird, der Kanal sagt, wo gemessen wird.
