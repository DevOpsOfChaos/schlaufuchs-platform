---
title: "Lösung: API-Dokumentation und Tests – Aufgabe B"
description: "Musterlösung zu API-Dokumentation und Tests mit Schwerpunkt Fehler- und Kontrollstrategie."
subject: "web-development"
section: "qualitaet"
topicPath: ["qualitaet-und-zugaenglichkeit", "api-tests"]
taskId: "WEB-V197-API_DOKUMENTATION_UND_TESTS-B"
relatedExercise: "web-development/sanierung-v197-neustart/api-dokumentation-und-tests-aufgabe-b"
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
