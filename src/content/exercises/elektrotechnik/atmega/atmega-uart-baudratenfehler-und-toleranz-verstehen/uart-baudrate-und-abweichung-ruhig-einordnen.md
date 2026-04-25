---
title: UART-Baudrate und Abweichung ruhig einordnen
description: Begründe an kleinen UART-Fällen, warum Soll-Baudrate, reale Baudrate und Toleranz zusammen gedacht werden müssen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-baudratenfehler-und-toleranz-verstehen
  - uart-baudrate-und-abweichung-ruhig-einordnen
taskId: ET-ATMEGA-UART-303
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - uart
  - aufgabe
hintPoints:
  - Trenne Sollwert und real entstehenden Wert bewusst.
  - Denke UART eher als Timingfenster denn als nackte Zahl.
selfCheckPoints:
  - Kannst du Baudratenabweichung als Timingthema erklären?
  - Kannst du begründen, warum nominal gleiche Einstellungen praktisch dennoch unruhig sein können?
transferIdeas:
  - Übertrage die Denklogik auf Taktquellenwechsel, internen RC-Oszillator oder lang laufende Zeichenrahmen.
reflectionPrompt: "Welche ruhigere Leitfrage hilft hier: „Welche Baudrate steht im Code?“ oder „Wie genau wird sie tatsächlich getroffen?“"
---

## Aufgabe 1

Erkläre in eigenen Worten, warum zwei Geräte beide „9600 Baud“ eingestellt haben können und trotzdem UART-Fehler auftreten.

## Aufgabe 2

Warum ist Toleranz bei UART eher als Zeitfenster denn als bloße Prozentzahl interessant?

## Aufgabe 3

Nenne drei Punkte, die du bei unruhigem UART-Empfang prüfen würdest, bevor du nur an Kabel oder Pegel denkst.

## Aufgabe 4

Formuliere einen Merksatz, der Soll-Baudrate, reale Baudrate und Toleranz sauber trennt.
