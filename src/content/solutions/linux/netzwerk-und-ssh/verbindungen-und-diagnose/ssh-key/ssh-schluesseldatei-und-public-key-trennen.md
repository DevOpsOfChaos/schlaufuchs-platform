---
title: "Lösung – SSH-Schlüsseldatei und Public Key trennen"
description: "Musterlösung zu SSH-Key-Dateien mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["netzwerk-und-ssh", "verbindungen-und-diagnose", "ssh-key", "ssh-schluesseldatei-und-public-key-trennen"]
taskId: "v111-linux-ssh-schluesseldatei-und-public-key-trennen"
relatedExercise: "linux/netzwerk-und-ssh/verbindungen-und-diagnose/ssh-key/ssh-schluesseldatei-und-public-key-trennen"
tags: ["linux", "Feinstruktur Linux", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **SSH-Key-Dateien**.

## Einordnung

Ein Public Key soll auf den Server kopiert werden. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: Privater und öffentlicher Schlüssel werden verwechselt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Prüfe Dateiname, Inhalt und Zielort authorized_keys.

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
