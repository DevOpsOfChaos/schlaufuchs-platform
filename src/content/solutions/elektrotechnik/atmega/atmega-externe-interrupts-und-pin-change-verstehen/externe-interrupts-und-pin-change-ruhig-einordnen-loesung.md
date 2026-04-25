---
title: Musterlösung – Externe Interrupts und Pin-Change ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-INT-304.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-externe-interrupts-und-pin-change-verstehen
  - externe-interrupts-und-pin-change-ruhig-einordnen-loesung
taskId: ET-ATMEGA-INT-304
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-externe-interrupts-und-pin-change-verstehen/externe-interrupts-und-pin-change-ruhig-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
  - interrupt
draft: false
---

## Musterlösung

### Aufgabe 1

Die erste Aussage beschreibt ein präzise definiertes Ereignis, zum Beispiel genau eine steigende oder fallende Flanke. Die zweite Aussage ist allgemeiner: Es reicht schon, dass sich der Zustand eines überwachten Pins geändert hat. Genau dadurch entstehen zwei verschiedene ruhige Interrupt-Geschichten.

### Aufgabe 2

- **Genau definierte fallende Flanke** → ruhiger eher externer Interrupt
- **Irgendeine Änderung an einem überwachten Pin** → ruhiger eher Pin-Change-Interrupt

### Aufgabe 3

Beide Fälle einfach als „Pin-Interrupt“ zusammenzuwerfen wäre zu grob, weil die eigentliche Ereignisfrage unterschiedlich ist. Einmal geht es um eine genaue Flanke oder einen klar beschriebenen Pegel, einmal nur um die Information, dass sich ein Eingang verändert hat. Wer diese Trennung nicht macht, versteht die Wahl der Interruptquelle unnötig unscharf.

### Aufgabe 4

Eine ruhige Prüffrage wäre zum Beispiel:

> Brauche ich eine genau definierte Flanke oder genügt mir die Information, dass sich ein Pinzustand geändert hat?
