---
title: "Lösung – chown und chmod nicht verwechseln"
description: "Musterlösung zu chown und chmod nicht verwechseln mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Rechte"
topicPath:
  - "rechte-und-zugriff"
  - "besitz-rechte-sudo"
  - "v110-teil-2"
  - "chown-und-chmod-nicht-verwechseln"
taskId: "v110-linux-chown-und-chmod-nicht-verwechseln"
relatedExercise: "linux/rechte-und-zugriff/besitz-rechte-sudo/v110-teil-2/chown-und-chmod-nicht-verwechseln"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "rechte-und-zugriff"
  - "besitz-rechte-sudo"
  - "chown-und-chmod-nicht-verwechseln"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **chown und chmod nicht verwechseln**.

## Einordnung

Eine Datei gehört dem falschen Nutzer, hat aber passende Rechte. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Besitz und Berechtigung werden gleichgesetzt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Prüfe zuerst Eigentümer und Gruppe, dann den Modus.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
