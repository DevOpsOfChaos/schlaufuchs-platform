---
title: "Musterlösung – Cookie oder Session für einen Anwendungsfall wählen"
description: "Musterlösung zur Aufgabe INF-PHP-STATE-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "cookies-und-sessions-in-php-unterscheiden", "cookie-oder-session-fuer-anwendungsfall-waehlen"]
taskId: "INF-PHP-STATE-001"
relatedExercise: "src/content/exercises/informatik/programmierung/php/cookies-und-sessions-in-php-unterscheiden/cookie-oder-session-fuer-anwendungsfall-waehlen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Spracheinstellung merken → eher Cookie. Warenkorb halten → eher Session. Benutzer nach Login wiedererkennen → typischerweise Session mit Kennung.

## Aufgabe 2

HTTP behandelt einzelne Requests unabhängig. Ohne Zusatzmechanismen gibt es also keine eingebaute Erinnerung an vorherige Aufrufe.

## Aufgabe 3

Cookie- und Session-Funktionen arbeiten über Header. Diese Informationen müssen gesetzt werden, bevor normale Ausgabe an den Browser geschickt wird.
