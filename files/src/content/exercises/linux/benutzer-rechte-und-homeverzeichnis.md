---
title: Benutzer, Rechte und Homeverzeichnis
description: Diese neu formulierte Bestandsaufgabe verbindet klassische Linux-Grundbegriffe mit einer kleinen Praxissituation rund um Benutzer und Dateirechte.
subject: linux
section: Benutzer und Rechte
topicPath:
  - system
  - benutzer-und-gruppen
  - benutzer-rechte-und-homeverzeichnis
level: einfach
tags:
  - benutzer
  - rechte
  - home
  - linux
draft: false
---

## Arbeitsauftrag

Bearbeite die Aufgabe mit Blick auf typische Alltagssituationen im System. Es geht nicht um Spezialfälle, sondern um einen sauberen Grundüberblick.

## Ausgangssituation

Auf einem Linux-System arbeiten mehrere Benutzer. Eine Datei im Homeverzeichnis eines Benutzers soll nicht für alle anderen frei veränderbar sein.

## Aufgabe 1

Erkläre kurz:

1. Was ein Benutzerkonto in Linux ist.
2. Was das Homeverzeichnis eines Benutzers ist.
3. Warum Dateirechte in Mehrbenutzersystemen wichtig sind.

## Aufgabe 2

Ordne diese Begriffe zu:

- Benutzer
- Gruppe
- andere

Erkläre jeweils, auf wen sich diese Kategorien bei Dateirechten beziehen.

## Aufgabe 3

Eine Datei hat die Rechte `rw-r--r--`.

1. Was darf der Besitzer der Datei?
2. Was dürfen Mitglieder der Gruppe?
3. Was dürfen andere Benutzer?

## Aufgabe 4

Formuliere einen passenden `chmod`-Befehl für diese Situation:

- Der Besitzer soll lesen und schreiben dürfen.
- Die Gruppe soll nur lesen dürfen.
- Andere sollen keinen Zugriff haben.

## Aufgabe 5

Erkläre in eigenen Worten:

1. Warum ein Homeverzeichnis nicht automatisch für alle offen sein sollte.
2. Warum Rechte bewusst statt zufällig gesetzt werden sollten.

## Hinweise

- Linux trennt Rechte für Besitzer, Gruppe und andere.
- `r` steht für lesen, `w` für schreiben, `x` für ausführen.
- Ein Homeverzeichnis gehört typischerweise zu einem bestimmten Benutzer.

## Selbstkontrolle

Diese Punkte sollten am Ende klar sein:

- `rw-r--r--` bedeutet: Besitzer lesen und schreiben, Gruppe lesen, andere lesen.
- Für die gewünschte Situation passt `chmod 640`.
- Rechte schützen Daten und Arbeitsumgebungen in Mehrbenutzersystemen.
