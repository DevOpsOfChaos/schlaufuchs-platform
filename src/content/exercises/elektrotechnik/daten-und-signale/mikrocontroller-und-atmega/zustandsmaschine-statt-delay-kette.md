---
title: "Delay-Ablauf in eine Zustandsmaschine übersetzen"
description: "Übe, einen blockierenden Ablauf als Zustände, Ereignisse und Übergänge zu formulieren."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "zustandsmaschine-statt-delay-kette"]
taskId: "et-mc-zustandsmaschine-delay"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Zustände finden

Ein Programm soll warten, nach Tastendruck eine LED einschalten, nach zwei Sekunden blinken und nach erneutem Tastendruck alles ausschalten. Benenne passende Zustände.

## Aufgabe 2: Übergänge formulieren

Formuliere für jeden Zustandswechsel das Ereignis, das den Wechsel auslöst.

## Aufgabe 3: Delay-Kette bewerten

Erkläre, warum lange <code>delay()</code>-Aufrufe problematisch werden, wenn während des Ablaufs ein neuer Tastendruck erkannt werden soll.
