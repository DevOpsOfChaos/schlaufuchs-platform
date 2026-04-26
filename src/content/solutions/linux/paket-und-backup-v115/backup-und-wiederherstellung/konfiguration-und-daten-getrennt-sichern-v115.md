---
title: "Lösung: Konfiguration und Daten getrennt sichern"
description: "Musterlösung zu Konfiguration und Daten getrennt sichern mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "paket-und-backup-v115"
  - "backup-und-wiederherstellung"
  - "konfiguration-und-daten-getrennt-sichern-v115"
taskId: "linux-konfiguration-und-daten-getrennt-sichern-v115"
relatedExercise: "linux/paket-und-backup-v115/backup-und-wiederherstellung/konfiguration-und-daten-getrennt-sichern-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "pakete und backups"
  - "backup und wiederherstellung"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Konfiguration und Daten getrennt sichern**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Nur die Datenbank oder nur die Konfigurationsdatei wird gesichert.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Welche Teile braucht der Dienst zum vollständigen Neustart?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
