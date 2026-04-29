---
title: "Lösung – Public Key und Private Key streng trennen"
description: "Musterlösung zu Public und Private Key mit Einordnung, Abgrenzung und Gegenprobe."
subject: "linux"
section: "SSH"
topicPath: ["ssh", "schluessel-und-agent", "public-private-key", "public-key-und-private-key-streng-trennen"]
taskId: "v109-linux-public-key-und-private-key-streng-trennen"
relatedExercise: "linux/ssh/schluessel-und-agent/public-private-key/public-key-und-private-key-streng-trennen"
tags: ["linux", "SSH", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **Public und Private Key**.

## Einordnung

Ein SSH-Schlüssel soll auf einem Server eingerichtet werden. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Der private Schlüssel wird kopiert oder geteilt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Nur der öffentliche Schlüssel gehört auf den Server.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
