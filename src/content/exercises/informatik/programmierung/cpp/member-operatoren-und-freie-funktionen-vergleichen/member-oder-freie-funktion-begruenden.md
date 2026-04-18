---
title: Member oder freie Funktion begründen
description: Vergleiche beide Implementierungsarten für Operatoren und begründe, wann welche Form näherliegt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-klassen
  - member-operatoren-und-freie-funktionen-vergleichen
  - member-oder-freie-funktion-begruenden
taskId: INF-PROG-CPP-OPERATOR-002
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - operatoren
  - member
hintPoints:
  - "Denke an die linke Seite des Ausdrucks."
  - "Prüfe, ob der Operator zu den Member-pflichtigen Fällen gehört."
selfCheckPoints:
  - "Wird die Rolle von this sauber beschrieben?"
  - "Ist klar, warum manche Operatoren nur als Member erlaubt sind?"
transferIdeas:
  - "Vergleiche einen Additionsoperator mit einem Stream-Ausgabeoperator."
reflectionPrompt: "Warum ist die Wahl zwischen Member und freier Funktion nicht bloß Geschmack, sondern Teil der Modellierung?"
---

## Aufgabe 1: this erklären

Erkläre in eigenen Worten, was es bei einem Member-Operator bedeutet, dass die linke Seite des Ausdrucks in `this` steckt.

## Aufgabe 2: Beispiel begründen

Warum liegt der Stream-Operator `<<` für eigene Typen oft eher als freie Funktion nahe?

## Aufgabe 3: Nur als Member

Nenne ein Beispiel für einen Operator, der nur als Member-Funktion erlaubt ist, und erkläre kurz, warum das wichtig ist.
