---
title: "Lösung – Secrets nicht im Quellcode speichern"
description: "Musterlösung zu Secrets nicht im Quellcode speichern mit Einordnung, Abgrenzung und Gegenprobe."
subject: "informatik"
section: "Sicherheit und Betrieb"
topicPath: ["sicherheit-und-betrieb", "zugriff-logs-und-geheimnisse", "v110-teil-1", "secrets-nicht-im-quellcode-speichern"]
taskId: "v110-informatik-secrets-nicht-im-quellcode-speichern"
relatedExercise: "informatik/sicherheit-und-betrieb/zugriff-logs-und-geheimnisse/v110-teil-1/secrets-nicht-im-quellcode-speichern"
tags: ["informatik", "Sicherheit und Betrieb", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **Secrets nicht im Quellcode speichern**.

## Einordnung

Ein API-Schlüssel steht direkt in einer Konfigurationsdatei im Repo. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Private Daten werden als normale Projekteinstellung behandelt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Prüfe, ob der Wert geheim ist und aus der Umgebung kommen sollte.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
