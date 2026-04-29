---
title: "Lösung: Kalibrierung und Offset – Aufgabe B"
description: "Musterlösung zu kalibrierung und offset mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "messkette"
topicPath: ["messkette-und-sensorik", "kalibrierung-und-offset"]
taskId: "DS-015-V208-B"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/kalibrierung-und-offset-aufgabe-b"
tags: ["daten-und-signale", "messkette", "telemetrie", "echtzeit", "v208", "loesung"]
draft: false
---
## Musterlösung

Für den Vergleich reichen die sichtbaren Werte allein nicht aus.

Sinnvolle Prüfpunkte sind:

- **Einheit und Skalierung:** Stimmen Einheit, Wertebereich und Umrechnung?
- **Zeitbezug:** Sind die Daten aktuell und in der richtigen Reihenfolge?
- **Quelle:** Kommen beide Situationen vom gleichen Messpunkt oder Gerät?
- **Übertragung:** Gibt es Paketverlust, Timeout, Pufferung oder Nachlieferung?
- **Reaktion:** Ist klar, welche Grenze eine Warnung und welche Grenze eine Störung auslöst?

## Begründung

Situation B muss nicht automatisch ein echter Anlagenfehler sein. Sie kann auch durch Übertragung, Skalierung oder fehlende Aktualität entstehen. Erst die zusätzlichen Prüfpunkte trennen Messfehler, Datenproblem und fachlich relevante Abweichung.
