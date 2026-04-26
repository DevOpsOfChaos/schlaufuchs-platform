---
title: Lösung – Cumulative Layout Shift vermeiden
description: Musterlösung zur Aufgabe über Cumulative Layout Shift vermeiden.
subject: web-development
section: Feinstruktur Web Development
topicPath:
- web-betrieb
- performance-a11y
- cumulative-layout-shift-vermeiden-v114
taskId: v114-web-development-cumulative-layout-shift-vermeiden-v114
relatedExercise: web-development/web-betrieb/performance-a11y/cumulative-layout-shift-vermeiden-v114
tags:
- web-development
- v114
- loesung
- web-betrieb
- performance-a11y
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Cumulative Layout Shift vermeiden**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist Größe vor dem Laden bekannt?

### 2. Begründung

Bilder springen beim Laden in die Seite. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Die Verschiebung wird als kleiner Schönheitsfehler abgetan.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
