---
title: vector und Sammlungsidee begründen
description: Erkläre, warum ein vector für veränderbare Sammlungen passend ist und welche Wirkung seine Grundmethoden haben.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - vector-und-container
  - vector-als-dynamisches-array-verstehen
  - vector-und-sammlungsidee-begruenden
taskId: INF-PROG-CPP-VECTOR-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - vector
hintPoints:
  - "Denke zuerst an die Sammlung als Ganzes."
  - "Beschreibe Methoden über ihre Wirkung auf den Container."
selfCheckPoints:
  - "Ist klar, warum der vector hier besser passt als eine starre feste Größe?"
  - "Wird zwischen Sammlung und Einzelelement unterschieden?"
transferIdeas:
  - "Übertrage die Aufgabe auf Warenkorb, Trefferliste oder Meldungsprotokoll."
reflectionPrompt: "Warum hilft es, vector-Methoden zuerst als Veränderung einer Sammlung und nicht als einzelne Befehlsnamen zu lesen?"
---

## Aufgabe 1: Einsatz begründen

Eine Trefferliste einer Suche kann leer starten, später mehrere Ergebnisse enthalten und danach wieder kürzer werden.

Erkläre, warum ein `std::vector` hier gut passt.

## Aufgabe 2: Methoden deuten

Beschreibe in eigenen Worten die Wirkung von:

- `size()`
- `push_back("Neu")`
- `pop_back()`

## Aufgabe 3: Denkfehler prüfen

Jemand schaut nur auf das letzte eingefügte Element und sagt: „Der vector ist eigentlich nur dieses eine Ding da hinten.“  
Erkläre, warum diese Sicht den Containergedanken verfehlt.
