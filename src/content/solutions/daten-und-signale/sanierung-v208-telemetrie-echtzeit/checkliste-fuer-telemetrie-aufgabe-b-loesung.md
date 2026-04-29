---
title: "Lösung: Checkliste für Telemetrie – Aufgabe B"
description: "Musterlösung zu checkliste für telemetrie mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "betrieb"
topicPath: ["betrieb-und-diagnose", "checkliste-fuer-telemetrie"]
taskId: "DS-066-V208-B"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/checkliste-fuer-telemetrie-aufgabe-b"
tags: ["daten-und-signale", "betrieb", "telemetrie", "echtzeit", "v208", "loesung"]
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
