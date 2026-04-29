---
title: "Musterlösung – Ablauf mit Testwerten nachvollziehbar prüfen"
description: "Musterlösung zur Aufgabe INF-ALG-TESTEN-001."
subject: "informatik"
section: "Algorithmen"
topicPath: ["algorithmen", "algorithmen-schrittweise-testen-verstehen", "ablauf-mit-testwerten-nachvollziehbar-pruefen"]
taskId: "INF-ALG-TESTEN-001"
relatedExercise: "src/content/exercises/informatik/algorithmen/algorithmen-schrittweise-testen-verstehen/ablauf-mit-testwerten-nachvollziehbar-pruefen.md"
tags: ["informatik", "Algorithmen", "loesung"]
draft: false
---
## Aufgabe 1: Testlauf durchführen

- Eingabe 8 → 8 ist nicht größer als 10 → Ausgabe: „klein oder gleich 10“
- Eingabe 10 → 10 ist nicht größer als 10 → Ausgabe: „klein oder gleich 10“
- Eingabe 12 → 12 ist größer als 10 → Ausgabe: „groß“

## Aufgabe 2: Entscheidung erklären

Der Wert 10 ist besonders nützlich, weil er genau an der Grenze liegt. So sieht man, ob die Bedingung wirklich „größer als 10“ oder vielleicht versehentlich „größer oder gleich 10“ meint.

## Aufgabe 3: Denkfehler prüfen

Nur Startwert und Endausgabe reichen nicht. Ein ruhiger Testlauf zeigt auch die Bedingungsprüfung und den Grund, warum welcher Zweig gewählt wurde.
