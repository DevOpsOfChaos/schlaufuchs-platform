---
title: ADC-Ausrichtung und Auslese am AVR ruhig trennen
description: Begründe am ATmega die Rolle von ADLAR sowie den Unterschied zwischen 8-Bit- und 10-Bit-Auslesen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adlar-und-8-bit-10-bit-auslesen-verstehen
  - adc-ausrichtung-und-auslese-am-avr-ruhig-trennen
taskId: ET-ATMEGA-ADC-213
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - adc
  - register
hintPoints:
  - Trenne Messung und Registeranordnung bewusst.
  - Frage zuerst, ob der volle Wert gebraucht wird oder ein grober 8-Bit-Wert genügt.
selfCheckPoints:
  - Kannst du ADLAR als Ausrichtungsfrage erklären?
  - Kannst du 8-Bit- und 10-Bit-Lesart sauber unterscheiden?
transferIdeas:
  - Übertrage die Logik auf Helligkeitsmessung, Potentiometer oder Schwellenbildung.
reflectionPrompt: "Was war für dich anfangs irreführender – der Begriff ADLAR oder die Trennung von Messung und Auslesen?"
---

## Aufgabe 1

Erkläre in eigenen Worten, was **ADLAR** am AVR verändert und was **nicht**.

## Aufgabe 2

Begründe in 3 bis 5 Sätzen, warum ein grober 8-Bit-Wert in manchen Anwendungen sinnvoller gelesen werden kann als der vollständige 10-Bit-Wert.

## Aufgabe 3

Ordne diese Aussagen ruhig ein:

- „Die ADC-Wandlung selbst bleibt dieselbe.“
- „Die Lage des Ergebnisses in ADCH und ADCL ändert sich.“
- „Der obere Anteil lässt sich für grobe Fälle bequemer lesen.“

## Aufgabe 4

Ein Team sagt:

> „Wenn ADLAR gesetzt ist, misst der ADC nur noch mit 8 Bit.“

Erkläre, warum diese Aussage zu grob ist.

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Ausrichtung**, **Register** und **Auflösung** alle sinnvoll vorkommen.
