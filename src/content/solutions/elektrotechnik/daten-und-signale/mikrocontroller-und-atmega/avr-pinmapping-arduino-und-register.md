---
title: "Lösung – Arduino-Pinnummern und Registerbits zuordnen"
description: "Musterlösung zu „Arduino-Pinnummern und Registerbits zuordnen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "avr-pinmapping-arduino-und-register"]
taskId: "et-mc-v93-pinmapping"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/avr-pinmapping-arduino-und-register"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

D13 ist eine Board-Bezeichnung. Register sind nach Ports und Bitpositionen organisiert. Auf vielen Arduino-Boards liegt D13 am Port B, Bit 5.

## Lösung zu Aufgabe 2

Der Board-Pin ist die Beschriftung der Platine, der Controller-Port ist die interne Gruppe von Pins, und das Registerbit steuert oder liest genau ein Bit in dieser Gruppe.

## Lösung zu Aufgabe 3

Ein häufiger Fehler ist, die Arduino-Zahl direkt als Bitnummer zu verwenden. Dann wird ein falscher Pin geschaltet oder der Code funktioniert gar nicht wie erwartet.
