---
title: Wertearten sauber unterscheiden
description: Begründe, ob ein Wert als exakte ganze Zahl, Näherungswert oder bool-Zustand gedacht werden sollte.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - primitive-datentypen
  - ganzzahl-gleitkomma-und-bool-unterscheiden
  - wertearten-sauber-unterscheiden
taskId: INF-PROG-CPP-TYPEN-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - int
  - double
  - bool
hintPoints:
  - "Unterscheide zuerst exaktes Zählen, Näherungswert und Ja-Nein-Frage."
  - "Begründe nicht nur den Typnamen, sondern die Wertrolle."
selfCheckPoints:
  - "Wird zwischen Anzahl, Messwert und Zustand sauber getrennt?"
  - "Bleibt die Begründung fachlich statt nur syntaktisch?"
transferIdeas:
  - "Übertrage die Aufgabe auf Lagerbestand, Gewicht, Loginstatus oder Timerwerte."
reflectionPrompt: "Warum ist ein bool-Wert trotz möglicher interner Zahlendarstellung fachlich nicht einfach eine Zahl?"
---

## Aufgabe 1: Typwahl begründen

Begründe für jede Variable, ob eher `int`, `double` oder `bool` passt:

- Anzahl Besucher
- Paket angekommen oder nicht
- Durchschnittliche Bearbeitungszeit in Sekunden mit Nachkommastellen

## Aufgabe 2: Messwert oder Zählwert?

Erkläre, warum eine Temperatur anders gedacht werden sollte als eine Anzahl von Tischen in einem Raum.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „`0` und `false` sind gleich, also ist bool nur ein anderer Name für int.“  
Erkläre, warum diese Sicht fachlich zu kurz greift.
