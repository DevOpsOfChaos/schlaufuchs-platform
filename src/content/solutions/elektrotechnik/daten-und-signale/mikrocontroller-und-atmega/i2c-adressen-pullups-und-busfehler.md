---
title: "Lösung – I²C-Busfehler systematisch eingrenzen"
description: "Musterlösung zu i²c-busfehler systematisch eingrenzen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "i2c-adressen-pullups-und-busfehler"]
taskId: "et-mc-v92-i2c-busfehler"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/i2c-adressen-pullups-und-busfehler"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Mögliche Ursachen sind falsche Versorgung, fehlender gemeinsamer GND, SDA/SCL vertauscht, fehlende oder unpassende Pull-ups, falsche Adresse, ein Sensor im Reset, eine dauerhaft Low gehaltene Leitung oder ein Pegelproblem zwischen 5 V und 3,3 V.

## Lösung zu Aufgabe 2

I²C-Leitungen werden typischerweise über Pull-ups auf High gezogen; Teilnehmer ziehen sie bei Bedarf nach Low. Sind keine passenden Pull-ups vorhanden, entstehen keine sauberen High-Pegel. Die Spannung darf die Eingänge der Bausteine nicht überlasten und muss gleichzeitig als High erkannt werden.

## Lösung zu Aufgabe 3

Zuerst Versorgung und GND prüfen, dann SDA/SCL-Verdrahtung, anschließend Pull-ups und Pegel. Danach Adresse mit Datenblatt oder Scanner kontrollieren. Wenn weiterhin nichts funktioniert, prüfen, ob SDA oder SCL dauerhaft Low sind oder ein Teilnehmer den Bus blockiert.
