---
title: "Lösung: Datenschutz bei Logs beachten"
description: "Musterlösung zu Datenschutz bei Logs beachten mit Trennkante und Gegenprobe."
subject: "web-development"
section: "Feinstruktur Web Development"
topicPath: ["web-projektpraxis-v115", "release-und-betrieb", "datenschutz-bei-logs-beachten-v115"]
taskId: "web-development-datenschutz-bei-logs-beachten-v115"
relatedExercise: "src/content/exercises/web-development/web-projektpraxis-v115/release-und-betrieb/datenschutz-bei-logs-beachten-v115"
tags: ["web-development", "Feinstruktur Web Development", "loesung"]
draft: false
---
## Musterlösung

Das geprüfte Unterthema ist **Datenschutz bei Logs beachten**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Eingabedaten werden ungefiltert mitgeloggt.

Fachlich ruhiger ist dagegen:

> Die Lösung wird über Nutzerwirkung, Semantik, Zustand und Robustheit begründet, nicht nur über Optik.

## Begründung

Die zentrale Prüffrage war:

> Welche Informationen dürfen überhaupt gespeichert werden?

Eine passende Antwort ist: Die Lösung bewertet nicht nur die Darstellung, sondern die Wirkung für Nutzerinnen und Nutzer. Semantik, Zustand, Fokus, Fehlerfall und Rückmeldung werden getrennt geprüft.

## Gegenprobe

Die Entscheidung würde kippen, wenn der gleiche sichtbare Zustand eine andere semantische oder interaktive Bedeutung bekommt. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
