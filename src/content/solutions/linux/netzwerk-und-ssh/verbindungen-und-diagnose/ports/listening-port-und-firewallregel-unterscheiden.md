---
title: "Lösung – Listening Port und Firewallregel unterscheiden"
description: "Musterlösung zu Portdiagnose mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Feinstruktur Linux"
topicPath:
  - "netzwerk-und-ssh"
  - "verbindungen-und-diagnose"
  - "ports"
  - "listening-port-und-firewallregel-unterscheiden"
taskId: "v111-linux-listening-port-und-firewallregel-unterscheiden"
relatedExercise: "linux/netzwerk-und-ssh/verbindungen-und-diagnose/ports/listening-port-und-firewallregel-unterscheiden"
tags:
  - "linux"
  - "betrieb"
  - "unterthema"
  - "netzwerk-und-ssh"
  - "verbindungen-und-diagnose"
  - "listening-port-und-firewallregel-unterscheiden"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Portdiagnose**.

## Einordnung

Ein Dienst läuft, ist aber von außen nicht erreichbar. Entscheidend ist nicht der breite Fachbereich, sondern die konkrete Trennkante dieses Unterthemas.

## Abgrenzung

Die typische Verwechslung lautet: Ein offener lokaler Port wird als externe Erreichbarkeit gelesen. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt und anschließend geprüft wird.

## Prüfschritt

Prüfe ss lokal und Firewall oder Routing separat.

Dieser Schritt ist fachlich stärker als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie wahrscheinlich zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. So entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
