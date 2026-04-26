---
title: "Lösung – systemctl start und enable trennen"
description: "Musterlösung zu systemctl start und enable mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "System"
topicPath:
  - "system"
  - "dienste-und-systemd"
  - "start-enable"
  - "systemctl-start-und-enable-trennen"
taskId: "v109-linux-systemctl-start-und-enable-trennen"
relatedExercise: "linux/system/dienste-und-systemd/start-enable/systemctl-start-und-enable-trennen"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "system"
  - "dienste-und-systemd"
  - "systemctl start und enable"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **systemctl start und enable**.

## Einordnung

Ein Dienst läuft jetzt, soll aber auch nach Neustart laufen. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Starten wird mit dauerhaftem Aktivieren verwechselt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Prüfe Laufzustand und Autostart getrennt.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
