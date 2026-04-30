---
title: "Lösung – Delay-Ablauf in eine Zustandsmaschine übersetzen"
description: "Musterlösung zur Beschreibung eines LED-Ablaufs als Zustandsmaschine."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "zustandsmaschine-statt-delay-kette"]
taskId: "et-mc-zustandsmaschine-delay"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/zustandsmaschine-statt-delay-kette"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Mögliche Zustände sind <code>AUS_WARTET</code>, <code>LED_AN</code> und <code>LED_BLINKT</code>. Danach geht das System wieder nach <code>AUS_WARTET</code> zurück.

## Lösung zu Aufgabe 2

<code>AUS_WARTET</code> wechselt bei gültigem Tastendruck zu <code>LED_AN</code>. <code>LED_AN</code> wechselt nach zwei Sekunden zu <code>LED_BLINKT</code>. <code>LED_BLINKT</code> wechselt bei erneutem gültigem Tastendruck zurück zu <code>AUS_WARTET</code>.

## Lösung zu Aufgabe 3

Während eines langen Delays prüft das Programm keine anderen Bedingungen. Ein Tastendruck kann zu spät oder gar nicht erkannt werden. Eine Zustandsmaschine hält die Hauptschleife offen und prüft regelmäßig Zustand, Zeit und Ereignisse.
