---
title: "Musterlösung – ADC-Messstrategie ruhig einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-302."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-einzelmessung-und-free-running-unterscheiden", "adc-messstrategie-ruhig-einordnen"]
taskId: "ET-ATMEGA-ADC-302"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-einzelmessung-und-free-running-unterscheiden/adc-messstrategie-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Die Spannungsmessung auf Tastendruck passt ruhiger zur **Einzelmessung**, weil nur bei einem klaren Anlass ein einzelner Wert gebraucht wird. Die laufende Lüfterregelung passt dagegen zu **Free-Running**, weil fortlaufend neue Werte sinnvoll sind. Beide Fälle messen Analogwerte, aber nicht mit derselben Messidee.

## Aufgabe 2

Die Aussage ist zu grob, weil nicht jede Anwendung einen dauernden Messstrom braucht. Wenn nur gelegentlich ein einzelner Wert benötigt wird, ist eine gezielte Einzelmessung oft die ruhigere und passendere Lösung. Free-Running ist also nicht „automatisch besser“, sondern nur dann sinnvoll, wenn wirklich fortlaufend neue Messwerte gebraucht werden.

## Aufgabe 3

Möglicher Merksatz:

> Der Messanlass entscheidet, ob ein einzelner ADC-Wert genügt oder ob ein fortlaufender Verlauf gebraucht wird.

## Aufgabe 4

Weil die Registereinstellung nur die technische Umsetzung der Messstrategie ist. Wer zuerst die Messidee klärt, versteht den ADC-Code ruhiger und verwechselt nicht Technikdetails mit der eigentlichen Fachfrage.
