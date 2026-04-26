---
title: Lösung – Service-Status richtig lesen
description: Musterlösung zur Aufgabe über Service-Status richtig lesen.
subject: linux
section: Feinstruktur Linux
topicPath:
- systembetrieb
- systemd-und-dienste
- service-status-richtig-lesen-v114
taskId: v114-linux-service-status-richtig-lesen-v114
relatedExercise: linux/systembetrieb/systemd-und-dienste/service-status-richtig-lesen-v114
tags:
- linux
- v114
- loesung
- systembetrieb
- systemd-und-dienste
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Service-Status richtig lesen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist ein dauerhaft laufender Prozess erwartet?

### 2. Begründung

Ein Dienst startet und beendet sich sofort. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: exited wird automatisch als Fehler gelesen.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
