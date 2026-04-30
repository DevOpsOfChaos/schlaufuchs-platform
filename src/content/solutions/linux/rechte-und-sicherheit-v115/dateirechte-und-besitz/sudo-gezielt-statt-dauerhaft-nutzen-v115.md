---
title: "Lösung: sudo gezielt statt dauerhaft nutzen"
description: "Musterlösung zu sudo gezielt statt dauerhaft nutzen mit Trennkante und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["rechte-und-sicherheit-v115", "dateirechte-und-besitz", "sudo-gezielt-statt-dauerhaft-nutzen-v115"]
taskId: "linux-sudo-gezielt-statt-dauerhaft-nutzen-v115"
relatedExercise: "src/content/exercises/linux/rechte-und-sicherheit-v115/dateirechte-und-besitz/sudo-gezielt-statt-dauerhaft-nutzen-v115"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

Das geprüfte Unterthema ist **sudo gezielt statt dauerhaft nutzen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Die ganze Shell wird dauerhaft als root geführt.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Braucht nur dieser eine Befehl besondere Rechte?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
