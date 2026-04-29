---
title: "Timer-Overflow am AVR als Zustand und Reaktion trennen"
description: "Erkläre, warum ein Overflow-Flag am ATmega nicht automatisch dasselbe ist wie ein Overflow-Interrupt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-overflow-flag-und-overflow-interrupt-unterscheiden", "timer-overflow-am-avr-als-zustand-und-reaktion-trennen"]
taskId: "ET-ATMEGA-TMR-209"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Flag benennen

Was bedeutet es fachlich, wenn ein Overflow-Flag gesetzt ist?

## Aufgabe 2: Interrupt einordnen

Was kommt zusätzlich dazu, wenn aus demselben Timer-Ereignis ein Overflow-Interrupt genutzt wird?

## Aufgabe 3: Zwei Codefälle vergleichen

Erkläre kurz den strukturellen Unterschied zwischen einem gepollten Overflow-Flag und einer ISR für den Overflow.

## Aufgabe 4: Denkfehler korrigieren

Jemand sagt: „Wenn das Overflow-Flag gesetzt ist, ist doch der Interrupt schon gelaufen.“

Formuliere eine fachlich ruhigere Antwort.
