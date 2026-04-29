---
title: "Lösung: Latenz und Durchsatz trennen – Entwurfsaufgabe B"
description: "Musterlösung zur Entwurfsaufgabe B zu Latenz und Durchsatz trennen."
subject: "informatik"
section: "netzwerke"
topicPath: ["netzwerke", "latenz-und-durchsatz-trennen"]
taskId: "INF-V210-038-B"
relatedExercise: "informatik/sanierung-v210-algorithmen-systemdesign/latenz-und-durchsatz-trennen-aufgabe-b"
tags: ["informatik", "netzwerke", "latenz-und-durchsatz-trennen", "systemdesign", "v210", "loesung"]
draft: false
---
## Musterlösung

Eine sinnvolle Verbesserung zu **Latenz und Durchsatz trennen** macht sichtbar, wo die bisherige Lösung unklar ist und wie sie prüfbarer wird.

Mögliche Rückmeldung:

> Der Normalfall ist erkennbar, aber die Begründung fehlt. Ergänze, welche Eingaben erlaubt sind, welche Randfälle geprüft werden und warum die gewählte Struktur oder Schnittstelle passend ist. Zusätzlich sollte ein kurzer Testfall den wichtigsten Fehlerfall abdecken.

## Konkrete Ergänzungen

- Namen so wählen, dass Verantwortung und Datenfluss sichtbar werden.
- Fehlerfälle nicht erst im Kommentar erwähnen, sondern im Ablauf berücksichtigen.
- Testdaten so wählen, dass Normalfall und Randfall getrennt sichtbar sind.
- Dokumentation auf Entscheidungen konzentrieren, nicht auf jede einzelne Codezeile.

## Kontrolle

Die Verbesserung ist gelungen, wenn der nächste Leser erkennt, welches Problem gelöst wird, welche Annahmen gelten und wie Fehler sichtbar werden.
