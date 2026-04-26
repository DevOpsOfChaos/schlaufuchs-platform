---
title: Lösung – Feature Flag als Sicherheitsnetz nutzen
description: Musterlösung zur Aufgabe über Feature Flag als Sicherheitsnetz nutzen.
subject: web-development
section: Feinstruktur Web Development
topicPath:
- web-betrieb
- release-monitoring
- feature-flag-als-sicherheitsnetz-nutzen-v114
taskId: v114-web-development-feature-flag-als-sicherheitsnetz-nutzen-v114
relatedExercise: web-development/web-betrieb/release-monitoring/feature-flag-als-sicherheitsnetz-nutzen-v114
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

Im Szenario geht es um **Feature Flag als Sicherheitsnetz nutzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Kann die Funktion ohne neuen Deploy deaktiviert werden?

### 2. Begründung

Eine Änderung soll nur für wenige Nutzer sichtbar sein. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Release und Aktivierung sind untrennbar.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
