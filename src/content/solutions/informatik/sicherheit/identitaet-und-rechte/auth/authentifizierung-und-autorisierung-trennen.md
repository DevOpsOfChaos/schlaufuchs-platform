---
title: "Lösung – Authentifizierung und Autorisierung trennen"
description: "Musterlösung zu Authentifizierung und Autorisierung mit Einordnung, Abgrenzung und Gegenprobe."
subject: "informatik"
section: "Sicherheit"
topicPath:
  - "sicherheit"
  - "identitaet-und-rechte"
  - "auth"
  - "authentifizierung-und-autorisierung-trennen"
taskId: "v109-informatik-authentifizierung-und-autorisierung-trennen"
relatedExercise: "informatik/sicherheit/identitaet-und-rechte/auth/authentifizierung-und-autorisierung-trennen"
tags:
  - "informatik"
  - "struktur"
  - "debugging"
  - "sicherheit"
  - "identitaet-und-rechte"
  - "authentifizierung und autorisierung"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Authentifizierung und Autorisierung**.

## Einordnung

Ein Nutzer meldet sich an und darf danach bestimmte Aktionen ausführen. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Anmeldung wird mit Erlaubnis gleichgesetzt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Frage erst: Wer bist du? Dann: Was darfst du?

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
