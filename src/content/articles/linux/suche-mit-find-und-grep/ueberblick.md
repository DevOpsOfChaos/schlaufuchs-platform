---
title: "Suche mit find und grep"
description: "Überblick über find und grep als grundlegende Suchwerkzeuge für Dateien, Pfade und Inhalte."
subject: "linux"
section: "Shell"
topicPath: ["suche-mit-find-und-grep", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
# Suche mit find und grep

![Schaubild zu find und grep.](/schlaufuchs-platform/images/overviews/v148/suche-mit-find-und-grep.svg)

*Das Schaubild zeigt die typische Suche nach Dateien und Inhalten in zwei Schritten.*



## Grundidee
find und grep gehören zu den wichtigsten Suchwerkzeugen auf Linux-Systemen. Sie beantworten unterschiedliche Fragen. find sucht Dateien und Verzeichnisse anhand ihrer Eigenschaften. grep sucht Textmuster innerhalb von Dateien oder in Eingaben aus einer Pipe.

## find
find läuft durch einen Verzeichnisbaum und prüft Kriterien wie Name, Typ, Größe, Änderungszeit oder Rechte. Damit lässt sich zum Beispiel nach Markdown-Dateien, großen Logdateien oder alten temporären Dateien suchen. find arbeitet auf Dateisystemebene.

## grep
grep liest Text und gibt Zeilen aus, die zu einem Muster passen. Es eignet sich für Logs, Quellcode, Konfigurationsdateien oder Kommandoausgaben. Mit rekursiver Suche kann grep auch ganze Verzeichnisbäume nach Inhalten durchsuchen.

## Kombination
Besonders stark werden beide Werkzeuge zusammen. find kann passende Dateien auswählen und diese an grep weitergeben. Dadurch lässt sich die Suche begrenzen, etwa nur auf bestimmte Dateitypen oder Verzeichnisse. Das reduziert Rauschen und vermeidet unnötige Treffer.

## Sorgfalt
Suchmuster sollten bewusst gewählt werden. Zu allgemeine Begriffe erzeugen zu viele Treffer, zu enge Muster übersehen relevante Stellen. Bei großen Verzeichnissen oder Systempfaden sollte man Suchbereiche begrenzen, um Zeit und Fehlermeldungen zu reduzieren.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
