---
title: "Musterloesung - Operatorueberladung: Regeln und Verbote einordnen"
description: "Musterloesung zur Aufgabe INF-PROG-CPP-OPLOAD-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "operatoren-ueberladen-regeln-und-grenzen-verstehen", "operatorueberladung-regeln-und-verbote-einordnen"]
taskId: "INF-PROG-CPP-OPLOAD-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/operatoren-ueberladen-regeln-und-grenzen-verstehen/operatorueberladung-regeln-und-verbote-einordnen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Mindestbedingung pruefen

Mindestens ein Operand muss benutzerdefiniert sein. Deshalb kann reines <code>int + int</code> nicht per Operatorueberladung neu definiert werden.

## Aufgabe 2: Faelle sortieren

<code>+</code> ist grundsaetzlich ueberladbar. <code>[]</code> ist nur als Member-Funktion erlaubt. <code>::</code> und <code>sizeof</code> sind gar nicht ueberladbar.

## Aufgabe 3: Sprachregel begruenden

Operatorueberladung darf Prioritaet nicht aendern, weil sonst die allgemeine Ausdruckslogik der Sprache unvorhersehbar wuerde.
