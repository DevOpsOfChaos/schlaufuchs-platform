---
title: "Musterlösung – ADC-Messwert und Referenz ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-206."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-grundidee-verstehen", "adc-messwert-und-referenz-ruhig-erklaeren"]
taskId: "ET-ATMEGA-ADC-206"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-grundidee-verstehen/adc-messwert-und-referenz-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der AVR kann eine analoge Spannung nicht direkt als fortlaufende physikalische Größe weiterverarbeiten. Deshalb übersetzt der ADC die Eingangsspannung in einen digitalen Zahlenwert. Dieser Wert macht die analoge Situation für den Mikrocontroller berechenbar und vergleichbar.

## Aufgabe 2

Die Referenzspannung legt fest, auf welchen Spannungsbereich sich der digitale Messwert bezieht. Erst dadurch wird klar, ob ein kleiner oder großer ADC-Wert im Messbereich eher unten, in der Mitte oder nahe am oberen Ende liegt.

## Aufgabe 3

Die Aussage ist zu grob, weil der ADC-Wert nicht die Spannung selbst ist. Er ist die digitale Darstellung einer Spannung innerhalb eines Bezugsbereichs. Ohne Referenzspannung bleibt der Zahlenwert fachlich unvollständig gelesen.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> Der ADC-Wert ist die digitale Übersetzung einer analogen Spannung innerhalb eines durch die Referenz definierten Messbereichs.

## Aufgabe 5

Ruhig schließen darf man, dass die Eingangsspannung im gewählten Bezugsbereich offenbar ansteigt. Noch nicht direkt schließen darf man ohne weitere Angaben den exakten Voltwert, weil dafür Referenz und Auflösung mitgedacht werden müssen.
