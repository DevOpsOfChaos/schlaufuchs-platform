---
title: "Standardstreams"
description: "Allgemeiner Überblick über Standardeingabe, Standardausgabe, Fehlerausgabe und ihre Rolle in der Shell."
subject: "linux"
section: "Shell"
topicPath: ["standardstreams", "ueberblick"]
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
# Standardstreams

![Schaubild zu Standardstreams.](/schlaufuchs-platform/images/overviews/v149/standardstreams.svg)

*Das Schaubild ordnet Eingabe, Ausgabe und Fehlermeldung als getrennte Kanäle ein.*



Standardstreams sind die grundlegenden Ein- und Ausgabekanäle von Programmen unter Unix-ähnlichen Systemen. Sie heißen Standardeingabe, Standardausgabe und Standardfehlerausgabe.

## Bedeutung

Dieses Modell erlaubt, Programme flexibel zu verbinden. Ein Programm muss nicht wissen, ob seine Eingabe von der Tastatur, aus einer Datei oder aus einem anderen Programm kommt.

## Typische Teilaspekte

- **stdin:** Die Standardeingabe liefert Daten an ein Programm.
- **stdout:** Die Standardausgabe enthält normale Ergebnisse.
- **stderr:** Die Fehlerausgabe ist für Warnungen und Fehlermeldungen gedacht.
- **Umleitung:** Streams können in Dateien geschrieben oder mit Pipes verbunden werden.

## Beispiel

`grep` kann Text aus einer Datei lesen oder Daten über eine Pipe bekommen. Ergebnisse gehen nach stdout, Fehlermeldungen nach stderr.

## Abgrenzung

Standardstreams sind keine sichtbaren Fenster, sondern logische Kanäle. Das Terminal zeigt sie oft gemeinsam an, obwohl sie getrennt behandelbar sind.

## Häufige Missverständnisse

Häufig wird stdout und stderr verwechselt. Das ist besonders wichtig, wenn Ausgaben in Dateien umgeleitet oder Skripte automatisiert werden.

## Einordnung im Gesamtzusammenhang

Standardstreams sind Grundlage für Pipes, Umleitungen, Shell-Skripte, Logging und Automatisierung.
