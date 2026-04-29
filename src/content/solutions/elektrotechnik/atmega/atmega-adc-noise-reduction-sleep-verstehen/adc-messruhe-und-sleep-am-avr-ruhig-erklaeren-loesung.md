---
title: "Musterlösung – ADC-Messruhe und Sleep am AVR ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATM-ADC-302."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-noise-reduction-sleep-verstehen", "adc-messruhe-und-sleep-am-avr-ruhig-erklaeren"]
taskId: "ET-ATM-ADC-302"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-noise-reduction-sleep-verstehen/adc-messruhe-und-sleep-am-avr-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Digitale Aktivität im Controller bedeutet viele interne Schaltvorgänge. Diese können die Messumgebung des ADC unruhiger machen. Gerade bei kleinen oder empfindlichen Signalen wirkt sich das oft sichtbar auf die Stabilität der Messwerte aus. Eine ruhigere Phase während der Messung kann deshalb hilfreich sein.

## Aufgabe 2

Das wäre zu kurz, weil der Nutzen hier nicht nur im Stromsparen liegt. Der Modus kann auch die Messqualität verbessern, indem während der ADC-Wandlung weniger störende Aktivität im Chip stattfindet. Sleep ist hier also zugleich ein Werkzeug für ruhigere Messbedingungen.

## Aufgabe 3

Besonders nützlich ist das zum Beispiel bei kleinen Sensorspannungen oder empfindlichen Referenzmessungen, bei denen schwankende ADC-Werte sonst schnell störend auffallen.
