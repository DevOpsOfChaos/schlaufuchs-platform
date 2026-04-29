---
title: "ADC-Referenzspannung sauber einordnen"
description: "Ordne ADC-Rohwerte am AVR immer zusammen mit ihrer Referenzspannung und erkläre, warum gleiche Zahlen je nach Referenz etwas anderes bedeuten."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-referenzspannung-avcc-aref-und-intern-unterscheiden", "adc-referenzspannung-sauber-einordnen"]
taskId: "ET-ATMEGA-ADC-306"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Ein AVR liefert den ADC-Rohwert `512`.

Erkläre, warum dieser Wert ohne zusätzliche Information noch keine vollständige Spannungsangabe ist.

## Aufgabe 2

Vergleiche diese beiden Fälle:

- Referenz = 5,0 Volt
- Referenz = 1,1 Volt

Beschreibe in 3 bis 5 Sätzen, warum derselbe Rohwert in beiden Fällen unterschiedlich gedeutet werden muss.

## Aufgabe 3

Ordne die drei Referenzarten kurz ein:

- AVCC
- externe Referenz an AREF
- interne Referenz

## Aufgabe 4

Warum verändert eine kleinere Referenz nicht nur „die Genauigkeit“, sondern auch den abbildbaren Messbereich?
