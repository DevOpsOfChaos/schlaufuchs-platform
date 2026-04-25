---
title: Musterlösung – UART-Datenrahmen am AVR ruhig lesen
description: Musterlösung zur Aufgabe ET-ATMEGA-UART-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-datenrahmen-mit-start-stop-und-paritaet-verstehen
  - uart-datenrahmen-am-avr-ruhig-lesen-loesung
taskId: ET-ATMEGA-UART-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-uart-datenrahmen-mit-start-stop-und-paritaet-verstehen/uart-datenrahmen-am-avr-ruhig-lesen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - loesung
draft: false
---

## Aufgabe 1

`8N1` bedeutet: 8 Datenbits, keine Parität und 1 Stoppbit. Diese Kurzform beschreibt also die Struktur eines seriell übertragenen Zeichens und nicht den Inhalt des Zeichens selbst.

## Aufgabe 2

Das Paritätsbit ist kein zusätzliches Nutzdatenbit, sondern ein Kontrollbit im Rahmen. Es hilft höchstens bei einer einfachen Fehlererkennung, trägt aber nicht direkt den eigentlichen Zeicheninhalt.

## Aufgabe 3

Die Baudrate bestimmt nur die Bitzeit. Wenn Sender und Empfänger aber unterschiedliche Rahmenformen verwenden, teilen sie dieselbe Bitfolge an anderen Stellen auf. Genau dadurch kann trotz passender Baudrate die Zeichendeutung scheitern.

## Aufgabe 4

Möglicher Merksatz:

> Die Baudrate bestimmt die Bitzeit, der Rahmen bestimmt die Form des Zeichens.
