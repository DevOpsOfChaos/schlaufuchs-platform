---
title: Lösung – HTTP-Status vor JSON prüfen
description: Musterlösung zur Aufgabe über HTTP-Status vor JSON prüfen.
subject: web-development
section: Feinstruktur Web Development
topicPath:
- browser-javascript
- fetch-und-fehler
- http-status-vor-json-pruefen-v114
taskId: v114-web-development-http-status-vor-json-pruefen-v114
relatedExercise: web-development/browser-javascript/fetch-und-fehler/http-status-vor-json-pruefen-v114
tags:
- web-development
- v114
- loesung
- browser-javascript
- fetch-und-fehler
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **HTTP-Status vor JSON prüfen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Ist die Antwort erfolgreich und im erwarteten Format?

### 2. Begründung

Eine API liefert 404 mit HTML-Fehlerseite. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: response.json wird blind aufgerufen.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
