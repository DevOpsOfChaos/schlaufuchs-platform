---
title: Timer und Prescaler in Zeit übersetzen
description: Übersetze Takt, Prescaler und Zählerbreite in eine verständliche Zeitbasis.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - zeitbasis-und-timer
  - atmega-timer-und-prescaler-verstehen
  - timer-und-prescaler-in-zeit-uebersetzen
taskId: ET-ATMEGA-TMR-203
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - timer
  - prescaler
hintPoints:
  - Rechne erst den Timertakt aus und erst danach die Zeit pro Schritt.
  - Trenne Taktfrequenz, Zählschritt und Überlaufzeit sauber.
selfCheckPoints:
  - Kannst du erklären, warum der Prescaler keine Wartefunktion ist?
  - Kannst du aus Takt und Prescaler eine grobe Überlaufzeit bestimmen?
transferIdeas:
  - Übertrage die Logik auf einen anderen Prescaler oder einen 16-Bit-Timer.
reflectionPrompt: "Welche Rechenstufe würdest du am ehesten überspringen, obwohl genau sie das Verständnis ruhig macht?"
---

Gegeben ist:

- CPU-Takt: `16 MHz`
- Prescaler: `64`
- 8-Bit-Timer: `0 ... 255`

## Aufgabe 1

Berechne den Timertakt nach dem Prescaler.

## Aufgabe 2

Berechne, wie lange ein einzelner Zählschritt dauert.

## Aufgabe 3

Berechne die Überlaufzeit des Timers.

## Aufgabe 4

Erkläre in 2 bis 4 Sätzen, warum der Prescaler nicht „eine Pause“ macht, sondern den Taktteiler beschreibt.
