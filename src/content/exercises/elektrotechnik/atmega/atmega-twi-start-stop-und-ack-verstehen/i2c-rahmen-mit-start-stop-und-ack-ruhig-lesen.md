---
title: "I²C-Rahmen mit Start, Stop und ACK ruhig lesen"
description: "Erkläre an kleinen Busabläufen, wie Start, ACK/NACK und Stop einen I²C-Transfer rahmen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-start-stop-und-ack-verstehen", "i2c-rahmen-mit-start-stop-und-ack-ruhig-lesen"]
taskId: "ET-ATMEGA-I2C-202"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Erkläre die Folge

```text
START → Adresse → ACK → Datenbyte → ACK → STOP
```

in 4 bis 6 Sätzen.

## Aufgabe 2

Warum ist ACK nicht einfach nur „noch ein Bit“, sondern fachlich ein eigener wichtiger Teil des Ablaufs?

## Aufgabe 3

Wie würdest du einen Ablauf mit NACK kurz einordnen, wenn nach einem Byte keine Bestätigung mehr kommt?

## Aufgabe 4

Schreibe einen kurzen Merksatz, der den Unterschied zwischen Nutzdaten und Rahmen beim I²C-Bus sichtbar macht.
