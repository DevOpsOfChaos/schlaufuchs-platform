---
title: "Musterlösung – Standardkanäle nach Rolle und Ausgabesituation zuordnen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-STREAMOBJ-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "standardkanaele-cin-cout-und-cerr-verstehen", "standardkanaele-nach-rolle-und-ausgabesituation-zuordnen"]
taskId: "INF-PROG-CPP-STREAMOBJ-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/standardkanaele-cin-cout-und-cerr-verstehen/standardkanaele-nach-rolle-und-ausgabesituation-zuordnen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Rolle zuordnen

Für die Tastatureingabe passt <code>cin</code>. Für die normale Ergebnisausgabe passt <code>cout</code>. Für die Meldung einer ungültigen Eingabe passt gedanklich <code>cerr</code>, weil es sich um eine Fehlerausgabe handelt.

## Aufgabe 2: Warum nicht alles mit demselben Kanal?

Die Trennung hilft, die Rolle einer Ausgabe besser zu verstehen. Ein normales Ergebnis ist etwas anderes als ein Problemhinweis. Wenn beides gedanklich getrennt bleibt, lässt sich der Ablauf eines Programms klarer lesen.
