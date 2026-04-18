---
title: Überlagerung und Ebenenlogik begründen
description: Begründe, warum bei überlagernden Elementen nicht nur die Position, sondern auch die sichtbare Reihenfolge entschieden werden muss.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - z-index-und-ebenen-verstehen
  - ueberlagerung-und-ebenenlogik-begruenden
level: einfach
draft: false
tags:
  - css
  - z-index
  - ebene
hintPoints:
  - "Frage zuerst, ob sich die Elemente überhaupt überlagern."
  - "Trenne Ort und Ebene sauber voneinander."
  - "Begründe, welches Element im Vordergrund sichtbar bleiben soll."
selfCheckPoints:
  - "Hast du Position und Ebenenreihenfolge getrennt erklärt?"
  - "Ist klar, warum z-index hier sichtbar relevant wird?"
  - "Beschreibst du die Wirkung statt nur eine Zahl zu nennen?"
transferIdeas:
  - "Übertrage die Logik auf Tooltips, Menüs, Badges oder Bildbeschriftungen."
  - "Vergleiche eine Überlagerung mit einem normalen Flusslayout ohne Ebenenkonflikt."
reflectionPrompt: "Woran merkst du bei einem Layoutproblem, dass nicht die Position fehlt, sondern die sichtbare Ebenenreihenfolge?"
---

## Aufgabe 1: Was liegt sichtbar oben?

Ein kleines Badge überlappt eine Karte. Das Badge soll immer sichtbar bleiben.

Erkläre,

- warum hier nicht nur die Position, sondern auch die Ebene wichtig ist,
- was <code>z-index</code> in dieser Situation sichtbar beeinflusst,
- und warum eine große Zahl allein keine gute Erklärung ersetzt.

## Aufgabe 2: Denkfehler prüfen

Jemand setzt auf ein normales Element mitten im Seitenfluss <code>z-index: 9999</code> und erwartet, dass es „wichtiger“ wird.

Erkläre, warum das fachlich zu kurz gedacht ist.

## Aufgabe 3: Vorne oder hinten?

Ein Hilfemenü klappt über einem Formular auf.

Begründe, warum hier die Ebenenfrage zentraler ist als die reine Frage nach links, rechts, oben oder unten.
