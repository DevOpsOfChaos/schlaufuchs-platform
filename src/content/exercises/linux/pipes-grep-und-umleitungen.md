---
title: "Pipes, grep und Umleitungen"
description: "Diese Aufgabe trainiert typische Shell-Ketten mit grep, Pipes und Umleitungen in einer ruhigen, praxisnahen Form."
subject: "linux"
section: "Shell-Werkzeuge"
topicPath: ["pipes-grep-und-umleitungen"]
taskId: "AUTO-PIPES-GREP-UND-UMLEITUNGEN"
tags: ["linux", "Shell-Werkzeuge", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Arbeitsauftrag

Bearbeite die Aufgaben so, als würdest du im Terminal arbeiten. Schreibe die passenden Befehle vollständig auf und begründe kurz, warum sie funktionieren.

## Aufgabe 1

Du möchtest alle Dateinamen des aktuellen Verzeichnisses in die Datei `dateien.txt` schreiben.

1. Formuliere den passenden Befehl.
2. Erkläre kurz, warum dabei keine Pipe nötig ist.

## Aufgabe 2

In der Datei `server.log` sollen nur Zeilen mit dem Wort `ERROR` gefunden werden.

1. Formuliere den passenden `grep`-Befehl.
2. Leite das Ergebnis in die Datei `fehler.txt` um.

## Aufgabe 3

Du willst herausfinden, wie viele laufende Prozesse das Wort `ssh` enthalten.

1. Formuliere eine sinnvolle Befehlskette mit Pipe.
2. Ergänze die Kette so, dass am Ende nur die Anzahl ausgegeben wird.

## Aufgabe 4

Ein Befehl erzeugt normale Ausgaben und Fehlermeldungen. Die Fehlermeldungen sollen in `fehler.log`, die normalen Ausgaben in `ausgabe.log` landen.

1. Erkläre kurz, warum dafür zwei Umleitungen nötig sind.
2. Schreibe ein Beispielmuster für so einen Befehl auf.

## Aufgabe 5

Du hast eine Datei `namen.txt` mit mehreren Zeilen. Diese Zeilen sollen alphabetisch sortiert und das Ergebnis in `sortiert.txt` geschrieben werden.

1. Formuliere eine Lösung mit Eingabeumleitung.
2. Formuliere alternativ eine Lösung mit Pipe.

## Hinweise

- `>` überschreibt den Dateiinhalt.
- `>>` ergänzt einen bestehenden Dateiinhalt.
- `|` verbindet die Ausgabe des linken Befehls mit der Eingabe des rechten Befehls.
- Für Fehlermeldungen wird in der Shell oft `2>` genutzt.

## Selbstkontrolle

Am Ende sollten diese Punkte klar sein:

- In Aufgabe 2 ist `grep` das eigentliche Filterwerkzeug.
- In Aufgabe 3 ist mindestens eine Pipe nötig.
- In Aufgabe 4 werden `stdout` und `stderr` getrennt behandelt.
- Aufgabe 5 lässt sich sowohl mit Umleitung als auch mit Pipe sinnvoll lösen.
