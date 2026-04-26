---
title: "Lösung – Arrayindex und Listenlänge sicher koppeln"
description: "Musterlösung zu Index und Listenlänge mit Einordnung, Abgrenzung und Gegenprobe."
subject: "informatik"
section: "Datenstrukturen"
topicPath:
  - "datenstrukturen"
  - "arrays-listen-und-indizes"
  - "zugriff"
  - "arrayindex-und-listenlaenge-sicher-koppeln"
taskId: "v109-informatik-arrayindex-und-listenlaenge-sicher-koppeln"
relatedExercise: "informatik/datenstrukturen/arrays-listen-und-indizes/zugriff/arrayindex-und-listenlaenge-sicher-koppeln"
tags:
  - "informatik"
  - "struktur"
  - "debugging"
  - "datenstrukturen"
  - "arrays-listen-und-indizes"
  - "index und listenlänge"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Index und Listenlänge**.

## Einordnung

Eine Schleife läuft über alle Elemente einer Liste. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Der letzte gültige Index wird mit der Länge verwechselt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Prüfe: gültig ist 0 bis Länge minus 1.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
