---
title: "ADC-Takt und Wandlungszeit am AVR ruhig einordnen"
description: "Erkläre, wie aus CPU-Takt und ADC-Prescaler am ATmega die Wandlungszeit entsteht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-prescaler-und-wandlungszeit-verstehen", "adc-takt-und-wandlungszeit-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-ADC-210"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: ADC-Takt erklären

Was macht der ADC-Prescaler fachlich mit der Taktbasis des Systems?

## Aufgabe 2: Rechenkette beschreiben

Gegeben ist:

```text
F_CPU = 16 MHz
ADC-Prescaler = 128
```

Beschreibe in Worten, wie daraus der ADC-Takt entsteht.

## Aufgabe 3: Wandlungsdauer einordnen

Warum hilft es, die Zeit pro Messung ungefähr zu kennen, statt nur den Registerwert zu merken?

## Aufgabe 4: Denkfehler korrigieren

Jemand sagt: „Beim ADC ist die schnellste Einstellung automatisch die beste.“

Formuliere eine ruhigere fachliche Antwort.
