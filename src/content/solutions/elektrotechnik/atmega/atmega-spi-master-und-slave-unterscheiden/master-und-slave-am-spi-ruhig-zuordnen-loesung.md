---
title: Musterlösung – Master und Slave am SPI ruhig zuordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-SPI-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-master-und-slave-unterscheiden
  - master-und-slave-am-spi-ruhig-zuordnen-loesung
taskId: ET-ATMEGA-SPI-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-spi-master-und-slave-unterscheiden/master-und-slave-am-spi-ruhig-zuordnen.md
tags:
  - elektrotechnik
  - atmega
  - spi
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Der AVR bleibt Master, weil er den Takt vorgibt, das Zielgerät auswählt und die Übertragung aktiv startet. Dass er dabei Messdaten zurückliest, ändert die Rollenverteilung nicht.

### Aufgabe 2

Der Slave reagiert auf Auswahl und Takt des Masters. Er sendet oder übernimmt Daten also nicht frei, sondern innerhalb des vom Master vorgegebenen Ablaufs.

### Aufgabe 3

Die Aussage ist zu grob, weil Master bei SPI nicht bloß „Daten hinausschicken“ bedeutet. Wichtiger ist, dass der Master den Übertragungsrahmen steuert. Auch wenn er am Ende vor allem lesen will, bleibt er die takt- und ablaufbestimmende Rolle.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Master ist, wer Takt und Ablauf vorgibt. Slave ist, wer darauf reagiert.
