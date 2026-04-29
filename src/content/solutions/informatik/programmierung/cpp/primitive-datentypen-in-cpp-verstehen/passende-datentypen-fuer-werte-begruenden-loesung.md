---
title: "Musterlösung – Passende Datentypen für Werte begründen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-DATENTYPEN-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "primitive-datentypen-in-cpp-verstehen", "passende-datentypen-fuer-werte-begruenden"]
taskId: "INF-PROG-CPP-DATENTYPEN-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/primitive-datentypen-in-cpp-verstehen/passende-datentypen-fuer-werte-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Typ zuordnen

- **Ist das Formular abgeschickt?** → `bool`, weil es hier um einen Ja-Nein-Zustand geht.
- **Anzahl offener Tickets** → `int`, weil eine exakte ganze Anzahl gemeint ist.
- **Temperatur im Raum** → `double`, weil ein Messwert mit Nachkommastellen typisch ist.
- **Einzelnes Kennzeichenzeichen `X`** → `char`, weil genau ein Zeichen gespeichert werden soll.

## Aufgabe 2: Rollen unterscheiden

`false`, `0` und `'0'` sehen ähnlich schlicht aus, haben aber unterschiedliche Rollen:

- `false` ist ein Wahrheitswert.
- `0` ist eine ganze Zahl.
- `'0'` ist das einzelne Zeichen Null.

Darum wäre es fachlich falsch, sie einfach als „dasselbe in anderer Schreibweise“ zu behandeln.

## Aufgabe 3: Denkfehler prüfen

„Ich kann für alles einfach `double` nehmen“ ist zu grob, weil damit wichtige Bedeutungen verloren gehen. Ein bool-Wert ist keine Messgröße, ein einzelnes Zeichen ist keine Gleitkommazahl und eine exakte Stückzahl sollte nicht unnötig als Näherungswert gedacht werden.

## Worauf man bei der Korrektur achten sollte

- Die Rolle des Wertes muss klar benannt werden.
- Nicht nur Typnamen auflisten, sondern begründen.
- bool, Zahl und Zeichen sauber trennen.
