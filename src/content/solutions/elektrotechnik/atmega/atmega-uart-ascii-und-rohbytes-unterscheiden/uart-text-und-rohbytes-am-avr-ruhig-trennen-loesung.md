---
title: Musterlösung – UART-Text und Rohbytes am AVR ruhig trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-UART-211.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-ascii-und-rohbytes-unterscheiden
  - uart-text-und-rohbytes-am-avr-ruhig-trennen-loesung
taskId: ET-ATMEGA-UART-211
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-uart-ascii-und-rohbytes-unterscheiden/uart-text-und-rohbytes-am-avr-ruhig-trennen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Der Bytewert 65 beschreibt zunächst nur einen übertragenen Zahlenwert. Wenn dieser Wert nach ASCII interpretiert wird, erscheint daraus der Buchstabe `A`. Die UART hat also das Byte transportiert, während die Darstellung daraus ein Zeichen macht.

## Aufgabe 2

UART ist zuerst eine serielle Byte-Übertragung. Ob daraus Text, Messwerte oder ein Binärprotokoll wird, hängt davon ab, wie Sender und Empfänger die Bytefolge interpretieren.

## Aufgabe 3

Rohbytes sind sinnvoll, wenn ein anderes Programm Werte direkt weiterverarbeiten soll. Eine ASCII-Darstellung ist sinnvoll, wenn ein Mensch die Daten im seriellen Monitor leicht lesen können soll. Die richtige Wahl hängt also vom Empfänger und vom Zweck der Daten ab.

## Aufgabe 4

Diese Aussage ist zu grob. UART garantiert zuerst nur die Übertragung von Bytes. Lesbarer Text entsteht erst dann, wenn die übertragenen Bytes als passende Zeichenfolge interpretiert werden.
