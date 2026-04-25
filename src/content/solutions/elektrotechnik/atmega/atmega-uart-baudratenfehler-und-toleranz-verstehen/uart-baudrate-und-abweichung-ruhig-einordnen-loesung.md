---
title: Musterlösung – UART-Baudrate und Abweichung ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-UART-303.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-baudratenfehler-und-toleranz-verstehen
  - uart-baudrate-und-abweichung-ruhig-einordnen-loesung
taskId: ET-ATMEGA-UART-303
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-uart-baudratenfehler-und-toleranz-verstehen/uart-baudrate-und-abweichung-ruhig-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - uart
  - loesung
draft: false
---

## Aufgabe 1

Beide Geräte können nominal denselben Sollwert verwenden, aber durch Taktquelle und Registerwahl leicht unterschiedliche reale Baudraten erzeugen. Wenn diese Abweichung zu groß wird, verschiebt sich das zeitliche Abtastfenster im Empfänger. Dann wirken Zeichen fehlerhaft, obwohl im Code auf beiden Seiten derselbe Sollwert steht.

## Aufgabe 2

Toleranz ist hier vor allem ein Timingfenster, weil sich der Empfänger über mehrere Bitzeiten hinweg auf die richtige Stelle im Zeichen verlassen muss. Kleine Abweichungen können dabei noch funktionieren, größere nicht mehr. Genau darum geht es nicht nur um Zahlen, sondern um zeitliche Lage.

## Aufgabe 3

Mögliche Prüfpunkte sind:

- verwendete Taktquelle,
- UBRR-Einstellung bzw. real entstehende Baudrate,
- Abweichung zur Gegenstelle,
- eventuell auch Zeichenformat und Fehlerflags.

## Aufgabe 4

Ein möglicher Merksatz ist:

> Die Soll-Baudrate ist nur der Zielwert; entscheidend ist, wie nah die reale Baudrate am Gegenüber bleibt und ob das Timingfenster dadurch stabil genug ist.
