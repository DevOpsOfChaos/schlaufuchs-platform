---
title: "Musterlösung – TWI-Busablauf mit ACK ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-TWI-303."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-start-adresse-und-ack-verstehen", "twi-busablauf-mit-ack-ruhig-erklaeren"]
taskId: "ET-ATMEGA-TWI-303"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-twi-start-adresse-und-ack-verstehen/twi-busablauf-mit-ack-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Die Reihenfolge ist sinnvoll, weil der Zugriff zuerst sichtbar beginnen muss, bevor überhaupt ein Gerät gemeint sein kann. Danach wird durch die Adresse klar, welche Gegenstelle angesprochen wird. Erst das ACK zeigt, ob diese Gegenstelle den Schritt wirklich angenommen hat. So wird Kommunikation als geordneter Busablauf statt als lose Bytefolge lesbar.

## Aufgabe 2

Fehlendes ACK bedeutet, dass die Gegenstelle den Zugriff nicht bestätigt. Damit ist der eigentliche Buskontakt an dieser Stelle schon gestört oder nicht zustande gekommen. Das Problem liegt also grundlegender als nur bei einem späteren Datenwert.

## Aufgabe 3

Möglicher Merksatz:

> Nach der Adresse zeigt die Bestätigung, ob die angesprochene Gegenstelle wirklich am Zugriff teilnimmt.

## Aufgabe 4

Weil ein Datenwert erst dann fachlich Sinn ergibt, wenn der Zugriff selbst sauber aufgebaut wurde. Ohne geordneten Start, richtige Adressierung und Bestätigung ist noch nicht einmal klar, ob überhaupt die richtige Gegenstelle beteiligt ist.
