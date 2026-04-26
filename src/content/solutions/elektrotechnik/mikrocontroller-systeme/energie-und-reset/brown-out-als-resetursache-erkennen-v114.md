---
title: Lösung – Brown-out als Resetursache erkennen
description: Musterlösung zur Aufgabe über Brown-out als Resetursache erkennen.
subject: elektrotechnik
section: Feinstruktur Elektrotechnik
topicPath:
- mikrocontroller-systeme
- energie-und-reset
- brown-out-als-resetursache-erkennen-v114
taskId: v114-elektrotechnik-brown-out-als-resetursache-erkennen-v114
relatedExercise: elektrotechnik/mikrocontroller-systeme/energie-und-reset/brown-out-als-resetursache-erkennen-v114
tags:
- elektrotechnik
- v114
- loesung
- mikrocontroller-systeme
- energie-und-reset
draft: false
---

## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Brown-out als Resetursache erkennen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Bricht die Versorgung kurz ein?

### 2. Begründung

Ein Controller startet beim Schalten einer Last neu. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Der Neustart wird als Schleifenfehler gedeutet.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
