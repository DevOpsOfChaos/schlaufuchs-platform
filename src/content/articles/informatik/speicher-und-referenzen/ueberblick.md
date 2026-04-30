---
title: "Speicher und Referenzen"
description: "Überblick über Speicher, Werte und Referenzen als Grundlage für veränderliche Daten in Programmen."
subject: "informatik"
section: "Programmierung"
topicPath: ["speicher-und-referenzen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
# Speicher und Referenzen

![Schaubild zu Speicher und Referenzen.](/schlaufuchs-platform/images/overviews/v148/speicher-und-referenzen.svg)

*Das Schaubild zeigt den Unterschied zwischen Wert, Speicherort und Referenz.*


## Grundidee
Programme arbeiten mit Werten, Objekten und Speicherbereichen. Ein Name im Programm kann direkt einen Wert repräsentieren oder auf ein Objekt verweisen. Diese Unterscheidung ist wichtig, wenn Daten verändert, kopiert oder an Funktionen übergeben werden.

## Werte und Referenzen
Bei einfachen Werten wirkt eine Zuweisung oft wie eine unabhängige Kopie. Bei Objekten, Listen oder komplexen Strukturen kann eine Variable dagegen eine Referenz halten. Dann können zwei Variablen auf dasselbe Objekt zeigen. Eine Änderung über die eine Variable ist dann über die andere sichtbar.

## Mutation
Mutation bedeutet, ein bestehendes Objekt zu verändern. Das ist nützlich, kann aber Fehler erzeugen, wenn nicht klar ist, wer dieses Objekt noch verwendet. Unveränderliche Daten oder bewusste Kopien können helfen, Seiteneffekte zu begrenzen.

## Speicherverwaltung
Programmiersprachen unterscheiden sich darin, wie sichtbar Speicherverwaltung ist. Manche arbeiten mit Zeigern und manueller Freigabe, andere mit Garbage Collection. Auch wenn Details verschieden sind, bleibt die Frage gleich: Wer besitzt Daten, wer darf sie ändern, und wie lange werden sie gebraucht?

## Einordnung
Viele schwer erkennbare Fehler entstehen nicht durch falsche Formeln, sondern durch unerwartet geteilten Zustand. Speicher- und Referenzverständnis hilft, solche Fehler systematisch zu erklären.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
