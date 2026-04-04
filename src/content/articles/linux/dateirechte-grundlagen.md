---
title: Dateirechte – Grundlagen
description: Verstehe, wie Lesen, Schreiben und Ausführen in Linux geregelt werden.
subject: linux
section: rechte-und-benutzer
level: einfach
tags: [dateirechte, linux, chmod, grundlagen]
draft: false
---

Linux steuert Zugriffe auf Dateien und Ordner über Rechte. Damit wird geregelt, wer etwas lesen, verändern oder ausführen darf.

## Die drei Grundrechte

Die wichtigsten Rechte sind:

- `r` für **lesen**
- `w` für **schreiben**
- `x` für **ausführen**

Diese Buchstaben tauchen oft in der Rechteanzeige auf und sind die Grundlage fast aller Rechtefragen in Linux.

## Für wen gelten Rechte?

Linux unterscheidet Rechte für drei Gruppen:

- den **Besitzer** einer Datei
- die **Gruppe**
- **andere** Nutzer

Dadurch kann dieselbe Datei für verschiedene Nutzer unterschiedlich behandelt werden.

## Dateien und Ordner

Rechte wirken bei Dateien und Ordnern nicht völlig gleich.

Bei Dateien geht es oft um:

- lesen
- ändern
- ausführen

Bei Ordnern spielen zusätzlich Dinge wie der Zugriff auf Inhalte oder das Betreten eines Verzeichnisses eine Rolle.

## Warum Rechte so wichtig sind

Dateirechte sind nicht nur ein Detail, sondern ein zentraler Teil des Linux-Systems. Sie helfen dabei,

- Zugriffe zu kontrollieren
- Fehler zu vermeiden
- Systeme sicherer zu machen

Später bauen darauf Werkzeuge wie `chmod`, `chown` und Gruppenverwaltung auf.

## Was du zuerst verstehen solltest

Am Anfang reicht es, wenn du sicher unterscheiden kannst:

- welche drei Grundrechte es gibt
- für wen Rechte gelten
- warum dieselbe Datei nicht für alle gleich behandelt wird

## Merksatz

Linux-Dateirechte regeln Lesen, Schreiben und Ausführen – getrennt für Besitzer, Gruppe und andere Nutzer.
