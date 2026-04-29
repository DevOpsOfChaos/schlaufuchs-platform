---
title: "Lösung – Restart-Policy begründen"
description: "Musterlösung zur Aufgabe über Restart-Policy begründen."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["systembetrieb", "systemd-und-dienste", "restart-policy-begruenden-v114"]
taskId: "v114-linux-restart-policy-begruenden-v114"
relatedExercise: "linux/systembetrieb/systemd-und-dienste/restart-policy-begruenden-v114"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Restart-Policy begründen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Wann ist Neustart sinnvoll und wann gefährlich?

### 2. Begründung

Ein Dienst darf nach Absturz neu starten. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Eine Fehlkonfiguration erzeugt Endlosschleifen.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
