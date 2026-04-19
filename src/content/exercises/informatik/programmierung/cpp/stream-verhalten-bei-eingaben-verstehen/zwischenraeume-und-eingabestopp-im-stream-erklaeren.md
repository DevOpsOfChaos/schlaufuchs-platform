---
title: Zwischenräume und Eingabestopp im Stream erklären
description: Erkläre an kleinen Beispielen, wann cin Leerzeichen überspringt und wann ein Eingabeteil endet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - ein-und-ausgabe
  - stream-verhalten-bei-eingaben-verstehen
  - zwischenraeume-und-eingabestopp-im-stream-erklaeren
taskId: INF-PROG-CPP-STREAMREAD-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
hintPoints:
  - "Trenne erst die Rolle der einzelnen Teile, dann den Gesamtablauf."
  - "Begründe nicht nur das Ergebnis, sondern auch die Zuordnung."
selfCheckPoints:
  - "Habe ich die entscheidenden Begriffe oder Code-Stellen sauber zugeordnet?"
  - "Ist meine Begründung fachlich ruhig und eindeutig?"
transferIdeas:
  - "Übertrage die Logik auf ein ähnliches kleines C++-Beispiel."
reflectionPrompt: "Welche Unterscheidung war in dieser Aufgabe die wichtigste?"
---

## Aufgabe 1: Führende Zeichen

Ein <code>float</code> soll mit <code>cin</code> gelesen werden. Die Eingabe beginnt mit einem Tabulator und lautet danach <code>34.5a</code>.

Erkläre:

- warum der Tabulator am Anfang nicht der eigentliche Zahlenwert ist,
- welcher Teil sinnvoll als float übernommen werden kann,
- und warum der Buchstabe <code>a</code> nicht zu diesem float gehört.

## Aufgabe 2: Trennstelle finden

Erkläre in 2 bis 4 Sätzen, warum Leerzeichen oder Zeilenumbrüche bei vielen einfachen <code>cin</code>-Eingaben als Trennstelle wirken.
