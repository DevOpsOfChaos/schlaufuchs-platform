---
title: "Lösung – Servo-Steuersignal von normaler PWM unterscheiden"
description: "Musterlösung zu „Servo-Steuersignal von normaler PWM unterscheiden“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "servo-impulse-und-pwm-nicht-verwechseln"]
taskId: "et-mc-v93-servo-pwm"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/servo-impulse-und-pwm-nicht-verwechseln"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Bei LED-PWM interessiert der mittlere Leistungsanteil. Beim Servo ist die Pulsbreite eine codierte Positionsinformation. Der Mittelwert ist nicht die eigentliche Aussage.

## Lösung zu Aufgabe 2

Der Signalpin liefert nur das Steuersignal. Die Versorgung liefert den Motorstrom. Die Masse verbindet beide Bezugspunkte, damit das Signal eindeutig gelesen werden kann.

## Lösung zu Aufgabe 3

Ohne gemeinsame Masse fehlt ein gemeinsamer Spannungsbezug. Dann kann der Servo den High- und Low-Pegel des Signals nicht zuverlässig interpretieren.
