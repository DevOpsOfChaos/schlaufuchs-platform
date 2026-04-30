---
title: "Loesung – Session Ende als sauberen Aufraeumablauf beschreiben"
description: "Musterloesung zur Aufgabe ueber Session Ende, Cookie und serverseitiges Aufraeumen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "sessions-sauber-beenden-und-aufraeumen", "session-ende-als-sauberen-aufraeumablauf-beschreiben"]
taskId: "INF-PHP-STATE-010"
relatedExercise: "src/content/exercises/informatik/programmierung/php/sessions-sauber-beenden-und-aufraeumen/session-ende-als-sauberen-aufraeumablauf-beschreiben"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Eine sinnvolle Reihenfolge ist:
1. Session zugreifbar machen
2. Session Daten leeren
3. Session serverseitig beenden
4. Session Cookie auf Clientseite mitdenken

So wird erst der Zugang zur aktuellen Sitzung sichergestellt, dann werden Inhalte entfernt und danach der eigentliche Sitzungsmechanismus sauber beendet.

### Aufgabe 2

Nur eine einzelne Variable zurueckzusetzen loescht noch nicht automatisch alle Session Daten und auch nicht die ganze Session Identifikation. Darum kann die Sitzung fachlich noch weiterbestehen.

### Aufgabe 3

Ein Session Ende ist ein Aufraeumablauf, weil mehrere Teile beteiligt sind: serverseitige Daten, die Session selbst und haeufig auch das Cookie mit der Session ID. Genau deshalb reicht ein einzelner Knopf oder ein einzelner Befehl oft nicht als ganze Erklaerung.
