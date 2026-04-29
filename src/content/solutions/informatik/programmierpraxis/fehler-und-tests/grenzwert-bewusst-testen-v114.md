---
title: "Lösung – Grenzwert bewusst testen"
description: "Musterlösung zur Aufgabe über Grenzwert bewusst testen."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["programmierpraxis", "fehler-und-tests", "grenzwert-bewusst-testen-v114"]
taskId: "v114-informatik-grenzwert-bewusst-testen-v114"
relatedExercise: "informatik/programmierpraxis/fehler-und-tests/grenzwert-bewusst-testen-v114"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Grenzwert bewusst testen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Was passiert am kleinsten und größten sinnvollen Wert?

### 2. Begründung

Eine Liste kann leer, ein Element lang oder sehr groß sein. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur typische mittlere Fälle werden getestet.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
