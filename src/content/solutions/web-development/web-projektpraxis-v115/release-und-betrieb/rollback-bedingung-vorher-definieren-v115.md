---
title: "Lösung: Rollback-Bedingung vorher definieren"
description: "Musterlösung zu Rollback-Bedingung vorher definieren mit Trennkante und Gegenprobe."
subject: web-development
section: "Feinstruktur Web Development"
topicPath:
  - "web-projektpraxis-v115"
  - "release-und-betrieb"
  - "rollback-bedingung-vorher-definieren-v115"
taskId: "web-development-rollback-bedingung-vorher-definieren-v115"
relatedExercise: "web-development/web-projektpraxis-v115/release-und-betrieb/rollback-bedingung-vorher-definieren-v115"
tags:
  - "web development"
  - "feinstruktur"
  - "unterthema"
  - "web-projektpraxis"
  - "release und betrieb"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Rollback-Bedingung vorher definieren**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Erst im Fehlerfall wird über Zurückrollen diskutiert.

Fachlich ruhiger ist dagegen:

> Die Lösung wird über Nutzerwirkung, Semantik, Zustand und Robustheit begründet, nicht nur über Optik.

## Begründung

Die zentrale Prüffrage war:

> Bei welchem Signal wird zurückgerollt?

Eine passende Antwort ist: Die Lösung bewertet nicht nur die Darstellung, sondern die Wirkung für Nutzerinnen und Nutzer. Semantik, Zustand, Fokus, Fehlerfall und Rückmeldung werden getrennt geprüft.

## Gegenprobe

Die Entscheidung würde kippen, wenn der gleiche sichtbare Zustand eine andere semantische oder interaktive Bedeutung bekommt. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
