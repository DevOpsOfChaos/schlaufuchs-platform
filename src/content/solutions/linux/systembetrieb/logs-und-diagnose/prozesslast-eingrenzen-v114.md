---
title: Lösung – Prozesslast eingrenzen
description: Musterlösung zur Aufgabe über Prozesslast eingrenzen.
subject: linux
section: Feinstruktur Linux
topicPath:
- systembetrieb
- logs-und-diagnose
- prozesslast-eingrenzen-v114
taskId: v114-linux-prozesslast-eingrenzen-v114
relatedExercise: linux/systembetrieb/logs-und-diagnose/prozesslast-eingrenzen-v114
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

Im Szenario geht es um **Prozesslast eingrenzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Ressource ist tatsächlich knapp?

### 2. Begründung

Ein System reagiert langsam. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: top wird nur nach dem ersten Prozess beurteilt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
