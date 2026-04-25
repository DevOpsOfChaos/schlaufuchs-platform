---
title: Input Capture als Zeitmarke am AVR erklären
description: Erkläre, warum ein gespeicherter Timerstand an einer Signalflanke fachlich etwas anderes ist als bloßes Nachsehen im Programm.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitbasis
  - atmega-input-capture-grundidee-verstehen
  - input-capture-als-zeitmarke-am-avr-erklaeren
taskId: ET-ATMEGA-TIMER-402
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - input-capture
hintPoints:
  - Trenne laufenden Timer, Signalflanke und gespeicherten Capture-Wert sauber.
  - Lies den Capture-Wert als Zeitmarke und nicht als beliebige Zahl.
selfCheckPoints:
  - Kannst du erklären, warum Input Capture für Zeitmessung nützlich ist?
  - Kannst du Polling und Hardware-Zeitmarke fachlich trennen?
transferIdeas:
  - Übertrage die Logik auf Pulsbreitenmessung und Periodendauer eines Signals.
reflectionPrompt: "Warum hilft bei Zeitmessungen oft eine hardwareseitig festgehaltene Marke mehr als häufiges Nachfragen in der Schleife?"
---

## Aufgabe 1: Drei Rollen trennen

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen

- laufendem Timer,
- Signalflanke,
- gespeichertem Capture-Wert.

## Aufgabe 2: Polling kritisch lesen

Warum ist Input Capture für einen genauen Messmoment oft ruhiger als eine Polling-Schleife, die ständig nach einem Signal fragt?

## Aufgabe 3: Zeitmarke benennen

Formuliere einen Satz, in dem die Wörter **Flanke**, **Timerstand** und **Zeitmarke** alle sinnvoll vorkommen.

## Aufgabe 4: Einsatzfall einordnen

Nenne einen technischen Fall, bei dem Input Capture nützlich ist, und begründe kurz warum.
