---
title: "Grundlagen: Dateisystem und Pfade"
description: "Allgemeiner Überblick über Dateien, Ordner, absolute und relative Pfade sowie Orientierung in der Linux-Shell."
subject: linux
section: "Shell"
topicPath:
  - shell
  - dateisystem-und-pfade
  - ueberblick
  - grundlagen-dateisystem-und-pfade
learningGoals:
  - "Du erklärst, was ein Pfad im Dateisystem beschreibt."
  - "Du unterscheidest absolute und relative Pfade."
  - "Du erkennst, warum das aktuelle Arbeitsverzeichnis für Befehle wichtig ist."
practiceIdeas: []
commonMistakes:
  - "Dateinamen und Pfade gleichzusetzen."
  - "Relative Pfade ohne aktuelles Verzeichnis zu lesen."
  - "Leerzeichen oder Sonderzeichen in Pfaden zu ignorieren."
keyTakeaways:
  - "Pfade beschreiben Orte im Dateisystem."
  - "Absolute Pfade beginnen an der Wurzel des Systems."
  - "Relative Pfade hängen vom aktuellen Arbeitsverzeichnis ab."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - linux
  - shell
  - pfade
  - dateisystem
draft: false
---

## Begriff

Ein **Dateisystem** ordnet Dateien und Ordner in einer hierarchischen Struktur. Ein **Pfad** beschreibt, wo sich eine Datei oder ein Ordner in dieser Struktur befindet. In der Linux-Shell sind Pfade eine zentrale Grundlage, weil fast jeder Befehl mit Orten im Dateisystem arbeitet.

## Dateien und Ordner

Dateien enthalten Daten: Text, Bilder, Programme, Konfigurationen oder Protokolle. Ordner bündeln Dateien und andere Ordner. Zusammen entsteht eine Baumstruktur.

In Linux beginnt diese Struktur bei `/`, der Wurzel des Dateisystems.

## Absolute Pfade

Ein absoluter Pfad beginnt immer bei `/`. Er beschreibt einen Ort unabhängig davon, wo man sich gerade befindet.

Beispiel:

```bash
/home/manuel/projekt/index.html
```

Dieser Pfad ist eindeutig, solange die Datei existiert.

## Relative Pfade

Ein relativer Pfad wird vom aktuellen Arbeitsverzeichnis aus gelesen. Wenn man sich in einem anderen Ordner befindet, kann derselbe relative Pfad auf etwas anderes zeigen.

Beispiel:

```bash
./index.html
../bilder/logo.svg
```

Relative Pfade sind praktisch, aber sie verlangen, dass man den aktuellen Kontext kennt.

## Orientierung

Wichtige Orientierungsbefehle sind:

- `pwd` zeigt das aktuelle Arbeitsverzeichnis,
- `ls` listet Inhalte,
- `cd` wechselt den Ordner.

## Abgrenzung

Spezielle Seiten können `basename`, `dirname`, `realpath`, Globs oder Skriptpfade erklären. Diese Überblicksseite erklärt zuerst, warum diese Werkzeuge zusammengehören.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Pfad ist keine bloße Zeichenkette. Er ist eine Ortsangabe im Dateisystem und hängt bei relativen Pfaden immer vom aktuellen Standort ab.</p>
</div>
