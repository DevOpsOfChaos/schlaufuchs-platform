---
title: Musterlösung – Globale und lokale Interruptfreigabe trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-INT-307.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-nebenlaeufigkeit
  - atmega-sei-cli-und-globale-interruptfreigabe-verstehen
  - globale-und-lokale-interruptfreigabe-trennen-loesung
taskId: ET-ATMEGA-INT-307
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-sei-cli-und-globale-interruptfreigabe-verstehen/globale-und-lokale-interruptfreigabe-trennen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Die lokale Interruptfreigabe bezieht sich auf eine bestimmte Quelle, zum Beispiel einen Timer oder einen externen Interrupt. Die globale Interruptfreigabe betrifft dagegen das gesamte System und entscheidet, ob Interrupts überhaupt verarbeitet werden dürfen. Beide Ebenen müssen deshalb sauber getrennt gelesen werden.

### Aufgabe 2

Eine Quelle kann korrekt konfiguriert und lokal freigegeben sein, aber global noch gesperrt bleiben. Dann wirkt es so, als würde nichts passieren, obwohl die Quelle selbst grundsätzlich vorbereitet ist. Genau deshalb reicht die Betrachtung eines einzelnen Enable-Bits oft nicht aus.

### Aufgabe 3

- **`sei`** aktiviert die globale Interruptfreigabe.
- **`cli`** deaktiviert die globale Interruptfreigabe.

### Aufgabe 4

Ein ruhiger Diagnoseweg wäre: zuerst prüfen, ob der Timer selbst korrekt läuft, danach ob das lokale Interrupt-Enable gesetzt ist und anschließend, ob die globale Freigabe mit `sei` überhaupt aktiv ist. Erst wenn diese Ebenen zusammen passen, sollte die ISR als nächste Station geprüft werden.
