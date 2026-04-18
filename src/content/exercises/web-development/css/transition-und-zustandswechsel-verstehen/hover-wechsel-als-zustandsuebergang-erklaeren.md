---
title: Hover-Wechsel als Zustandsübergang erklären
description: Beschreibe, warum eine Transition einen Hover-Effekt ruhiger macht und welche zwei Zustände dabei verbunden werden.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - transition-und-zustandswechsel-verstehen
  - hover-wechsel-als-zustandsuebergang-erklaeren
level: einfach
draft: false
tags:
  - css
  - transition
  - hover
hintPoints:
  - "Benenne zuerst Ausgangszustand und Zielzustand."
  - "Erkläre die Transition als Weg zwischen beiden, nicht als dritten Zustand."
selfCheckPoints:
  - "Kannst du die zwei verbundenen Zustände klar nennen?"
  - "Kannst du erklären, warum eine kleine Transition lesbarer wirkt?"
transferIdeas:
  - "Übertrage die Logik auf Focus- oder Active-Zustände."
reflectionPrompt: "Wann verbessert eine Transition die Lesbarkeit und wann wird sie eher zum unnötigen Effekt?"
---

## Aufgabe 1: Zustände trennen

Eine Karte ist im Normalzustand flach. Bei Hover hebt sie sich leicht an und bekommt einen Schatten.

Erkläre:
- welcher Zustand vorher gilt,
- welcher Zustand bei Hover gilt,
- und welche Rolle die Transition zwischen beiden spielt.

## Aufgabe 2: Abrupt oder ruhig?

Vergleiche:
- eine Karte mit sofortigem Sprung,
- eine Karte mit `transition: transform 160ms ease`.

Beschreibe, warum die zweite Variante oft ruhiger wirkt.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Ich habe `transition` gesetzt, also sieht man automatisch eine Animation.“

Erkläre, warum das fachlich ungenau ist.
