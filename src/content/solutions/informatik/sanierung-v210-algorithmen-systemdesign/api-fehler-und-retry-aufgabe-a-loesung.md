---
title: "Lösung: API-Fehler und Retry – Entwurfsaufgabe A"
description: "Musterlösung zur Entwurfsaufgabe A zu API-Fehler und Retry."
subject: "informatik"
section: "web-systeme"
topicPath: ["web-systeme", "api-fehler-und-retry"]
taskId: "INF-V210-073-A"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/api-fehler-und-retry-aufgabe-a"
tags: ["informatik", "web-systeme", "api-fehler-und-retry", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Ein guter Entwurf zu **API-Fehler und Retry** beginnt mit einer klaren Trennung von Eingabe, Verarbeitung und Ausgabe. Erst danach wird entschieden, welche Datenstruktur, Schnittstelle oder Strategie passt.

Ein möglicher Aufbau:

1. Eingaben benennen, inklusive möglicher leerer oder fehlerhafter Werte.
2. Ausgabe oder erwarteten Zustand beschreiben.
3. Datenstruktur oder Ablauf nach Zugriffsmuster auswählen.
4. Einen Randfall festlegen, zum Beispiel leere Liste, doppelter Wert, unbekannter Schlüssel oder Zeitüberschreitung.
5. Kurz begründen, warum diese Entscheidung wartbar und prüfbar ist.

## Kontrolle

Die Lösung ist gut, wenn eine andere Person daraus einen Testfall ableiten kann und erkennt, warum die gewählte Struktur zur Aufgabe passt.
