---
title: "Musterlösung – ADC-Referenzspannung sauber einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-306."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-referenzspannung-avcc-aref-und-intern-unterscheiden", "adc-referenzspannung-sauber-einordnen"]
taskId: "ET-ATMEGA-ADC-306"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-referenzspannung-avcc-aref-und-intern-unterscheiden/adc-referenzspannung-sauber-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der Rohwert `512` ist zunächst nur eine Zahl innerhalb des ADC-Bereichs. Erst mit der Referenzspannung wird klar, welchen Spannungsbereich diese Zahl überhaupt beschreibt. Ohne diese Bezugsspannung bleibt die Deutung unvollständig.

## Aufgabe 2

Bei 5,0 Volt Referenz liegt `512` ungefähr in der Mitte des Bereichs von 0 bis 5,0 Volt. Bei 1,1 Volt Referenz liegt derselbe Rohwert ungefähr in der Mitte von 0 bis 1,1 Volt. Die Zahl kann also ähnlich bleiben, obwohl der zugrunde liegende Spannungsbereich anders ist. Genau deshalb darf man ADC-Rohwerte nie ohne Referenz lesen.

## Aufgabe 3

- **AVCC** nutzt die Versorgung des Analogteils als Referenz.
- **AREF extern** erlaubt eine gezielt vorgegebene externe Bezugsspannung.
- **Interne Referenz** stellt eine feste interne Spannung bereit, mit der kleinere Bereiche oft feiner aufgelöst werden.

## Aufgabe 4

Eine kleinere Referenz verteilt denselben ADC-Zahlenraum auf einen kleineren Spannungsbereich. Dadurch wird jeder Schritt feiner, zugleich wird aber auch der insgesamt abbildbare Bereich kleiner. Es ändert sich also nicht nur die Feineinteilung, sondern auch der Messbereich selbst.
