---
title: "Lösung: Rauschen und Glättung – Aufgabe A"
description: "Musterlösung zu rauschen und glättung mit Datenqualitäts- und Diagnosefokus."
subject: "daten-und-signale"
section: "signalverarbeitung"
topicPath: ["signalverarbeitung", "rauschen-und-glaettung"]
taskId: "DS-010-V208-A"
relatedExercise: "daten-und-signale/sanierung-v208-telemetrie-echtzeit/rauschen-und-glaettung-aufgabe-a"
tags: ["daten-und-signale", "signalverarbeitung", "telemetrie", "echtzeit", "v208", "loesung"]
draft: false
---
## Musterlösung

Ein guter Prüfweg trennt Beobachtung, Datenweg und Entscheidung.

Eine mögliche Antwort:

1. **Quelle:** Der Messwert stammt aus einem klar benannten Sensor, Gerät oder Ereignis.
2. **Datenweg:** Vor der Bewertung werden Zeitstempel, Einheit, Geräte-ID und Übertragungszustand geprüft.
3. **Fehlerbild:** Möglich sind fehlende Werte, Sprünge, veraltete Daten, falsche Skalierung oder ein gestörter Kommunikationsweg.
4. **Entscheidung:** Erst danach wird entschieden, ob ein Alarm, eine Wiederholung, eine Dokumentation oder eine technische Prüfung nötig ist.

## Begründung

So bleibt die Diagnose nachvollziehbar. Ein einzelner Wert erklärt selten allein die Ursache; erst der Zusammenhang aus Messpunkt, Zeitbezug und Qualität macht die Entscheidung belastbar.
