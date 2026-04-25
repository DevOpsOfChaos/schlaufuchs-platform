---
title: ADC-Quelle und Abtastknoten ruhig einordnen
description: Erkläre am AVR-ADC, warum Quellimpedanz und Einschwingzeit das Messergebnis beeinflussen können.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adc-quellimpedanz-und-sample-and-hold-verstehen
  - adc-quelle-und-abtastknoten-ruhig-einordnen
taskId: ET-ATMEGA-ADC-307
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
hintPoints:
  - Lies den ADC-Eingang als Ladeproblem und nicht nur als Zahlenquelle.
  - Achte bei Kanalwechseln besonders auf den ersten Messwert.
selfCheckPoints:
  - Kannst du niederohmige und hochohmige Quellen unterscheiden?
  - Kannst du erklären, warum ein Wert erst nach kurzer Zeit ruhiger wird?
transferIdeas:
  - Übertrage die Logik auf Sensoren, Potentiometer und Mehrkanal-Messungen.
reflectionPrompt: "Warum hilft beim ADC oft der Zeitblick mehr als das bloße Starren auf Registerwerte?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen die Grundidee von Sample-and-Hold am AVR-ADC.

## Aufgabe 2

Warum kann eine hochohmige Signalquelle problematischer sein als eine niederohmige, wenn ein ADC-Wert schnell eingelesen werden soll?

## Aufgabe 3

Nach einem Kanalwechsel ist der erste ADC-Wert manchmal noch unruhig.

Beschreibe, wie dieses Problem fachlich erklärt werden kann.

## Aufgabe 4

Formuliere einen kurzen Merksatz dazu, warum der ADC-Eingang nicht nur eine Spannungsfrage, sondern auch eine Zeitfrage ist.
