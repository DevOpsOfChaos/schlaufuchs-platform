---
title: "Musterlösung – Session-Start vor Ausgabe begründen"
description: "Musterlösung zur Aufgabe INF-PHP-STATE-002."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "session-start-header-und-ausgabe-reihenfolge-verstehen", "sessionstart-vor-ausgabe-begruenden"]
taskId: "INF-PHP-STATE-002"
relatedExercise: "src/content/exercises/informatik/programmierung/php/session-start-header-und-ausgabe-reihenfolge-verstehen/sessionstart-vor-ausgabe-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Weil der Session-Start Informationen im HTTP-Header vorbereitet. Wenn vorher schon Seitentext ausgegeben wurde, wird dieser technische Teil fachlich zu spät gesetzt.

## Aufgabe 2

Weil Sessions und Cookies zur technischen Kommunikation zwischen Browser und Server gehören. Sie steuern Identifikation oder Zustand und sind nicht einfach sichtbarer Text im HTML-Inhalt.
