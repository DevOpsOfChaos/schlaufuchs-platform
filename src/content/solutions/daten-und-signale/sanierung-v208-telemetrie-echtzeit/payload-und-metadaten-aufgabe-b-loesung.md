---
title: "Lösung: Payload und Metadaten – Aufgabe B"
description: "Musterlösung zu payload und metadaten mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "protokolle"
topicPath: ["protokolle-und-integritaet", "payload-und-metadaten"]
taskId: "DS-032-V208-B"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/payload-und-metadaten-aufgabe-b"
tags: ["daten-und-signale", "protokolle", "telemetrie", "echtzeit", "v208", "loesung"]
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
