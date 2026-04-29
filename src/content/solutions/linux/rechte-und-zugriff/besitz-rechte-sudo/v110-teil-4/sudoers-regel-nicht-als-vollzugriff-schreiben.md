---
title: "Lösung – sudoers-Regel nicht als Vollzugriff schreiben"
description: "Musterlösung zu sudoers-Regel nicht als Vollzugriff schreiben mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Rechte"
topicPath: ["rechte-und-zugriff", "besitz-rechte-sudo", "v110-teil-4", "sudoers-regel-nicht-als-vollzugriff-schreiben"]
taskId: "v110-linux-sudoers-regel-nicht-als-vollzugriff-schreiben"
relatedExercise: "linux/rechte-und-zugriff/besitz-rechte-sudo/v110-teil-4/sudoers-regel-nicht-als-vollzugriff-schreiben"
tags: ["linux", "Rechte", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **sudoers-Regel nicht als Vollzugriff schreiben**.

## Einordnung

Ein Nutzer soll genau einen Dienst neu starten dürfen. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Es wird pauschal ALL=(ALL) ALL vergeben. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Begrenze Befehl, Zielnutzer und Host so eng wie möglich.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
