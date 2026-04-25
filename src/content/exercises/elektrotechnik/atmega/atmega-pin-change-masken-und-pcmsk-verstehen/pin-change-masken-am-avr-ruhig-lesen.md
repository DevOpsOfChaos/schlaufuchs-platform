---
title: Pin-Change-Masken am AVR ruhig lesen
description: Begründe die zweistufige Freigabe von Pin-Change-Interrupts über PCICR und PCMSK am ATmega.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-reaktivitaet
  - atmega-pin-change-masken-und-pcmsk-verstehen
  - pin-change-masken-am-avr-ruhig-lesen
taskId: ET-ATMEGA-PCINT-212
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - interrupt
  - pin-change
hintPoints:
  - Denke zuerst in Gruppen und erst danach in Einzelpins.
  - Lies PCICR und PCMSK nicht als Konkurrenz, sondern als zwei Ebenen derselben Freigabe.
selfCheckPoints:
  - Kannst du Gruppenfreigabe und Pinmaske sicher unterscheiden?
  - Kannst du erklären, warum die Maske didaktisch nicht bloß Nebensache ist?
transferIdeas:
  - Übertrage die Logik auf Tasterbänke, Portgruppen oder mehrere Sensorsignale.
reflectionPrompt: "Was wäre ohne die zweite Freigabeebene im praktischen Aufbau schnell unübersichtlich?"
---

## Aufgabe 1

Erkläre in eigenen Worten den Unterschied zwischen **PCICR** und **PCMSK** bei Pin-Change-Interrupts am AVR.

## Aufgabe 2

Begründe in 3 bis 5 Sätzen, warum die Aussage „Die Gruppe ist aktiv, also reagieren jetzt alle Pins“ fachlich zu grob ist.

## Aufgabe 3

Bewerte diesen Codeausschnitt ruhig:

```c
PCICR |= (1 << PCIE1);
PCMSK1 |= (1 << PCINT9);
```

Erkläre, welche Ebene hier jeweils beschrieben wird.

## Aufgabe 4

Ein Aufbau hat drei Eingänge in derselben Pin-Change-Gruppe. Nur einer davon soll aktuell eine ISR auslösen.

Warum ist dafür die Pinmaske die fachlich wichtige Stelle?

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Gruppe**, **Maske** und **Pin** alle sinnvoll vorkommen.
