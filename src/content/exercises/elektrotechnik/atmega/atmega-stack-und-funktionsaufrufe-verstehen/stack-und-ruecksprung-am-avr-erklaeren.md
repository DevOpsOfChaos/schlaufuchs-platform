---
title: "Stack und Rücksprung am AVR erklären"
description: "Erkläre, warum ein AVR bei Funktionsaufrufen Rücksprungstellen organisieren muss und welche Rolle der Stack dabei spielt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-stack-und-funktionsaufrufe-verstehen", "stack-und-ruecksprung-am-avr-erklaeren"]
taskId: "ET-ATMEGA-STK-210"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
Gegeben ist dieses kleine Denkbild:

```c
int main(void) {
    led_an();
    warte_kurz();
    led_aus();
}
```

Außerdem gilt:

```text
Ein Unterprogramm wird aufgerufen.
Danach soll der AVR an die richtige Stelle zurückkehren.
```

## Aufgabe 1

Erkläre in 2 bis 4 Sätzen, warum ein Funktionsaufruf mehr ist als nur ein „Sprung zu anderem Code“.

## Aufgabe 2

Beschreibe die Rolle des Stacks in einem Satz möglichst ruhig und fachlich.

## Aufgabe 3

Warum reicht es nicht, wenn der AVR „einfach irgendwie weiterläuft“, nachdem das Unterprogramm fertig ist?

## Aufgabe 4

Erkläre kurz, warum verschachtelte Aufrufe den Stack noch wichtiger machen.

## Aufgabe 5

Jemand sagt:

> „Der Stack ist nur irgendein Speicherbereich und für normale Funktionen nicht so wichtig.“

Erkläre, warum diese Aussage zu grob ist.
