---
title: "Musterlösung – UART und Baudrate am AVR ruhig lesen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-UART-208."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-als-serielle-grundidee-verstehen", "uart-und-baudrate-am-avr-ruhig-lesen"]
taskId: "ET-ATMEGA-UART-208"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-uart-als-serielle-grundidee-verstehen/uart-und-baudrate-am-avr-ruhig-lesen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

UART überträgt Daten seriell, also Bit für Bit nacheinander über die Zeit. Ein Zeichen wird deshalb nicht als fertiges Ganzes geschickt, sondern als zeitlich gerahmte Bitfolge mit Start- und Stopstruktur.

### Aufgabe 2

Bei 9600 Baud gilt grob:

```text
1 / 9600 s ≈ 104 µs
```

Bei 115200 Baud gilt grob:

```text
1 / 115200 s ≈ 8,68 µs
```

### Aufgabe 3

Zuerst sollten zum Beispiel diese Ursachen geprüft werden:

- falsche Baudrate zwischen Sender und Empfänger,
- falsche Taktannahme oder unpassende Taktbasis am AVR.

Beides kann das Zeitraster der Bits verschieben, obwohl der Textinhalt selbst sinnvoll wäre.

### Aufgabe 4

Die UART leitet ihre Bitzeiten aus der Systemtaktbasis ab. Wenn der AVR mit einer anderen Taktfrequenz rechnet als tatsächlich vorhanden ist, werden die Bitzeiten falsch berechnet. Dann liest der Empfänger Start-, Daten- oder Stopbits möglicherweise im falschen Moment.

### Aufgabe 5

UART sollte zuerst als Zeit- und Rahmenproblem gelesen werden, weil ein Zeichen nur dann korrekt ankommt, wenn Bitzeit und Rahmenstruktur stabil stimmen; erst danach wird aus der Bitfolge wieder sinnvoller Text.
