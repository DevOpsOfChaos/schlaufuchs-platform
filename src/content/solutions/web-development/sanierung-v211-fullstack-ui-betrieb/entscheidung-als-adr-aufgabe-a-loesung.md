---
title: "Lösung: Entscheidung als ADR – Praxisaufgabe A"
description: "Musterlösung zur Praxisaufgabe A zu Entscheidung als ADR."
subject: "web-development"
section: "projektpraxis-und-doku"
topicPath: ["projektpraxis-und-doku", "entscheidung-als-adr"]
taskId: "WEB-V211-083-A"
relatedExercise: "web-development/sanierung-v211-fullstack-ui-betrieb/entscheidung-als-adr-aufgabe-a"
tags: ["web-development", "projektpraxis-und-doku", "entscheidung-als-adr", "fullstack", "v211", "loesung"]
draft: false
---
## Musterlösung

Eine gute Planung zu **Entscheidung als ADR** trennt Nutzerziel, UI-Zustand, technische Grenze und Kontrolle.

Ein möglicher Aufbau:

1. Nutzerziel: Die Person soll eine klar benannte Handlung abschließen können.
2. UI-Zustände: Startzustand, Ladezustand, Erfolg, leerer Zustand und Fehlerzustand werden getrennt beschrieben.
3. Grenze: Es wird festgelegt, welche Daten aus der API kommen und welche Prüfung im Frontend nur unterstützend ist.
4. Fehlerfall: Mindestens ein Fall wie Timeout, fehlende Berechtigung, ungültige Eingabe oder leere Antwort wird ausdrücklich behandelt.
5. Abnahme: Das Feature gilt erst als fertig, wenn der Nutzerfluss im Normalfall und im Fehlerfall geprüft wurde.

## Kontrolle

Die Lösung ist gut, wenn ein Teammitglied daraus direkt einen Testfall und eine kurze Review-Frage ableiten kann.
