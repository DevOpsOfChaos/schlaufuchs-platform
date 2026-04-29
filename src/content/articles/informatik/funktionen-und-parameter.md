---
title: "Funktionen und Parameter"
description: "Funktionen helfen dabei, Programme klarer zu strukturieren, Wiederholungen zu vermeiden und Teilaufgaben sauber zu kapseln."
subject: "informatik"
section: "Programmstruktur"
topicPath: ["funktionen-und-parameter"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmstruktur"]
draft: false
---
## Überblick

Sobald ein Programm mehr als nur wenige Zeilen umfasst, wird Struktur entscheidend. Funktionen helfen dabei, Teilaufgaben abzugrenzen. Statt denselben Code mehrfach zu schreiben, wird eine Aufgabe einmal formuliert und anschließend gezielt aufgerufen.

## Was ist eine Funktion?

Eine Funktion ist ein benannter Programmteil, der eine bestimmte Aufgabe übernimmt. Beispiele sind:

- eine Zahl ausgeben,
- zwei Werte vergleichen,
- eine Summe berechnen,
- eine Eingabe prüfen.

Dadurch wird Code lesbarer und leichter wartbar.

## Parameter

Parameter sind Eingabewerte einer Funktion. Sie machen eine Funktion flexibel. Statt für jeden Fall eine neue Funktion zu schreiben, kann dieselbe Funktion mit unterschiedlichen Werten arbeiten.

Ein einfaches Beispiel in C ist:

```c
int addiere(int a, int b) {
  return a + b;
}
```

Hier sind `a` und `b` die Parameter. Die Funktion kann mit vielen verschiedenen Zahlen verwendet werden.

## Rückgabewert

Viele Funktionen liefern ein Ergebnis zurück. In C geschieht das mit `return`. Der Datentyp der Funktion muss zum Rückgabewert passen.

```c
int ergebnis = addiere(3, 5);
```

Nach dem Funktionsaufruf steht in `ergebnis` der Wert 8.

## Warum Funktionen wichtig sind

Funktionen helfen vor allem in vier Punkten:

- Wiederholungen werden vermieden.
- Programme werden übersichtlicher.
- Fehler lassen sich leichter eingrenzen.
- Teilprobleme können einzeln getestet werden.

## Typische Fehler

- Parameter in der falschen Reihenfolge übergeben.
- Datentypen nicht passend wählen.
- Einen Rückgabewert erwarten, obwohl die Funktion `void` ist.
- Lokale Variablen außerhalb ihrer Funktion verwenden wollen.

## Gute Denkweise

Eine Funktion sollte möglichst eine klar umrissene Aufgabe haben. Statt riesige Allzweck-Funktionen zu bauen, ist eine Aufteilung in kleine, verständliche Teile oft besser.

## Merksätze

- Funktionen strukturieren Programme.
- Parameter machen Funktionen flexibel.
- `return` gibt Werte zurück.
- Kleine, klar benannte Funktionen sind meist leichter zu verstehen als lange Codeblöcke.
