---
title: "Absolute und relative Pfade"
description: "Einordnung von absoluten und relativen Pfaden in Shell und Dateisystem."
subject: "linux"
section: "Dateien und Verzeichnisse"
topicPath: ["absolute-und-relative-pfade", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateien und Verzeichnisse"]
draft: false
---
# Absolute und relative Pfade

![Schaubild zu absoluten und relativen Pfaden.](/schlaufuchs-platform/images/overviews/v149/absolute-und-relative-pfade.svg)

*Das Schaubild vergleicht Start am Wurzelverzeichnis und Start im aktuellen Verzeichnis.*


## Begriff und Zweck

Ein Pfad beschreibt, wo eine Datei oder ein Verzeichnis im Dateisystem liegt. Absolute Pfade beginnen bei der Wurzel `/` und funktionieren unabhängig vom aktuellen Arbeitsverzeichnis. Relative Pfade werden vom aktuellen Ort aus interpretiert. Diese Unterscheidung ist grundlegend für Shell-Befehle, Skripte und Fehlersuche.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- aktuelles Arbeitsverzeichnis
- Punkt und Doppelpunkt als Verweis auf aktuellen und übergeordneten Ordner
- Home-Verzeichnis mit Tilde
- Pfade mit Leerzeichen und Sonderzeichen

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Der Pfad `/home/manuel/projekt` ist absolut. Der Pfad `src/content` ist relativ zum aktuellen Verzeichnis. `../` führt eine Ebene nach oben. In Skripten ist es oft sicherer, bewusst mit bekannten Ausgangspunkten zu arbeiten, statt ein zufälliges Arbeitsverzeichnis vorauszusetzen.

## Abgrenzung

Pfade sind nicht dasselbe wie URLs, auch wenn beide ähnlich aussehen können. Linux unterscheidet außerdem Groß- und Kleinschreibung. `Datei.txt` und `datei.txt` können verschiedene Dateien sein.

## Häufige Missverständnisse

Häufig entstehen Fehler, weil ein Befehl in einem anderen Verzeichnis ausgeführt wird als gedacht. Ein weiterer Fehler ist, Pfade mit Leerzeichen nicht zu quoten. Gute Shell-Arbeit beginnt deshalb oft mit `pwd` und `ls` zur Orientierung.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
