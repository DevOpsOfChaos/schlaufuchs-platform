---
title: "Lösung: Rollback-Plan – Praxisaufgabe A"
description: "Musterlösung zur Praxisaufgabe A zu Rollback-Plan."
subject: "web-development"
section: "build-und-deployment"
topicPath: ["build-und-deployment", "rollback-plan"]
taskId: "WEB-V211-070-A"
relatedExercise: "web-development/sanierung-v211-fullstack-ui-betrieb/rollback-plan-aufgabe-a"
tags: ["web-development", "build-und-deployment", "rollback-plan", "fullstack", "v211", "loesung"]
draft: false
---
## Musterlösung

Eine gute Planung zu **Rollback-Plan** trennt Nutzerziel, UI-Zustand, technische Grenze und Kontrolle.

Ein möglicher Aufbau:

1. Nutzerziel: Die Person soll eine klar benannte Handlung abschließen können.
2. UI-Zustände: Startzustand, Ladezustand, Erfolg, leerer Zustand und Fehlerzustand werden getrennt beschrieben.
3. Grenze: Es wird festgelegt, welche Daten aus der API kommen und welche Prüfung im Frontend nur unterstützend ist.
4. Fehlerfall: Mindestens ein Fall wie Timeout, fehlende Berechtigung, ungültige Eingabe oder leere Antwort wird ausdrücklich behandelt.
5. Abnahme: Das Feature gilt erst als fertig, wenn der Nutzerfluss im Normalfall und im Fehlerfall geprüft wurde.

## Kontrolle

Die Lösung ist gut, wenn ein Teammitglied daraus direkt einen Testfall und eine kurze Review-Frage ableiten kann.
