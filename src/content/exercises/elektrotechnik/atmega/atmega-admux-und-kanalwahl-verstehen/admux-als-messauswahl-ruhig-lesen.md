---
title: ADMUX als Messauswahl ruhig lesen
description: Erkläre an kleinen AVR-ADC-Beispielen, wie Referenzwahl und Kanalwahl in ADMUX zusammenwirken.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-analoge-eingaenge
  - atmega-admux-und-kanalwahl-verstehen
  - admux-als-messauswahl-ruhig-lesen
taskId: ET-ATMEGA-ADC-303
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - adc
  - admux
hintPoints:
  - Trenne zuerst Referenz und Eingangskanal.
  - Frage nicht nur nach Bits, sondern nach der eigentlichen Messfrage.
selfCheckPoints:
  - Kannst du erklären, was an der ADC-Messung gleich bleibt und was sich ändert?
  - Kannst du sagen, warum ADMUX die Messung noch nicht selbst startet?
transferIdeas:
  - Übertrage die Logik auf Potentiometer, Sensoren oder Spannungsüberwachung.
reflectionPrompt: "Welche Frage hilft dir mehr als das bloße Merken einzelner Bitnamen?"
---

Gegeben sind diese beiden Zeilen:

```c
ADMUX = (1 << REFS0) | 0;
ADMUX = (1 << REFS0) | 1;
```

## Aufgabe 1

Erkläre, was in beiden Fällen gleich bleibt und was sich ändert.

## Aufgabe 2

Beschreibe in 2 bis 4 Sätzen, warum hier nicht schon automatisch eine Messung gestartet wird.

## Aufgabe 3

Formuliere für beide Zeilen je eine Messfrage in Alltagssprache.

## Aufgabe 4

Schreibe einen kurzen Merksatz dafür, warum Referenzwahl und Kanalwahl nicht dieselbe Entscheidung sind.
