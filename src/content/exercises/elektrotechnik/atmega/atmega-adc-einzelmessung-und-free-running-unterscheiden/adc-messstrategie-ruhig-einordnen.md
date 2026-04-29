---
title: "ADC-Messstrategie ruhig einordnen"
description: "Ordne Einzelmessung und Free-Running beim AVR sauber nach Messanlass und Messziel."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-einzelmessung-und-free-running-unterscheiden", "adc-messstrategie-ruhig-einordnen"]
taskId: "ET-ATMEGA-ADC-302"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Zwei Anwendungen vergleichen

Ordne diese beiden Fälle jeweils als **Einzelmessung** oder **Free-Running** ein und begründe deine Wahl:

- Eine Spannung soll nur bei Tastendruck gemessen und angezeigt werden.
- Ein Sensorwert soll laufend beobachtet werden, damit ein Lüfter nachgeregelt werden kann.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt:

> „Free-Running ist moderner, also sollte man das immer nehmen.“

Erkläre in 3 bis 5 Sätzen, warum diese Aussage zu grob ist.

## Aufgabe 3: Messlogik formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Messanlass**, **Einzelwert** und **Verlauf** alle sinnvoll vorkommen.

## Aufgabe 4: Register erst danach

Begründe kurz, warum man beim ADC zuerst die Messidee klären sollte und erst danach auf Registereinstellungen schaut.
