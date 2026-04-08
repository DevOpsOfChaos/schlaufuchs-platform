---
title: Dateisystem und Pfade in Linux
description: Das Linux-Dateisystem ist hierarchisch aufgebaut und wird über klare Pfade strukturiert, nicht über Laufwerksbuchstaben wie in anderen Systemen.
subject: linux
section: Grundlagen
level: einfach
tags:
  - Dateisystem
  - Pfade
  - Linux
  - Grundlagen
draft: false
---

## Überblick

Wer Linux sicher nutzen will, muss das Dateisystem verstehen. Viele Aufgaben im Terminal, in der Administration oder in der Entwicklung hängen direkt davon ab, wo Dateien liegen und wie Pfade gelesen werden. Das Linux-Dateisystem folgt einer klaren Baumstruktur.

## Grundidee des Dateisystems

Linux organisiert Dateien und Ordner nicht über mehrere Laufwerksbuchstaben, sondern über einen gemeinsamen Ausgangspunkt. Dieser Ausgangspunkt heißt:

- **/**

Dieses Zeichen nennt man **Wurzelverzeichnis** oder **Root-Verzeichnis**. Von dort verzweigen sich alle weiteren Verzeichnisse.

## Hierarchischer Aufbau

Das Dateisystem kann man sich wie einen Baum vorstellen:

- oben steht `/`
- darunter liegen weitere Ordner
- in diesen Ordnern liegen wieder Unterordner und Dateien

Ein Pfad beschreibt also den Weg durch diese Struktur.

## Was ist ein Pfad?

Ein Pfad gibt an, wo eine Datei oder ein Verzeichnis liegt.

Beispiel:

- `/home/anna/dokumente/notizen.txt`

Dieser Pfad beschreibt:

1. Start im Wurzelverzeichnis `/`
2. dann in den Ordner `home`
3. dann in `anna`
4. dann in `dokumente`
5. dort liegt die Datei `notizen.txt`

## Absolute und relative Pfade

### Absoluter Pfad

Ein absoluter Pfad beginnt immer bei `/`.

Beispiel:

- `/etc/hosts`

Er beschreibt den Ort vollständig und unabhängig davon, wo man sich gerade im Terminal befindet.

### Relativer Pfad

Ein relativer Pfad beginnt nicht bei `/`, sondern bezieht sich auf das aktuelle Arbeitsverzeichnis.

Beispiel:

- `bilder/logo.png`

Dieser Pfad ist nur sinnvoll, wenn klar ist, von welchem aktuellen Verzeichnis aus gearbeitet wird.

## Wichtige Sonderzeichen in Pfaden

### Punkt `.`

Der einzelne Punkt steht für das aktuelle Verzeichnis.

### Doppelpunkt? Nein

Im Linux-Dateisystem hat `:` nicht die Rolle von Laufwerksbezeichnern wie unter Windows.

### Doppelpunkt irrelevant, aber Doppelpunkt? Besser wichtig ist `..`

`..` steht für das übergeordnete Verzeichnis.

Beispiel:

- `cd ..`

Damit wechselt man eine Ebene nach oben.

### Tilde `~`

Die Tilde steht meist für das Homeverzeichnis des aktuellen Benutzers.

Beispiel:

- `~/downloads`

## Wichtige Verzeichnisse

Einige Verzeichnisse tauchen in Linux besonders häufig auf.

### `/home`

Hier liegen die Homeverzeichnisse normaler Benutzer.

### `/etc`

Hier liegen viele Konfigurationsdateien des Systems.

### `/bin` und `/usr/bin`

Hier liegen wichtige Programme und Befehle.

### `/var`

Hier finden sich häufig variable Daten wie Logs oder Zwischenspeicher.

### `/tmp`

Hier liegen temporäre Dateien.

Für den Einstieg muss man diese Bereiche nicht vollständig auswendig lernen, aber ihre Grundrolle sollte bekannt sein.

## Warum Pfade so wichtig sind

Viele Linux-Befehle arbeiten direkt mit Pfaden.

Beispiele:

- `cd /home/anna`
- `ls /etc`
- `cat datei.txt`

Wer Pfade nicht sicher lesen kann, verliert schnell die Orientierung oder arbeitet versehentlich am falschen Ort.

## Typische Fehler

- `/` und `\` verwechseln.
- Relative Pfade verwenden, ohne das aktuelle Verzeichnis zu kennen.
- `..` falsch deuten.
- Das Homeverzeichnis und das Wurzelverzeichnis verwechseln.

## Merksätze

- Das Linux-Dateisystem beginnt bei `/`.
- Ein Pfad beschreibt den Weg zu Datei oder Verzeichnis.
- Absolute Pfade starten bei `/`.
- Relative Pfade hängen vom aktuellen Ort ab.
- Wer Pfade versteht, arbeitet im Terminal deutlich sicherer.
