---
title: "Lösung: Passwörter und Hashing – Aufgabe A"
description: "Musterlösung zu Passwörter und Hashing, Aufgabe A."
subject: "web-development"
section: "auth-und-sicherheit"
topicPath: ["backend-und-sicherheit", "passwoerter-hashing"]
taskId: "WEB-V198-PASSWOERTER_UND_HASHING-A"
relatedExercise: "web-development/sanierung-v198-security-auth-ops/passwoerter-und-hashing-aufgabe-a"
tags: ["web-development", "loesung", "backend", "auth-und-sicherheit", "backend-und-sicherheit", "passwoerter-hashing"]
draft: false
---
## Lösung

Eine gute Lösung nennt zuerst den Weg der Anfrage. Der Browser liefert ein sichtbares Symptom, aber die Ursache kann im Client, im API-Endpunkt, in der Datenprüfung oder in der Konfiguration liegen.

Sinnvoll ist zum Beispiel:

1. **Browser/Client prüfen:** Welche Anfrage wird ausgelöst? Stimmen Methode, URL, Nutzdaten und sichtbare Fehlermeldung?
2. **Server/API prüfen:** Wird die Anfrage angenommen, validiert und mit passendem Statuscode beantwortet?
3. **Daten/Berechtigung prüfen:** Darf die Aktion ausgeführt werden und entsteht die erwartete Datenwirkung?

Die falsche Annahme wäre, dass eine sichtbare Oberfläche automatisch beweist, dass der Server korrekt und sicher arbeitet.

## Warum das passt

Die Lösung trennt Verantwortung und Kontrollpunkt. Dadurch wird nicht einfach geraten, sondern ein nachvollziehbarer Prüfweg aufgebaut.

## Häufiger Fehler

Ein häufiger Fehler ist, nur die Oberfläche oder nur den Server zu betrachten. Für Webprojekte müssen Browser, API, Daten und Betrieb zusammen gelesen werden.
