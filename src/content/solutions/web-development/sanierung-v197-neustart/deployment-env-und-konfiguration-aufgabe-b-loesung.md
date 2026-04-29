---
title: "Lösung: Deployment, ENV und Konfiguration – Aufgabe B"
description: "Musterlösung zu Deployment, ENV und Konfiguration mit Schwerpunkt Fehler- und Kontrollstrategie."
subject: "web-development"
section: "deployment"
topicPath: ["deployment-und-betrieb", "konfiguration"]
taskId: "WEB-V197-DEPLOYMENT_ENV_UND_KONFIGURATION-B"
relatedExercise: "web-development/sanierung-v197-neustart/deployment-env-und-konfiguration-aufgabe-b"
tags: ["web-development", "backend", "api", "loesung"]
draft: false
---
## Musterlösung

Eine mögliche Lösung trennt zuerst die Rollen:

- **Browser:** nimmt Eingaben auf, löst die Anfrage aus und zeigt die Antwort an.
- **API:** bildet die klare Grenze zwischen Frontend und Backend.
- **Serverlogik:** prüft Daten, Berechtigung und fachliche Regeln.
- **Datenquelle:** liefert oder speichert Informationen, wird aber nicht direkt vom Browser gesteuert.

## Normaler Ablauf

1. Die Nutzerin oder der Nutzer startet eine Aktion.
2. Das Frontend sendet eine Anfrage mit Methode, Pfad und Daten.
3. Der Server prüft, ob die Anfrage formal und fachlich gültig ist.
4. Die API antwortet mit einem passenden Status und einer verständlichen Datenform.
5. Das Frontend zeigt Erfolg, leere Ergebnisse oder eine Fehlermeldung an.

## Fehlerfall

Ein sinnvoller Fehlerfall ist eine unvollständige oder ungültige Eingabe. Das Frontend darf früh hinweisen, aber der Server muss trotzdem erneut prüfen. Sonst könnten manipulierte Anfragen Regeln umgehen.

## Testidee

Eine einfache Testidee ist: einmal gültige Daten senden, einmal ein Pflichtfeld weglassen und einmal eine nicht erlaubte Methode verwenden. Erwartet werden unterschiedliche, verständliche Antworten.

## Ergebnis

Die Lösung ist gut, wenn nicht nur der Erfolgsfall sichtbar ist, sondern auch klar wird, wo geprüft wird und wie das Frontend auf Fehler reagiert.
