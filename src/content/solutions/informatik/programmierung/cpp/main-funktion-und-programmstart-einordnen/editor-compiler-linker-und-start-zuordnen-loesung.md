---
title: Musterlösung – Editor, Compiler, Linker und Start zuordnen
description: Musterlösung zur Aufgabe INF-PROG-CPP-MAIN-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - erstes-programm
  - main-funktion-und-programmstart-einordnen
  - editor-compiler-linker-und-start-zuordnen-loesung
taskId: INF-PROG-CPP-MAIN-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/main-funktion-und-programmstart-einordnen/editor-compiler-linker-und-start-zuordnen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Weg zum laufenden Programm

Sinnvolle Reihenfolge: Editor → Quelltext → Compiler → Linker → ausführbares Programm. Im Editor wird die Datei geschrieben, der Compiler übersetzt sie, der Linker bindet die nötigen Teile zusammen.

## Aufgabe 2: main richtig einordnen

<code>main</code> ist der Einstieg in das laufende Programm. Vorher muss der Quelltext erst geschrieben, übersetzt und gebunden werden. Deshalb gehört <code>main</code> zum Programmlauf und nicht zum Bearbeiten oder Übersetzen der Datei.
