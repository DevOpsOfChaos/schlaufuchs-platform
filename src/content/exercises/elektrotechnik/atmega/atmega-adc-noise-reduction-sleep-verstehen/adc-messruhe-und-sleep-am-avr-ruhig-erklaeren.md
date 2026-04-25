---
title: ADC-Messruhe und Sleep am AVR ruhig erklären
description: Erkläre, warum ein ruhigerer Controllerzustand ADC-Messungen stabiler machen kann.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - messen-und-adc
  - atmega-adc-noise-reduction-sleep-verstehen
  - adc-messruhe-und-sleep-am-avr-ruhig-erklaeren
taskId: ET-ATM-ADC-302
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - sleep
hintPoints:
  - Denke nicht nur an den Sensor, sondern auch an den Zustand des Controllers.
  - Trenne Stromsparen und Messruhe bewusst.
selfCheckPoints:
  - Kannst du erklären, warum ein ruhigerer Betrieb dem ADC hilft?
  - Kannst du Sleep hier als Messhilfe einordnen?
transferIdeas:
  - Übertrage die Idee auf empfindliche Sensor- oder Referenzmessungen.
reflectionPrompt: "Warum ist „richtiger Messzeitpunkt“ manchmal genauso wichtig wie „richtiger Kanal“?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum digitale Aktivität im Controller ADC-Messungen stören kann.

## Aufgabe 2

Warum wäre es zu kurz gedacht, ADC Noise Reduction Sleep nur als Energiesparfunktion zu beschreiben?

## Aufgabe 3

Nenne einen typischen Messfall, in dem ein ruhigerer AVR-Zustand besonders nützlich sein kann.
