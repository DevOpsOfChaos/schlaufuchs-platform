---
title: "Lösung: less statt cat bei großen Dateien wählen"
description: "Musterlösung zu less statt cat bei großen Dateien wählen mit Trennkante und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["shell-praxis-v115", "dateien-finden-lesen", "less-statt-cat-bei-grossen-dateien-waehlen-v115"]
taskId: "linux-less-statt-cat-bei-grossen-dateien-waehlen-v115"
relatedExercise: "linux/shell-praxis-v115/dateien-finden-lesen/less-statt-cat-bei-grossen-dateien-waehlen-v115"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

Das geprüfte Unterthema ist **less statt cat bei großen Dateien wählen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Die Datei wird komplett ins Terminal gespült.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Muss geblättert und gesucht werden?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
