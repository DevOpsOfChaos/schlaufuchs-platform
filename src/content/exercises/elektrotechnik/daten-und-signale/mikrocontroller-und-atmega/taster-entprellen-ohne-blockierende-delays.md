---
title: "Tasterprellen erkennen und nicht blockierend entprellen"
description: "Übe, Prellimpulse von einem gültigen Tastendruck zu unterscheiden und eine nicht blockierende Entprelllogik zu beschreiben."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "taster-entprellen-ohne-blockierende-delays"]
taskId: "et-mc-taster-entprellen-softtimer"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Signal deuten

Ein Taster wird einmal gedrückt. Der Mikrocontroller liest dabei kurz nacheinander diese Werte:

```text
1, 0, 1, 0, 0, 0
```

Der Taster ist mit Pull-up beschaltet. `0` bedeutet also gedrückt.

Erkläre, warum diese Folge trotzdem nur ein einziger Tastendruck sein kann.

## Aufgabe 2: Delay-Lösung bewerten

Ein Programm macht nach jedem erkannten Tastendruck ein `delay(50)`. Nenne zwei Vorteile und zwei Nachteile dieser einfachen Lösung.

## Aufgabe 3: Nicht blockierende Logik beschreiben

Beschreibe in vier bis sechs Schritten eine Entprellung, die ohne blockierendes Delay arbeitet. Du musst keinen fertigen C-Code schreiben. Wichtig ist die saubere Zustandslogik.
