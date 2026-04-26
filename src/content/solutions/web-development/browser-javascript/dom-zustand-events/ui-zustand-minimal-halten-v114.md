---
title: Lösung – UI-Zustand minimal halten
description: Musterlösung zur Aufgabe über UI-Zustand minimal halten.
subject: web-development
section: Feinstruktur Web Development
topicPath:
- browser-javascript
- dom-zustand-events
- ui-zustand-minimal-halten-v114
taskId: v114-web-development-ui-zustand-minimal-halten-v114
relatedExercise: web-development/browser-javascript/dom-zustand-events/ui-zustand-minimal-halten-v114
tags:
- web-development
- v114
- loesung
- browser-javascript
- dom-zustand-events
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **UI-Zustand minimal halten**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist dieser Zustand Quelle oder Ableitung?

### 2. Begründung

Ein Filter kann aus Suchtext und Liste berechnet werden. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Berechnete Werte werden doppelt gespeichert.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
