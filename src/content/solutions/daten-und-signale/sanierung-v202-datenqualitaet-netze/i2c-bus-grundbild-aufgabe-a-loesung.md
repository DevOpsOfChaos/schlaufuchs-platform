---
title: "Lösung: I2C-Bus im Grundbild – Aufgabe A"
description: "Musterlösung zu i2c-bus im grundbild mit klarem Prüfweg."
subject: "daten-und-signale"
section: "sensorik"
topicPath: ["sensorik-und-schnittstellen", "busse", "i2c-bus-grundbild"]
taskId: "DS-V202-I2C-BUS-GRUNDBILD-A"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/i2c-bus-grundbild-aufgabe-a"
tags: ["daten-und-signale", "sensorik", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **I2C-Bus im Grundbild** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

I2C nutzt Adressen und gemeinsame Leitungen, wodurch mehrere Bausteine kontrolliert kommunizieren. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
