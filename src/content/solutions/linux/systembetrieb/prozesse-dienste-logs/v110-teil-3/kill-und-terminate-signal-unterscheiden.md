---
title: "Lösung – kill und Terminate-Signal unterscheiden"
description: "Musterlösung zu kill und Terminate-Signal unterscheiden mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Systembetrieb"
topicPath:
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "v110-teil-3"
  - "kill-und-terminate-signal-unterscheiden"
taskId: "v110-linux-kill-und-terminate-signal-unterscheiden"
relatedExercise: "linux/systembetrieb/prozesse-dienste-logs/v110-teil-3/kill-und-terminate-signal-unterscheiden"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "kill-und-terminate-signal-unterscheiden"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **kill und Terminate-Signal unterscheiden**.

## Einordnung

Ein Prozess soll beendet werden, reagiert aber nicht sofort. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: kill wird automatisch mit hartem Töten gleichgesetzt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Unterscheide SIGTERM, SIGKILL und sauberes Beenden.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
