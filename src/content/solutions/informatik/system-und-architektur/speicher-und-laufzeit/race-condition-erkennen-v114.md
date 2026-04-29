---
title: "Lösung – Race Condition erkennen"
description: "Musterlösung zur Aufgabe über Race Condition erkennen."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["system-und-architektur", "speicher-und-laufzeit", "race-condition-erkennen-v114"]
taskId: "v114-informatik-race-condition-erkennen-v114"
relatedExercise: "informatik/system-und-architektur/speicher-und-laufzeit/race-condition-erkennen-v114"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Race Condition erkennen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Kann die Reihenfolge der Zugriffe wechseln?

### 2. Begründung

Zwei Abläufe ändern denselben Zähler. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Der Fehler wird als Zufall abgetan.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
