---
title: "Lösung – 5-V- und 3,3-V-Pegel sicher bewerten"
description: "Musterlösung zu 5-v- und 3,3-v-pegel sicher bewerten."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "5v-3v3-pegel-und-schnittstellen-schuetzen"]
taskId: "et-mc-v92-pegel-schuetzen"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/5v-3v3-pegel-und-schnittstellen-schuetzen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der ATmega-TX kann ein High-Signal nahe 5 V liefern. Ein 3,3-V-Modul darf an seinem Eingang oft nicht mit 5 V belastet werden, wenn es nicht ausdrücklich 5-V-tolerant ist. Deshalb ist gerade diese Richtung kritisch.

## Lösung zu Aufgabe 2

Möglich sind zum Beispiel ein Spannungsteiler, ein geeigneter Pegelwandler oder ein Baustein mit passenden tolerant ausgelegten Eingängen. Ein gemeinsamer GND ist nötig, damit beide Seiten dieselben Signalpegel sinnvoll interpretieren können; er reduziert aber nicht die Höhe des 5-V-Signals.

## Lösung zu Aufgabe 3

Eine passende Tabelle könnte lauten: ATmega TX → Modul RX: Sender 5 V, Empfänger 3,3 V, Risiko Überspannung, Maßnahme Pegelwandlung. Modul TX → ATmega RX: Sender 3,3 V, Empfänger 5 V, Risiko High-Schwelle prüfen, Maßnahme Datenblattkontrolle. GND ↔ GND: Bezugspunkt, Maßnahme verbinden.
