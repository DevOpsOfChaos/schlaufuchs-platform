---
title: "UART-Datenrahmen am AVR ruhig lesen"
description: "Lies Startbit, Datenbits, optionale Parität und Stoppbit als Datenrahmen und ordne typische UART-Fehler ruhiger ein."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-datenrahmen-mit-start-stop-und-paritaet-verstehen", "uart-datenrahmen-am-avr-ruhig-lesen"]
taskId: "ET-ATMEGA-UART-302"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: 8N1 erklären

Erkläre in 2 bis 4 Sätzen, was `8N1` bedeutet.

## Aufgabe 2: Rahmen und Nutzdaten trennen

Warum darf man das Paritätsbit nicht einfach als zusätzliches Datenbit lesen?

## Aufgabe 3: Fehlerbild deuten

Sender und Empfänger arbeiten beide mit `9600 Baud`, aber der Sender nutzt `8N1` und der Empfänger `7E1`.

Begründe, warum trotzdem Fehlzeichen entstehen können.

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Baudrate**, **Rahmen** und **Zeichen** alle sinnvoll vorkommen.
