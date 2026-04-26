---
title: Lösung – API-Fehlerzustand modellieren
description: Musterlösung zur Aufgabe über API-Fehlerzustand modellieren.
subject: informatik
section: Feinstruktur Informatik
topicPath:
- programmierpraxis
- funktionen-und-schnittstellen
- api-fehlerzustand-modellieren-v114
taskId: v114-informatik-api-fehlerzustand-modellieren-v114
relatedExercise: informatik/programmierpraxis/funktionen-und-schnittstellen/api-fehlerzustand-modellieren-v114
tags:
- informatik
- v114
- loesung
- programmierpraxis
- funktionen-und-schnittstellen
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **API-Fehlerzustand modellieren**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Fehlerart muss der Aufrufer unterscheiden?

### 2. Begründung

Eine Datei kann fehlen oder ungültig sein. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Alle Fehler werden mit demselben Rückgabewert verschluckt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
