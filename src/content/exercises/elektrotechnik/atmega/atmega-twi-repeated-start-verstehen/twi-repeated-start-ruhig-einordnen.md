---
title: "TWI-Repeated-Start ruhig einordnen"
description: "Erkläre am AVR-TWI, warum zwischen einer Schreib- und einer Lesephase oft kein Stop, sondern ein Repeated Start verwendet wird."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-repeated-start-verstehen", "twi-repeated-start-ruhig-einordnen"]
taskId: "ET-ATMEGA-TWI-306"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "fortgeschritten"
draft: false
---
## Aufgabe 1

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen einem Stop und einem Repeated Start.

## Aufgabe 2

Warum ist ein Zugriff nach dem Muster „erst Registeradresse schreiben, dann Daten lesen“ oft eine zusammenhängende Transaktion?

## Aufgabe 3

Ordne diese Busfolge kurz ein:

- START
- Adresse mit Write
- Registeradresse
- REPEATED START
- Adresse mit Read
- Daten
- STOP

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, warum Repeated Start kein bloßer „Neustart“ ist.
