---
title: "Musterlösung – Session-Ende als sauberen Aufräumablauf beschreiben"
description: "Musterlösung zur Aufgabe INF-PHP-STATE-004."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "sessions-sauber-beenden-und-aufraeumen", "session-ende-als-sauberen-aufr├ñumablauf-beschreiben"]
taskId: "INF-PHP-STATE-004"
relatedExercise: "src/content/exercises/informatik/programmierung/php/sessions-sauber-beenden-und-aufraeumen/session-ende-als-sauberen-aufräumablauf-beschreiben.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Session-Daten sind die gespeicherten Werte auf dem Server. Die Session-ID identifiziert die Sitzung. Das Session-Cookie transportiert die ID oft zwischen Browser und Server.

## Aufgabe 2

Sinnvoll ist: vorhandene Session korrekt ansprechen → Daten leeren → Sitzung serverseitig beenden → Session-ID/Cookie mitdenken.

## Aufgabe 3

Weil dann möglicherweise noch weitere Sitzungsdaten oder die Identifikation der Sitzung bestehen bleiben.