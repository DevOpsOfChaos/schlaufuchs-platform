---
title: Zeilenumbruch in Flex-Reihen ruhig begründen
description: Erkläre, wann ein Flex-Container eine Umbruchlogik braucht und warum Einzelbreiten allein oft nicht genügen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - flex-wrap-und-umbruchlogik-verstehen
  - zeilenumbruch-in-flex-reihen-ruhig-begruenden
level: einfach
draft: false
tags:
  - css
  - flexbox
  - wrap
hintPoints:
  - Prüfe zuerst den Container und nicht nur die Karten.
  - Beschreibe sichtbar, was bei einer einzigen Zeile passiert.
selfCheckPoints:
  - Kannst du erklären, warum die Reihe zu eng wirkt?
  - Kannst du begründen, warum wrap hier sinnvoll ist?
transferIdeas:
  - Übertrage die Frage auf Buttongruppen, Kartenlisten oder Filterchips.
reflectionPrompt: Warum ist flex-wrap oft die ruhigere Stellschraube als sofort jede Karte schmaler zu machen?
---

## Aufgabe 1: Engstelle erklären

Eine Kartenreihe enthält vier Karten mit ähnlicher Breite. Auf kleiner Fläche wirken sie gedrängt und laufen teilweise aus dem Bereich.

Erkläre, warum hier zuerst die Umbruchlogik des Containers geprüft werden sollte.

## Aufgabe 2: nowrap oder wrap?

Begründe für die beiden Situationen, welcher Wert sinnvoller wirkt:

- eine kleine Navigationszeile mit wenigen Links
- eine Tag- oder Filterliste mit vielen Chips

## Aufgabe 3: Sichtbar vergleichen

Beschreibe in eigenen Worten den sichtbaren Unterschied zwischen:

- alle Elemente müssen in einer Zeile bleiben
- Elemente dürfen in mehrere Reihen umbrechen
