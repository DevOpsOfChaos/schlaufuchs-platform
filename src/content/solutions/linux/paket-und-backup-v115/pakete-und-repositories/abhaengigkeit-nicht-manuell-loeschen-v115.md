---
title: "Lösung: Abhängigkeit nicht manuell löschen"
description: "Musterlösung zu Abhängigkeit nicht manuell löschen mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "paket-und-backup-v115"
  - "pakete-und-repositories"
  - "abhaengigkeit-nicht-manuell-loeschen-v115"
taskId: "linux-abhaengigkeit-nicht-manuell-loeschen-v115"
relatedExercise: "linux/paket-und-backup-v115/pakete-und-repositories/abhaengigkeit-nicht-manuell-loeschen-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "pakete und backups"
  - "pakete und repositories"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Abhängigkeit nicht manuell löschen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Eine Bibliothek wird entfernt, ohne abhängige Pakete zu prüfen.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Welche anderen Pakete brauchen diese Abhängigkeit?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
