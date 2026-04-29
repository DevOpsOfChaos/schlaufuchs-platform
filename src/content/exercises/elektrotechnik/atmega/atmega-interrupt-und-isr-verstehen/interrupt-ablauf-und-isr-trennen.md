---
title: "Interrupt-Ablauf und ISR trennen"
description: "Erkläre am ATmega die Grundlogik von Ereignis, Unterbrechung, ISR und Rückkehr ins Hauptprogramm."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-interrupt-und-isr-verstehen", "interrupt-ablauf-und-isr-trennen"]
taskId: "ET-ATMEGA-INT-204"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
