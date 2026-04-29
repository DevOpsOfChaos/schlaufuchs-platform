---
title: "Arrays und Schleifen"
description: "Arrays und Schleifen gehören zusammen, weil Daten häufig nicht einzeln, sondern als Folge verarbeitet werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["arrays-und-schleifen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Überblick

Sobald mehrere ähnliche Werte verarbeitet werden sollen, wird einzelner Code schnell unübersichtlich. Arrays bündeln viele Werte desselben Typs in einer festen Struktur. Schleifen sorgen dafür, dass diese Werte systematisch durchlaufen, geprüft oder verändert werden können.

## Was ist ein Array?

Ein Array speichert mehrere Elemente gleichen Typs in einer festen Reihenfolge. Die Position eines Elements wird über einen Index angesprochen.

Ein typisches Beispiel in C ist:

```c
int werte[5] = {3, 5, 8, 13, 21};
```

Hier enthält das Array fünf ganze Zahlen. Der erste Eintrag liegt am Index 0, der zweite am Index 1 und so weiter.

## Warum beginnt der Index bei 0?

In vielen Programmiersprachen beginnt die Zählung im Speicher bei 0. Das wirkt am Anfang ungewohnt, ist aber in C, Java, JavaScript oder Python ein normaler Standard. Wer bei 1 zu zählen beginnt, produziert leicht Off-by-one-Fehler.

## Schleifen zum Durchlaufen

Ein Array wird häufig mit einer Schleife verarbeitet. Besonders typisch ist die `for`-Schleife:

```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", werte[i]);
}
```

Die Schleife startet bei `i = 0`, läuft so lange `i < 5` gilt und erhöht `i` nach jedem Durchlauf um 1. Dadurch werden genau die fünf gültigen Indizes 0 bis 4 angesprochen.

## Typische Aufgaben mit Arrays

Arrays und Schleifen werden oft genutzt, um:

- Werte auszugeben,
- Summen zu bilden,
- das größte oder kleinste Element zu finden,
- Eingaben zu speichern,
- einfache Auswertungen durchzuführen.

## Häufige Fehler

Besonders oft treten diese Fehler auf:

- Die Schleife startet bei 1 statt bei 0.
- Die Abbruchbedingung ist falsch, etwa `i <= 5` statt `i < 5`.
- Ein Array wird mit einem Index außerhalb seiner Länge angesprochen.
- Datentyp und Inhalt passen nicht zusammen.
- Das Array wird benutzt, bevor Werte sinnvoll eingelesen oder gesetzt wurden.

## Kleines Beispiel

Gegeben ist das Array:

```c
int punkte[4] = {7, 9, 6, 8};
```

Eine Schleife kann daraus die Gesamtsumme berechnen:

```c
int summe = 0;
for (int i = 0; i < 4; i++) {
  summe = summe + punkte[i];
}
```

Nach der Schleife steht in `summe` der Wert 30.

## Praktische Denkweise

Arbeite bei Arrays immer mit drei Fragen:

1. Wie viele Elemente gibt es?
2. Bei welchem Index beginnt die Verarbeitung?
3. Wann muss die Schleife sicher enden?

Wer diese drei Fragen sauber beantwortet, vermeidet viele typische Anfängerfehler.

## Merksätze

- Arrays speichern viele Werte gleichen Typs.
- Schleifen helfen beim systematischen Zugriff.
- Ein Array mit Länge `n` hat in der Regel die Indizes `0` bis `n - 1`.
- Gute Schleifenbedingungen sind für korrektes Programmverhalten entscheidend.
