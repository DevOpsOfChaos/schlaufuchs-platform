---
title: "ISR, Flag und volatile sauber zuordnen"
description: "Übe, welche Arbeit in eine ISR gehört, welche in die Hauptschleife gehört und wann volatile sinnvoll ist."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "isr-kurz-halten-und-volatile-verstehen"]
taskId: "et-mc-isr-flag-volatile"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Code bewerten

In einer ISR steht folgender Ablauf:

```c
ISR(TIMER1_COMPA_vect) {
    blink_led_slowly();
    send_long_debug_text();
    delay_ms(100);
}
```

Erkläre, warum dieser Aufbau problematisch ist. Nenne mindestens zwei Gründe.

## Aufgabe 2: Bessere Struktur skizzieren

Skizziere eine bessere Struktur mit einem Flag. Die ISR soll nur merken, dass ein Timerereignis passiert ist. Die Hauptschleife soll danach die eigentliche Arbeit erledigen.

## Aufgabe 3: volatile begründen

Eine Variable `timer_event` wird in einer ISR gesetzt und in der Hauptschleife gelesen. Begründe, warum sie typischerweise als `volatile` deklariert wird.
