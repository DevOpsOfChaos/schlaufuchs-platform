---
title: Freien Außenraum bei Zentrierung begründen
description: Begründe, warum margin auto nur dann sichtbar zentriert, wenn eine Box seitlich freien Raum übrig lässt.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - margin-auto-und-zentrierung-verstehen
  - freien-aussenraum-bei-zentrierung-begruenden
level: einfach
draft: false
tags:
  - css
  - margin
  - auto
  - zentrierung
hintPoints:
  - Frage zuerst: Gibt es überhaupt freien Raum links und rechts?
  - Prüfe, ob das Element eine Breitenbegrenzung hat.
selfCheckPoints:
  - Kannst du Zentrierung als Verteilung von Außenraum erklären?
  - Kannst du begründen, warum eine volle Breite kaum zentrierbar wirkt?
transferIdeas:
  - Übertrage die Aufgabe auf Lesespalten, Karten oder schmale Formularbereiche.
reflectionPrompt: Warum hilft es bei Zentrierungsproblemen oft mehr, zuerst über Breite nachzudenken als über neue CSS-Regeln?
---

## Aufgabe 1: Zwei Fälle vergleichen

Vergleiche diese beiden Ideen:

- eine Karte mit <code>max-width: 42rem; margin: 0 auto;</code>
- eine Box, die fast die ganze Breite einnimmt und ebenfalls <code>margin: 0 auto;</code> bekommt

Erkläre, bei welcher Variante Zentrierung ruhiger sichtbar wird und warum.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: „Wenn <code>margin: auto</code> nicht zentriert, muss die Regel falsch sein.“

Erkläre, warum die eigentliche Ursache oft eher bei Breite und Boxverhalten liegt.

## Aufgabe 3: Eigene Begründung

Formuliere in einem Satz, was <code>margin auto</code> fachlich eher tut als bloß „mittig machen“.
