---
title: "Musterlösung – rand, srand und Zielbereich ruhig erklären"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-RAND-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "zufallszahlen-mit-rand-und-srand-verstehen", "rand-srand-und-zielbereich-ruhig-erklaeren"]
taskId: "INF-PROG-CPP-RAND-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/zufallszahlen-mit-rand-und-srand-verstehen/rand-srand-und-zielbereich-ruhig-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Rollen trennen

<code>srand(time(NULL))</code> setzt einen Startwert für die Zahlenfolge. <code>rand()</code> erzeugt danach den eigentlichen Zufallswert. Der Startwert ist also Vorbereitung, die Zahl aus <code>rand()</code> ist das spätere Ergebnis im Ablauf.

## Aufgabe 2: Bereich begründen

<code>rand() % 6</code> liefert nur noch Reste von 0 bis 5. Durch das zusätzliche <code>1 +</code> wird dieser Bereich auf 1 bis 6 verschoben. Genau deshalb passt das Muster gut zu einem Würfel.
