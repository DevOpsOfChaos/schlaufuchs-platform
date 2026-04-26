---
title: Lösung – Skriptargumente prüfen
description: Musterlösung zur Aufgabe über Skriptargumente prüfen.
subject: linux
section: Feinstruktur Linux
topicPath:
- shell-automation
- robuste-skripte
- skriptargumente-pruefen-v114
taskId: v114-linux-skriptargumente-pruefen-v114
relatedExercise: linux/shell-automation/robuste-skripte/skriptargumente-pruefen-v114
tags:
- linux
- v114
- loesung
- shell-automation
- robuste-skripte
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Skriptargumente prüfen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Eingaben müssen vor dem Start geprüft werden?

### 2. Begründung

Ein Skript erwartet genau einen Dateinamen. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Fehlende Argumente führen zu Folgefehlern.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
