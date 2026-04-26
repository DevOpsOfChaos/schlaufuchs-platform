---
title: "Lösung: Prozess und Dienst unterscheiden"
description: "Musterlösung zu Prozess und Dienst unterscheiden mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "systembetrieb-v115"
  - "prozesse-und-dienste"
  - "prozess-und-dienst-unterscheiden-v115"
taskId: "linux-prozess-und-dienst-unterscheiden-v115"
relatedExercise: "linux/systembetrieb-v115/prozesse-und-dienste/prozess-und-dienst-unterscheiden-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "systembetrieb"
  - "prozesse und dienste"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Prozess und Dienst unterscheiden**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Ein Prozess wird automatisch als sauber gestarteter Dienst betrachtet.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Wurde der Prozess durch den Dienstmanager gestartet?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
