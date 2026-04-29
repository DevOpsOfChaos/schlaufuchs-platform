---
title: "Lösung – Flankeninterrupt und Tasterprellen analysieren"
description: "Musterlösung zu flankeninterrupt und tasterprellen analysieren."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "externe-interrupts-flanken-und-prellen"]
taskId: "et-mc-v92-interrupt-flanken-prellen"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/externe-interrupts-flanken-und-prellen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der mechanische Taster erzeugt beim Drücken keine perfekte einzelne Flanke. Durch Prellen entstehen mehrere schnelle Pegelwechsel. Wenn der Interrupt auf eine passende Flanke reagiert, wird die ISR mehrfach ausgelöst und der Zähler steigt mehrmals.

## Lösung zu Aufgabe 2

Eine lange Wartezeit blockiert andere Interrupts oder verzögert wichtige Reaktionen. Außerdem wird die ISR dadurch unübersichtlich und kann das Zeitverhalten des gesamten Systems verschlechtern.

## Lösung zu Aufgabe 3

Besser ist: Die ISR setzt nur ein Flag oder speichert eine Zeitmarke. Im Hauptprogramm wird nach einer kurzen Entprellzeit geprüft, ob der Tasterzustand stabil ist. Erst dann wird das Ereignis genau einmal gezählt.
