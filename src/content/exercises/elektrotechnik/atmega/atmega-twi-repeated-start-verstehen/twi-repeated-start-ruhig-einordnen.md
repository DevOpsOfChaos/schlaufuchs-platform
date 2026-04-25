---
title: TWI-Repeated-Start ruhig einordnen
description: Erkläre am AVR-TWI, warum zwischen einer Schreib- und einer Lesephase oft kein Stop, sondern ein Repeated Start verwendet wird.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-repeated-start-verstehen
  - twi-repeated-start-ruhig-einordnen
taskId: ET-ATMEGA-TWI-306
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
hintPoints:
  - Lies die Busfolge als zusammenhängende Transaktion.
  - Trenne Abschluss und Richtungswechsel bewusst.
selfCheckPoints:
  - Kannst du Stop und Repeated Start unterscheiden?
  - Kannst du erklären, warum Schreiben und Lesen zusammengehören können?
transferIdeas:
  - Übertrage die Logik auf Sensorregister und Speicherbausteine am TWI-Bus.
reflectionPrompt: "Warum hilft bei TWI oft der Blick auf die Rahmenfolge mehr als das bloße Zählen von Bytes?"
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
