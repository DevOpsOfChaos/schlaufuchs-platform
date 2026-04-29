---
title: "Lösung: Entprellen und Flanken erkennen – Aufgabe A"
description: "Musterlösung zu entprellen und flanken erkennen mit klarem Prüfweg."
subject: "daten-und-signale"
section: "sensorik"
topicPath: ["sensorik-und-schnittstellen", "signale", "entprellen-und-flanken"]
taskId: "DS-V202-ENTPRELLEN-UND-FLANKEN-A"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/entprellen-und-flanken-aufgabe-a"
tags: ["daten-und-signale", "sensorik", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Entprellen und Flanken erkennen** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Mechanische Signale können mehrfach wechseln, obwohl nur eine Aktion gemeint ist. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
