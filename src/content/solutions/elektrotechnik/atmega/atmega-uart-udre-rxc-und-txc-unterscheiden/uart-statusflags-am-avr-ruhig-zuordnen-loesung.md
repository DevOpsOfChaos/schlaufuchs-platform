---
title: "Musterlösung – UART-Statusflags am AVR ruhig zuordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-UART-207."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-udre-rxc-und-txc-unterscheiden", "uart-statusflags-am-avr-ruhig-zuordnen"]
taskId: "ET-ATMEGA-UART-207"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-uart-udre-rxc-und-txc-unterscheiden/uart-statusflags-am-avr-ruhig-zuordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

- **UDRE** → „Darf ich ein neues Byte in das Datenregister schreiben?“
- **RXC** → „Liegt ein empfangenes Byte zum Lesen bereit?“
- **TXC** → „Ist das letzte Zeichen auf der Leitung wirklich vollständig übertragen?“

## Aufgabe 2

UDRE und TXC klingen beide nach „Senden fertig“, beziehen sich aber auf unterschiedliche Ebenen. **UDRE** beschreibt, dass das UART-Datenregister wieder neu beschrieben werden darf. **TXC** beschreibt erst das Ende der tatsächlichen Übertragung auf der Leitung. Wer beides gleichsetzt, verwechselt Schreibbereitschaft mit Leitungsende.

## Aufgabe 3

Für das reine Nachladen des nächsten Zeichens ist die Abfrage von **TXC** oft zu spät und fachlich unnötig. Man wartet dann auf das komplette Übertragungsende, obwohl oft schon vorher klar ist, dass das Datenregister neu beschrieben werden darf. Ruhiger ist hier meist die Abfrage von **UDRE**.

## Aufgabe 4

- neues Byte losschicken → **UDRE**
- eingetroffenes Byte lesen → **RXC**
- nach der letzten Sendung den Treiber einer Leitung umschalten → **TXC**

## Aufgabe 5

Ein möglicher Merksatz lautet:

> UDRE beschreibt das Register zum Nachladen, RXC den bereitliegenden Empfang und TXC das wirkliche Leitungsende.
