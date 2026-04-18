---
title: Zwischenräume im Layout über gap begründen
description: Begründe, warum gleichmäßige Zwischenräume in Flex- oder Grid-Layouts oft besser über gap als über einzelne margins beschrieben werden.
subject: web-development
section: CSS
topicPath:
  - css
  - flexbox
  - gap-in-flex-und-grid-verstehen
  - zwischenraeume-im-layout-ueber-gap-begruenden
level: einfach
draft: false
tags:
  - css
  - gap
  - flexbox
  - grid
hintPoints:
  - "Frage zuerst, ob der Abstand zwischen mehreren Kindern gleichmäßig sein soll."
  - "Achte darauf, ob die Regel zum Container oder zum einzelnen Kind gehört."
  - "Begründe die Logik, nicht nur den Eigenschaftsnamen."
selfCheckPoints:
  - "Hast du Zwischenraum und Außenabstand sauber getrennt?"
  - "Wird klar, warum gap am Container sitzt?"
  - "Beschreibst du sichtbar, was sich mit größerem gap ändert?"
transferIdeas:
  - "Übertrage die Aufgabe auf Kartenzeilen, Button-Gruppen oder ein kleines Dashboard."
  - "Vergleiche eine Lösung mit gap mit einer Lösung aus vielen margin-Einzelregeln."
reflectionPrompt: "Woran merkst du in einem Layout, dass ein Problem eher ein Thema von gleichmäßigen Zwischenräumen als von Außenabständen ist?"
---

## Aufgabe 1: Container oder Kind?

Drei Karten stehen in einer Reihe. Zwischen allen Karten soll derselbe Abstand liegen.

Erkläre,

- warum hier <code>gap</code> eine ruhige Lösung sein kann,
- warum die Regel eher am Container als an jeder Karte einzeln steht,
- und was sich sichtbar ändert, wenn der gap-Wert größer wird.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: „Gap ist einfach dasselbe wie margin.“

Erkläre, warum diese Aussage zu kurz ist.

## Aufgabe 3: Flex oder Grid

Ein kleines Layout besteht aus sechs Kacheln in einem Raster.

Begründe, warum <code>gap</code> auch dort sinnvoll sein kann, obwohl das Layout nicht als einfache Reihe gedacht ist.
