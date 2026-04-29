---
title: "Musterlösung – Kleines C++-Programm zeilenweise ruhig lesen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-START-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "das-erste-cpp-programm-verstehen", "kleines-cpp-programm-zeilenweise-ruhig-lesen"]
taskId: "INF-PROG-CPP-START-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/das-erste-cpp-programm-verstehen/kleines-cpp-programm-zeilenweise-ruhig-lesen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Rollen zuordnen

- <code>#include &lt;iostream&gt;</code> → bindet die Bibliothek für Ein- und Ausgabe ein.
- <code>int main() { ... }</code> → markiert die Hauptfunktion und damit den Einstiegspunkt des Programms.
- <code>int zahl;</code> → deklariert eine Variable.
- <code>std::cout &lt;&lt; "Hallo";</code> → gibt Text aus.
- <code>return 0;</code> → beendet <code>main</code> regulär.

## Aufgabe 2: Gesamtidee formulieren

Das Programm startet in <code>main</code>, bereitet eine Variable vor, fordert eine Eingabe an, liest einen Wert ein und zeigt diesen wieder an. Include und Rückgabe bilden dabei den Rahmen, Ein- und Ausgabe beschreiben das eigentliche Verhalten.

## Aufgabe 3: Denkfehler prüfen

<code>cout</code> startet das Programm nicht. Die Programmausführung beginnt in <code>main</code>. <code>cout</code> ist nur ein Ausgabewerkzeug innerhalb des bereits laufenden Programms.
