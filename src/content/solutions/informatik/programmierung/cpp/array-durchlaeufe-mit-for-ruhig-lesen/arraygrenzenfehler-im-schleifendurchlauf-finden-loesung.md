---
title: "Musterlösung – Arraygrenzenfehler im Schleifendurchlauf finden"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-LOOPARRAY-002."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-durchlaeufe-mit-for-ruhig-lesen", "arraygrenzenfehler-im-schleifendurchlauf-finden"]
taskId: "INF-PROG-CPP-LOOPARRAY-002"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/array-durchlaeufe-mit-for-ruhig-lesen/arraygrenzenfehler-im-schleifendurchlauf-finden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Fehlerstelle benennen

Der Grenzfehler liegt in <code>i &lt;= 4</code>. Problematisch wird dadurch der Zugriff <code>A[4]</code>. Korrigiert werden sollte die Schleife zu <code>i &lt; 4</code>, damit nur die gültigen Indizes 0 bis 3 angesprochen werden.

## Aufgabe 2: Warum ist vier Elemente nicht gleich letzter Index 4?

Ein Array mit vier Elementen besitzt die Indizes 0, 1, 2 und 3. Die Anzahl ist also 4, aber der letzte gültige Index ist 3. Wer diese beiden Dinge vermischt, baut leicht einen Zugriff außerhalb des Arrays.
