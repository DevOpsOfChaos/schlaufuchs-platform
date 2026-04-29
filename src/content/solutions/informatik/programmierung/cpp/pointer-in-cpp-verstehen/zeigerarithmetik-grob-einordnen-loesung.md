---
title: "Musterlösung – Zeigerarithmetik grob einordnen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-PTR-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "pointer-in-cpp-verstehen", "zeigerarithmetik-grob-einordnen"]
taskId: "INF-PROG-CPP-PTR-003"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/pointer-in-cpp-verstehen/zeigerarithmetik-grob-einordnen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Typbezug erklären

Ein Pointer zeigt auf Objekte eines bestimmten Typs. Wenn er erhöht wird, springt er gedanklich zum nächsten Objekt dieses Typs und nicht nur zu einer beliebigen Byteposition.

## Aufgabe 2: Denkbild formulieren

Bei einem Pointer auf <code>short</code> bedeutet <code>+20</code> fachlich „20 Elemente weiter“. Da ein <code>short</code> mehr als 1 Byte belegen kann, ist das nicht dasselbe wie 20 Byte addieren.

## Aufgabe 3: Vorsicht begründen

Zeigerarithmetik berücksichtigt Typgrößen. Wer nur wie bei normalen Ganzzahlen rechnet, verliert schnell den Bezug zum referenzierten Datentyp und liest die Speicherbewegung falsch.
