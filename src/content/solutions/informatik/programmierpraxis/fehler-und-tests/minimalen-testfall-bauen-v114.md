---
title: Lösung – Minimalen Testfall bauen
description: Musterlösung zur Aufgabe über Minimalen Testfall bauen.
subject: informatik
section: Feinstruktur Informatik
topicPath:
- programmierpraxis
- fehler-und-tests
- minimalen-testfall-bauen-v114
taskId: v114-informatik-minimalen-testfall-bauen-v114
relatedExercise: informatik/programmierpraxis/fehler-und-tests/minimalen-testfall-bauen-v114
tags:
- informatik
- v114
- loesung
- programmierpraxis
- fehler-und-tests
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Minimalen Testfall bauen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Eingabe zeigt den Fehler gerade noch?

### 2. Begründung

Ein Programm scheitert nur bei einer bestimmten Eingabe. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Der komplette Produktionsfall wird ungefiltert getestet.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
