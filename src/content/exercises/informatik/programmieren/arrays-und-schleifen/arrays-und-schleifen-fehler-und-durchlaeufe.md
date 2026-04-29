---
title: "Arrays und Schleifen – Fehler und Durchläufe"
description: "Trainiere das saubere Lesen von Indizes, Schleifenbedingungen und typischen Grenzfällen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmieren", "arrays-und-schleifen", "arrays-und-schleifen-fehler-und-durchlaeufe"]
taskId: "AUTO-ARRAYS-UND-SCHLEIFEN-FEHLER-UND-DURCHLAEUFE"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Durchläufe notieren

Gegeben ist:

```c
int werte[4] = {2, 4, 6, 8};
for (int i = 0; i < 4; i++) {
  printf("%d\n", werte[i]);
}
```

Notiere:

- Welche Werte hat `i` nacheinander?
- Welcher Array-Wert wird in jedem Schritt ausgegeben?

## Aufgabe 2: Fehler finden

Betrachte die Schleife.

```c
for (int i = 0; i <= 4; i++) {
  printf("%d\n", werte[i]);
}
```

Erkläre:

- Was ist hier problematisch?
- Welcher typische Fehler steckt darin?

## Aufgabe 3: Summe verstehen

```c
int zahlen[3] = {5, 1, 4};
int summe = 0;
for (int i = 0; i < 3; i++) {
  summe = summe + zahlen[i];
}
```

Beantworte:

- Welchen Wert hat `summe` nach dem ersten Durchlauf?
- Welchen Wert hat `summe` am Ende?
