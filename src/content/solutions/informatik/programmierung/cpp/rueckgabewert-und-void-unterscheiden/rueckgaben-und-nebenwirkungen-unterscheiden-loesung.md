---
title: "Musterlösung – Rückgaben und Nebenwirkungen unterscheiden"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "rueckgabewert-und-void-unterscheiden", "rueckgaben-und-nebenwirkungen-unterscheiden"]
taskId: "INF-PROG-CPP-FUNC-003"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/rueckgabewert-und-void-unterscheiden/rueckgaben-und-nebenwirkungen-unterscheiden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Funktionen ordnen

- Eine Summe berechnen und zurückliefern → eher Funktion mit Rückgabewert.
- Nur einen Begrüßungstext ausgeben → eher <code>void</code>, weil kein Wert für spätere Rechnungen zurückgegeben wird.
- Prüfen, ob eine Zahl positiv ist, und true oder false liefern → Rückgabewert, hier ein boolescher Wert.

## Aufgabe 2: Unterschied erklären

Eine Ausgabe macht etwas sichtbar, meist auf dem Bildschirm. Ein Rückgabewert liefert dagegen ein Ergebnis zurück an den aufrufenden Teil des Programms, damit dort weitergerechnet oder geprüft werden kann.

## Aufgabe 3: Denkfehler prüfen

Was auf dem Bildschirm erscheint, ist nicht automatisch der Rückgabewert. Eine Funktion kann etwas ausgeben und trotzdem keinen Wert zurückliefern, oder einen Wert zurückgeben, ohne direkt etwas sichtbar anzuzeigen.
