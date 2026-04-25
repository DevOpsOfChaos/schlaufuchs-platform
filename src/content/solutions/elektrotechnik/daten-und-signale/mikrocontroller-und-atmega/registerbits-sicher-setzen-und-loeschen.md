---
title: Lösung – Registerbits am ATmega sicher ändern
description: Musterlösung zum sicheren Setzen, Löschen, Umschalten und Prüfen einzelner Registerbits.
subject: elektrotechnik
section: Mikrocontroller und ATmega
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - registerbits-sicher-setzen-und-loeschen
taskId: et-mc-registerbits-sicher-aendern
relatedExercise: elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/registerbits-sicher-setzen-und-loeschen
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - register
  - bitmasken
draft: false
---

## Lösung zu Aufgabe 1

```c
DDRB |= (1 << PB2);
```

`PB2` wird im Richtungsregister `DDRB` auf 1 gesetzt. Der Pin wird dadurch als Ausgang konfiguriert. Andere Bits in `DDRB` bleiben erhalten.

```c
PORTB &= ~(1 << PB2);
```

`PB2` wird im Ausgangsregister `PORTB` auf 0 gelöscht. Die übrigen Bits bleiben unverändert.

```c
PORTB ^= (1 << PB2);
```

`PB2` wird umgeschaltet. War es 0, wird es 1. War es 1, wird es 0.

```c
if (PINB & (1 << PB2)) {
    // ...
}
```

Hier wird `PB2` im Eingangsregister geprüft. Das Register wird dabei nicht verändert.

## Lösung zu Aufgabe 2

Die Zeile

```c
DDRB = (1 << PB3);
```

schreibt das ganze Register neu. Dadurch werden alle anderen Bits in `DDRB` auf 0 gesetzt. Wenn andere Pins vorher schon als Ausgang konfiguriert waren, ginge diese Einstellung verloren.

Sicherer ist:

```c
DDRB |= (1 << PB3);
```

Diese Zeile setzt nur `PB3` auf 1 und lässt alle anderen Bits unverändert.

## Lösung zu Aufgabe 3

1. Zielbit auf 1 bringen: `|=`
2. Zielbit auf 0 bringen: `&= ~`
3. Zielbit umschalten: `^=`
4. Zielbit lesen: `&`

Die wichtigste Prüfregel lautet: Beim Schreiben muss klar sein, welche Bits sich ändern dürfen und welche nicht.
