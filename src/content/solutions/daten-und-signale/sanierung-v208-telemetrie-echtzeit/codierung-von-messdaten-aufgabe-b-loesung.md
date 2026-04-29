---
title: "Lösung: Codierung von Messdaten – Aufgabe B"
description: "Musterlösung zu codierung von messdaten mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "digitalisierung"
topicPath: ["digitalisierung-und-codierung", "codierung-von-messdaten"]
taskId: "DS-018-V208-B"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/codierung-von-messdaten-aufgabe-b"
tags: ["daten-und-signale", "digitalisierung", "telemetrie", "echtzeit", "v208", "loesung"]
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
