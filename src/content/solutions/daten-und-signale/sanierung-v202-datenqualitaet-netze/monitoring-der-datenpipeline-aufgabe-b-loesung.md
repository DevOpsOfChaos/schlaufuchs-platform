---
title: "Lösung: Monitoring der Datenpipeline – Aufgabe B"
description: "Musterlösung zu monitoring der datenpipeline mit klarem Prüfweg."
subject: "daten-und-signale"
section: "betrieb"
topicPath: ["auswertung-und-betrieb", "betrieb", "monitoring-der-datenpipeline"]
taskId: "DS-V202-MONITORING-DER-DATENPIPELINE-B"
relatedExercise: "daten-und-signale/sanierung-v202-datenqualitaet-netze/monitoring-der-datenpipeline-aufgabe-b"
tags: ["daten-und-signale", "betrieb", "v202", "loesung"]
draft: false
---
## Musterlösung

Ein sauberer Ansatz zu **Monitoring der Datenpipeline** beginnt nicht mit einer spontanen Bewertung des Werts, sondern mit der Datenstrecke.

Eine mögliche Struktur:

1. **Quelle:** Der Wert entsteht an einem Sensor, Dienst, Protokoll oder Verarbeitungsschritt.
2. **Datenform:** Einheit, Zeitstempel, Format und Gültigkeitsbereich werden sichtbar notiert.
3. **Kontrolle:** Plausibilität, fehlende Werte, Grenzwerte oder Protokollfehler werden geprüft.
4. **Entscheidung:** Erst danach wird festgelegt, ob der Wert genutzt, verworfen oder markiert wird.

## Begründung

Nicht nur Geräte, auch Datenflüsse brauchen eigene Überwachung. Deshalb reicht es nicht, nur den Endwert zu betrachten. Wichtig ist, welche Annahmen unterwegs gelten und wo ein Fehlerbild entstehen kann.

## Selbstkontrolle

- Wurde Quelle und Mess-/Datenform getrennt?
- Ist mindestens ein konkreter Prüfpunkt genannt?
- Ist die Folgeentscheidung klar von der Beobachtung getrennt?
