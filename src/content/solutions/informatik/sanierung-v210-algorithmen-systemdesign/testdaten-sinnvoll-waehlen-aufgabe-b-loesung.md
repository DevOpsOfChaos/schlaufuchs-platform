---
title: "Lösung: Testdaten sinnvoll wählen – Entwurfsaufgabe B"
description: "Musterlösung zur Entwurfsaufgabe B zu Testdaten sinnvoll wählen."
subject: "informatik"
section: "tests-debugging"
topicPath: ["tests-debugging", "testdaten-sinnvoll-waehlen"]
taskId: "INF-V210-027-B"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/testdaten-sinnvoll-waehlen-aufgabe-b"
tags: ["informatik", "tests-debugging", "testdaten-sinnvoll-waehlen", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Eine sinnvolle Verbesserung zu **Testdaten sinnvoll wählen** macht sichtbar, wo die bisherige Lösung unklar ist und wie sie prüfbarer wird.

Mögliche Rückmeldung:

> Der Normalfall ist erkennbar, aber die Begründung fehlt. Ergänze, welche Eingaben erlaubt sind, welche Randfälle geprüft werden und warum die gewählte Struktur oder Schnittstelle passend ist. Zusätzlich sollte ein kurzer Testfall den wichtigsten Fehlerfall abdecken.

## Konkrete Ergänzungen

- Namen so wählen, dass Verantwortung und Datenfluss sichtbar werden.
- Fehlerfälle nicht erst im Kommentar erwähnen, sondern im Ablauf berücksichtigen.
- Testdaten so wählen, dass Normalfall und Randfall getrennt sichtbar sind.
- Dokumentation auf Entscheidungen konzentrieren, nicht auf jede einzelne Codezeile.

## Kontrolle

Die Verbesserung ist gelungen, wenn der nächste Leser erkennt, welches Problem gelöst wird, welche Annahmen gelten und wie Fehler sichtbar werden.
