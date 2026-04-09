---
title: Shell-Skripte verstehen
description: Shell-Skripte bündeln mehrere Terminalbefehle zu wiederverwendbaren Abläufen und sind ein wichtiger Einstieg in Automatisierung unter Linux.
subject: linux
section: Grundlagen
level: mittel
tags:
  - Shell-Skripte
  - Bash
  - Linux
  - Automatisierung
draft: false
---

## Überblick

Viele Aufgaben im Terminal wiederholen sich: Dateien umbenennen, Informationen sammeln, Programme starten, Ausgaben filtern oder einfache Abläufe nacheinander ausführen. Genau hier helfen Shell-Skripte. Sie erlauben es, mehrere Befehle in einer Datei zu bündeln und als wiederverwendbaren Ablauf zu speichern.

## Was ist ein Shell-Skript?

Ein Shell-Skript ist eine Textdatei, die Shell-Befehle in einer sinnvollen Reihenfolge enthält.

Statt Befehle jedes Mal von Hand einzugeben, kann ein Skript dieselben Schritte automatisch ausführen.

## Warum Skripte nützlich sind

Shell-Skripte helfen dabei,

- wiederkehrende Aufgaben zu automatisieren,
- Abläufe zu dokumentieren,
- Tippfehler zu vermeiden,
- mehrere Befehle als zusammenhängende Aufgabe zu speichern.

## Typischer Aufbau

Ein einfaches Skript enthält oft:

- eine Shebang-Zeile,
- Befehle,
- eventuell Kommentare,
- manchmal Variablen oder Bedingungen.

### Shebang

Die erste Zeile kann angeben, welche Shell das Skript ausführen soll.

Beispiel:

```bash
#!/bin/bash
```

Für den Einstieg ist vor allem wichtig:

- Sie markiert, mit welcher Umgebung das Skript gedacht ist.

## Beispielskript

```bash
#!/bin/bash
echo "Start"
pwd
ls
```

Dieses Skript:

1. gibt einen Text aus,
2. zeigt das aktuelle Verzeichnis,
3. listet den Inhalt auf.

## Ausführbarkeit

Ein Skript ist nicht automatisch ausführbar. Unter Linux spielen Dateirechte dabei eine wichtige Rolle.

Typisch ist:

- Das Skript braucht ein passendes Ausführungsrecht.

Dadurch verbindet dieses Thema direkt Shell-Skripte mit Linux-Dateirechten.

## Kommentare

Kommentare helfen, ein Skript verständlicher zu machen.

Beispiel:

```bash
# Zeigt den aktuellen Ordnerinhalt
ls
```

Kommentare werden nicht als Befehl ausgeführt, sondern dienen der Erklärung.

## Warum Skripte ein guter Einstieg in Automatisierung sind

Shell-Skripte zeigen sehr direkt, wie aus einzelnen Befehlen ein reproduzierbarer Ablauf wird. Sie sind oft einfacher als große Programme und daher ein guter Einstieg in Automatisierung.

## Typische Fehler

- Befehle ohne klare Reihenfolge ins Skript schreiben.
- Ein Skript für „magisch“ halten, obwohl es nur gespeicherte Befehle sind.
- Rechte oder Ausführbarkeit vergessen.
- Keine Kommentare setzen, obwohl der Ablauf später gelesen werden soll.

## Gute Denkweise

Bei Skripten helfen diese Fragen:

1. Welche Befehle wiederholen sich?
2. In welcher Reihenfolge müssen sie laufen?
3. Ist der Ablauf auch später noch verständlich?
4. Kann das Skript sicher und nachvollziehbar ausgeführt werden?

## Warum das Thema wichtig ist

Shell-Skripte sind wichtig für:

- Automatisierung,
- Systempflege,
- wiederkehrende Terminalaufgaben,
- Entwicklungsumgebungen,
- einfache Administration.

## Merksätze

- Ein Shell-Skript ist eine Datei mit mehreren Shell-Befehlen.
- Skripte machen wiederholte Abläufe einfacher und reproduzierbarer.
- Gute Skripte haben eine klare Reihenfolge und verständliche Struktur.
- Shell-Skripte sind ein wichtiger Einstieg in Automatisierung unter Linux.
