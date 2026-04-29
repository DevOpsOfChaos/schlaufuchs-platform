---
title: "Lösung: Audit-Log und Nachvollziehbarkeit – Entwurfsaufgabe A"
description: "Musterlösung zur Entwurfsaufgabe A zu Audit-Log und Nachvollziehbarkeit."
subject: "informatik"
section: "sicherheit"
topicPath: ["sicherheit", "audit-log-und-nachvollziehbarkeit"]
taskId: "INF-V210-055-A"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/audit-log-und-nachvollziehbarkeit-aufgabe-a"
tags: ["informatik", "sicherheit", "audit-log-und-nachvollziehbarkeit", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Ein guter Entwurf zu **Audit-Log und Nachvollziehbarkeit** beginnt mit einer klaren Trennung von Eingabe, Verarbeitung und Ausgabe. Erst danach wird entschieden, welche Datenstruktur, Schnittstelle oder Strategie passt.

Ein möglicher Aufbau:

1. Eingaben benennen, inklusive möglicher leerer oder fehlerhafter Werte.
2. Ausgabe oder erwarteten Zustand beschreiben.
3. Datenstruktur oder Ablauf nach Zugriffsmuster auswählen.
4. Einen Randfall festlegen, zum Beispiel leere Liste, doppelter Wert, unbekannter Schlüssel oder Zeitüberschreitung.
5. Kurz begründen, warum diese Entscheidung wartbar und prüfbar ist.

## Kontrolle

Die Lösung ist gut, wenn eine andere Person daraus einen Testfall ableiten kann und erkennt, warum die gewählte Struktur zur Aufgabe passt.
