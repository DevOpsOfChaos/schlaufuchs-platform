---
title: "Shell-Variablen und Umgebung"
description: "Überblick über Shell-Variablen, Umgebungsvariablen und ihre Rolle für Programme."
subject: "linux"
section: "Shell"
topicPath: ["shell-variablen-und-umgebung", "ueberblick"]
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
# Shell-Variablen und Umgebung

## Begriff und Zweck

Shells können Werte in Variablen speichern. Manche Variablen gelten nur innerhalb der aktuellen Shell, andere werden als Umgebungsvariablen an gestartete Programme weitergegeben. Dadurch lassen sich Programme konfigurieren, Pfade beeinflussen oder temporäre Einstellungen setzen.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- lokale Shell-Variablen
- exportierte Umgebungsvariablen
- PATH als Suchpfad für Programme
- temporäre Variablen vor einem Befehl

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

`PATH` bestimmt, in welchen Verzeichnissen die Shell ausführbare Programme sucht. `HOME` verweist auf das Home-Verzeichnis. Ein Befehl kann mit einer temporären Variable gestartet werden, ohne die gesamte Sitzung zu verändern, etwa für Debug-Ausgaben oder Konfigurationswerte.

## Abgrenzung

Umgebungsvariablen sind kein sicherer Geheimnisspeicher. Sie können in Prozessen sichtbar werden oder versehentlich geloggt werden. Für sensible Daten braucht es bewusstere Schutzmechanismen.

## Häufige Missverständnisse

Ein häufiger Fehler ist, eine Variable zu setzen, aber nicht zu exportieren, obwohl ein Kindprozess sie benötigt. Ebenso problematisch ist ein unbedachtes Überschreiben von `PATH`, wodurch Standardprogramme scheinbar verschwinden.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
