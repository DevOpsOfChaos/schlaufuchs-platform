---
title: Grundverhalten von Elementen sichtbar vergleichen
description: Vergleiche, wie dieselben Inhalte als block, inline oder inline-block reagieren, und begründe die passende Wahl.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - display-block-inline-und-inline-block-verstehen
  - grundverhalten-von-elementen-sichtbar-vergleichen
taskId: WEB-CSS-DISPLAY-001
level: einfach
draft: false
tags:
  - css
  - display
  - layout
hintPoints:
  - "Frage zuerst, ob das Element im Textfluss bleiben soll oder eine neue Zeile braucht."
  - "Achte nicht nur auf Farben, sondern auf Umbruch und Boxverhalten."
  - "Begründe die Wahl aus Sicht des Layouts, nicht aus Gewohnheit."
selfCheckPoints:
  - "Hast du sichtbar beschrieben, wie sich die Varianten unterscheiden?"
  - "Benennst du Textfluss und neue Zeile sauber?"
  - "Ist klar, warum inline-block oft für kleine UI-Bausteine hilfreich ist?"
transferIdeas:
  - "Übertrage die Aufgabe auf Navigationslinks, Badges oder kleine Produktchips."
  - "Vergleiche ein Inline-Element im Satz mit einem Button in einer Leiste."
reflectionPrompt: "Woran merkst du in einem Layout zuerst, dass nicht padding, sondern display das eigentliche Problem ist?"
---

## Aufgabe 1: Wirkung beschreiben

Drei identische Links werden einmal als <code>block</code>, einmal als <code>inline</code> und einmal als <code>inline-block</code> dargestellt.

Beschreibe für jede Variante:

- ob die Links eher untereinander oder im Fluss liegen,
- wie stark sie wie eigene Boxen wirken,
- und welche Variante für kleine klickbare Badges am passendsten ist.

## Aufgabe 2: Auswahl begründen

Eine kleine Navigationsleiste soll aus drei nebeneinander stehenden Links bestehen. Jeder Link soll Innenabstand haben und wie ein eigener kleiner Baustein wirken.

Begründe, warum <code>inline-block</code> hier oft näherliegt als reines <code>inline</code>.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Block ist einfach die große Version von Inline.“

Erkläre, warum diese Aussage zu kurz greift und warum es eigentlich um unterschiedliches Layoutverhalten geht.
