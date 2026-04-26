---
title: Lösung – Importformat robust prüfen
description: Musterlösung zur Aufgabe über Importformat robust prüfen.
subject: informatik
section: Feinstruktur Informatik
topicPath:
- system-und-architektur
- schnittstellen-und-formate
- importformat-robust-pruefen-v114
taskId: v114-informatik-importformat-robust-pruefen-v114
relatedExercise: informatik/system-und-architektur/schnittstellen-und-formate/importformat-robust-pruefen-v114
tags:
- informatik
- v114
- loesung
- system-und-architektur
- schnittstellen-und-formate
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Importformat robust prüfen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Welche Mindeststruktur muss jede Zeile erfüllen?

### 2. Begründung

Eine CSV-Datei enthält leere Spalten. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Parsingfehler werden als selten ignoriert.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
