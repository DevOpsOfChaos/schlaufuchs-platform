---
title: ADC-Messstrategie ruhig einordnen
description: Ordne Einzelmessung und Free-Running beim AVR sauber nach Messanlass und Messziel.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-analogwerte
  - atmega-adc-einzelmessung-und-free-running-unterscheiden
  - adc-messstrategie-ruhig-einordnen
taskId: ET-ATMEGA-ADC-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
hintPoints:
  - Frage zuerst, ob ein einzelner Messwert oder ein fortlaufender Verlauf gebraucht wird.
  - Lies den ADC-Fall als Messstrategie und nicht nur als Registertechnik.
selfCheckPoints:
  - Kannst du Einzelmessung und Free-Running fachlich unterscheiden?
  - Kannst du die Messstrategie aus dem Anwendungsfall ableiten?
transferIdeas:
  - Übertrage die Logik auf Helligkeitssensor, Temperaturmessung oder Potentiometer.
reflectionPrompt: "Warum hilft die Frage nach dem Messanlass oft mehr als die Frage nach dem einzelnen ADC-Bit?"
---

## Aufgabe 1: Zwei Anwendungen vergleichen

Ordne diese beiden Fälle jeweils als **Einzelmessung** oder **Free-Running** ein und begründe deine Wahl:

- Eine Spannung soll nur bei Tastendruck gemessen und angezeigt werden.
- Ein Sensorwert soll laufend beobachtet werden, damit ein Lüfter nachgeregelt werden kann.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt:

> „Free-Running ist moderner, also sollte man das immer nehmen.“

Erkläre in 3 bis 5 Sätzen, warum diese Aussage zu grob ist.

## Aufgabe 3: Messlogik formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Messanlass**, **Einzelwert** und **Verlauf** alle sinnvoll vorkommen.

## Aufgabe 4: Register erst danach

Begründe kurz, warum man beim ADC zuerst die Messidee klären sollte und erst danach auf Registereinstellungen schaut.
