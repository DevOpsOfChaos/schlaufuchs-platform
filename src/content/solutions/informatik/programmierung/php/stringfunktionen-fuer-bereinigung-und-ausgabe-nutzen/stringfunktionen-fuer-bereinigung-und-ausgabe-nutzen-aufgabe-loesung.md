---
title: "Musterlösung – Stringfunktionen in PHP passend auswählen"
description: "Musterlösung zur Aufgabe INF-PHP-ADV-010."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "stringfunktionen-fuer-bereinigung-und-ausgabe-nutzen", "stringfunktionen-fuer-bereinigung-und-ausgabe-nutzen-aufgabe"]
taskId: "INF-PHP-ADV-010"
relatedExercise: "src/content/exercises/informatik/programmierung/php/stringfunktionen-fuer-bereinigung-und-ausgabe-nutzen/stringfunktionen-fuer-bereinigung-und-ausgabe-nutzen-aufgabe.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

- Leerzeichen am Rand entfernen → `trim()`
- Länge prüfen → `strlen()`
- Text in Teile zerlegen → `explode()`
- Inhalt sicher im HTML ausgeben → `htmlspecialchars()`

## Aufgabe 2

`htmlspecialchars()` schützt vor problematischer HTML-Ausgabe, indem Sonderzeichen umgewandelt werden. Es prüft aber nicht automatisch, ob der Inhalt fachlich zulässig oder vollständig ist.
