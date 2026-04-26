---
title: "Lösung – chown und chmod nicht verwechseln"
description: "Musterlösung zu chown und chmod mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Rechte"
topicPath:
  - "system"
  - "rechte-und-acl"
  - "besitz-rechte"
  - "chown-und-chmod-nicht-verwechseln"
taskId: "v109-linux-chown-und-chmod-nicht-verwechseln"
relatedExercise: "linux/system/rechte-und-acl/besitz-rechte/chown-und-chmod-nicht-verwechseln"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "system"
  - "rechte-und-acl"
  - "chown und chmod"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **chown und chmod**.

## Einordnung

Eine Datei hat falschen Besitzer oder falsche Rechte. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Besitz und Berechtigung werden mit demselben Befehl gelöst. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Prüfe erst Eigentümer, dann Rechte.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
