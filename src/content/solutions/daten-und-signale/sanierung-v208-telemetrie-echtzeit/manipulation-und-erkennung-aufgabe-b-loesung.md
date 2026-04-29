---
title: "Lösung: Manipulation und Erkennung – Aufgabe B"
description: "Musterlösung zu manipulation und erkennung mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "sicherheit"
topicPath: ["sicherheit-und-vertrauen", "manipulation-und-erkennung"]
taskId: "DS-057-V208-B"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/manipulation-und-erkennung-aufgabe-b"
tags: ["daten-und-signale", "sicherheit", "telemetrie", "echtzeit", "v208", "loesung"]
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
