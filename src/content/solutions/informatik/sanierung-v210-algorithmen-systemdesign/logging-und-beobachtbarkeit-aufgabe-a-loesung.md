---
title: "Lösung: Logging und Beobachtbarkeit – Entwurfsaufgabe A"
description: "Musterlösung zur Entwurfsaufgabe A zu Logging und Beobachtbarkeit."
subject: "informatik"
section: "tests-debugging"
topicPath: ["tests-debugging", "logging-und-beobachtbarkeit"]
taskId: "INF-V210-025-A"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/logging-und-beobachtbarkeit-aufgabe-a"
tags: ["informatik", "tests-debugging", "logging-und-beobachtbarkeit", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Ein guter Entwurf zu **Logging und Beobachtbarkeit** beginnt mit einer klaren Trennung von Eingabe, Verarbeitung und Ausgabe. Erst danach wird entschieden, welche Datenstruktur, Schnittstelle oder Strategie passt.

Ein möglicher Aufbau:

1. Eingaben benennen, inklusive möglicher leerer oder fehlerhafter Werte.
2. Ausgabe oder erwarteten Zustand beschreiben.
3. Datenstruktur oder Ablauf nach Zugriffsmuster auswählen.
4. Einen Randfall festlegen, zum Beispiel leere Liste, doppelter Wert, unbekannter Schlüssel oder Zeitüberschreitung.
5. Kurz begründen, warum diese Entscheidung wartbar und prüfbar ist.

## Kontrolle

Die Lösung ist gut, wenn eine andere Person daraus einen Testfall ableiten kann und erkennt, warum die gewählte Struktur zur Aufgabe passt.
