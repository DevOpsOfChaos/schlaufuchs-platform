---
title: Lange Textketten ohne Layoutbruch begründen
description: Begründe an kleinen Karten- und Textbeispielen, wie lange Zeichenketten umgebrochen werden sollten und warum das nicht nur eine Breitenfrage ist.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - overflow-wrap-und-word-break-verstehen
  - lange-textketten-ohne-layoutbruch-begruenden
level: mittel
draft: false
tags:
  - css
  - text
  - responsive
hintPoints:
  - "Frage zuerst, ob es sich um normalen Text oder um eine lange Zeichenkette handelt."
  - "Trenne Layoutschutz und Lesbarkeit bewusst voneinander."
  - "Beschreibe sichtbar, was mit der Box passiert."
selfCheckPoints:
  - "Ist klar, warum die Box ohne Umbruchregel Probleme bekommt?"
  - "Benennst du den Unterschied zwischen sanfter und stärkerer Umbruchlogik?"
transferIdeas:
  - "Übertrage die Aufgabe auf URLs, Dateinamen oder Produktcodes."
reflectionPrompt: "Warum ist Textumbruch nicht nur ein Typografie-Thema, sondern auch ein Layoutthema?"
---

## Aufgabe 1: Problem erkennen

Eine schmale Karte enthält eine sehr lange URL ohne Leerzeichen.

Erkläre, warum der Inhalt das Layout sprengen kann, obwohl die Karte selbst korrekt gestaltet wirkt.

## Aufgabe 2: Lösung begründen

Begründe, warum `overflow-wrap` in vielen Fällen eine ruhigere erste Lösung ist als ein sehr harter Wortumbruch.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Dann mache ich die Karte einfach breiter.“

Erkläre, warum das das Grundproblem nicht immer löst.
