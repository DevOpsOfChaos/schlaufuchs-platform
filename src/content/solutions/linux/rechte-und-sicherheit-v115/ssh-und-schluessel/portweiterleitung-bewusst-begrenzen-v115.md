---
title: "Lösung: Portweiterleitung bewusst begrenzen"
description: "Musterlösung zu Portweiterleitung bewusst begrenzen mit Trennkante und Gegenprobe."
subject: linux
section: "Feinstruktur Linux"
topicPath:
  - "rechte-und-sicherheit-v115"
  - "ssh-und-schluessel"
  - "portweiterleitung-bewusst-begrenzen-v115"
taskId: "linux-portweiterleitung-bewusst-begrenzen-v115"
relatedExercise: "linux/rechte-und-sicherheit-v115/ssh-und-schluessel/portweiterleitung-bewusst-begrenzen-v115"
tags:
  - "linux"
  - "feinstruktur"
  - "unterthema"
  - "rechte und sicherheit"
  - "ssh und schlüssel"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Portweiterleitung bewusst begrenzen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Alle Schnittstellen werden versehentlich geöffnet.

Fachlich ruhiger ist dagegen:

> Die Diagnose beginnt mit Kontext, Rechten, Prozesszustand und Eingrenzung, nicht mit einem pauschalen Befehl.

## Begründung

Die zentrale Prüffrage war:

> Soll die Weiterleitung lokal oder öffentlich lauschen?

Eine passende Antwort ist: Die Lösung grenzt den Kontext ein: welcher Nutzer, welcher Prozess, welche Datei, welcher Zeitraum. Erst danach wird ein Befehl gewählt, der genau diese Frage beantwortet.

## Gegenprobe

Die Entscheidung würde kippen, wenn ein anderer Nutzer, Dienst oder Zeitraum betroffen ist. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
