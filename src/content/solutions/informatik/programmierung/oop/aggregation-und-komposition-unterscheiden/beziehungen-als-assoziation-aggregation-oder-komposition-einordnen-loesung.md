---
title: Musterloesung - Beziehungen als Assoziation, Aggregation oder Komposition einordnen
description: Musterloesung zur Aufgabe INF-PROG-UML-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - aggregation-und-komposition-unterscheiden
  - beziehungen-als-assoziation-aggregation-oder-komposition-einordnen-loesung
taskId: INF-PROG-UML-003
relatedExercise: src/content/exercises/informatik/programmierung/oop/aggregation-und-komposition-unterscheiden/beziehungen-als-assoziation-aggregation-oder-komposition-einordnen.md
tags:
  - informatik
  - programmierung
  - uml
  - loesung
draft: false
---

## Aufgabe 1: Teil-von pruefen

Klasse/Schueler passt eher als Aggregation. Haus/Raum passt eher als Komposition. Kunde/Konto ist eher eine normale Beziehung als eine enge Teil-von-Struktur.

## Aufgabe 2: Existenzabhaengigkeit beschreiben

Existenzabhaengigkeit heisst: Das Teil ist so stark an das Ganze gebunden, dass es ohne dieses Ganze fachlich kaum sinnvoll weiterbesteht.

## Aufgabe 3: Grenzfall begruenden

Ein Grenzfall koennte Team/Spieler sein. Man kann argumentieren, dass Spieler auch ohne ein konkretes Team existieren, daher waere eher Aggregation oder sogar nur Assoziation passend.
