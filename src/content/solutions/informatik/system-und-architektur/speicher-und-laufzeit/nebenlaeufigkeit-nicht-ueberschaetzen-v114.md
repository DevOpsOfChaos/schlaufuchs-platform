---
title: Lösung – Nebenläufigkeit nicht überschätzen
description: Musterlösung zur Aufgabe über Nebenläufigkeit nicht überschätzen.
subject: informatik
section: Feinstruktur Informatik
topicPath:
- system-und-architektur
- speicher-und-laufzeit
- nebenlaeufigkeit-nicht-ueberschaetzen-v114
taskId: v114-informatik-nebenlaeufigkeit-nicht-ueberschaetzen-v114
relatedExercise: informatik/system-und-architektur/speicher-und-laufzeit/nebenlaeufigkeit-nicht-ueberschaetzen-v114
tags:
- informatik
- v114
- loesung
- system-und-architektur
- speicher-und-laufzeit
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Nebenläufigkeit nicht überschätzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Wartet das Programm auf CPU oder auf etwas Externes?

### 2. Begründung

Ein Programm wartet auf Netzwerkantworten. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Mehr Threads werden automatisch als schneller angenommen.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
