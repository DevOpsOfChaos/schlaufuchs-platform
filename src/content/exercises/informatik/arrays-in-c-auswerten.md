---
title: Arrays in C auswerten
description: Diese Aufgabe trainiert den sicheren Umgang mit Indizes, Schleifenbedingungen und einfachen Auswertungen in C.
subject: informatik
section: Programmierung
level: mittel
draft: false
---

## Arbeitsauftrag

Lies die kurzen Codeausschnitte sorgfältig. Bearbeite die Aufgaben zunächst ohne Compiler und prüfe danach deine Überlegungen mit sauberer Begründung.

## Aufgabe 1

Gegeben ist:

```c
int zahlen[5] = {2, 4, 6, 8, 10};
```

Beantworte:

1. Welchen Wert hat `zahlen[0]`?
2. Welchen Wert hat `zahlen[3]`?
3. Warum ist `zahlen[5]` kein gültiger Zugriff?

## Aufgabe 2

Gegeben ist:

```c
int summe = 0;
for (int i = 0; i < 5; i++) {
  summe = summe + zahlen[i];
}
```

1. Welchen Endwert hat `summe`?
2. Erkläre kurz, warum die Schleife genau fünf Durchläufe macht.

## Aufgabe 3

Untersuche den Fehler im folgenden Code:

```c
for (int i = 1; i <= 5; i++) {
  printf("%d\n", zahlen[i]);
}
```

1. Nenne zwei Probleme im Code.
2. Schreibe die Schleife korrekt auf.

## Aufgabe 4

Schreibe einen kurzen C-Code, der aus diesem Array den größten Wert ermittelt:

```c
int punkte[6] = {12, 7, 19, 5, 19, 11};
```

Verwende dabei:

- eine Schleife,
- eine Vergleichsbedingung,
- eine Variable für das bisher größte Element.

## Aufgabe 5

Ein Programm soll den Mittelwert aus vier Messwerten berechnen:

```c
int messwerte[4] = {3, 7, 8, 6};
```

1. Bestimme zuerst die Summe.
2. Berechne danach den Mittelwert.
3. Erkläre kurz, warum die Datentypwahl das Ergebnis beeinflussen kann.

## Hinweise

- Ein Array mit Länge 5 hat nur die Indizes 0 bis 4.
- Prüfe Schleifen immer auf Startwert, Bedingung und Erhöhung.
- Bei einer Maximumsuche ist der erste Arraywert ein guter Start für die Vergleichsvariable.
- Für Mittelwerte können Ganzzahl- und Gleitkommarechnung unterschiedliche Ergebnisse liefern.

## Selbstkontrolle

Diese Punkte sollten am Ende klar sein:

- Die Summe aus Aufgabe 2 beträgt 30.
- In Aufgabe 3 liegt ein Off-by-one-Fehler vor.
- In Aufgabe 4 ist 19 der größte Wert.
- In Aufgabe 5 beträgt die Summe 24.
