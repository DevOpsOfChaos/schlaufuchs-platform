---
title: "Musterlösung – PWM mit RC-Filter als analoge Näherung erklären"
description: "Musterlösung zur Aufgabe ET-ATM-PWM-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-pwm-mit-rc-filter-als-dac-ersatz-verstehen", "pwm-mit-rc-filter-als-analoge-naeherung-erklaeren"]
taskId: "ET-ATM-PWM-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-pwm-mit-rc-filter-als-dac-ersatz-verstehen/pwm-mit-rc-filter-als-analoge-naeherung-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der PWM-Pin schaltet zunächst nur schnell zwischen Low und High um. Hinter einem RC-Filter werden diese schnellen Wechsel geglättet, sodass eine ruhigere Spannung mit Mittelwertcharakter entsteht. Je nach Tastverhältnis liegt dieser Mittelwert höher oder niedriger. Dadurch wirkt das Ausgangssignal analoger, obwohl es ursprünglich digital getaktet war.

## Aufgabe 2

Das wäre zu grob, weil der Ausgang weiterhin aus einem PWM-Signal hervorgeht und nur geglättet wird. Restwelligkeit, Belastung und Dynamik setzen Grenzen. Ein echter DAC ist deshalb fachlich noch etwas anderes als ein PWM-Signal mit Tiefpass.

## Aufgabe 3

Wichtig sind vor allem:

- die PWM-Frequenz,
- und die Zeitkonstante beziehungsweise Wirkung des RC-Filters.
