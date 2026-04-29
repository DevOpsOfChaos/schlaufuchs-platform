---
title: "Musterlösung – UART-Baudrate und Taktbasis ruhig zuordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-UART-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-baudrate-und-ubrr-verstehen", "uart-baudrate-und-taktbasis-ruhig-zuordnen"]
taskId: "ET-ATMEGA-UART-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-uart-baudrate-und-ubrr-verstehen/uart-baudrate-und-taktbasis-ruhig-zuordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Die Baudrate ist der gewünschte Zielwert für die Bitgeschwindigkeit auf der seriellen Leitung. Der UBRR-Wert ist dagegen der Registerwert, mit dem der AVR aus seiner Taktbasis diese Geschwindigkeit annähert. Beides gehört zusammen, ist aber nicht dieselbe Zahl. Genau deshalb darf man UBRR nicht einfach als „das Baudratenfeld“ lesen.

## Aufgabe 2

Die Ziel-Baudrate bleibt in beiden Projekten gleich, aber die Taktbasis des Controllers ist unterschiedlich. Damit sich trotzdem ungefähr dieselbe Bitdauer ergibt, muss die Registereinstellung zur jeweiligen Taktfrequenz passen. Ein Registerwert, der bei 8 MHz sinnvoll ist, erzeugt bei 16 MHz eine andere echte serielle Geschwindigkeit.

## Aufgabe 3

Zeichenmüll im Terminal bedeutet oft, dass Sender und Empfänger nicht dieselbe Bitzeit verwenden. Dann werden Bits zeitlich falsch gelesen, obwohl der gesendete Textinhalt an sich korrekt sein kann. Das Problem liegt also häufig eher bei Taktannahme, Baudrate oder Registereinstellung als bei der Textlogik.

## Aufgabe 4

Möglicher Merksatz:

> Aus Taktbasis und UBRR ergibt sich die serielle Baudrate – nicht aus dem Registerwert allein.
