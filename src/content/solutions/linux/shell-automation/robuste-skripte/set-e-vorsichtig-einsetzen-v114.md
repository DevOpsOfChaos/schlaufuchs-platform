---
title: "Lösung – set -e vorsichtig einsetzen"
description: "Musterlösung zur Aufgabe über set -e vorsichtig einsetzen."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["shell-automation", "robuste-skripte", "set-e-vorsichtig-einsetzen-v114"]
taskId: "v114-linux-set-e-vorsichtig-einsetzen-v114"
relatedExercise: "linux/shell-automation/robuste-skripte/set-e-vorsichtig-einsetzen-v114"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **set -e vorsichtig einsetzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist dieser Fehler erwartet oder kritisch?

### 2. Begründung

Ein Skript enthält Prüfkommandos. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Jeder Nicht-null-Status beendet ungewollt das Skript.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
