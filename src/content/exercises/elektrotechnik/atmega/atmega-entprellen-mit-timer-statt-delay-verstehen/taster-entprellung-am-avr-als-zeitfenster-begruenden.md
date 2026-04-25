---
title: Taster-Entprellung am AVR als Zeitfenster begründen
description: Begründe, warum Entprellen am ATmega oft ruhiger als stabiles Zeitfenster gelesen wird und nicht nur als blockierendes Delay.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-reaktivitaet
  - atmega-entprellen-mit-timer-statt-delay-verstehen
  - taster-entprellung-am-avr-als-zeitfenster-begruenden
taskId: ET-ATMEGA-REAKT-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - taster
  - entprellen
hintPoints:
  - Trenne Prellen der Hardware und Reaktion des Programms.
  - Denke an andere Aufgaben, die während des Wartens weiterlaufen sollen.
selfCheckPoints:
  - Kannst du erklären, warum Delay zwar hilft, aber nicht immer die ruhigste Struktur ist?
  - Kannst du ein stabiles Zeitfenster in Worten beschreiben?
transferIdeas:
  - Übertrage die Logik auf Menütaster oder Endschalter.
reflectionPrompt: "Welche ruhigere Leitfrage hilft dir hier mehr: Wie lang warte ich oder woran erkenne ich einen stabilen Zustand?"
---

## Aufgabe 1

Erkläre in eigenen Worten, warum ein Taster ohne Entprellung mehrfach auslösen kann.

## Aufgabe 2

Beschreibe den Unterschied zwischen einer Delay-Entprellung und einer timer- oder zeitgestützten Entprellung.

## Aufgabe 3

Ein AVR soll gleichzeitig blinken, UART-Zeichen empfangen und einen Taster abfragen. Begründe, warum blockierendes Delay-Entprellen hier schnell unruhig wird.

## Aufgabe 4

Formuliere in 2 bis 4 Sätzen, was mit einem stabilen Zeitfenster beim Entprellen gemeint ist.

## Aufgabe 5

Nenne eine kurze Entscheidungsregel, wann du beim ATmega eher zu einer zeitgestützten Entprellung greifen würdest.
