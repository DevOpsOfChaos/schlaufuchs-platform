---
title: Dateimodus für einen Fall passend auswählen
description: Wähle für einfache Dateizugriffe einen sinnvollen fopen-Modus und begründe die Wahl.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - fopen-dateimodi-r-a-w-und-plus-varianten-vergleichen
  - dateimodus-fuer-fall-passend-auswaehlen
taskId: INF-PHP-FILES-002
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - fopen
hintPoints:
  - "Frage: Soll nur gelesen, neu geschrieben oder angehängt werden?"
  - "Achte darauf, ob alter Inhalt erhalten bleiben soll."
selfCheckPoints:
  - "Habe ich meinen Modus fachlich begründet?"
  - "Habe ich geprüft, ob alter Inhalt gefährdet ist?"
transferIdeas:
  - "Übertrage die Entscheidung auf Logfiles, Benutzerlisten oder Konfigurationsdateien."
reflectionPrompt: "Bei welchem Fall war die Unterscheidung zwischen w und a für dich am wichtigsten?"
---

## Aufgabe 1

Ordne einen sinnvollen Modus zu:

- Eine Datei soll nur ausgelesen werden.
- Eine Logdatei soll um neue Zeilen ergänzt werden.
- Eine Datei soll neu geschrieben werden, alter Inhalt ist egal.

## Aufgabe 2

Warum ist <code>w</code> fachlich riskanter als <code>a</code>, wenn bestehender Inhalt wichtig ist?
