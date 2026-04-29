---
title: "Musterlösung – Daten in Tabellen strukturieren"
description: "Erste festgehaltene Musterlösung zur Aufgabe INF-DATENBANKEN-TABELLEN-001."
subject: "informatik"
section: "Datenbanken"
topicPath: ["datenbanken", "relationale-tabellen-verstehen", "daten-in-tabellen-strukturieren"]
taskId: "INF-DATENBANKEN-TABELLEN-001"
relatedExercise: "src/content/exercises/informatik/datenbanken/relationale-tabellen-verstehen/daten-in-tabellen-strukturieren.md"
tags: ["informatik", "Datenbanken", "loesung"]
draft: false
---
## Aufgabe 1: Tabellenidee entwickeln

Für eine Bibliothek wären zum Beispiel diese Tabellen sinnvoll:

- **Bücher**  
  Attribute: Buch-ID, Titel, Autor, Erscheinungsjahr
- **Leserinnen_und_Leser**  
  Attribute: Leser-ID, Name, Klasse oder Kontakt
- **Ausleihen**  
  Attribute: Ausleih-ID, Buch-ID, Leser-ID, Ausleihdatum, Rückgabedatum

Zusammenhang:  
Die Tabelle **Ausleihen** verbindet Bücher und Leserinnen/Leser miteinander. So wird sichtbar, wer welches Buch wann ausgeliehen hat.

## Aufgabe 2: Begriffe erklären

- **Tabelle**: eine Sammlung gleichartiger Datensätze, zum Beispiel alle Bücher
- **Datensatz**: eine einzelne Zeile oder ein einzelner Eintrag, zum Beispiel ein bestimmtes Buch
- **Attribut**: eine Eigenschaft eines Datensatzes, zum Beispiel Titel oder Erscheinungsjahr

## Aufgabe 3: Unordnung erkennen

Eine einzige große Tabelle wäre unpraktisch, weil sich viele Informationen ständig wiederholen würden.  
Ein Buch müsste bei jeder Ausleihe erneut mit allen Details eingetragen werden.  
Dadurch steigt die Gefahr von Fehlern, Widersprüchen und unübersichtlichen Daten.

## Worauf man bei der Korrektur achten sollte

- Mindestens zwei oder drei sinnvoll getrennte Tabellen akzeptieren.
- Beziehungen klar benennen.
- Wiederholungen und Unordnung als zentrales Problem der Riesentabelle erkennen.
