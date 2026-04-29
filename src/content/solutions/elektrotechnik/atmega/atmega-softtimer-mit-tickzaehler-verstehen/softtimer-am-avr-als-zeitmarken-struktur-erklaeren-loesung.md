---
title: "Musterlösung – Softtimer am AVR als Zeitmarken-Struktur erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-PRG-212."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-softtimer-mit-tickzaehler-verstehen", "softtimer-am-avr-als-zeitmarken-struktur-erklaeren"]
taskId: "ET-ATMEGA-PRG-212"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-softtimer-mit-tickzaehler-verstehen/softtimer-am-avr-als-zeitmarken-struktur-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der Hardware-Timer liefert die periodische Grundzeit, zum Beispiel alle 1 ms. Der Tickzähler zählt diese Ereignisse mit und macht sie in Software als Zeitmarken nutzbar.

## Aufgabe 2

Ein einziger Tickzähler kann mehrere Aufgaben tragen, weil jede Aufgabe nur ihre eigene letzte Zeitmarke mit dem aktuellen Tickstand vergleicht. So entstehen mehrere Softtimer aus derselben Grundzeit.

## Aufgabe 3

Mit Delay wartet das Programm aktiv und blockiert währenddessen. Mit Zeitmarken prüft die Hauptschleife nur, ob genug Zeit vergangen ist, und bleibt dazwischen frei für andere Aufgaben. Dadurch wird die Struktur deutlich reaktiver.

## Aufgabe 4

Diese Aussage ist zu grob. Oft reicht ein Hardware-Timer als periodische Grundzeit völlig aus. Mehrere Zeitaufgaben können dann in Software über eigene Marken auf demselben Tickzähler organisiert werden.
