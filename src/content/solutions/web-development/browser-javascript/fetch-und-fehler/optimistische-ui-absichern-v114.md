---
title: "Lösung – Optimistische UI absichern"
description: "Musterlösung zur Aufgabe über Optimistische UI absichern."
subject: "web-development"
section: "Feinstruktur Web Development"
topicPath: ["browser-javascript", "fetch-und-fehler", "optimistische-ui-absichern-v114"]
taskId: "v114-web-development-optimistische-ui-absichern-v114"
relatedExercise: "web-development/browser-javascript/fetch-und-fehler/optimistische-ui-absichern-v114"
tags: ["web-development", "Feinstruktur Web Development", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Optimistische UI absichern**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Wie wird die Änderung zurückgenommen?

### 2. Begründung

Ein Like wird sofort angezeigt. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Fehlerfall stellt den alten Zustand nicht wieder her.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
