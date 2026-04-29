---
title: "Lösung – Fehlerbehandlung in Skripten – anwenden und prüfen"
description: "Musterlösung zur Linux-Aufgabe Fehlerbehandlung in Skripten."
subject: "linux"
section: "automatisierung-und-skripte"
topicPath: ["automatisierung-und-skripte", "fehlerbehandlung-in-skripten", "fehlerbehandlung-in-skripten-anwenden-und-pruefen-v186"]
taskId: "LINUX-FEHLERBEHANDLUNG-IN-SKRIPTEN-V186-2"
relatedExercise: "src/content/exercises/linux/automatisierung-und-skripte/fehlerbehandlung-in-skripten/fehlerbehandlung-in-skripten-anwenden-und-pruefen-v186.md"
tags: ["linux", "automatisierung-und-skripte", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Das Thema **Fehlerbehandlung in Skripten** wird nicht nur über einen einzelnen Befehl verstanden. Wichtig ist der Zusammenhang: Welche Information wird gebraucht, welcher Systemkontext ist betroffen und welche Prüfung liefert einen belastbaren Hinweis?

### Aufgabe 2

Eine gute Einordnung trennt Beobachtung und Ursache. Zuerst wird beschrieben, was sichtbar ist. Danach wird geprüft, welche Datei, welcher Befehl, welcher Dienst oder welcher Zustand relevant sein kann. Erst wenn diese Prüfung plausibel ist, wird eine Änderung vorbereitet.

### Aufgabe 3

Die Aussage greift zu kurz. Eine Ausgabe zeigt nur einen Ausschnitt. Gerade bei Linux können Rechte, Pfade, Umgebung, Dienste, Netzwerkzustand oder Zeitkontext zusätzlich eine Rolle spielen. Darum reicht ein einzelner Befehl selten als vollständiger Beweis.

### Aufgabe 4

Ein passender Merksatz lautet:

> Fehlerbehandlung in Skripten wird sicher verstanden, wenn Begriff, Kontext, Prüfschritt und Ergebnis sauber getrennt werden.

## Selbstkontrolle

Die Lösung ist gut, wenn sie nicht nur einen Befehl nennt, sondern erklärt, warum dieser Befehl oder diese Prüfung zum konkreten Thema passt.
