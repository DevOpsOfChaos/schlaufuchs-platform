---
title: "Umgebungsvariablen und Pfade"
description: "Überblick über Umgebungsvariablen, PATH und Pfadangaben in Linux-Shells."
subject: "linux"
section: "Shell"
topicPath: ["umgebungsvariablen-und-pfade", "ueberblick"]
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
# Umgebungsvariablen und Pfade

![Schaubild zu Umgebungsvariablen.](/schlaufuchs-platform/images/overviews/v149/umgebungsvariablen.svg)

*Das Schaubild zeigt, wie Prozesse Kontext über Variablen erhalten.*



## Umgebung
Jeder Prozess läuft mit einer Umgebung. Darin stehen Variablen wie HOME, PATH, LANG oder SHELL. Programme können diese Werte lesen und ihr Verhalten daran anpassen. Die Shell kann Variablen setzen und an gestartete Prozesse weitergeben.

## PATH
PATH ist eine Liste von Verzeichnissen, in denen die Shell nach ausführbaren Programmen sucht. Wenn ein Befehl ohne Pfadangabe eingegeben wird, werden diese Verzeichnisse der Reihe nach geprüft. Ist ein Programm nicht in PATH, kann es installiert sein und trotzdem nicht als kurzer Befehl gefunden werden.

## Pfade
Absolute Pfade beginnen an der Wurzel des Dateisystems, zum Beispiel /usr/bin. Relative Pfade beziehen sich auf das aktuelle Arbeitsverzeichnis. Deshalb kann derselbe relative Pfad funktionieren oder scheitern, je nachdem, wo man sich gerade befindet.

## export
Eine Shell-Variable ist nicht automatisch eine Umgebungsvariable für Kindprozesse. Mit export wird sie weitergegeben. Das ist wichtig für Werkzeuge, die Konfiguration über Umgebungsvariablen erwarten, etwa Build-Systeme, Editoraufrufe oder Zugriffsdaten.

## Sorgfalt
Umgebungsvariablen können sensible Informationen enthalten. Passwörter oder Tokens sollten nicht leichtfertig in Shell-Historie, Logs oder gemeinsam genutzten Skripten landen. Pfade sollten in Skripten robust gesetzt werden, damit sie nicht zufällig vom Startverzeichnis abhängen.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
