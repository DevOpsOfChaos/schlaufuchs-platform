---
title: Lösung – Speicherplatzproblem diagnostizieren
description: Musterlösung zur Aufgabe über Speicherplatzproblem diagnostizieren.
subject: linux
section: Feinstruktur Linux
topicPath:
- systembetrieb
- logs-und-diagnose
- speicherplatzproblem-diagnostizieren-v114
taskId: v114-linux-speicherplatzproblem-diagnostizieren-v114
relatedExercise: linux/systembetrieb/logs-und-diagnose/speicherplatzproblem-diagnostizieren-v114
tags:
- linux
- v114
- loesung
- systembetrieb
- logs-und-diagnose
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Speicherplatzproblem diagnostizieren**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist das Dateisystem voll oder ein Pfad besonders groß?

### 2. Begründung

Eine Partition ist voll. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur ein Verzeichnis wird geraten.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
