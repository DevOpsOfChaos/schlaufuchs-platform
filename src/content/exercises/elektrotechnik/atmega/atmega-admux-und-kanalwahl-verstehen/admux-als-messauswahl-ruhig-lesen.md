---
title: "ADMUX als Messauswahl ruhig lesen"
description: "Erkläre an kleinen AVR-ADC-Beispielen, wie Referenzwahl und Kanalwahl in ADMUX zusammenwirken."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-admux-und-kanalwahl-verstehen", "admux-als-messauswahl-ruhig-lesen"]
taskId: "ET-ATMEGA-ADC-303"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
Gegeben sind diese beiden Zeilen:

```c
ADMUX = (1 << REFS0) | 0;
ADMUX = (1 << REFS0) | 1;
```

## Aufgabe 1

Erkläre, was in beiden Fällen gleich bleibt und was sich ändert.

## Aufgabe 2

Beschreibe in 2 bis 4 Sätzen, warum hier nicht schon automatisch eine Messung gestartet wird.

## Aufgabe 3

Formuliere für beide Zeilen je eine Messfrage in Alltagssprache.

## Aufgabe 4

Schreibe einen kurzen Merksatz dafür, warum Referenzwahl und Kanalwahl nicht dieselbe Entscheidung sind.
