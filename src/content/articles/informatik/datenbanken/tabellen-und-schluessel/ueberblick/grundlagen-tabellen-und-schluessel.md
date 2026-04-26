---
title: "Grundlagen: Tabellen und Schlüssel"
description: "Allgemeiner Überblick über Tabellen, Datensätze, Attribute, Primärschlüssel und Beziehungen in Datenbanken."
subject: informatik
section: "Datenbanken"
topicPath:
  - datenbanken
  - tabellen-und-schluessel
  - grundlagen-tabellen-und-schluessel
learningGoals:
  - "Du erklärst Tabellen als strukturierte Sammlung gleichartiger Datensätze."
  - "Du beschreibst Attribute, Zeilen und Schlüssel in einer Datenbank."
  - "Du ordnest Primärschlüssel als eindeutige Kennzeichnung eines Datensatzes ein."
practiceIdeas: []
commonMistakes:
  - "Eine Tabelle mit einer beliebigen Liste zu verwechseln."
  - "Namen oder Beschreibungen als sichere eindeutige Kennung anzunehmen."
  - "Beziehungen zwischen Tabellen in eine einzige große Tabelle zu pressen."
keyTakeaways:
  - "Tabellen strukturieren Daten in Zeilen und Spalten."
  - "Ein Primärschlüssel identifiziert einen Datensatz eindeutig."
  - "Beziehungen zwischen Tabellen vermeiden unnötige Wiederholung und Widersprüche."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "informatik"
  - "datenbanken"
  - "tabellen"
  - "schlüssel"
draft: false
---

## Begriff

In relationalen Datenbanken werden Informationen häufig in **Tabellen** organisiert. Eine Tabelle besteht aus Zeilen und Spalten. Jede Zeile beschreibt einen Datensatz, jede Spalte beschreibt ein Attribut, also eine bestimmte Eigenschaft.

Ein **Schlüssel** ist ein Merkmal oder eine Kombination von Merkmalen, mit dem ein Datensatz eindeutig identifiziert werden kann. Der wichtigste Schlüssel ist der Primärschlüssel.

## Tabellenstruktur

Eine Tabelle bündelt gleichartige Dinge. Eine Tabelle Schülerinnen und Schüler enthält beispielsweise Datensätze über Personen. Spalten können Name, Geburtsdatum oder Klasse heißen. Jede Zeile beschreibt eine Person innerhalb dieser Struktur.

Diese Gleichartigkeit ist entscheidend. Eine Tabelle sollte nicht beliebige Informationen durcheinander aufnehmen, sondern eine klare Art von Datensatz beschreiben.

## Primärschlüssel

Ein Primärschlüssel identifiziert jede Zeile eindeutig. Häufig wird dafür eine technische ID verwendet. Namen eignen sich oft nicht als sichere Schlüssel, weil mehrere Personen gleich heißen können oder sich Namen ändern können.

Der Primärschlüssel ermöglicht, Datensätze stabil zu referenzieren. Andere Tabellen können sich über Fremdschlüssel auf ihn beziehen.

## Beziehungen zwischen Tabellen

Datenbanken verteilen Informationen oft bewusst auf mehrere Tabellen. Eine Tabelle kann Personen speichern, eine andere Bestellungen, eine dritte Produkte. Beziehungen verbinden diese Tabellen. Dadurch werden Wiederholungen reduziert und Widersprüche vermieden.

## Abgrenzung zu Tabellenkalkulationen

Eine Tabellenkalkulation sieht äußerlich ähnlich aus, ist aber nicht dasselbe wie eine relationale Datenbank. Datenbanken erzwingen stärker Struktur, Beziehungen und Eindeutigkeit. Tabellenkalkulationen sind freier, aber dadurch auch anfälliger für uneinheitliche Daten.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Datenbanktabelle ist mehr als eine Liste. Sie beschreibt eine klar definierte Art von Datensatz und braucht eindeutige Schlüssel.</p>
</div>
