---
title: "Lösung: Pipeline von Rohdaten bis Dashboard – Aufgabe B"
description: "Musterlösung zu pipeline von rohdaten bis dashboard mit klarem Prüfweg."
subject: "daten-und-signale"
section: "betrieb"
topicPath: ["auswertung-und-betrieb", "pipeline", "rohdaten-bis-dashboard"]
taskId: "DS-V202-PIPELINE-ROHDATEN-BIS-DASHBOARD-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/pipeline-rohdaten-bis-dashboard-aufgabe-b"
tags: ["daten-und-signale", "betrieb", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Pipeline von Rohdaten bis Dashboard** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Daten durchlaufen mehrere Stationen; Fehler können an jeder Station entstehen. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
