---
title: "Lösung: Observability im Websystem – Entwurfsaufgabe B"
description: "Musterlösung zur Entwurfsaufgabe B zu Observability im Websystem."
subject: "informatik"
section: "web-systeme"
topicPath: ["web-systeme", "observability-im-websystem"]
taskId: "INF-V210-076-B"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/observability-im-websystem-aufgabe-b"
tags: ["informatik", "web-systeme", "observability-im-websystem", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Eine sinnvolle Verbesserung zu **Observability im Websystem** macht sichtbar, wo die bisherige Lösung unklar ist und wie sie prüfbarer wird.

Mögliche Rückmeldung:

> Der Normalfall ist erkennbar, aber die Begründung fehlt. Ergänze, welche Eingaben erlaubt sind, welche Randfälle geprüft werden und warum die gewählte Struktur oder Schnittstelle passend ist. Zusätzlich sollte ein kurzer Testfall den wichtigsten Fehlerfall abdecken.

## Konkrete Ergänzungen

- Namen so wählen, dass Verantwortung und Datenfluss sichtbar werden.
- Fehlerfälle nicht erst im Kommentar erwähnen, sondern im Ablauf berücksichtigen.
- Testdaten so wählen, dass Normalfall und Randfall getrennt sichtbar sind.
- Dokumentation auf Entscheidungen konzentrieren, nicht auf jede einzelne Codezeile.

## Kontrolle

Die Verbesserung ist gelungen, wenn der nächste Leser erkennt, welches Problem gelöst wird, welche Annahmen gelten und wie Fehler sichtbar werden.
