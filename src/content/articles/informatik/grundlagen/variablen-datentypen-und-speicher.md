---
title: "Variablen, Datentypen und Speicher verstehen"
description: "Variablen, Datentypen und Speicher gehören zu den wichtigsten Grundlagen der Informatik und helfen dabei, Programme logisch und korrekt aufzubauen."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "variablen-datentypen-und-speicher"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Grundlagen"]
draft: false
---
## Überblick

Programme arbeiten nicht mit abstrakten Ideen allein, sondern mit konkreten Werten. Diese Werte müssen gespeichert, verändert und korrekt verarbeitet werden. Genau dafür braucht man Variablen und Datentypen. Wer dieses Fundament nicht sauber versteht, produziert später leicht Fehler bei Berechnungen, Vergleichen oder Ein- und Ausgaben.

## Was ist eine Variable?

Eine Variable ist ein benannter Speicherplatz für einen Wert. Der Name hilft dabei, den gespeicherten Inhalt im Programm wiederzufinden und sinnvoll zu verwenden.

Beispiele für Variablen wären:

- `alter`
- `punktzahl`
- `temperatur`
- `anzahl`

Die Grundidee lautet:

- Eine Variable speichert einen Wert.
- Auf diesen Wert kann später zugegriffen werden.
- Der Wert kann sich im Programmverlauf ändern.

## Warum heißt sie Variable?

Der Begriff macht deutlich, dass sich der Inhalt verändern kann.

Beispiel:

- Anfangs hat `punktzahl` den Wert 0.
- Später wird daraus 10.
- Danach vielleicht 15.

Der Name bleibt gleich, der Inhalt ändert sich.

## Was ist ein Datentyp?

Ein Datentyp legt fest, **welche Art von Wert** gespeichert wird und wie mit diesem Wert gearbeitet werden darf.

Typische Datentypen sind:

- ganze Zahlen
- Gleitkommazahlen
- einzelne Zeichen
- Wahrheitswerte
- Zeichenketten

In vielen Programmiersprachen ist der Datentyp wichtig, weil der Computer nicht „von selbst“ erkennt, wie ein Wert gedacht ist.

## Häufige Datentypen

### Ganze Zahlen

Diese speichern Werte ohne Nachkommastellen.

Beispiele:

- 3
- 14
- -8

In C wird dafür oft `int` verwendet.

### Gleitkommazahlen

Diese speichern Werte mit Nachkommastellen.

Beispiele:

- 3.5
- 2.75
- 0.1

In C tauchen hier oft `float` oder `double` auf.

### Zeichen

Ein einzelnes Zeichen wie:

- `A`
- `b`
- `7`

wird in vielen Sprachen anders behandelt als ein ganzer Text.

### Wahrheitswerte

Diese beschreiben nur zwei Zustände:

- wahr
- falsch

Sie sind besonders wichtig für Bedingungen und Entscheidungen.

## Variable ist nicht gleich Datentyp

Eine Variable ist der benannte Speicherplatz. Der Datentyp beschreibt, welche Art von Inhalt dort liegen darf.

Beispiel:

- Variable: `temperatur`
- Datentyp: `float`
- möglicher Wert: `21.5`

## Speicher und Repräsentation

Der Computer speichert keine „Bedeutung“, sondern Bitmuster. Erst der Datentyp legt fest, wie diese Bitmuster interpretiert werden.

Das ist wichtig, weil:

- dieselbe Binärstruktur unterschiedlich gelesen werden könnte,
- Speicherplatz begrenzt ist,
- verschiedene Datentypen unterschiedlich viel Speicher brauchen.

Für den Einstieg reicht die Denkweise:

- Der Computer braucht klare Regeln dafür, wie Werte gespeichert werden.
- Datentypen liefern diese Regeln.

## Deklaration und Initialisierung

In vielen Sprachen wird eine Variable zuerst deklariert.

Beispiel in C:

```c
int alter;
```

Damit wird festgelegt:

- Name der Variable: `alter`
- Datentyp: `int`

Wird direkt ein Anfangswert gesetzt, spricht man oft von Initialisierung.

```c
int alter = 17;
```

## Warum Datentypen wichtig sind

Datentypen helfen dabei,

- Speicher sinnvoll zu nutzen,
- Rechenoperationen korrekt auszuführen,
- Fehler früh zu erkennen,
- Daten passend zu verarbeiten.

Beispiel:

- Eine Punktzahl wird oft als ganze Zahl gespeichert.
- Eine Temperatur eher als Gleitkommazahl.
- Eine Ja-Nein-Entscheidung als Wahrheitswert.

## Typische Fehler

- Ganze Zahl und Kommazahl verwechseln.
- Annehmen, dass ein Text wie eine Zahl behandelt wird.
- Einer Variable keinen sinnvollen Namen geben.
- Eine Variable verwenden, bevor sie einen sinnvollen Startwert hat.
- Den Datentyp nur als Syntax statt als Bedeutungsrahmen sehen.

## Gute Denkweise

Bei jeder Variable helfen drei Fragen:

1. Was soll gespeichert werden?
2. Welche Art von Wert ist das?
3. Kann sich der Wert im Programm verändern?

Wer diese Fragen beantwortet, wählt Variable und Datentyp meist schon deutlich besser.

## Merksätze

- Eine Variable ist ein benannter Speicherplatz.
- Ein Datentyp beschreibt die Art des gespeicherten Werts.
- Der Datentyp beeinflusst Verarbeitung und Speicher.
- Gute Programme brauchen passende Variablen und passende Datentypen.
