---
title: "Lösung: Sensorfusion einfach einordnen – Aufgabe B"
description: "Musterlösung zu sensorfusion einfach einordnen mit klarem Prüfweg."
subject: "daten-und-signale"
section: "sensorik"
topicPath: ["sensorik-und-schnittstellen", "sensorfusion", "sensorfusion-einfach"]
taskId: "DS-V202-SENSORFUSION-EINFACH-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/sensorfusion-einfach-aufgabe-b"
tags: ["daten-und-signale", "sensorik", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Sensorfusion einfach einordnen** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Mehrere Sensoren können sich ergänzen, wenn Unsicherheit und Gewichtung bewusst betrachtet werden. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
