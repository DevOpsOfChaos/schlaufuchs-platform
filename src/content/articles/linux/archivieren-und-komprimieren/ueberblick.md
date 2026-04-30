---
title: "Archivieren und Komprimieren"
description: "Überblick über Archive, Komprimierung und typische Werkzeuge unter Linux."
subject: "linux"
section: "Dateien und Werkzeuge"
topicPath: ["archivieren-und-komprimieren", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateien und Werkzeuge"]
draft: false
---
# Archivieren und Komprimieren

![Schaubild zu Archivieren und Komprimieren.](/schlaufuchs-platform/images/overviews/v150/archivieren-und-komprimieren.svg)

*Das Schaubild trennt Zusammenfassen von Dateien und Reduzieren der Dateigröße.*


## Begriff und Zweck

Archivieren bedeutet, mehrere Dateien und Verzeichnisse zu einer Datei zusammenzufassen. Komprimieren bedeutet, Daten platzsparender zu speichern. Unter Linux werden beide Ideen oft kombiniert, aber sie sind nicht dasselbe. Ein Archiv kann unkomprimiert sein, eine Komprimierung kann auf einzelne Dateien angewendet werden.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- tar als Archivformat
- gzip, bzip2 oder xz als Komprimierung
- zip als verbreitetes Kombiformat
- Pfadangaben und Zielverzeichnisse

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

`tar` sammelt Verzeichnisstrukturen, `gzip` komprimiert häufig die resultierende Datei. Ein `.tar.gz` ist also ein tar-Archiv mit gzip-Komprimierung. ZIP-Dateien sind besonders für Austausch mit Windows-Systemen verbreitet.

## Abgrenzung

Archive sind keine Backups, solange sie nicht geprüft, versioniert und sicher abgelegt werden. Außerdem können Archive absolute oder relative Pfade enthalten, was beim Entpacken wichtig ist.

## Häufige Missverständnisse

Ein häufiger Fehler ist, vor dem Entpacken nicht zu prüfen, welche Pfade ein Archiv enthält. Dadurch landen Dateien im falschen Verzeichnis. Ebenso werden Archivierung und Komprimierung oft verwechselt, was zu falschen Erwartungen an Dateigröße oder Inhalt führt.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
