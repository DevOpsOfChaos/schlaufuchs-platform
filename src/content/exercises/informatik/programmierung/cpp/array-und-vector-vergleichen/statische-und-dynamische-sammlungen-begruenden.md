---
title: Statische und dynamische Sammlungen begründen
description: Begründe bei kleinen Beispielen, wann ein Array und wann ein vector als Sammlungsidee ruhiger passt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - sammlungen-und-speicher
  - array-und-vector-vergleichen
  - statische-und-dynamische-sammlungen-begruenden
taskId: INF-PROG-CPP-COLL-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - array
hintPoints:
  - "Frage zuerst, ob die Größe feststeht."
  - "Überlege, ob später Elemente hinzukommen oder verschwinden sollen."
selfCheckPoints:
  - "Ist feste und dynamische Größe sauber unterschieden?"
  - "Wird die Wahl der Sammlung begründet statt nur benannt?"
transferIdeas:
  - "Übertrage die Logik auf Messwerte, Benutzerlisten oder Monatsdaten."
reflectionPrompt: "Warum ist die Frage nach der Größe oft wichtiger als die Frage nach dem Datentyp?"
---

## Aufgabe 1: Sammlung auswählen

Ordne begründet zu:

- Die Wochentage eines festen Kalenders
- Eine Einkaufsliste, die während des Programms wachsen kann

Wo passt eher ein Array, wo eher ein <code>vector</code>?

## Aufgabe 2: Unterschied erklären

Erkläre in eigenen Worten, warum <code>push_back(...)</code> zu einem <code>vector</code> passt, aber nicht zur Grundidee eines festen Arrays.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Array und vector sind dasselbe, nur anders geschrieben."

Erkläre, warum diese Aussage fachlich zu kurz greift.
