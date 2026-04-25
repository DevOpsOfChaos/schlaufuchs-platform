---
title: "Flankeninterrupt und Tasterprellen analysieren"
description: "Übe, mehrfache Interruptauslösungen durch prellende Tastensignale fachlich zu erklären und sauber zu entschärfen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - externe-interrupts-flanken-und-prellen
selfCheckPoints:
  - "Habe ich Menschereignis und elektrische Flanken getrennt?"
  - "Habe ich lange Wartezeit in der ISR vermieden?"
  - "Habe ich eine Entprellstrategie beschrieben?"
taskId: "et-mc-v92-interrupt-flanken-prellen"
tags:
  - elektrotechnik
  - mikrocontroller
  - interrupt
  - taster
  - prellen
  - flanke
hintPoints:
  - "Ein mechanischer Kontakt kann mehrere schnelle Flanken erzeugen."
  - "Die ISR sollte nur markieren, nicht lange arbeiten."
  - "Entprellung braucht Zeitinformation."
transferIdeas:
  - "Übertrage die Idee auf einen Drehgeber."
  - "Vergleiche fallende Flanke mit Active-Low-Tasterlogik."
reflectionPrompt: "Warum fühlt sich „einmal gedrückt“ für den Menschen anders an als das Signal für den Controller?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein Zähler wird in einer externen Interrupt-ISR erhöht. Bei einem Tastendruck steigt er manchmal um zwei oder drei. Erkläre das mit Flanken und Prellen.

## Aufgabe 2: Entscheidung begründen

Warum ist eine lange Wartezeit direkt in der ISR keine gute Entprelllösung?

## Aufgabe 3: Prüfung formulieren

Beschreibe eine bessere Entprellstrategie in kurzen Schritten.
