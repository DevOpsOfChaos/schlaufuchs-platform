---
title: "C-Eingabe, Vergleich und Ausgabe"
description: "Diese neu formulierte Bestandsaufgabe verbindet Eingabe, Vergleich und Ausgabe in C in einer klaren, ruhigen Grundstruktur."
subject: "informatik"
section: "Programmierung"
topicPath: ["c-eingabe-vergleich-ausgabe"]
taskId: "AUTO-C-EINGABE-VERGLEICH-AUSGABE"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Arbeitsauftrag

Bearbeite die Aufgabe so, als würdest du ein kleines Konsolenprogramm planen. Der Schwerpunkt liegt auf klarer Grundlogik, nicht auf komplizierter Syntax.

## Ausgangssituation

Ein Programm soll zwei ganze Zahlen einlesen und anschließend ausgeben, welche Zahl größer ist. Sind beide Zahlen gleich, soll das Programm dies ebenfalls melden.

## Aufgabe 1

Überlege zunächst ohne Code:

1. Welche Variablen werden benötigt?
2. Welche Datentypen sind sinnvoll?
3. Welche Ausgaben kann das Programm am Ende erzeugen?

## Aufgabe 2

Schreibe einen vollständigen C-Code, der:

- zwei ganze Zahlen einliest,
- die Werte vergleicht,
- den passenden Text ausgibt.

## Aufgabe 3

Verwende dabei mindestens:

- `int` für die Variablen,
- `scanf` für die Eingabe,
- `printf` für die Ausgabe,
- `if`, `else if` und `else` für den Vergleich.

## Aufgabe 4

Erkläre kurz in eigenen Worten:

1. Warum eine einfache `if`-Abfrage hier nicht für alle Fälle reicht.
2. Warum der Gleichheitsfall bewusst behandelt werden muss.

## Aufgabe 5

Teste dein Programm gedanklich mit diesen Eingaben:

1. 8 und 3
2. 4 und 9
3. 6 und 6

Notiere jeweils die erwartete Ausgabe.

## Hinweise

- Plane erst die Fälle, dann den Code.
- Beim Vergleich von zwei Zahlen gibt es genau drei sinnvolle Ergebnisse: größer, kleiner oder gleich.
- Gute Grundaufgaben werden sauber, nicht hektisch gelöst.

## Selbstkontrolle

Diese Punkte sollten am Ende klar sein:

- Es werden zwei `int`-Variablen benötigt.
- Für den vollständigen Vergleich sind drei Fälle zu unterscheiden.
- Bei gleichen Werten darf das Programm nicht fälschlich einen größeren Wert behaupten.
