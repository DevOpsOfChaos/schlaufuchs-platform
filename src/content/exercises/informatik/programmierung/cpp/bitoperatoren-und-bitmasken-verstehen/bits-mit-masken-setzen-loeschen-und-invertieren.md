---
title: Bits mit Masken setzen, löschen und invertieren
description: Lies einfache Bitmasken und begründe, welche Operation ein bestimmtes Bit verändert.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-ausdruecke
  - bitoperatoren-und-bitmasken-verstehen
  - bits-mit-masken-setzen-loeschen-und-invertieren
taskId: INF-PROG-CPP-BIT-001
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Lies zuerst die Signatur oder den Ausdruck ruhig in Worten."
  - "Trenne Rolle, Wirkung und Ergebnis sauber voneinander."
selfCheckPoints:
  - "Habe ich die Fachbegriffe sauber benutzt?"
  - "Habe ich begründet statt nur benannt?"
transferIdeas:
  - "Übertrage die Logik auf ähnliche Funktionen oder Ausdrücke."
reflectionPrompt: "Welche Stelle im Beispiel war leicht zu verwechseln und warum?"
---

## Aufgabe 1: Zielbit beschreiben

Was ist die Rolle der Maske <code>1 &lt;&lt; n</code> in den drei Ausdrücken zum Setzen, Löschen und Invertieren?

## Aufgabe 2: Operation zuordnen

Ordne diese Wirkungen zu:

- <code>DW = DW | (1 &lt;&lt; n)</code>
- <code>DW = DW &amp; ~(1 &lt;&lt; n)</code>
- <code>DW = DW ^ (1 &lt;&lt; n)</code>

## Aufgabe 3: Denkfehler prüfen

Warum darf man <code>|</code> hier nicht einfach als logisches ODER lesen?
