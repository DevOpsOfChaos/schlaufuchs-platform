---
title: Musterlösung – Pin-Change-Masken am AVR ruhig lesen
description: Musterlösung zur Aufgabe ET-ATMEGA-PCINT-212.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-reaktivitaet
  - atmega-pin-change-masken-und-pcmsk-verstehen
  - pin-change-masken-am-avr-ruhig-lesen-loesung
taskId: ET-ATMEGA-PCINT-212
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-pin-change-masken-und-pcmsk-verstehen/pin-change-masken-am-avr-ruhig-lesen.md
tags:
  - elektrotechnik
  - atmega
  - interrupt
  - loesung
draft: false
---

## Aufgabe 1

**PCICR** schaltet grundsätzlich eine Pin-Change-Gruppe frei. **PCMSK** legt danach fest, welche einzelnen Pins innerhalb dieser Gruppe tatsächlich beachtet werden. PCICR und PCMSK gehören also zu zwei verschiedenen Ebenen derselben Freigabelogik.

## Aufgabe 2

Die Aussage ist zu grob, weil die Gruppenfreigabe allein noch nicht die eigentliche Pin-Auswahl beschreibt. Ohne passende Maske wäre unklar, welche Pins innerhalb des Bereichs wirklich relevant sind. Gerade bei mehreren Eingängen in derselben Gruppe ist diese zweite Ebene fachlich entscheidend.

## Aufgabe 3

Mit `PCICR |= (1 << PCIE1);` wird die betreffende Pin-Change-Gruppe grundsätzlich aktiviert. Mit `PCMSK1 |= (1 << PCINT9);` wird dann innerhalb dieser Gruppe der konkrete Pin ausgewählt. Der Code trennt also sauber Bereich und Einzelpin.

## Aufgabe 4

Die Pinmaske ist hier wichtig, weil sie die eigentliche Feinauswahl trifft. Mehrere Eingänge können denselben Gruppenrahmen teilen, sollen aber nicht alle dieselbe ISR-Reaktion auslösen. Erst die Maske macht die Auswahl ruhig und eindeutig.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Erst wird die Gruppe freigegeben, dann legt die Maske fest, welcher Pin darin wirklich zählt.
