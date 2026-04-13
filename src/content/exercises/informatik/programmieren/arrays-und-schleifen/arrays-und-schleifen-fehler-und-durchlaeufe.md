---
title: Arrays und Schleifen – Fehler und Durchläufe
description: Trainiere das saubere Lesen von Indizes, Schleifenbedingungen und typischen Grenzfällen.
subject: informatik
section: Programmierung
topicPath:
  - programmieren
  - arrays-und-schleifen
  - arrays-und-schleifen-fehler-und-durchlaeufe
tags:
  - arrays
  - schleifen
  - index
  - for
hintPoints:
  - "Markiere Startwert, Bedingung und Erhöhung getrennt."
  - "Prüfe, welche Indizes wirklich gültig sind."
  - "Frage dich bei jedem Durchlauf: Welcher Wert wird gerade gelesen?"
selfCheckPoints:
  - "Kann ich alle Schleifendurchläufe korrekt aufzählen?"
  - "Habe ich keine ungültige Array-Position verwendet?"
  - "Kann ich einen Off-by-one-Fehler benennen?"
level: einfach
draft: false
transferIdeas:
  - "Warum ist es oft sicherer, nicht „nach Gefühl“, sondern mit Array-Länge und gültigen Indizes zu argumentieren?"
reflectionPrompt: "Was war an „Arrays und Schleifen – Fehler und Durchläufe“ für dich der entscheidende Gedanke, den du beim nächsten ähnlichen Thema wiedererkennst?"
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
