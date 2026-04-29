---
title: "Lösung – Interruptquelle eindeutig zuordnen"
description: "Musterlösung zur Aufgabe über Interruptquelle eindeutig zuordnen."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath: ["mikrocontroller-systeme", "peripherie-und-timing", "interruptquelle-eindeutig-zuordnen-v114"]
taskId: "v114-elektrotechnik-interruptquelle-eindeutig-zuordnen-v114"
relatedExercise: "elektrotechnik/mikrocontroller-systeme/peripherie-und-timing/interruptquelle-eindeutig-zuordnen-v114"
tags: ["elektrotechnik", "Feinstruktur Elektrotechnik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Interruptquelle eindeutig zuordnen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welches Flag zeigt die tatsächliche Quelle?

### 2. Begründung

Mehrere Interrupts sind aktiv. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Jede ISR wird verdächtigt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
