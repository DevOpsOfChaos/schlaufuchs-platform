---
title: ADC-Messwert und Referenz ruhig erklären
description: Erkläre, warum ein AVR-ADC eine analoge Spannung nicht direkt als Voltwert, sondern als digitalen Messwert innerhalb einer Referenz liest.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - analoge-eingaenge
  - atmega-adc-grundidee-verstehen
  - adc-messwert-und-referenz-ruhig-erklaeren
taskId: ET-ATMEGA-ADC-206
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
hintPoints:
  - Trenne analoge Spannung, Referenzspannung und digitalen Messwert bewusst.
  - Lies den ADC-Wert als Übersetzung, nicht als die Spannung selbst.
selfCheckPoints:
  - Kannst du erklären, warum der ADC eine Zahl statt eines Volttexts liefert?
  - Kannst du die Rolle der Referenzspannung benennen?
transferIdeas:
  - Übertrage die Logik auf Potentiometer, Lichtsensoren oder Temperatursignale.
reflectionPrompt: "Welche ruhige Lesefrage verhindert am besten, dass ein ADC-Wert vorschnell wie eine fertige Spannung behandelt wird?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum ein AVR-ADC aus einer analogen Spannung einen digitalen Messwert macht.

## Aufgabe 2

Warum braucht ein ADC eine Referenzspannung, damit der Messwert fachlich sinnvoll gelesen werden kann?

## Aufgabe 3

Bewerte diese Aussage:

> „Der ADC-Wert ist einfach die gemessene Spannung.“

Erkläre, warum das zu grob ist.

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, wie analoge Spannung und digitaler ADC-Wert zusammenhängen.

## Aufgabe 5

Ein Potentiometer wird gedreht und der ADC-Wert steigt deutlich an. Was darfst du daraus fachlich ruhig schließen – und was noch nicht direkt?
