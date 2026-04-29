---
title: "Lösung – UART-Baudrate mit Taktfehler prüfen"
description: "Musterlösung zur Aufgabe über UART-Baudrate mit Taktfehler prüfen."
subject: "elektrotechnik"
section: "Feinstruktur Elektrotechnik"
topicPath: ["mikrocontroller-systeme", "peripherie-und-timing", "uart-baudrate-mit-taktfehler-pruefen-v114"]
taskId: "v114-elektrotechnik-uart-baudrate-mit-taktfehler-pruefen-v114"
relatedExercise: "elektrotechnik/mikrocontroller-systeme/peripherie-und-timing/uart-baudrate-mit-taktfehler-pruefen-v114"
tags: ["elektrotechnik", "Feinstruktur Elektrotechnik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **UART-Baudrate mit Taktfehler prüfen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Passt die Baudrate zum realen Controllertakt?

### 2. Begründung

Serielle Zeichen kommen verstümmelt an. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: Nur die Verdrahtung wird geprüft.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
