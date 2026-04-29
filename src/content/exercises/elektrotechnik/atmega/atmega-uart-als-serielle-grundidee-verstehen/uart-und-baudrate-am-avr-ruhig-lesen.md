---
title: "UART und Baudrate am AVR ruhig lesen"
description: "Erkläre serielle Bitübertragung, Baudrate und typische Timing-Probleme beim AVR."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-als-serielle-grundidee-verstehen", "uart-und-baudrate-am-avr-ruhig-lesen"]
taskId: "ET-ATMEGA-UART-208"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
Gegeben ist:

- Fall A: `9600 Baud`
- Fall B: `115200 Baud`

Außerdem gilt grob der UART-Rahmen:

```text
Startbit | 8 Datenbits | Stopbit
```

## Aufgabe 1

Erkläre in eigenen Worten, warum UART Daten nicht „als ganzes Zeichen auf einmal“ überträgt.

## Aufgabe 2

Berechne grob die Bitdauer bei:

- 9600 Baud
- 115200 Baud

## Aufgabe 3

Ein AVR sendet eigentlich sinnvolle Werte, aber im Terminal erscheint Zeichensalat. Nenne zwei ruhige Ursachen, die zuerst geprüft werden sollten.

## Aufgabe 4

Erkläre kurz, warum eine falsche Taktannahme am AVR auch dann zu UART-Problemen führen kann, wenn der gesendete Textinhalt fachlich richtig wäre.

## Aufgabe 5

Formuliere in einem Satz, warum UART zuerst als Zeit- und Rahmenproblem und erst danach als Textproblem gelesen werden sollte.
