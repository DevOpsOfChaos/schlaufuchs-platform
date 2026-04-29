---
title: "CTC-Zeitbasis am AVR ruhig herleiten"
description: "Erkläre, wie am ATmega aus Takt, Prescaler und Vergleichswert eine periodische Zeitbasis im CTC-Modus entsteht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-ctc-modus-als-zeitbasis-verstehen", "ctc-zeitbasis-am-avr-ruhig-herleiten"]
taskId: "ET-ATMEGA-TMR-208"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: CTC-Idee benennen

Erkläre in 2 bis 4 Sätzen, warum der Timer im CTC-Modus nicht erst bis zum Maximalwert laufen muss.

## Aufgabe 2: Rechenkette lesen

Gegeben ist:

```text
F_CPU = 16 MHz
Prescaler = 64
OCR = 249
```

Beschreibe die Rechenkette vom Systemtakt bis zum periodischen Zeitabstand in Worten.

## Aufgabe 3: Einsatzfall begründen

Warum ist CTC für ein periodisches 1-ms-Ereignis oft ruhiger als eine Delay-Schleife?

## Aufgabe 4: Denkfehler korrigieren

Jemand sagt: „Ein Timer ist erst dann richtig benutzt, wenn er bis 255 oder 65535 durchläuft.“

Formuliere eine ruhigere fachliche Antwort darauf.
