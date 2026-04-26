---
title: "Lösung – SIGTERM und SIGKILL unterscheiden"
description: "Musterlösung zu Prozesssignale mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath:
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "signale"
  - "sigterm-und-sigkill-unterscheiden"
taskId: "v111-linux-sigterm-und-sigkill-unterscheiden"
relatedExercise: "linux/systembetrieb/prozesse-dienste-logs/signale/sigterm-und-sigkill-unterscheiden"
tags:
  - "linux"
  - "betrieb"
  - "unterthema"
  - "systembetrieb"
  - "prozesse-dienste-logs"
  - "sigterm-und-sigkill-unterscheiden"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Prozesssignale**.

## Einordnung

Ein Prozess reagiert nicht sofort auf Stop. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: Jeder Abbruch wird als hartes Töten verstanden. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Versuche zuerst sauberes Beenden, bevor SIGKILL eingesetzt wird.

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
