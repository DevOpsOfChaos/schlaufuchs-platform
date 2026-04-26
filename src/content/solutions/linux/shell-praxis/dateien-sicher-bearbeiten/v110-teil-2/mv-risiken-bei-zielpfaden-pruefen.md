---
title: "Lösung – mv-Risiken bei Zielpfaden prüfen"
description: "Musterlösung zu mv-Risiken bei Zielpfaden prüfen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Shell"
topicPath:
  - "shell-praxis"
  - "dateien-sicher-bearbeiten"
  - "v110-teil-2"
  - "mv-risiken-bei-zielpfaden-pruefen"
taskId: "v110-linux-mv-risiken-bei-zielpfaden-pruefen"
relatedExercise: "linux/shell-praxis/dateien-sicher-bearbeiten/v110-teil-2/mv-risiken-bei-zielpfaden-pruefen"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "shell-praxis"
  - "dateien-sicher-bearbeiten"
  - "mv-risiken-bei-zielpfaden-pruefen"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **mv-Risiken bei Zielpfaden prüfen**.

## Einordnung

Eine Datei soll verschoben werden, aber der Zielname existiert bereits. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: mv wird nur als harmloses Umbenennen gesehen. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Prüfe vor dem Befehl, ob das Ziel existiert.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
