---
title: "Lösung – chmod symbolisch statt oktaler Raterei nutzen"
description: "Musterlösung zu chmod symbolisch statt oktaler Raterei nutzen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "Rechte"
topicPath:
  - "rechte-und-zugriff"
  - "besitz-rechte-sudo"
  - "v110-teil-1"
  - "chmod-symbolisch-statt-oktaler-raterei-nutzen"
taskId: "v110-linux-chmod-symbolisch-statt-oktaler-raterei-nutzen"
relatedExercise: "linux/rechte-und-zugriff/besitz-rechte-sudo/v110-teil-1/chmod-symbolisch-statt-oktaler-raterei-nutzen"
tags:
  - "linux"
  - "shell"
  - "betrieb"
  - "rechte-und-zugriff"
  - "besitz-rechte-sudo"
  - "chmod-symbolisch-statt-oktaler-raterei-nutzen"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **chmod symbolisch statt oktaler Raterei nutzen**.

## Einordnung

Nur die Gruppe soll Schreibrecht erhalten. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Oktale Rechte werden nach Gefühl gesetzt. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Nutze chmod g+w und prüfe mit ls -l.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
