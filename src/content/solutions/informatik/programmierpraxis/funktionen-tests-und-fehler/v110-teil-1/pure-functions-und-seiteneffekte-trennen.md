---
title: "Lösung – Pure Functions und Seiteneffekte trennen"
description: "Musterlösung zu Pure Functions und Seiteneffekte trennen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierpraxis", "funktionen-tests-und-fehler", "v110-teil-1", "pure-functions-und-seiteneffekte-trennen"]
taskId: "v110-informatik-pure-functions-und-seiteneffekte-trennen"
relatedExercise: "informatik/programmierpraxis/funktionen-tests-und-fehler/v110-teil-1/pure-functions-und-seiteneffekte-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **Pure Functions und Seiteneffekte trennen**.

## Einordnung

Eine Funktion berechnet einen Wert und schreibt zusätzlich in eine Datei. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Jede Funktion mit Rückgabewert wird automatisch als reine Funktion gelesen. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Prüfe, ob außer der Rückgabe noch Zustand verändert wird.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
