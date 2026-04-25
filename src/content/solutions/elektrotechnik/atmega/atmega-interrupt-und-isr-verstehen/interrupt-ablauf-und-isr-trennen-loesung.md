---
title: Musterlösung – Interrupt-Ablauf und ISR trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-INT-204.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-interrupt-und-isr-verstehen
  - interrupt-ablauf-und-isr-trennen-loesung
taskId: ET-ATMEGA-INT-204
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-interrupt-und-isr-verstehen/interrupt-ablauf-und-isr-trennen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Beim Polling fragt das Hauptprogramm ständig aktiv nach, ob ein Zustand eingetreten ist. Beim Interrupt wird der normale Ablauf kurz unterbrochen, sobald das Ereignis wirklich auftritt, und eine passende ISR reagiert darauf.

### Aufgabe 2

`sei()` gibt Interrupts nur global frei. Zusätzlich muss die konkrete Quelle selbst passend aktiviert und eingerichtet sein. Erst dann kann genau dieses Ereignis die ISR auch wirklich auslösen.

### Aufgabe 3

Die ISR läuft nicht dauerhaft parallel, sondern nur kurz als Reaktion auf das Ereignis. Danach endet sie wieder, und das Hauptprogramm läuft an der unterbrochenen Stelle weiter.

### Aufgabe 4

Zuerst läuft das Hauptprogramm normal. Wenn das freigegebene Ereignis auftritt, unterbricht der Interrupt den normalen Ablauf kurz. Dann wird die passende ISR ausgeführt. Nach dem Ende der ISR kehrt das Programm zur vorherigen Stelle zurück und arbeitet dort weiter.
