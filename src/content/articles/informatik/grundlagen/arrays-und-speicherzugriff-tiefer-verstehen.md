---
title: Arrays und Speicherzugriff tiefer verstehen
description: Arrays ordnen mehrere Werte gleichen Typs in einer festen Struktur und machen systematischen Speicherzugriff in Programmen möglich.
subject: informatik
section: Grundlagen
level: mittel
tags:
  - Arrays
  - Speicherzugriff
  - Indizes
  - Programmierung
draft: false
---

## Überblick

Sobald Programme nicht nur einen einzelnen Wert, sondern eine ganze Folge ähnlicher Werte verarbeiten sollen, reichen einzelne Variablen oft nicht mehr aus. Genau dafür gibt es Arrays. Sie helfen, mehrere Elemente desselben Typs in einer klaren Struktur zusammenzufassen.

## Was ist ein Array?

Ein Array ist eine geordnete Sammlung mehrerer Elemente desselben Datentyps.

Beispiel in C:

```c
int werte[5] = {4, 7, 9, 12, 15};
```

Dieses Array enthält fünf ganze Zahlen. Jedes Element hat eine feste Position.

## Indizes

Auf die Elemente wird über Indizes zugegriffen.

Wichtig ist:

- Das erste Element hat in vielen Sprachen den Index 0.
- Ein Array mit Länge 5 hat also meist die Indizes 0 bis 4.

Beispiel:

- `werte[0]` ist 4
- `werte[2]` ist 9

## Warum beginnt die Zählung bei 0?

Das wirkt anfangs ungewohnt. In vielen Programmiersprachen hängt diese Darstellung mit der internen Speicherlogik zusammen. Für den Einstieg ist vor allem wichtig:

- Index 0 ist normal.
- Wer bei 1 zu zählen beginnt, macht schnell Fehler.

## Feste Länge

Viele Arrays haben eine feste Länge. Das bedeutet:

- Die Anzahl der Plätze wird bei der Anlage festgelegt.
- Der Typ der Elemente bleibt gleich.

Das macht Arrays übersichtlich und effizient, aber auch weniger flexibel als andere Datenstrukturen.

## Zusammenhang mit Speicher

Ein Array speichert seine Werte in geordneter Form. Das ist wichtig, weil dadurch systematischer Zugriff möglich wird.

Man kann sich ein Array wie eine Reihe gleichartiger Fächer vorstellen:

- jedes Fach hat eine feste Position,
- jedes Fach enthält einen Wert desselben Typs,
- über den Index findet man das richtige Fach.

## Lesen und Schreiben

Mit einem Array kann man Werte lesen oder verändern.

Beispiele:

```c
int x = werte[1];
werte[3] = 20;
```

Im ersten Fall wird gelesen, im zweiten geschrieben.

## Warum Arrays so wichtig sind

Arrays werden gebraucht für:

- Messreihen,
- Listen von Werten,
- Tabellen,
- Schleifenverarbeitung,
- einfache Such- und Vergleichsaufgaben.

Sie verbinden Datenspeicherung direkt mit systematischer Verarbeitung.

## Arrays und Schleifen

Arrays werden oft mit Schleifen kombiniert.

Beispiel:

```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", werte[i]);
}
```

Die Schleife läuft nacheinander durch alle gültigen Indizes.

## Typische Fehler

- Bei 1 statt bei 0 anfangen.
- Auf einen Index zugreifen, der außerhalb des Arrays liegt.
- Die Länge des Arrays nicht beachten.
- Verschiedene Datentypen in einem Array erwarten.
- Nicht zwischen Lesen und Schreiben unterscheiden.

## Gute Denkweise

Beim Arbeiten mit Arrays helfen diese Fragen:

1. Wie viele Elemente gibt es?
2. Welche Indizes sind gültig?
3. Wird gerade gelesen oder geschrieben?
4. Passt die Schleifenbedingung zur Länge?

## Merksätze

- Ein Array speichert mehrere Werte gleichen Typs.
- Die Elemente werden über Indizes angesprochen.
- In vielen Sprachen beginnt der erste Index bei 0.
- Arrays und Schleifen gehören oft direkt zusammen.
- Sauberer Speicherzugriff braucht korrekte Indizes.
