---
title: "Musterlösung – Pointer als Adressvariablen in Worte übersetzen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-PTR-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "pointer-in-cpp-verstehen", "pointer-als-adressvariablen-in-worte-uebersetzen"]
taskId: "INF-PROG-CPP-PTR-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/pointer-in-cpp-verstehen/pointer-als-adressvariablen-in-worte-uebersetzen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Rollen benennen

- <code>varA</code> ist die eigentliche Variable mit Nutzwert.
- <code>poinA</code> ist eine Zeigervariable.
- In <code>poinA</code> ist nach der Zuweisung die Adresse von <code>varA</code> gespeichert.

## Aufgabe 2: Direkter und indirekter Zugriff

<code>varA</code> liefert den Wert direkt. <code>*poinA</code> dereferenziert den Pointer und greift dadurch auf denselben Zielwert zu.

## Aufgabe 3: Denkfehler prüfen

Ein Pointer speichert nicht den Datenwert, sondern die Speicheradresse der Zielvariable. Erst über Dereferenzierung gelangt man wieder an den Inhalt.
