---
title: "Registerbits am ATmega sicher ändern"
description: "Übe, einzelne Bits zu setzen, zu löschen und zu prüfen, ohne Nachbarbits zu verändern."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "registerbits-sicher-setzen-und-loeschen"]
taskId: "et-mc-registerbits-sicher-aendern"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Wirkung beschreiben

Beschreibe in eigenen Worten, was die folgenden Zeilen jeweils tun:

```c
DDRB |= (1 << PB2);
PORTB &= ~(1 << PB2);
PORTB ^= (1 << PB2);
if (PINB & (1 << PB2)) {
    // ...
}
```

Achte besonders darauf, ob ein Register verändert oder nur gelesen wird.

## Aufgabe 2: Fehler finden

Ein Programm soll nur `PB3` als Ausgang setzen. Vorher können aber schon andere Bits in `DDRB` konfiguriert sein.

```c
DDRB = (1 << PB3);
```

Erkläre, warum diese Zeile in einem größeren Programm problematisch sein kann. Schreibe anschließend eine sicherere Variante.

## Aufgabe 3: Bitoperation zuordnen

Ordne zu:

1. Zielbit auf 1 bringen
2. Zielbit auf 0 bringen
3. Zielbit umschalten
4. Zielbit lesen

Verwende die Ausdrücke `|=`, `&= ~`, `^=` und `&` passend.
