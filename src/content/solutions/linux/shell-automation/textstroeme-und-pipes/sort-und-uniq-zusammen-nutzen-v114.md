---
title: Lösung – sort und uniq zusammen nutzen
description: Musterlösung zur Aufgabe über sort und uniq zusammen nutzen.
subject: linux
section: Feinstruktur Linux
topicPath:
- shell-automation
- textstroeme-und-pipes
- sort-und-uniq-zusammen-nutzen-v114
taskId: v114-linux-sort-und-uniq-zusammen-nutzen-v114
relatedExercise: linux/shell-automation/textstroeme-und-pipes/sort-und-uniq-zusammen-nutzen-v114
tags:
- linux
- v114
- loesung
- shell-automation
- textstroeme-und-pipes
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **sort und uniq zusammen nutzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Sind gleiche Zeilen nebeneinander?

### 2. Begründung

Eine Liste enthält wiederholte Benutzernamen. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: uniq wird auf unsortierte Daten angewendet.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
