---
title: "Lösung – Temporäre Dateien mit mktemp sicher anlegen"
description: "Musterlösung zu Temporäre Dateien mit mktemp sicher anlegen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Shell"
topicPath:
  - "shell-praxis"
  - "dateien-sicher-bearbeiten"
  - "v110-teil-4"
  - "temporaere-dateien-mit-mktemp-sicher-anlegen"
taskId: "v110-linux-temporaere-dateien-mit-mktemp-sicher-anlegen"
relatedExercise: "linux/shell-praxis/dateien-sicher-bearbeiten/v110-teil-4/temporaere-dateien-mit-mktemp-sicher-anlegen"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "shell-praxis"
  - "dateien-sicher-bearbeiten"
  - "temporaere-dateien-mit-mktemp-sicher-anlegen"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Temporäre Dateien mit mktemp sicher anlegen**.

## Einordnung

Ein Skript braucht eine Zwischenablage im Dateisystem. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Ein fester Dateiname in /tmp wird mehrfach verwendet. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Erzeuge eindeutige temporäre Dateien mit mktemp.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
