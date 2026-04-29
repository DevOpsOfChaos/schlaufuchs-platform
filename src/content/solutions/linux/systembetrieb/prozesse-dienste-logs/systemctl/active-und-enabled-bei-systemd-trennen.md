---
title: "Lösung – active und enabled bei systemd trennen"
description: "Musterlösung zu systemd active/enabled mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["systembetrieb", "prozesse-dienste-logs", "systemctl", "active-und-enabled-bei-systemd-trennen"]
taskId: "v111-linux-active-und-enabled-bei-systemd-trennen"
relatedExercise: "linux/systembetrieb/prozesse-dienste-logs/systemctl/active-und-enabled-bei-systemd-trennen"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **systemd active/enabled**.

## Einordnung

Ein Dienst läuft gerade, startet aber nach Reboot nicht. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: Laufender Zustand und Autostart werden gleichgesetzt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Prüfe systemctl is-active und is-enabled getrennt.

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
