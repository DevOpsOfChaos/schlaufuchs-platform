---
title: "Datenbanken"
description: "Allgemeiner Überblick über Datenbanken als Systeme zur strukturierten Speicherung und Abfrage von Daten."
subject: informatik
section: "Daten"
topicPath:
  - "datenbanken"
  - "ueberblick"
learningGoals:
  - "Du kennst Datenbanken als strukturierte Datenspeicher."
  - "Du kannst Tabellen, Datensätze und Abfragen grob einordnen."
  - "Du verstehst, warum Konsistenz und Modellierung wichtig sind."
practiceIdeas: []
commonMistakes:
  - "Eine Datenbank nur als große Tabelle zu verstehen."
  - "Datenmodell und Benutzeroberfläche zu verwechseln."
keyTakeaways:
  - "Datenbanken speichern Daten strukturiert, dauerhaft und abfragbar."
  - "Ein gutes Datenmodell macht Beziehungen, Regeln und Abfragen nachvollziehbar."
recognizeSignals:
  - "Es geht um Tabellen, Datensätze, SQL, Beziehungen, Schlüssel oder Abfragen."
selfCheckPoints:
  - "Kann ich unterscheiden, welche Daten gespeichert werden und welche nur berechnet oder angezeigt werden?"
level: einfach
tags:
  - "informatik"
  - "datenbanken"
  - "daten"
  - "sql"
draft: false
---

# Datenbanken

![Schaubild zu Datenbanken.](/schlaufuchs-platform/images/overviews/v148/datenbanken.svg)

*Das Schaubild zeigt den Weg von Daten über Anfrage und Transaktion zum Ergebnis.*


Eine Datenbank ist ein System zur strukturierten Speicherung und Abfrage von Daten. Sie sorgt dafür, dass Daten dauerhaft, geordnet und möglichst widerspruchsfrei gespeichert werden. Programme verwenden Datenbanken, um Nutzerdaten, Produkte, Messwerte, Buchungen, Aufgaben oder viele andere Informationen zu verwalten.

Besonders verbreitet sind relationale Datenbanken. Sie organisieren Daten in Tabellen. Eine Tabelle besteht aus Spalten und Zeilen. Eine Zeile beschreibt einen Datensatz, eine Spalte eine Eigenschaft. Beziehungen zwischen Tabellen werden über Schlüssel hergestellt.

## Zweck

Datenbanken lösen Probleme, die einfache Dateien schnell unübersichtlich machen: gleichzeitige Zugriffe, gezielte Suche, Beziehungen, Rechte, Konsistenz und große Datenmengen. Sie trennen die dauerhafte Datenhaltung von der Oberfläche, in der Daten angezeigt oder bearbeitet werden.

## Datenmodell

Ein Datenmodell beschreibt, welche Arten von Informationen gespeichert werden und wie sie zusammenhängen. Eine Lernplattform könnte etwa Fachbereiche, Artikel, Aufgaben und Lösungen unterscheiden. Wichtig ist, Daten nicht unnötig zu doppeln und Beziehungen klar abzubilden.

## Abfragen

Mit Abfragen werden Daten gesucht, gefiltert, sortiert oder verknüpft. In relationalen Datenbanken wird dafür häufig SQL verwendet. Eine Abfrage kann einzelne Datensätze finden, Zusammenfassungen bilden oder Daten aus mehreren Tabellen verbinden.

## Konsistenz

Datenbanken können Regeln durchsetzen: Pflichtfelder, eindeutige Schlüssel, Beziehungen oder Transaktionen. Dadurch soll verhindert werden, dass Daten in widersprüchliche Zustände geraten, etwa eine Lösung ohne passende Aufgabe.

## Häufige Missverständnisse

Ein häufiger Fehler ist, eine Datenbank nur als große Tabelle zu sehen. Der eigentliche Wert liegt oft in Beziehungen, Regeln und Abfragen. Ein anderer Fehler ist, sichtbare Formulare direkt als Datenmodell zu übernehmen, obwohl Darstellung und Speicherung unterschiedliche Aufgaben haben.

## Kurz zusammengefasst

Datenbanken speichern Daten strukturiert und abfragbar. Gute Datenbankarbeit beginnt mit einem klaren Modell, passenden Beziehungen und Regeln, die dauerhaft konsistente Daten unterstützen.
