---
title: Musterlösung – Oversampling am ADC ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATM-ADC-301.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - messen-und-adc
  - atmega-adc-oversampling-grundidee-verstehen
  - oversampling-am-adc-ruhig-einordnen-loesung
taskId: ET-ATM-ADC-301
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-adc-oversampling-grundidee-verstehen/oversampling-am-adc-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Oversampling kann helfen, weil mehrere ADC-Messungen gemeinsam ruhiger ausgewertet werden können als ein einzelner Schnappschuss. Kleine Schwankungen lassen sich dadurch besser einordnen. Besonders bei langsam veränderlichen Signalen wird so oft klarer, wo der Messwert insgesamt liegt. Das bedeutet aber nicht, dass jeder Einzelwert plötzlich perfekt wird.

## Aufgabe 2

Das wäre zu grob, weil mehr Messungen allein keine beliebige Genauigkeit erzeugen. Wenn Referenzspannung, Signalquelle oder Störsituation schlecht sind, werden diese Probleme nicht einfach weggezaubert. Oversampling ist also ein hilfreiches Verfahren, aber kein unbegrenzter Genauigkeitsschalter.

## Aufgabe 3

Wichtig bleiben zum Beispiel:

- eine saubere Referenzspannung,
- eine brauchbare Signalquelle oder Quellimpedanz,
- und allgemein eine ruhige Messumgebung.
