---
title: "Musterlösung – Wertearten sauber unterscheiden"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-TYPEN-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "ganzzahl-gleitkomma-und-bool-unterscheiden", "wertearten-sauber-unterscheiden"]
taskId: "INF-PROG-CPP-TYPEN-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/ganzzahl-gleitkomma-und-bool-unterscheiden/wertearten-sauber-unterscheiden"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Typwahl begründen

- **Anzahl Besucher** → `int`, weil es sich um eine exakte ganze Anzahl handelt.
- **Paket angekommen oder nicht** → `bool`, weil nur ein Zustand geprüft wird.
- **Durchschnittliche Bearbeitungszeit mit Nachkommastellen** → `double`, weil hier ein Näherungswert mit Nachkommastellen sinnvoll ist.

## Aufgabe 2: Messwert oder Zählwert?

Eine Temperatur ist ein Messwert und wird oft mit Nachkommastellen oder Näherungen angegeben. Eine Anzahl von Tischen ist dagegen eine exakte ganze Stückzahl. Darum sollte beides nicht über denselben fachlichen Typgedanken gelesen werden.

## Aufgabe 3: Denkfehler prüfen

`0` und `false` können zwar in technischen Zusammenhängen in Beziehung stehen, aber fachlich sind sie nicht dasselbe. `false` beantwortet eine Ja-Nein-Frage, `0` bezeichnet eine Zahl. Die gleiche interne Nähe ersetzt nicht die unterschiedliche Bedeutung.

## Worauf man bei der Korrektur achten sollte

- Zustand, Anzahl und Messwert klar auseinanderhalten.
- Nicht nur „weil Nachkommastellen“ sagen, sondern die Wertrolle benennen.
- bool nicht als bloße Zahl behandeln.
