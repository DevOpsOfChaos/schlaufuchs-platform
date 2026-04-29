---
title: "Bits mit Masken setzen, löschen und invertieren"
description: "Lies einfache Bitmasken und begründe, welche Operation ein bestimmtes Bit verändert."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "bitoperatoren-und-bitmasken-verstehen", "bits-mit-masken-setzen-loeschen-und-invertieren"]
taskId: "INF-PROG-CPP-BIT-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
