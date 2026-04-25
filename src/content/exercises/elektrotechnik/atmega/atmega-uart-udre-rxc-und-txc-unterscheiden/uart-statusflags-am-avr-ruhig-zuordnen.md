---
title: UART-Statusflags am AVR ruhig zuordnen
description: Ordne UDRE, RXC und TXC den passenden UART-Situationen am ATmega zu.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-udre-rxc-und-txc-unterscheiden
  - uart-statusflags-am-avr-ruhig-zuordnen
taskId: ET-ATMEGA-UART-207
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - uart
  - statusflags
hintPoints:
  - Trenne Registerzustand und Leitungszustand bewusst.
  - Frage immer zuerst, ob gerade geschrieben, gelesen oder auf echtes Sendende gewartet wird.
selfCheckPoints:
  - Kannst du UDRE, RXC und TXC sauber unterscheiden?
  - Kannst du erklären, warum UDRE und TXC nicht dieselbe Aussage tragen?
transferIdeas:
  - Übertrage die Logik auf Polling-Schleifen, Halbduplex-UART oder Debug-Ausgaben.
reflectionPrompt: "Welches der drei Flags hättest du am ehesten zu grob als „fertig“ gelesen und warum?"
---

## Aufgabe 1

Ordne die drei Flags **UDRE**, **RXC** und **TXC** jeweils der passenden Frage zu:

- „Darf ich ein neues Byte in das Datenregister schreiben?“
- „Liegt ein empfangenes Byte zum Lesen bereit?“
- „Ist das letzte Zeichen auf der Leitung wirklich vollständig übertragen?“

## Aufgabe 2

Erkläre in 3 bis 5 Sätzen, warum **UDRE** und **TXC** beide nach „Senden fertig“ klingen können, aber fachlich nicht dieselbe Situation meinen.

## Aufgabe 3

Bewerte diesen Polling-Ansatz:

```c
while (!(UCSR0A & (1 << TXC0))) {
}
UDR0 = daten;
```

Warum ist das für das reine Nachladen des nächsten Zeichens oft unruhiger gelesen als eine Abfrage von **UDRE**?

## Aufgabe 4

Beschreibe kurz, welches Flag du in diesen Fällen zuerst beobachten würdest:

- neues Byte losschicken,
- eingetroffenes Byte lesen,
- nach der letzten Sendung den Treiber einer Leitung umschalten.

## Aufgabe 5

Formuliere einen Merksatz, in dem die Wörter **Register**, **Empfang** und **Leitungsende** alle sinnvoll vorkommen.
