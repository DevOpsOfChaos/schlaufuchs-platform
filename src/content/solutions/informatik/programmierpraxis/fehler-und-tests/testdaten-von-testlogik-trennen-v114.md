---
title: "Lösung – Testdaten von Testlogik trennen"
description: "Musterlösung zur Aufgabe über Testdaten von Testlogik trennen."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["programmierpraxis", "fehler-und-tests", "testdaten-von-testlogik-trennen-v114"]
taskId: "v114-informatik-testdaten-von-testlogik-trennen-v114"
relatedExercise: "informatik/programmierpraxis/fehler-und-tests/testdaten-von-testlogik-trennen-v114"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Testdaten von Testlogik trennen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Fälle gehören als Tabelle zusammen?

### 2. Begründung

Mehrere Fälle prüfen dieselbe Regel. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Daten und Erwartung stehen versteckt im Testcode.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
