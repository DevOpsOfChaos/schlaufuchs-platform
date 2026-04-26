---
title: "Abfragen und Filter in Datenbanken – Überblick"
description: "Eine allgemeine Einführung in Datenbankabfragen, Filterbedingungen und das gezielte Auswählen von Datensätzen."
subject: "informatik"
section: "Datenbanken"
topicPath:
  - "datenbanken"
  - "abfragen-und-filter"
  - "ueberblick"
learningGoals:
  - "Du verstehst, warum Datenbanken mit Abfragen statt mit bloßem Durchsuchen genutzt werden."
  - "Du unterscheidest Tabelle, Datensatz, Feld und Filterbedingung."
  - "Du erkennst, warum präzise Bedingungen für gute Abfragen entscheidend sind."
practiceIdeas:
  - "Formuliere zu einer Tabelle erst eine Frage in Alltagssprache und dann eine Filterbedingung."
  - "Prüfe, ob eine Bedingung zu viele, zu wenige oder genau die passenden Datensätze liefert."
  - "Vergleiche eine Sortierung mit einem Filter und erkläre den Unterschied."
commonMistakes:
  - "Sortieren und Filtern gleichzusetzen."
  - "Eine Bedingung zu ungenau zu formulieren und dadurch falsche Treffer zu erhalten."
  - "Die Frage an die Datenbank nicht klar von der Darstellung des Ergebnisses zu trennen."
keyTakeaways:
  - "Eine Abfrage beschreibt, welche Daten aus einer Tabelle oder mehreren Tabellen gebraucht werden."
  - "Ein Filter schränkt die Treffer über Bedingungen ein."
  - "Gute Abfragen beginnen mit einer klar formulierten Informationsfrage."
recognizeSignals:
  - "Eine Tabelle soll nach bestimmten Kriterien durchsucht oder eingeschränkt werden."
  - "Es geht um Begriffe wie Datensatz, Feld, WHERE, Bedingung oder Ergebnisliste."
  - "Nicht alle Daten sind interessant, sondern nur eine passende Auswahl."
selfCheckPoints:
  - "Ist klar, welche Information gesucht wird?"
  - "Ist die Filterbedingung fachlich passend und nicht nur syntaktisch korrekt?"
  - "Kann ich erklären, warum bestimmte Datensätze im Ergebnis stehen und andere nicht?"
level: "einfach"
tags:
  - "informatik"
  - "datenbanken"
  - "abfragen"
  - "filter"
draft: false
---

## Begriff und Zweck

Eine Datenbank speichert Daten so, dass sie geordnet, wiederauffindbar und auswertbar sind. Eine Abfrage ist eine gezielte Frage an diese Daten. Sie soll nicht einfach alles anzeigen, sondern genau die Informationen liefern, die für eine bestimmte Aufgabe benötigt werden.

Ein Filter ist dabei eine Bedingung, die festlegt, welche Datensätze im Ergebnis erscheinen. Statt eine komplette Tabelle manuell zu durchsuchen, beschreibt man also die Auswahlregel.

## Grundbegriffe

Eine Tabelle besteht aus Zeilen und Spalten. Eine Zeile nennt man oft Datensatz. Eine Spalte beschreibt ein Feld oder Attribut, zum Beispiel Name, Preis, Datum oder Kategorie. Eine Abfrage nutzt diese Felder, um Daten auszuwählen, zu vergleichen oder zu sortieren.

Ein einfaches Beispiel ist eine Tabelle mit Büchern. Eine Abfrage könnte alle Bücher anzeigen, die nach 2020 erschienen sind. Der Filter wäre dann eine Bedingung auf dem Feld Erscheinungsjahr.

## Filtern ist nicht Sortieren

Filtern und Sortieren werden im Alltag leicht verwechselt. Ein Filter entscheidet, welche Datensätze überhaupt im Ergebnis stehen. Eine Sortierung entscheidet, in welcher Reihenfolge die ausgewählten Datensätze angezeigt werden.

Wenn eine Tabelle mit Produkten nach Preis sortiert wird, bleiben alle Produkte vorhanden. Wenn nur Produkte unter 20 Euro gefiltert werden, verschwinden alle teureren Produkte aus dem Ergebnis. Beide Operationen können kombiniert werden, sind aber nicht dasselbe.

## Warum Bedingungen präzise sein müssen

Eine Datenbank arbeitet streng nach den formulierten Bedingungen. Wenn eine Bedingung zu weit ist, erscheinen zu viele Treffer. Wenn sie zu eng ist, fehlen wichtige Treffer. Bei Texten, Zahlen und Datumswerten gelten außerdem unterschiedliche Vergleichslogiken.

Eine gute Abfrage beginnt deshalb nicht mit SQL-Syntax, sondern mit einer klaren fachlichen Frage: Welche Daten brauche ich wirklich? Welche Felder sind dafür relevant? Welche Werte sollen ein- oder ausgeschlossen werden?

## Abfragen als Denkwerkzeug

Abfragen sind nicht nur technische Befehle. Sie sind eine Form, über Daten nachzudenken. Man entscheidet, welche Merkmale wichtig sind, welche Bedingungen gelten und welche Sicht auf die Daten entstehen soll.

Dadurch werden Datenbanken besonders mächtig: Die gespeicherten Daten bleiben gleich, aber unterschiedliche Abfragen erzeugen unterschiedliche Perspektiven auf dieselben Daten.

## Abgrenzung zu einzelnen Lernseiten

Einzelne Lernseiten können später konkrete SQL-Befehle, `WHERE`-Bedingungen, logische Verknüpfungen oder Joins behandeln. Diese Überblicksseite erklärt zuerst den allgemeinen Sinn: Eine Abfrage ist eine strukturierte Frage an Daten, und ein Filter ist die Auswahlregel für passende Datensätze.

## Merksatz

Eine Datenbankabfrage beantwortet eine gezielte Frage. Ein Filter sorgt dafür, dass nur Datensätze erscheinen, die zu dieser Frage passen.
