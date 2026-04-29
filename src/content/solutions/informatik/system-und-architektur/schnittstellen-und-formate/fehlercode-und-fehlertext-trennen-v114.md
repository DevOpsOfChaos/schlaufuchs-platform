---
title: "Lösung – Fehlercode und Fehlertext trennen"
description: "Musterlösung zur Aufgabe über Fehlercode und Fehlertext trennen."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["system-und-architektur", "schnittstellen-und-formate", "fehlercode-und-fehlertext-trennen-v114"]
taskId: "v114-informatik-fehlercode-und-fehlertext-trennen-v114"
relatedExercise: "informatik/system-und-architektur/schnittstellen-und-formate/fehlercode-und-fehlertext-trennen-v114"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Fehlercode und Fehlertext trennen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Was wertet der Client automatisch aus?

### 2. Begründung

Eine API antwortet mit Status und Nachricht. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur ein schöner Satz wird zurückgegeben.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
