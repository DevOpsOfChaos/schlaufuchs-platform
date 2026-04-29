---
title: "Kontrollstrukturen verstehen"
description: "Kontrollstrukturen bestimmen den Ablauf eines Programms und gehören zu den wichtigsten Grundlagen des informatischen Denkens."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "kontrollstrukturen-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Grundlagen"]
draft: false
---
## Überblick

Programme bestehen nicht nur aus einzelnen Befehlen, die einfach streng von oben nach unten ablaufen. Sobald Entscheidungen, Wiederholungen oder unterschiedliche Fälle vorkommen, braucht man Kontrollstrukturen. Sie bestimmen, welcher Teil eines Programms wann ausgeführt wird.

## Was sind Kontrollstrukturen?

Kontrollstrukturen regeln den Ablauf eines Programms. Sie beantworten Fragen wie:

- Wird ein bestimmter Block überhaupt ausgeführt?
- Welche Anweisung gilt in welchem Fall?
- Wie oft soll etwas wiederholt werden?

Ohne Kontrollstrukturen wären Programme auf starre lineare Abläufe beschränkt.

## Drei Grundformen des Ablaufs

### 1. Sequenz

Anweisungen werden nacheinander ausgeführt.

Beispiel:

1. Zahl einlesen
2. Zahl verdoppeln
3. Ergebnis ausgeben

### 2. Auswahl

Eine Bedingung entscheidet zwischen verschiedenen Wegen.

Beispiel:

- Wenn die Zahl größer als 0 ist, gib „positiv“ aus.
- Sonst gib „nicht positiv“ aus.

### 3. Wiederholung

Ein Block wird mehrfach ausgeführt.

Beispiel:

- Gib die Zahlen von 1 bis 10 aus.

## Bedingungen

Bedingungen prüfen, ob eine Aussage wahr oder falsch ist.

Typische Vergleiche sind:

- größer als
- kleiner als
- gleich
- ungleich

Bedingungen sind die Grundlage für `if`-Strukturen.

## if, else if, else

Mit einer `if`-Struktur kann ein Programm auf unterschiedliche Situationen reagieren.

Die Grundidee lautet:

- **if**: Falls die Bedingung wahr ist
- **else if**: Falls eine weitere Bedingung geprüft werden soll
- **else**: Falls kein vorheriger Fall zutrifft

Beispiel:

- Wenn `punktzahl >= 50`, dann „bestanden“
- sonst „nicht bestanden"

## Schleifen

Schleifen werden benutzt, wenn ein Ablauf wiederholt werden soll.

### for-Schleife

Geeignet, wenn die Anzahl der Wiederholungen bekannt ist.

Beispiel:

- Wiederhole etwas 10-mal.

### while-Schleife

Geeignet, wenn eine Wiederholung von einer Bedingung abhängt.

Beispiel:

- Solange der Wert kleiner als 100 ist, erhöhe ihn.

## Warum Schleifen wichtig sind

Schleifen sparen Wiederholungen im Code und machen Programme flexibler. Ohne Schleifen müssten viele Befehle mehrfach fast identisch geschrieben werden.

## Typische Fehler

- Bedingungen falsch formulieren.
- `if`- und `else`-Logik vertauschen.
- Schleifen falsch starten oder falsch beenden.
- Endlosschleifen erzeugen.
- Nicht klar zwischen Einzelfall und Wiederholung unterscheiden.

## Gute Denkweise

Bei Kontrollstrukturen helfen diese Fragen:

1. Muss hier entschieden werden?
2. Muss hier etwas wiederholt werden?
3. Ist die Bedingung eindeutig?
4. Kann die Schleife sicher enden?

## Warum das Thema so wichtig ist

Kontrollstrukturen sind eine Grundlage für fast jedes Programm. Sie werden gebraucht für:

- Eingabeprüfung,
- Menüs,
- Berechnungen,
- Suchen,
- Sortieren,
- Datenverarbeitung,
- Benutzerinteraktion.

## Merksätze

- Kontrollstrukturen steuern den Programmablauf.
- Bedingungen entscheiden zwischen Fällen.
- Schleifen wiederholen Anweisungen.
- Gute Programme brauchen klare Auswahl- und Wiederholungslogik.
