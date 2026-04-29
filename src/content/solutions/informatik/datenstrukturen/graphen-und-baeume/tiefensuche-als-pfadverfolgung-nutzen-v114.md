---
title: "Lösung – Tiefensuche als Pfadverfolgung nutzen"
description: "Musterlösung zur Aufgabe über Tiefensuche als Pfadverfolgung nutzen."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["datenstrukturen", "graphen-und-baeume", "tiefensuche-als-pfadverfolgung-nutzen-v114"]
taskId: "v114-informatik-tiefensuche-als-pfadverfolgung-nutzen-v114"
relatedExercise: "informatik/datenstrukturen/graphen-und-baeume/tiefensuche-als-pfadverfolgung-nutzen-v114"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

### 1. Konkrete Entscheidung

Im Szenario geht es um **Tiefensuche als Pfadverfolgung nutzen**. Die Entscheidung darf nicht im breiten Kapitel hängen bleiben, sondern muss an der konkreten Situation festgemacht werden:

> Wird zuerst tief oder breit gesucht?

### 2. Begründung

Ein Labyrinth wird bis zu Sackgassen verfolgt. Daraus folgt: Die Situation muss zuerst über Kontext und Rolle der beteiligten Größen gelesen werden. Der häufige Fehler wäre: DFS wird mit kürzestem Weg verwechselt.

Eine fachlich saubere Antwort benennt deshalb nicht nur das Ergebnis, sondern auch die Trennkante.

### 3. Gegenprobe

Eine sinnvolle Gegenprobe lautet: Ändere genau eine Bedingung im Szenario. Wenn dadurch die Antwort auf die Prüffrage kippt, war die Trennkante passend gewählt.

### 4. Kurze Musterantwort

Die Entscheidung passt, wenn die Prüffrage mit dem gegebenen Kontext beantwortet wird und keine Nachbarfrage heimlich mitgelöst wird. Dadurch bleibt die Lösung klein, überprüfbar und gut auffindbar.
