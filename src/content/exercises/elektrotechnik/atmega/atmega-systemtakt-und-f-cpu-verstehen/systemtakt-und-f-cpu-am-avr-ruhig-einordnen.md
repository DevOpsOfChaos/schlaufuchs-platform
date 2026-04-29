---
title: "Systemtakt und F_CPU am AVR ruhig einordnen"
description: "Ordne Taktfrequenz, F_CPU und Zeitwirkung in kleinen AVR-Fällen sauber ein."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-systemtakt-und-f-cpu-verstehen", "systemtakt-und-f-cpu-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-CLK-207"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben sind diese zwei Situationen:

```text
Fall A
F_CPU = 16 MHz
Eine LED blinkt mit Delay sichtbar im Sekundentakt.
```

```text
Fall B
F_CPU = 8 MHz
Der restliche Code bleibt gleich.
```

## Aufgabe 1

Erkläre in 2 bis 4 Sätzen, warum der gleiche Code in Fall B zeitlich anders wirken kann als in Fall A.

## Aufgabe 2

Schreibe in eigenen Worten auf, was `F_CPU` beschreibt.

## Aufgabe 3

Berechne grob die Dauer eines Taktzyklus bei:

- 16 MHz
- 8 MHz

## Aufgabe 4

Nenne zwei weitere AVR-Themen außer Delay, die ebenfalls an derselben Taktbasis hängen.

## Aufgabe 5

Jemand sagt:

> „Wenn der Code gleich bleibt, muss auch die Zeitwirkung gleich bleiben.“

Erkläre kurz, warum das zu grob gedacht ist.
