---
title: Lösung – Rollback-Bedingung definieren
description: Musterlösung zur Aufgabe über Rollback-Bedingung definieren.
subject: web-development
section: Feinstruktur Web Development
topicPath:
- web-betrieb
- release-monitoring
- rollback-bedingung-definieren-v114
taskId: v114-web-development-rollback-bedingung-definieren-v114
relatedExercise: web-development/web-betrieb/release-monitoring/rollback-bedingung-definieren-v114
tags:
- web-development
- v114
- loesung
- web-betrieb
- release-monitoring
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Rollback-Bedingung definieren**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welcher Messwert löst Rücknahme aus?

### 2. Begründung

Eine neue Version beeinflusst Checkout. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Rollback wird erst im Notfall diskutiert.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
