---
title: Lösung – Port und Dienst trennen
description: Musterlösung zur Aufgabe über Port und Dienst trennen.
subject: linux
section: Feinstruktur Linux
topicPath:
- netzwerk-und-rechte
- firewall-und-dateirechte
- port-und-dienst-trennen-v114
taskId: v114-linux-port-und-dienst-trennen-v114
relatedExercise: linux/netzwerk-und-rechte/firewall-und-dateirechte/port-und-dienst-trennen-v114
tags:
- linux
- v114
- loesung
- netzwerk-und-rechte
- firewall-und-dateirechte
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Port und Dienst trennen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welcher Prozess lauscht wirklich?

### 2. Begründung

Port 8080 ist offen. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Der Port wird automatisch mit dem erwarteten Dienst gleichgesetzt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
