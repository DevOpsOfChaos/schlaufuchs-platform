---
title: Dateisuche mit find und grep
description: Diese Aufgabe trainiert die saubere Unterscheidung zwischen Dateisuche und Textsuche im Linux-Terminal.
subject: linux
section: Dateisuche und Textsuche
level: einfach
draft: false
---

## Arbeitsauftrag

Bearbeite die Aufgaben mit Blick auf den Unterschied zwischen Dateinamen und Dateiinhalt. Schreibe jeweils den passenden Befehl auf.

## Aufgabe 1

Du willst im aktuellen Verzeichnis und allen Unterordnern alle Dateien mit der Endung `.conf` finden.

1. Formuliere einen passenden `find`-Befehl.
2. Erkläre kurz, warum `grep` hier nicht das erste Werkzeug ist.

## Aufgabe 2

In der Datei `nginx.conf` sollen alle Zeilen gefunden werden, die das Wort `server` enthalten.

1. Formuliere den passenden Befehl.
2. Erkläre kurz, wonach hier gesucht wird.

## Aufgabe 3

Du möchtest alle laufenden Prozesse anzeigen, in deren Ausgabe das Wort `ssh` vorkommt.

1. Formuliere eine passende Befehlskette.
2. Erkläre kurz, warum hier eine Pipe sinnvoll ist.

## Aufgabe 4

Im Verzeichnis `logs` sollen alle Dateien mit der Endung `.log` gefunden werden.

1. Formuliere den passenden Suchbefehl.
2. Welche Stelle im Befehl bestimmt, dass nur `.log`-Dateien gesucht werden?

## Aufgabe 5

Erkläre in eigenen Worten:

1. Wann `find` besser passt.
2. Wann `grep` besser passt.
3. Warum beide Werkzeuge oft zusammen vorkommen.

## Hinweise

- `find` startet immer an einem bestimmten Suchort.
- `grep` prüft Textinhalte.
- Eine Pipe verbindet die Ausgabe eines Befehls mit der Eingabe des nächsten.

## Selbstkontrolle

Diese Punkte sollten am Ende klar sein:

- Aufgabe 1 ist eine Dateisuche.
- Aufgabe 2 ist eine Textsuche.
- In Aufgabe 3 ist `grep` nur das Filterwerkzeug für die Ausgabe.
