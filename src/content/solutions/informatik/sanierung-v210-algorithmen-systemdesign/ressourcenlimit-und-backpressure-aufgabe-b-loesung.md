---
title: "Lösung: Ressourcenlimit und Backpressure – Entwurfsaufgabe B"
description: "Musterlösung zur Entwurfsaufgabe B zu Ressourcenlimit und Backpressure."
subject: "informatik"
section: "systeme"
topicPath: ["systeme", "ressourcenlimit-und-backpressure"]
taskId: "INF-V210-048-B"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/ressourcenlimit-und-backpressure-aufgabe-b"
tags: ["informatik", "systeme", "ressourcenlimit-und-backpressure", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Eine sinnvolle Verbesserung zu **Ressourcenlimit und Backpressure** macht sichtbar, wo die bisherige Lösung unklar ist und wie sie prüfbarer wird.

Mögliche Rückmeldung:

> Der Normalfall ist erkennbar, aber die Begründung fehlt. Ergänze, welche Eingaben erlaubt sind, welche Randfälle geprüft werden und warum die gewählte Struktur oder Schnittstelle passend ist. Zusätzlich sollte ein kurzer Testfall den wichtigsten Fehlerfall abdecken.

## Konkrete Ergänzungen

- Namen so wählen, dass Verantwortung und Datenfluss sichtbar werden.
- Fehlerfälle nicht erst im Kommentar erwähnen, sondern im Ablauf berücksichtigen.
- Testdaten so wählen, dass Normalfall und Randfall getrennt sichtbar sind.
- Dokumentation auf Entscheidungen konzentrieren, nicht auf jede einzelne Codezeile.

## Kontrolle

Die Verbesserung ist gelungen, wenn der nächste Leser erkennt, welches Problem gelöst wird, welche Annahmen gelten und wie Fehler sichtbar werden.
