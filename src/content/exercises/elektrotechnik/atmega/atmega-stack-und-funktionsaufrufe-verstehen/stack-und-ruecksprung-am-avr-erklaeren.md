---
title: Stack und Rücksprung am AVR erklären
description: Erkläre, warum ein AVR bei Funktionsaufrufen Rücksprungstellen organisieren muss und welche Rolle der Stack dabei spielt.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmablauf-und-speicher
  - atmega-stack-und-funktionsaufrufe-verstehen
  - stack-und-ruecksprung-am-avr-erklaeren
taskId: ET-ATMEGA-STK-210
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - stack
  - funktionsaufruf
hintPoints:
  - Frage zuerst, wohin der AVR nach dem Unterprogramm zurückkehren soll.
  - Lies den Stack als Ablaufhilfe statt nur als abstrakten Speicher.
selfCheckPoints:
  - Kannst du erklären, warum eine Rücksprungadresse gesichert werden muss?
  - Kannst du einen verschachtelten Aufruf geordnet beschreiben?
transferIdeas:
  - Übertrage die Logik auf größere Programme mit mehreren Hilfsfunktionen.
reflectionPrompt: "Was wäre die erste Unklarheit im Programmablauf, wenn es keinen geordneten Rücksprung gäbe?"
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
