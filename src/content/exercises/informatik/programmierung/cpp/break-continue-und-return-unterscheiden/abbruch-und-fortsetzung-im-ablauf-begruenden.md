---
title: Abbruch und Fortsetzung im Ablauf begründen
description: Erkläre bei kleinen Programmsituationen, was break, continue und return jeweils genau bewirken.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollfluss-und-abbruch
  - break-continue-und-return-unterscheiden
  - abbruch-und-fortsetzung-im-ablauf-begruenden
taskId: INF-PROG-CPP-FLOW-001
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - break
hintPoints:
  - "Frage bei jedem Schlüsselwort: Welcher Bereich endet?"
  - "Unterscheide Schleife und Funktion."
selfCheckPoints:
  - "Ist klar, ob nur ein Durchlauf, die Schleife oder die Funktion endet?"
  - "Wird continue nicht als totaler Abbruch missverstanden?"
transferIdeas:
  - "Übertrage die Logik auf Suchschleifen oder Eingabeprüfungen."
reflectionPrompt: "Warum hilft die Frage 'Was endet genau?' mehr als nur das Wort 'Abbruch'?"
---

## Aufgabe 1: Wirkung zuordnen

Ordne zu:

- überspringt nur den restlichen Teil des aktuellen Schleifendurchlaufs
- verlässt die aktuelle Funktion
- verlässt eine Schleife sofort

Welche Rolle passt zu <code>continue</code>, <code>return</code> und <code>break</code>?

## Aufgabe 2: Schleifenbeispiel erklären

Eine Schleife läuft über Zahlen. Bei negativen Werten wird <code>continue</code> genutzt.

Erkläre, warum die Schleife danach trotzdem noch weiterlaufen kann.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "<code>break</code> und <code>return</code> sind eigentlich gleich, weil beides stoppt."

Erkläre, warum diese Aussage zu ungenau ist.
