---
title: "Shell-Pipeline als Datenfluss"
description: "Überblick über Pipelines als linearen Datenfluss zwischen Linux-Kommandos."
subject: "linux"
section: "Shell"
topicPath: ["shell-pipeline-als-datenfluss", "ueberblick"]
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
# Shell-Pipeline als Datenfluss

Eine Shell-Pipeline verbindet mehrere Programme so, dass die Ausgabe eines Programms zur Eingabe des nächsten wird. Dadurch lassen sich kleine Werkzeuge zu leistungsfähigen Verarbeitungsketten kombinieren.

![Pipeline als Datenfluss von Quelle über Filter bis zur Ausgabe.](/schlaufuchs-platform/images/overviews/v146/shell-pipeline-als-datenfluss.svg)

*Pipeline als Datenfluss von Quelle über Filter bis zur Ausgabe.*

## Grundidee

Das Grundprinzip ist der Datenstrom. Ein Kommando erzeugt Text, ein anderes filtert, sortiert, zählt, ersetzt oder formatiert ihn. Beispiele sind Kombinationen aus cat, grep, sort, uniq, cut, sed, awk und wc. Jedes Werkzeug bleibt einfach, weil es nur eine überschaubare Aufgabe erfüllt.

## Bedeutung im Zusammenhang

Wichtig ist die Unterscheidung von Standardausgabe und Fehlerausgabe. Eine normale Pipeline verbindet standardmäßig stdout mit stdin. Fehlermeldungen laufen über stderr und werden nicht automatisch gefiltert. Das ist hilfreich, kann aber verwirren, wenn ein Befehl sichtbare Meldungen erzeugt, die nicht Teil des Datenstroms sind.

## Typische Anwendung

Pipelines sind besonders stark bei zeilenorientierten Textdaten. Bei binären Daten, komplexem JSON, sehr großen Datenmengen oder fehleranfälligen Zwischenschritten braucht man zusätzliche Sorgfalt, etwa jq, exit-code-Prüfung oder temporäre Dateien.

## Abgrenzung

Ein häufiger Fehler ist, eine Pipeline nur nach dem sichtbaren Bildschirmtext zu beurteilen. Entscheidend ist, welcher Datenstrom wirklich an den nächsten Prozess weitergereicht wird.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
