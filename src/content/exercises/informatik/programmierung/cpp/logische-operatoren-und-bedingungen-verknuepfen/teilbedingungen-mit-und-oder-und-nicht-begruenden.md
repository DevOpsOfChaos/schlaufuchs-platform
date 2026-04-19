---
title: Teilbedingungen mit und, oder und nicht begründen
description: Erkläre bei kleinen Beispielen die Wirkung von &&, || und ! in zusammengesetzten C++-Bedingungen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - logische-operatoren-und-bedingungen-verknuepfen
  - teilbedingungen-mit-und-oder-und-nicht-begruenden
taskId: INF-PROG-CPP-LOGIK-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - logik
hintPoints:
  - "Lies jede Teilbedingung einzeln."
  - "Ordne erst danach die Verknüpfung zu."
selfCheckPoints:
  - "Ist klar, wann beide gelten müssen?"
  - "Ist klar, wann eine einzelne Bedingung schon reicht?"
transferIdeas:
  - "Übertrage die Aussagen auf Login, Zugang oder Freigabe."
reflectionPrompt: "Warum ist ein langsames Lesen von Teilbedingungen oft sicherer als schnelles Symboldeuten?"
---

## Aufgabe 1: Und erklären

Erkläre in eigenen Worten, wann diese Bedingung wahr ist:

```cpp
if (alter >= 18 && kontoAktiv)
```

## Aufgabe 2: Oder vergleichen

Erkläre den Unterschied zwischen:

- <code>regen || schirmDabei</code>
- <code>regen && schirmDabei</code>

## Aufgabe 3: Nicht einordnen

Formuliere in Worten, was <code>!fehler</code> bedeutet.
