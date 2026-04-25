---
title: ADC-Stufen und Referenz ruhig einordnen
description: Ordne ADC-Auflösung, Referenzspannung und Quantisierung am AVR sauber zueinander und erkläre typische Stufenfehler.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - analog-digital-wandlung
  - atmega-adc-auflosung-und-quantisierung-verstehen
  - adc-stufen-und-referenz-ruhig-einordnen
taskId: ET-ATMEGA-ADC-304
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
hintPoints:
  - Lies einen ADC-Wert zuerst als Stufe und nicht sofort als exakte Spannung.
  - Denke Bitzahl und Referenz immer gemeinsam.
selfCheckPoints:
  - Kannst du erklären, warum gleiche Bitzahl bei anderer Referenz andere Schrittweiten ergibt?
  - Kannst du Quantisierung in eigenen Worten beschreiben?
transferIdeas:
  - Übertrage die Logik auf Sensorwerte, Potentiometer und Batteriespannungsüberwachung.
reflectionPrompt: "Warum ist „stufig messen“ oft die ruhigere Denkhilfe als „genau messen“?"
---

## Aufgabe 1: Quantisierung erklären

Erkläre in 3 bis 5 Sätzen, warum zwei nahe Spannungen trotzdem denselben ADC-Wert liefern können.

## Aufgabe 2: Zwei Referenzen vergleichen

Ein 10-Bit-ADC arbeitet einmal mit `5 V` Referenz und einmal mit `1,1 V` Referenz.

Begründe, warum die Messung im zweiten Fall feiner wirken kann.

## Aufgabe 3: Fehlerbild deuten

Ein Sensorwert ändert sich leicht, aber der ADC-Wert springt erst nach einer kleinen Spannungsänderung weiter.

Erkläre, warum das eher zur Quantisierung als zu einem Defekt passt.

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Referenz**, **Stufe** und **ADC** alle sinnvoll vorkommen.
