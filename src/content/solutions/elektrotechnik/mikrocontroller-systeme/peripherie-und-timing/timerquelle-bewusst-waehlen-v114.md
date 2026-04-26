---
title: Lösung – Timerquelle bewusst wählen
description: Musterlösung zur Aufgabe über Timerquelle bewusst wählen.
subject: elektrotechnik
section: Feinstruktur Elektrotechnik
topicPath:
- mikrocontroller-systeme
- peripherie-und-timing
- timerquelle-bewusst-waehlen-v114
taskId: v114-elektrotechnik-timerquelle-bewusst-waehlen-v114
relatedExercise: elektrotechnik/mikrocontroller-systeme/peripherie-und-timing/timerquelle-bewusst-waehlen-v114
tags:
- elektrotechnik
- v114
- loesung
- mikrocontroller-systeme
- peripherie-und-timing
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Timerquelle bewusst wählen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Kommt der Takt aus dem Controller oder von außen?

### 2. Begründung

Ein Zähler soll Ereignisse zählen. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Jede Zeitmessung nutzt automatisch den Systemtakt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
