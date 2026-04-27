---
title: "Pipes und Umleitungen"
description: "Allgemeiner Überblick über Pipes, Ein- und Ausgabeumleitung als Grundprinzipien der Linux-Shell."
subject: linux
section: "Shell"
topicPath:
  - "pipes-und-umleitungen"
  - "ueberblick"
learningGoals:
  - "Du kennst Standardeingabe, Standardausgabe und Fehlerausgabe."
  - "Du kannst Pipes als Verbindung zwischen Programmen einordnen."
  - "Du verstehst den Unterschied zwischen Weiterleiten und Speichern von Ausgaben."
practiceIdeas: []
commonMistakes:
  - "Fehlerausgabe und normale Ausgabe gleich zu behandeln."
  - "Umleitungen zu verwenden, ohne Überschreiben und Anhängen zu unterscheiden."
keyTakeaways:
  - "Pipes verbinden die Ausgabe eines Programms mit der Eingabe eines anderen."
  - "Umleitungen steuern, wohin Eingabe, Ausgabe und Fehlerausgabe gehen."
recognizeSignals:
  - "Es geht um `|`, `>`, `>>`, `<`, Logs, Filterketten oder Textwerkzeuge."
selfCheckPoints:
  - "Kann ich sagen, welcher Datenstrom in einer Befehlszeile wohin fließt?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "pipes"
  - "umleitungen"
draft: false
---

# Pipes und Umleitungen

![Schaubild zu Pipes und Umleitungen.](/schlaufuchs-platform/images/overviews/v148/pipes-und-umleitungen.svg)

*Das Schaubild zeigt, wie Ausgaben umgeleitet oder an weitere Werkzeuge übergeben werden.*


Pipes und Umleitungen gehören zu den wichtigsten Konzepten der Linux-Shell. Sie beruhen auf der Idee, dass Programme Text oder Daten über Standardströme austauschen. Ein Programm kann Eingaben lesen, normale Ausgaben schreiben und Fehlerausgaben getrennt melden.

Eine Pipe verbindet die Standardausgabe eines Programms mit der Standardeingabe des nächsten Programms. Dadurch lassen sich kleine Werkzeuge zu Verarbeitungsketten zusammensetzen.

## Standardströme

Standardinput ist die normale Eingabe eines Programms. Standardoutput ist die normale Ausgabe. Standarderror ist die Fehlerausgabe. Diese Trennung ist wichtig, weil Fehlermeldungen nicht immer in dieselbe Datei oder denselben weiteren Befehl gelangen sollen wie Nutzdaten.

## Pipes

Mit `|` wird eine Pipe gebildet. Ein Befehl erzeugt Ausgabe, der nächste verarbeitet sie. So kann etwa eine lange Liste erst erzeugt, dann gefiltert und anschließend gezählt werden. Pipes fördern kleine Programme, die jeweils eine Aufgabe gut erledigen.

## Umleitungen

Mit `>` wird Ausgabe in eine Datei geschrieben und eine vorhandene Datei meist überschrieben. Mit `>>` wird Ausgabe angehängt. Mit `<` kann Eingabe aus einer Datei gelesen werden. Fehlerausgabe kann separat umgeleitet werden, wenn sie nicht mit der normalen Ausgabe vermischt werden soll.

## Typische Anwendungen

Pipes werden oft mit Werkzeugen wie `grep`, `sort`, `uniq`, `wc`, `head` oder `tail` kombiniert. Logs können gefiltert, Listen gezählt und Ergebnisse in Dateien gespeichert werden. Dadurch werden Shell-Befehle zu kleinen Datenflüssen.

## Häufige Missverständnisse

Ein häufiger Fehler ist, `>` und `>>` zu verwechseln. Das kann Daten überschreiben. Ein anderer Fehler ist, anzunehmen, dass eine Pipe automatisch auch Fehlermeldungen weiterleitet. Standardoutput und Standarderror sind getrennte Ströme.

## Kurz zusammengefasst

Pipes und Umleitungen machen die Shell kombinierbar. Sie steuern, wo Daten herkommen, wohin sie gehen und welche Programme sie nacheinander verarbeiten. Damit werden einfache Befehle zu flexiblen Arbeitsketten.
