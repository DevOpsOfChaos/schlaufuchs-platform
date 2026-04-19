---
title: Member- und freie Operatorfunktion passend waehlen
description: Begruende, wann eine Operatorfunktion als Member und wann eher als freie Funktion gelesen werden sollte.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - member-operatoren-und-freie-operatorfunktionen-vergleichen
  - member-und-freie-operatorfunktion-passend-waehlen
taskId: INF-PROG-CPP-OPLOAD-002
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - programmierung
  - cpp
  - operatoren
hintPoints:
  - "Frage zuerst: Wo steckt das linke Argument?"
  - Denke an <code>this</code> bei Member-Funktionen.
selfCheckPoints:
  - Habe ich implizites und explizites Argument sauber getrennt?
  - Habe ich Stream-Operatoren fachlich passend erklaert?
transferIdeas:
  - Uebertrage die Denkweise auf einen Vergleichsoperator wie <code>==</code>.
reflectionPrompt: Was hat dir geholfen, das linke implizite Objekt besser zu erkennen?
---

## Aufgabe 1: Zwei Lesarten

Schreibe in Worten, was sich zwischen <code>A.operator+(B)</code> und <code>operator+(A, B)</code> unterscheidet.

## Aufgabe 2: Linkes Argument benennen

Erklaere, welche Rolle <code>this</code> bei einer Member-Operatorfunktion spielt.

## Aufgabe 3: Stream-Fall begruenden

Begruende, warum ein Operator wie <code>&lt;&lt;</code> oft eher als freie Funktion gedacht wird.
