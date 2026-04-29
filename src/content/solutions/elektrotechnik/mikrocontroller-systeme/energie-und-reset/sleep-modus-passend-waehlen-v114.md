---
title: "Lösung – Sleep-Modus passend wählen"
description: "Musterlösung zur Aufgabe über Sleep-Modus passend wählen."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath: ["mikrocontroller-systeme", "energie-und-reset", "sleep-modus-passend-waehlen-v114"]
taskId: "v114-elektrotechnik-sleep-modus-passend-waehlen-v114"
relatedExercise: "elektrotechnik/mikrocontroller-systeme/energie-und-reset/sleep-modus-passend-waehlen-v114"
tags: ["elektrotechnik", "Feinstruktur Elektrotechnik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Sleep-Modus passend wählen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welches Ereignis darf den Controller wecken?

### 2. Begründung

Ein Sensor soll nur selten messen. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Sleep wird aktiviert, ohne Wake-up zu planen.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
