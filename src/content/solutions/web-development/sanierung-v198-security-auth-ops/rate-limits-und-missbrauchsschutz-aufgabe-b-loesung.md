---
title: "Lösung: Rate Limits und Missbrauchsschutz – Aufgabe B"
description: "Musterlösung zu Rate Limits und Missbrauchsschutz, Aufgabe B."
subject: "web-development"
section: "auth-und-sicherheit"
topicPath: ["backend-und-sicherheit", "rate-limits"]
taskId: "WEB-V198-RATE_LIMITS_UND_MISSBRAUCHSSCHUTZ-B"
relatedExercise: "web-development/sanierung-v198-security-auth-ops/rate-limits-und-missbrauchsschutz-aufgabe-b"
tags: ["web-development", "loesung", "backend", "auth-und-sicherheit", "backend-und-sicherheit", "rate-limits"]
draft: false
---
## Lösung

Ein tragfähiger Prüfplan verbindet manuelle und technische Kontrolle.

Beispiel:

1. **Manuelle Sichtprüfung:** Den Ablauf mit gültigen und ungültigen Eingaben durchspielen.
2. **Technische Prüfung:** API-Antworten, Statuscodes, Validierung und relevante Logs kontrollieren.
3. **Feedback prüfen:** Nutzende bekommen eine verständliche Meldung; Logs enthalten genug Kontext, aber keine Secrets.
4. **Erledigt-Kriterium:** Der Fehlerfall ist reproduzierbar geprüft und die erwartete Reaktion ist dokumentiert.

Wichtig ist, dass der Plan nicht nur den Erfolgsfall betrachtet. Gerade Sicherheits- und Betriebsfragen zeigen sich oft erst im Fehlerfall.

## Warum das passt

Die Lösung trennt Verantwortung und Kontrollpunkt. Dadurch wird nicht einfach geraten, sondern ein nachvollziehbarer Prüfweg aufgebaut.

## Häufiger Fehler

Ein häufiger Fehler ist, nur die Oberfläche oder nur den Server zu betrachten. Für Webprojekte müssen Browser, API, Daten und Betrieb zusammen gelesen werden.
