---
title: Flex-Größenverhalten der Items begründen
description: Begründe, wie flex-grow, flex-shrink und flex-basis zusammenwirken und warum gleiche Startgrößen zu unterschiedlichen Ergebnissen führen können.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-grow-flex-shrink-und-flex-basis-verstehen
  - flex-groessenverhalten-der-items-begruenden
taskId: WEB-CSS-FLEX-206
level: einfach
draft: false
tags:
  - css
  - flexbox
  - groesse
hintPoints:
  - Trenne Ausgangsgröße, Wachsen und Schrumpfen sauber.
  - Lies die Kurzschreibweise als drei Rollen und nicht als Zahlencode.
selfCheckPoints:
  - Kannst du flex-basis und Endgröße unterscheiden?
  - Kannst du erklären, warum ein Item mehr Platz bekommt als ein anderes?
transferIdeas:
  - Übertrage die Logik auf Kartenreihen, Preisboxen oder Navigationsleisten.
reflectionPrompt: Warum ist bei Flexbox-Größen oft der Startpunkt wichtiger als die Endbreite allein?
---

## Aufgabe 1: Zwei Items vergleichen

Zwei Flex-Items starten mit derselben Basisgröße. Eines hat `flex-grow: 1`, das andere `flex-grow: 2`.

Erkläre, warum sie am Ende unterschiedlich breit werden können.

## Aufgabe 2: Platzmangel einordnen

Beschreibe, welche Rolle `flex-shrink` spielt, wenn im Container weniger Platz vorhanden ist als die Items eigentlich brauchen.

## Aufgabe 3: Kurzschreibweise lesen

Erkläre die drei Teile der Schreibweise `flex: 0 1 auto` in eigenen Worten.
