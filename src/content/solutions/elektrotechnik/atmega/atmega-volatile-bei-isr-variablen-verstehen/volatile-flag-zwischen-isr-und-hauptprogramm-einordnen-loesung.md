---
title: Musterlösung – volatile-Flag zwischen ISR und Hauptprogramm einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-INT-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-volatile-bei-isr-variablen-verstehen
  - volatile-flag-zwischen-isr-und-hauptprogramm-einordnen-loesung
taskId: ET-ATMEGA-INT-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-volatile-bei-isr-variablen-verstehen/volatile-flag-zwischen-isr-und-hauptprogramm-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Die Variable `taste_gedrueckt` wird in der ISR geschrieben und im Hauptprogramm gelesen. Genau deshalb ist sie keine rein lokale Größe des sichtbaren Hauptablaufs. Ihr Wert kann sich durch ein Ereignis ändern, auch wenn die Hauptschleife selbst nichts an ihr schreibt.

### Aufgabe 2

Eine ISR läuft nicht wie ein gewöhnlicher Funktionsaufruf an genau der Stelle los, an der das Hauptprogramm sie direkt aufruft. Stattdessen wird sie durch ein Ereignis ausgelöst und unterbricht den normalen Ablauf kurz. Genau darum ist die Änderung an der Variablen aus Sicht der Hauptschleife eine externe Zustandsänderung.

### Aufgabe 3

`volatile` markiert hier die Grundidee, dass sich der Wert auch außerhalb des direkt sichtbaren Hauptcodes ändern kann. Das Hauptprogramm muss diese Möglichkeit also ernst nehmen und darf den Zustand nicht als unveränderlich behandeln.

### Aufgabe 4

Eine ruhige Formulierung wäre zum Beispiel:

> `volatile` macht die Variable sichtbar veränderbar, löst aber nicht automatisch jedes Mehrbyte- oder Atomaritätsproblem.
