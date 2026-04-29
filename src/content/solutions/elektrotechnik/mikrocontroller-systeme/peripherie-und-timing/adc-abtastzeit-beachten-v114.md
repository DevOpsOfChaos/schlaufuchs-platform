---
title: "Lösung – ADC-Abtastzeit beachten"
description: "Musterlösung zur Aufgabe über ADC-Abtastzeit beachten."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath: ["mikrocontroller-systeme", "peripherie-und-timing", "adc-abtastzeit-beachten-v114"]
taskId: "v114-elektrotechnik-adc-abtastzeit-beachten-v114"
relatedExercise: "elektrotechnik/mikrocontroller-systeme/peripherie-und-timing/adc-abtastzeit-beachten-v114"
tags: ["elektrotechnik", "Feinstruktur Elektrotechnik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **ADC-Abtastzeit beachten**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Hat der ADC-Eingang genug Zeit zum Laden?

### 2. Begründung

Ein hochohmiger Sensor liefert schwankende ADC-Werte. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur die Bitauflösung wird geprüft.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
