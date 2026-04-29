---
title: "Musterlösung – Überladene Funktionen nach Signatur zuordnen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-006."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "funktionen-ueberladen-verstehen", "ueberladene-funktionen-nach-signatur-zuordnen"]
taskId: "INF-PROG-CPP-FUNC-006"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/funktionen-ueberladen-verstehen/ueberladene-funktionen-nach-signatur-zuordnen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Signatur prüfen

Die drei Varianten haben denselben Namen, unterscheiden sich aber in ihrer Parametersignatur. Genau das ist fachlich eine Überladung.

## Aufgabe 2: Rückgabewert prüfen

Beide Deklarationen besitzen dieselbe Parameterliste. Der Rückgabewert gehört nicht zur Parametersignatur und reicht deshalb nicht aus, um eine gültige Überladung zu erzeugen.

## Aufgabe 3: Aufruf zuordnen

Zu <code>gibAus(20L);</code> passt am besten die Variante mit <code>long</code>, weil das Argument bereits genau diesen Typ besitzt.
