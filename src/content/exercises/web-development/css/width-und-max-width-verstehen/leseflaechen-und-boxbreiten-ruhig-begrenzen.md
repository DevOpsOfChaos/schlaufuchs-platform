---
title: Leseflächen und Boxbreiten ruhig begrenzen
description: Begründe, wann width zu starr wirkt und warum max-width bei responsiven Flächen oft ruhiger ist.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - width-und-max-width-verstehen
  - leseflaechen-und-boxbreiten-ruhig-begrenzen
level: einfach
draft: false
tags:
  - css
  - width
  - max-width
hintPoints:
  - "Frage zuerst, ob eine feste Breite wirklich nötig ist oder nur eine Obergrenze sinnvoll wäre."
  - "Denke an kleine und große Bildschirme zugleich."
  - "Begründe nicht nur technisch, sondern auch aus Sicht der Lesbarkeit."
selfCheckPoints:
  - "Hast du Zwang und Obergrenze sauber unterschieden?"
  - "Ist erklärt, was auf kleinen Flächen passiert?"
  - "Beziehst du die Lesbarkeit auf großen Flächen mit ein?"
transferIdeas:
  - "Übertrage die Aufgabe auf Bilder, Formulare, Karten oder Inhaltsbereiche."
  - "Vergleiche eine starre Werbefläche mit einer normalen Textspalte."
reflectionPrompt: "Woran erkennst du, dass ein Element nicht eine feste Breite braucht, sondern nur eine gute Grenze?"
---

## Aufgabe 1: Auswahl begründen

Ein Artikeltext soll auf kleinen Geräten die verfügbare Breite nutzen, auf großen Bildschirmen aber nicht endlos breit werden.

Begründe, warum eine Kombination wie <code>width: 100%</code> und <code>max-width</code> hier oft ruhiger ist als eine starre feste Breite.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: „<code>max-width</code> ist nur eine andere Schreibweise für <code>width</code>.“

Erkläre, warum das nicht stimmt.

## Aufgabe 3: Situation deuten

Eine Karte mit <code>width: 28rem</code> ragt auf einem kleinen Bildschirm aus dem sichtbaren Bereich heraus.

Beschreibe, was an der Breitenlogik problematisch ist und welche ruhigere Alternative näherliegt.
