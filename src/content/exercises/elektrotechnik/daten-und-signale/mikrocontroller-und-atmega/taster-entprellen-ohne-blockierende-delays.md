---
title: Tasterprellen erkennen und nicht blockierend entprellen
description: Übe, Prellimpulse von einem gültigen Tastendruck zu unterscheiden und eine nicht blockierende Entprelllogik zu beschreiben.
subject: elektrotechnik
section: Mikrocontroller und ATmega
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - taster-entprellen-ohne-blockierende-delays
taskId: et-mc-taster-entprellen-softtimer
tags:
  - elektrotechnik
  - mikrocontroller
  - taster
  - entprellen
  - softtimer
hintPoints:
  - "Trenne Rohsignal, stabilen Zustand und gültiges Ereignis."
  - "Ein kurzer Pegelwechsel ist noch kein bestätigter Tastendruck."
  - "Überlege, was der Mikrocontroller während eines blockierenden Delays nicht mehr tun kann."
selfCheckPoints:
  - "Habe ich erklärt, warum ein Tastendruck mehrfach gezählt werden kann?"
  - "Habe ich eine Entprellzeit als Stabilitätsfenster verstanden?"
  - "Bleibt das Programm in meiner Lösung grundsätzlich reaktionsfähig?"
transferIdeas:
  - "Übertrage die Zustandslogik auf einen Reedkontakt oder Endschalter."
  - "Erkläre, warum Entprellung besonders bei Menübedienung wichtig ist."
reflectionPrompt: "Was ist für dich der wichtigste Unterschied zwischen einem Rohsignal und einem gültigen Ereignis?"
level: mittel
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
