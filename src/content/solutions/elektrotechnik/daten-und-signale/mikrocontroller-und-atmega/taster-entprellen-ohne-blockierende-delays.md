---
title: "Lösung – Tasterprellen erkennen und nicht blockierend entprellen"
description: "Musterlösung zu Prellimpulsen, Delay-Entprellung und Zustandslogik mit Softtimer."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "taster-entprellen-ohne-blockierende-delays"]
taskId: "et-mc-taster-entprellen-softtimer"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/taster-entprellen-ohne-blockierende-delays"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Bei einem Pull-up bedeutet `1` normalerweise losgelassen und `0` gedrückt. Die Folge

```text
1, 0, 1, 0, 0, 0
```

zeigt, dass der Eingang beim Drücken kurz zwischen losgelassen und gedrückt springt. Das kann durch mechanisches Prellen entstehen. Erst wenn der Wert eine kurze Zeit stabil bei `0` bleibt, sollte daraus ein gültiger Tastendruck werden.

## Lösung zu Aufgabe 2

Vorteile einer Delay-Lösung:

- Sie ist leicht zu verstehen.
- Sie kann bei sehr einfachen Programmen ausreichen.

Nachteile:

- Während des Delays kann das Programm keine anderen Aufgaben sauber bearbeiten.
- Mehrere Taster, LED-Muster, UART-Ausgaben oder Sensorabfragen reagieren schlechter.

Die Lösung ist also didaktisch einfach, aber für größere Programme oft zu grob.

## Lösung zu Aufgabe 3

Eine mögliche nicht blockierende Entprelllogik:

1. Aktuellen Rohwert des Eingangs lesen.
2. Prüfen, ob sich der Rohwert gegenüber dem letzten Rohwert geändert hat.
3. Bei Änderung eine Zeitmarke speichern.
4. Danach weiterlaufen, ohne das Programm anzuhalten.
5. Regelmäßig prüfen, ob der Rohwert lange genug unverändert geblieben ist.
6. Erst dann den stabilen Zustand übernehmen und ein Tastendruck-Ereignis auslösen.

Der Kern ist: Nicht der erste Wechsel zählt, sondern der bestätigte stabile Zustand.
