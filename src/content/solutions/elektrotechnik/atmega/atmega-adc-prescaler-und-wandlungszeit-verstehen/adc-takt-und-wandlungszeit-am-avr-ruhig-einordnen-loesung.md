---
title: "Musterlösung – ADC-Takt und Wandlungszeit am AVR ruhig einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-ADC-210."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-prescaler-und-wandlungszeit-verstehen", "adc-takt-und-wandlungszeit-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-ADC-210"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-adc-prescaler-und-wandlungszeit-verstehen/adc-takt-und-wandlungszeit-am-avr-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der ADC-Prescaler teilt die Taktbasis für den ADC herunter. Dadurch wird aus dem allgemeinen Systemtakt ein eigener ADC-Takt, mit dem die Wandlung intern arbeitet.

## Aufgabe 2

Aus `F_CPU = 16 MHz` wird durch den Prescaler 128 ein deutlich langsamerer ADC-Takt. Fachlich liest man das als: Erst den Systemtakt bestimmen, dann den ADC-Takt über den Teiler ableiten, und daraus die Messdauer verstehen.

## Aufgabe 3

Die ungefähre Zeit pro Messung hilft, weil man dann ADC-Konfiguration als reales Zeitverhalten lesen kann. So wird aus Registerwissen eine Aussage darüber, wie schnell Messungen tatsächlich nacheinander möglich sind.

## Aufgabe 4

Diese Aussage ist zu grob. Die schnellste Einstellung ist nicht automatisch die ruhigste oder passendste. Entscheidend ist, welche Messrate gebraucht wird und welche Zeitbasis dazu sinnvoll passt.
