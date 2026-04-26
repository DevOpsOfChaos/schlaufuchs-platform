---
title: "Grundlagen: Suchen und Filtern"
description: "Ein allgemeiner Überblick darüber, wie Such- und Filterverfahren Datenmengen gezielt einschränken."
subject: informatik
section: "Algorithmen"
topicPath:
  - algorithmen-klein-begruenden
  - suchen-und-filtern
  - ueberblick
learningGoals:
  - "Du erklärst den Unterschied zwischen Suchen und Filtern."
  - "Du beschreibst Bedingungen als Grundlage eines Filterverfahrens."
  - "Du erkennst, warum Datenstruktur und Suchziel zusammengehören."
practiceIdeas:
  - "Formuliere für eine kleine Liste eine Suchbedingung."
  - "Unterscheide, ob ein einzelnes Element oder mehrere passende Elemente gesucht werden."
commonMistakes:
  - "Suchen und Filtern als dasselbe zu behandeln."
  - "Die Bedingung unklar zu formulieren."
keyTakeaways:
  - "Suchen fragt meist nach einem bestimmten Treffer."
  - "Filtern erzeugt eine Auswahl nach einer Bedingung."
recognizeSignals:
  - "Es gibt eine Liste, Tabelle oder Sammlung von Daten."
  - "Ein Kriterium entscheidet, welche Einträge passen."
selfCheckPoints:
  - "Kann ich eine Suchbedingung sprachlich sauber formulieren?"
  - "Kann ich Treffer und Filtermenge unterscheiden?"
tags:
  - informatik
  - algorithmen
  - suchen
level: einfach
draft: false
---

## Begriff

**Suchen** und **Filtern** sind Grundoperationen der Informatik. Beide helfen, in einer Datenmenge relevante Informationen zu finden. Der Unterschied liegt im Ziel: Beim Suchen geht es oft um einen bestimmten Treffer. Beim Filtern entsteht eine Teilmenge aller Einträge, die eine Bedingung erfüllen.

## Suchen

Eine Suche beantwortet typischerweise die Frage, ob ein bestimmtes Element vorhanden ist oder wo es steht. Beispiele sind das Finden eines Namens in einer Liste, einer Datei in einem Ordner oder eines Werts in einem Array.

Eine einfache lineare Suche prüft Eintrag für Eintrag. Das ist leicht zu verstehen, kann bei sehr großen Datenmengen aber langsam werden. Sortierte Daten oder spezielle Datenstrukturen können die Suche beschleunigen.

## Filtern

Filtern bedeutet, Einträge nach einer Regel auszuwählen. Die ursprüngliche Datenmenge bleibt dabei gedanklich erhalten; es wird nur eine Auswahl gebildet. Ein Filter könnte zum Beispiel alle Zahlen größer als 10, alle offenen Aufgaben oder alle Dateien mit einer bestimmten Endung auswählen.

## Bedingungen

Das wichtigste Element beim Filtern ist die Bedingung. Sie muss klar entscheiden können, ob ein Eintrag aufgenommen wird oder nicht. Unklare Bedingungen führen zu fehlerhaften Programmen, weil nicht eindeutig ist, welche Daten gemeint sind.

## Bedeutung in Programmen

Suchen und Filtern kommen in fast allen Programmen vor: in Suchfeldern, Datenbanken, Dateimanagern, Tabellenansichten und Webanwendungen. Wer diese Grundidee versteht, kann spätere Themen wie Schleifen, Datenstrukturen, Datenbanken und Benutzeroberflächen besser einordnen.
