---
title: Bezugspunkte von CSS-Einheiten ruhig erklären
description: Begründe, wann px, em oder rem sinnvoller wirken und woran sich die Einheit jeweils orientiert.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - em-rem-und-px-vergleichen
  - bezugspunkte-von-css-einheiten-ruhig-erklaeren
level: einfach
draft: false
tags:
  - css
  - einheiten
  - em
  - rem
  - px
hintPoints:
  - Beschreibe nicht nur die Zahl, sondern den Bezugspunkt.
  - Unterscheide globalen und lokalen Kontext.
selfCheckPoints:
  - Kannst du erklären, woran em und rem hängen?
  - Kannst du px von relativen Einheiten trennen?
transferIdeas:
  - Übertrage die Frage auf Schriftgrößen, Lücken oder Kartenabstände.
reflectionPrompt: Wann hilft ein lokaler Bezug über em mehr als ein globaler Bezug über rem?
---

## Aufgabe 1: Einheit begründen

Begründe für jede Situation eine naheliegende Einheit:

- global abgestimmte Grundabstände auf einer ganzen Seite
- ein Badge, das mit seiner lokalen Schriftgröße mitwachsen soll
- ein sehr direkter, fester Linienwert

## Aufgabe 2: rem oder em?

Erkläre den Unterschied zwischen diesen beiden Aussagen:

- „Der Abstand hängt an der Wurzel des Dokuments.“
- „Der Abstand hängt am lokalen Kontext der Komponente.“

## Aufgabe 3: Sichtbar vergleichen

Eine Komponente hat eine größere Schriftgröße als der Rest der Seite.

Beschreibe, warum <code>padding: 1em</code> und <code>padding: 1rem</code> dort sichtbar unterschiedlich wirken können.
