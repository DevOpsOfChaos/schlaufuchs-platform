---
title: Musterlösung – ADC-Stufen und Referenz ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-ADC-304.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - analog-digital-wandlung
  - atmega-adc-auflosung-und-quantisierung-verstehen
  - adc-stufen-und-referenz-ruhig-einordnen-loesung
taskId: ET-ATMEGA-ADC-304
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-adc-auflosung-und-quantisierung-verstehen/adc-stufen-und-referenz-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - loesung
draft: false
---

## Aufgabe 1

Der ADC ordnet eine analoge Spannung einer endlichen Zahl von Stufen zu. Liegen zwei Spannungen innerhalb derselben Stufe, entsteht derselbe Digitalwert. Der ADC unterscheidet also nicht unendlich fein, sondern nur in den vorhandenen Quantisierungsschritten.

## Aufgabe 2

Bei gleicher Bitzahl bleibt die Zahl der Stufen gleich. Wenn die Referenzspannung kleiner wird, verteilen sich diese Stufen aber über einen kleineren Spannungsbereich. Dadurch wird jede einzelne Stufe feiner und kleine Spannungsänderungen können früher sichtbar werden.

## Aufgabe 3

Das Verhalten passt gut zur Quantisierung. Solange sich die Spannung noch innerhalb derselben ADC-Stufe bewegt, bleibt der ausgegebene Zahlenwert gleich. Erst wenn die nächste Stufengrenze überschritten wird, springt auch der Messwert weiter.

## Aufgabe 4

Möglicher Merksatz:

> Der ADC ordnet eine Spannung über die Referenz einer Stufe zu – nicht jeder kleine Spannungsunterschied wird sofort als neuer Wert sichtbar.
