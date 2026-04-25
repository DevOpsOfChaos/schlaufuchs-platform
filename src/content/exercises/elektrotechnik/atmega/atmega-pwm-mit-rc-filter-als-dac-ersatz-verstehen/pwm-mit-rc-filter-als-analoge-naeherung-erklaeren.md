---
title: PWM mit RC-Filter als analoge Näherung erklären
description: Erkläre, warum ein PWM-Signal hinter einem RC-Filter wie eine ruhigere Spannung wirkt und wo die Grenzen dieser Idee liegen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ausgabe-und-pwm
  - atmega-pwm-mit-rc-filter-als-dac-ersatz-verstehen
  - pwm-mit-rc-filter-als-analoge-naeherung-erklaeren
taskId: ET-ATM-PWM-301
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
hintPoints:
  - Trenne das rohe PWM-Signal und die geglättete Wirkung hinter dem Filter.
  - Denke auch an Grenzen wie Restwelligkeit oder Last.
selfCheckPoints:
  - Kannst du das Tastverhältnis mit dem Mittelwert verknüpfen?
  - Kannst du erklären, warum diese Lösung kein perfekter DAC ist?
transferIdeas:
  - Übertrage die Idee auf Sollwertvorgaben, Helligkeit oder einfache Analogsteuerungen.
reflectionPrompt: "Wann reicht eine analoge Näherung aus und wann wird ein echter DAC sinnvoll?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum ein PWM-Signal hinter einem RC-Filter wie eine ruhigere Ausgangsspannung wirken kann.

## Aufgabe 2

Warum wäre es fachlich zu grob zu sagen: „Der PWM-Pin ist damit einfach ein vollwertiger Analogausgang“?

## Aufgabe 3

Welche zwei Größen müssen zusammen gedacht werden, damit die Lösung sinnvoll funktioniert?
