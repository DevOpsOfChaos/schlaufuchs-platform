---
title: "Lösung: grep mit Kontextzeilen nutzen"
description: "Musterlösung zu grep mit Kontextzeilen nutzen mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "shell-praxis-v115"
  - "dateien-finden-lesen"
  - "grep-mit-kontextzeilen-nutzen-v115"
taskId: "linux-grep-mit-kontextzeilen-nutzen-v115"
relatedExercise: "linux/shell-praxis-v115/dateien-finden-lesen/grep-mit-kontextzeilen-nutzen-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "shell-praxis"
  - "dateien finden und lesen"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **grep mit Kontextzeilen nutzen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Nur die Trefferzeile wird betrachtet.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Braucht die Diagnose Zeilen davor oder danach?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
