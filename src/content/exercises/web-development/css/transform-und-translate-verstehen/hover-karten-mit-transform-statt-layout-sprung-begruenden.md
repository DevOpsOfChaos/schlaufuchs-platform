---
title: Hover-Karten mit Transform statt Layout-Sprung begründen
description: Begründe, warum transform für kleine sichtbare Bewegungseffekte oft ruhiger ist als margin oder andere Layout-Änderungen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - transform-und-translate-verstehen
  - hover-karten-mit-transform-statt-layout-sprung-begruenden
level: mittel
draft: false
tags:
  - css
  - transform
  - translate
hintPoints:
  - "Frage zuerst, ob nur die sichtbare Wirkung oder der ganze Layoutfluss geändert werden soll."
  - "Achte darauf, ob Nachbarelemente mitrücken."
selfCheckPoints:
  - "Kannst du transform von margin fachlich trennen?"
  - "Kannst du begründen, warum translate bei Hover oft ruhiger wirkt?"
transferIdeas:
  - "Übertrage die Logik auf Buttons, Bilder oder Kacheln in einer Übersicht."
reflectionPrompt: "Woran merkst du, dass eine Bewegung als Darstellungseffekt gedacht ist und nicht als echte neue Layoutposition?"
---

## Aufgabe 1: Wirkung erklären

Eine Kartenliste soll beim Hover lebendiger wirken. Die Karten sollen sich leicht anheben, aber die restlichen Karten sollen nicht neu springen.

Erkläre, warum `transform: translateY(-6px)` hier oft besser passt als eine Änderung von `margin-top`.

## Aufgabe 2: Unterschied benennen

Beschreibe in eigenen Worten den Unterschied zwischen

- „das Layout wird anders berechnet“
- und
- „das Element wirkt sichtbar verschoben“.

## Aufgabe 3: Nachbarelemente mitdenken

Nenne ein Signal, an dem du in einer kleinen Demo erkennst, dass eher das Layout verändert wurde und nicht nur die Darstellung.
