---
title: "Lösung: Rate Limit und Fair Use – Entwurfsaufgabe B"
description: "Musterlösung zur Entwurfsaufgabe B zu Rate Limit und Fair Use."
subject: "informatik"
section: "web-systeme"
topicPath: ["web-systeme", "rate-limit-und-fair-use"]
taskId: "INF-V210-075-B"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/rate-limit-und-fair-use-aufgabe-b"
tags: ["informatik", "web-systeme", "rate-limit-und-fair-use", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Eine sinnvolle Verbesserung zu **Rate Limit und Fair Use** macht sichtbar, wo die bisherige Lösung unklar ist und wie sie prüfbarer wird.

Mögliche Rückmeldung:

> Der Normalfall ist erkennbar, aber die Begründung fehlt. Ergänze, welche Eingaben erlaubt sind, welche Randfälle geprüft werden und warum die gewählte Struktur oder Schnittstelle passend ist. Zusätzlich sollte ein kurzer Testfall den wichtigsten Fehlerfall abdecken.

## Konkrete Ergänzungen

- Namen so wählen, dass Verantwortung und Datenfluss sichtbar werden.
- Fehlerfälle nicht erst im Kommentar erwähnen, sondern im Ablauf berücksichtigen.
- Testdaten so wählen, dass Normalfall und Randfall getrennt sichtbar sind.
- Dokumentation auf Entscheidungen konzentrieren, nicht auf jede einzelne Codezeile.

## Kontrolle

Die Verbesserung ist gelungen, wenn der nächste Leser erkennt, welches Problem gelöst wird, welche Annahmen gelten und wie Fehler sichtbar werden.
