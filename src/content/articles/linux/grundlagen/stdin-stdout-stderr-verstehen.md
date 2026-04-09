---
title: stdin, stdout und stderr verstehen
description: Standardströme helfen dabei, Eingaben, normale Ausgaben und Fehlermeldungen in Linux klar zu trennen und gezielt weiterzuleiten.
subject: linux
section: Grundlagen
level: mittel
tags:
  - stdin
  - stdout
  - stderr
  - Shell
draft: false
---

## Überblick

Viele Linux-Befehle wirken auf den ersten Blick so, als würden sie einfach „irgendetwas im Terminal anzeigen“. Tatsächlich arbeiten Prozesse mit klar getrennten Standardströmen. Diese Trennung ist eine Grundlage für Pipes, Umleitungen und systematische Shell-Arbeit.

## Die drei Standardströme

Ein Linux-Prozess arbeitet typischerweise mit drei grundlegenden Strömen:

- **stdin** für Eingaben
- **stdout** für normale Ausgaben
- **stderr** für Fehlermeldungen

Diese Trennung ist sehr nützlich, weil normale Ergebnisse und Probleme unterschiedlich behandelt werden können.

## stdin

`stdin` steht für **standard input**.

Das ist der Standardweg, über den ein Prozess Eingaben erhält.

Typische Beispiele:

- Tastatureingaben im Terminal
- Inhalte aus einer umgeleiteten Datei
- Daten aus einer Pipe

## stdout

`stdout` steht für **standard output**.

Das ist der normale Ausgabekanal eines Prozesses.

Beispiele:

- Listen von Dateien
- berechnete Ergebnisse
- normale Textausgaben eines Befehls

## stderr

`stderr` steht für **standard error**.

Hierüber werden Fehlermeldungen und Warnhinweise ausgegeben.

Das ist wichtig, weil Fehler nicht mit normalen Ergebnissen vermischt werden müssen.

## Warum diese Trennung so nützlich ist

Angenommen, ein Befehl liefert:

- normale Daten,
- aber gleichzeitig auch Fehlermeldungen.

Dann kann man:

- die normalen Daten weiterverarbeiten,
- Fehlermeldungen getrennt speichern,
- oder gezielt nur die Fehler ansehen.

Genau deshalb sind Umleitungen und Pipes in Linux so mächtig.

## Zusammenhang mit Umleitungen

### stdout umleiten

Mit `>` wird die normale Ausgabe in eine Datei geschrieben.

### stderr umleiten

Mit `2>` wird der Fehlerkanal umgeleitet.

### stdin umleiten

Mit `<` kann eine Datei als Eingabe genutzt werden.

Für den Einstieg ist vor allem wichtig:

- Nicht jede sichtbare Ausgabe ist automatisch dasselbe.
- Fehler und normale Ergebnisse sind getrennte Kanäle.

## Pipes und Standardströme

Pipes verbinden typischerweise den `stdout` eines Befehls mit dem `stdin` des nächsten Befehls.

Das bedeutet:

- Der normale Ausgabestrom eines Befehls wird Eingabe für den nächsten.

Fehlermeldungen laufen dabei nicht automatisch durch dieselbe Pipe.

## Typische Fehler

- Annehmen, dass alle sichtbaren Meldungen derselbe Kanal sind.
- Nicht verstehen, warum ein Fehler trotz Pipe separat erscheint.
- `stdout` und `stderr` verwechseln.
- Umleitungen nutzen, ohne zu wissen, welcher Kanal betroffen ist.

## Gute Denkweise

Bei Shell-Befehlen helfen diese Fragen:

1. Woher kommen die Eingaben?
2. Was ist normale Ausgabe?
3. Was ist Fehlermeldung?
4. Soll ein Kanal angezeigt, gespeichert oder weitergeleitet werden?

## Warum das Thema wichtig ist

Standardströme sind zentral für:

- Shell-Arbeit,
- Pipes,
- Umleitungen,
- Fehlersuche,
- Skripte,
- Automatisierung.

Wer `stdin`, `stdout` und `stderr` versteht, versteht die Shell deutlich tiefer.

## Merksätze

- `stdin` ist der Standard-Eingabekanal.
- `stdout` ist der normale Ausgabekanal.
- `stderr` ist der Fehlerkanal.
- Die Trennung dieser Ströme macht Linux-Werkzeuge besonders flexibel.
