---
title: Musterlösung – CTC-Zeitbasis am AVR ruhig herleiten
description: Musterlösung zur Aufgabe ET-ATMEGA-TMR-208.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - zeitbasis-und-timer
  - atmega-ctc-modus-als-zeitbasis-verstehen
  - ctc-zeitbasis-am-avr-ruhig-herleiten-loesung
taskId: ET-ATMEGA-TMR-208
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-ctc-modus-als-zeitbasis-verstehen/ctc-zeitbasis-am-avr-ruhig-herleiten.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Im CTC-Modus endet der Zählabschnitt am Vergleichswert und nicht erst am Maximalwert. Der Timer erzeugt also genau dort eine periodische Marke, wo sie gebraucht wird. Dadurch wird aus dem Timer eine gezielte Zeitbasis.

## Aufgabe 2

Aus `F_CPU` und Prescaler entsteht zuerst der Timer-Takt. Daraus ergibt sich die Dauer eines einzelnen Ticks. Der OCR-Wert legt dann fest, nach wie vielen Ticks der Compare Match entsteht. Genau so wird aus Takt, Prescaler und Vergleichswert ein periodischer Zeitabstand.

## Aufgabe 3

CTC ist für ein periodisches 1-ms-Ereignis ruhiger, weil das Ereignis von einer echten Zeitbasis geliefert wird. Eine Delay-Schleife blockiert dagegen und beschreibt eher Warten als eine geordnete Zeitmarke für den restlichen Programmablauf.

## Aufgabe 4

Diese Aussage ist zu grob. Ein Timer kann auch sehr sinnvoll benutzt werden, wenn er gezielt schon vorher endet. Gerade im CTC-Modus ist der Vergleichswert der fachlich wichtige Endpunkt, nicht der maximale Zählerstand.
