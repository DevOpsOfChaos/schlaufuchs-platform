---
title: "Musterlösung – LED-Ausgang am AVR sauber erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-IO-202."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-led-mit-registerzugriff-schalten", "led-ausgang-am-avr-sauber-erklaeren"]
taskId: "ET-ATMEGA-IO-202"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-led-mit-registerzugriff-schalten/led-ausgang-am-avr-sauber-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Die erste Zeile richtet PB0 als Ausgang ein. Die zweite Zeile setzt diesen Ausgang auf High, wodurch die LED eingeschaltet werden kann. Die dritte Zeile löscht das Bit wieder, sodass der Ausgang auf Low geht und die LED wieder ausgeht. Fachlich ist also zuerst die Ausgangsrolle wichtig und danach erst der sichtbare Pegelwechsel.

## Aufgabe 2

Ohne passende Richtungsfestlegung ist nicht sauber beschrieben, dass PB0 wirklich als Ausgang arbeiten soll. Dann ist die spätere PORT-Zeile fachlich unruhig zu lesen, weil zwar ein Pegel gesetzt wird, aber die Ausgangsrolle nicht klar vorbereitet ist.

## Aufgabe 3

- **Richtung festlegen:** Der Pin bekommt die Aufgabe, als Ausgang zu arbeiten.
- **Pegel ausgeben:** Der vorbereitete Ausgang wird auf High oder Low gesetzt.

## Aufgabe 4

`DDRB` schaltet die LED nicht direkt ein. Das Register legt zuerst nur fest, dass der Pin als Ausgang verwendet wird. Die eigentliche sichtbare Wirkung entsteht erst, wenn über `PORTB` der passende Pegel ausgegeben wird.

## Aufgabe 5

Zwischen Code und LED-Wirkung liegt der technische Zwischenschritt, dass der Pin zuerst als Ausgang arbeitet und danach den passenden Spannungspegel ausgibt.
