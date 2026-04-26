---
title: "Lösung: Ausführungsrecht bei Ordnern deuten"
description: "Musterlösung zu Ausführungsrecht bei Ordnern deuten mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "rechte-und-sicherheit-v115"
  - "dateirechte-und-besitz"
  - "ausfuehrungsrecht-bei-ordnern-deuten-v115"
taskId: "linux-ausfuehrungsrecht-bei-ordnern-deuten-v115"
relatedExercise: "linux/rechte-und-sicherheit-v115/dateirechte-und-besitz/ausfuehrungsrecht-bei-ordnern-deuten-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "rechte und sicherheit"
  - "dateirechte und besitz"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Ausführungsrecht bei Ordnern deuten**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> x wird nur als Startrecht für Programme verstanden.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Darf der Nutzer den Ordner durchqueren?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
