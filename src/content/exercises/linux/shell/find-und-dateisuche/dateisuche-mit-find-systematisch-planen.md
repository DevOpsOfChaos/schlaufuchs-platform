---
title: Dateisuche mit find systematisch planen
description: Formuliere einfache Suchbefehle mit Startpfad und Suchbedingung bewusst und sauber.
subject: linux
section: Shell
topicPath:
  - shell
  - find-und-dateisuche
  - dateisuche-mit-find-systematisch-planen
level: einfach
draft: false
tags:
  - linux
  - find
  - dateisuche
hintPoints:
  - "Trenne Startpfad und Suchbedingung gedanklich klar."
  - "Setze Suchmuster in Anführungszeichen."
selfCheckPoints:
  - "Kannst du erklären, wo die Suche beginnt?"
  - "Kannst du begründen, warum das Muster geschützt werden sollte?"
transferIdeas:
  - "Übertrage die Idee auf die Suche nach Verzeichnissen statt Dateien."
  - "Erkläre den Befehl einmal technisch und einmal als Suchauftrag in Alltagssprache."
reflectionPrompt: "Was hilft dir mehr: zuerst den Startpfad festzulegen oder zuerst die Suchbedingung zu formulieren?"
---

## Aufgabe 1: Startpunkt erkennen

Erkläre den Unterschied zwischen diesen beiden Gedanken:

- Suche ab `.`
- Suche ab `/home/fox/projekte`

## Aufgabe 2: Suchmuster formulieren

Schreibe einen passenden Suchbefehl für:

> Finde alle Markdown-Dateien im aktuellen Verzeichnisbaum.

## Aufgabe 3: Fehler prüfen

Jemand schreibt:

```bash
find -name *.md .
```

Erkläre, was daran unruhig oder problematisch ist.
