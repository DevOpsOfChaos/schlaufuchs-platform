---
title: "Musterlösung – Session-ID und Sessiondaten sauber trennen"
description: "Musterlösung zur Aufgabe INF-PHP-SESSION-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "session-id-und-serverseitigen-zustand-verstehen", "session-id-und-sessiondaten-sauber-trennen"]
taskId: "INF-PHP-SESSION-003"
relatedExercise: "src/content/exercises/informatik/programmierung/php/session-id-und-serverseitigen-zustand-verstehen/session-id-und-sessiondaten-sauber-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Lösung

Die Session-ID ist der Wiedererkennungs-Schlüssel für eine Sitzung. Die Session-Daten sind die eigentlichen serverseitig gespeicherten Inhalte, etwa Loginstatus oder Warenkorbinhalt.

Über die Session-ID kann der Server mehrere Requests derselben Sitzung zuordnen und dadurch passende Daten wie einen Warenkorb wiederfinden.
