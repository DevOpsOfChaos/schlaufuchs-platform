---
title: Musterlösung – ADC-Ausrichtung und Auslese am AVR ruhig trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-ADC-213.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adlar-und-8-bit-10-bit-auslesen-verstehen
  - adc-ausrichtung-und-auslese-am-avr-ruhig-trennen-loesung
taskId: ET-ATMEGA-ADC-213
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-adlar-und-8-bit-10-bit-auslesen-verstehen/adc-ausrichtung-und-auslese-am-avr-ruhig-trennen.md
tags:
  - elektrotechnik
  - atmega
  - adc
  - loesung
draft: false
---

## Aufgabe 1

ADLAR verändert die Anordnung des ADC-Ergebnisses in den Ausleseregistern. Es verändert nicht die eigentliche Wandlung des ADC. Die Messung selbst bleibt also dieselbe, aber sie liegt anders in ADCH und ADCL.

## Aufgabe 2

Ein grober 8-Bit-Wert kann sinnvoll sein, wenn keine sehr feine Auflösung nötig ist. Dann wird die Auslese oft einfacher und direkter. Für einfache Steuer- oder Anzeigeaufgaben genügt das häufig. Wenn dagegen feinere Unterschiede wichtig sind, sollte der volle 10-Bit-Wert bewusst gelesen werden.

## Aufgabe 3

- **„Die ADC-Wandlung selbst bleibt dieselbe.“** → Das beschreibt die Messung selbst.
- **„Die Lage des Ergebnisses in ADCH und ADCL ändert sich.“** → Das beschreibt die Ausrichtung durch ADLAR.
- **„Der obere Anteil lässt sich für grobe Fälle bequemer lesen.“** → Das beschreibt den praktischen Nutzen einer 8-Bit-nahen Lesart.

## Aufgabe 4

Die Aussage ist zu grob, weil ADLAR die ADC-Auflösung nicht einfach auf 8 Bit reduziert. Es geht um die Lage des Ergebnisses in den Registern. Für grobe Fälle kann man dadurch bequemer 8 Bit lesen, aber die Wandlung selbst bleibt nicht automatisch nur 8-bittig.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> ADLAR ändert die Ausrichtung im Register, nicht die Auflösung der eigentlichen ADC-Messung.
