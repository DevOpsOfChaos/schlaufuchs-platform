---
title: "Lösung: Testdaten realistisch wählen"
description: "Musterlösung zu Testdaten realistisch wählen mit Trennkante und Gegenprobe."
subject: "web-development"
section: "Feinstruktur Web Development"
topicPath: ["web-projektpraxis-v115", "reviews-und-tests", "testdaten-realistisch-waehlen-v115"]
taskId: "web-development-testdaten-realistisch-waehlen-v115"
relatedExercise: "src/content/exercises/web-development/web-projektpraxis-v115/reviews-und-tests/testdaten-realistisch-waehlen-v115"
tags: ["web-development", "Feinstruktur Web Development", "loesung"]
draft: false
---
## Musterlösung

Das geprüfte Unterthema ist **Testdaten realistisch wählen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Grenzfälle fehlen vollständig.

Fachlich ruhiger ist dagegen:

> Die Lösung wird über Nutzerwirkung, Semantik, Zustand und Robustheit begründet, nicht nur über Optik.

## Begründung

Die zentrale Prüffrage war:

> Decken die Testdaten lange Texte, leere Werte und viele Einträge ab?

Eine passende Antwort ist: Die Lösung bewertet nicht nur die Darstellung, sondern die Wirkung für Nutzerinnen und Nutzer. Semantik, Zustand, Fokus, Fehlerfall und Rückmeldung werden getrennt geprüft.

## Gegenprobe

Die Entscheidung würde kippen, wenn der gleiche sichtbare Zustand eine andere semantische oder interaktive Bedeutung bekommt. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
