---
title: "Hover-Karten mit Transform statt Layout-Sprung begründen"
description: "Begründe, warum transform für kleine sichtbare Bewegungseffekte oft ruhiger ist als margin oder andere Layout-Änderungen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "transform-und-translate-verstehen", "hover-karten-mit-transform-statt-layout-sprung-begruenden"]
taskId: "AUTO-HOVER-KARTEN-MIT-TRANSFORM-STATT-LAYOUT-SPRUNG-BEGRUENDEN"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
