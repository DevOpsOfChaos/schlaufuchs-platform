---
title: Interrupt-Ablauf und ISR trennen
description: Erkläre am ATmega die Grundlogik von Ereignis, Unterbrechung, ISR und Rückkehr ins Hauptprogramm.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-interrupt-und-isr-verstehen
  - interrupt-ablauf-und-isr-trennen
taskId: ET-ATMEGA-INT-204
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - interrupt
  - isr
hintPoints:
  - Trenne Hauptprogramm, Ereignis und ISR als drei Phasen.
  - Denke an globale und konkrete Quellenfreigabe.
selfCheckPoints:
  - Kannst du Polling und Interrupt fachlich unterscheiden?
  - Kannst du erklären, warum eine ISR kein zweites dauerhaftes Hauptprogramm ist?
transferIdeas:
  - Übertrage die Logik auf Timer-Interrupts oder externe Taster-Interrupts.
reflectionPrompt: "Welche ruhige Leitfrage hilft dir mehr: „Welcher Befehl steht da?“ oder „Wann springt das Programm wohin?“"
---

Gegeben ist dieses Denkbild:

<pre><code>Hauptprogramm läuft
→ Ereignis tritt auf
→ Interrupt unterbricht kurz
→ ISR reagiert
→ Hauptprogramm läuft weiter</code></pre>

Und dieser Codeausschnitt:

```c
#include <avr/io.h>
#include <avr/interrupt.h>

sei();
ISR(INT0_vect) {
  // Reaktion auf das Ereignis
}
```

## Aufgabe 1

Erkläre in eigenen Worten den Unterschied zwischen Polling und Interrupt.

## Aufgabe 2

Beschreibe, warum `sei()` allein noch nicht bedeutet, dass jede Quelle schon fertig eingerichtet ist.

## Aufgabe 3

Erkläre, warum die ISR nicht als zweites Hauptprogramm gelesen werden sollte.

## Aufgabe 4

Formuliere eine ruhige Kurzbeschreibung für den gesamten Interrupt-Ablauf in 3 bis 5 Sätzen.
