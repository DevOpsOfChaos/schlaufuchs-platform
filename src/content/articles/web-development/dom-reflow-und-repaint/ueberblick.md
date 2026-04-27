---
title: "DOM-Reflow und Repaint"
description: "Überblick über Layout-Neuberechnung, Neuzeichnen und ihre Bedeutung für flüssige Oberflächen."
subject: web-development
section: "Rendering"
topicPath:
  - "dom-reflow-und-repaint"
  - "ueberblick"
learningGoals:
  - "Du kannst DOM-Reflow und Repaint als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "In einer Schleife immer wieder Layoutwerte zu lesen und direkt Stiländerungen zu schreiben."
keyTakeaways:
  - "Reflow betrifft Geometrie, Repaint die Darstellung."
  - "Viele Layoutänderungen können Performance kosten."
  - "Gute UI-Performance bündelt und begrenzt Änderungen."
recognizeSignals:
  - "Scrollen oder Animationen ruckeln."
  - "JavaScript verändert viele Stile oder Klassen."
selfCheckPoints:
  - "Kann ich DOM-Reflow und Repaint in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "dom"
  - "performance"
  - "rendering"
draft: false
---

# DOM-Reflow und Repaint

Reflow bezeichnet die Neuberechnung von Layoutgrößen und Positionen. Repaint bezeichnet das erneute Zeichnen sichtbarer Bereiche.

## Einordnung

JavaScript und CSS-Änderungen können den Browser zwingen, Layout und Darstellung neu zu berechnen. Häufige oder unnötig große Änderungen verursachen Ruckeln.

## Zentrale Aspekte

- Layoutänderungen können viele Elemente betreffen.
- Lesen und Schreiben von Layoutwerten direkt hintereinander kann teuer sein.
- Transform und Opacity sind oft günstiger als Breite oder Position.
- Batching reduziert wiederholte Neuberechnungen.

## Beispiele und Zusammenhang

Eine Animation über `width` kann Layout neu berechnen. Eine Animation über `transform` bleibt oft flüssiger.

## Abgrenzung

Nicht jede DOM-Änderung ist kritisch. Problematisch werden viele Änderungen in kurzen Zeitabständen oder in großen Dokumenten.

## Häufige Missverständnisse

In einer Schleife immer wieder Layoutwerte zu lesen und direkt Stiländerungen zu schreiben.

## Kurz zusammengefasst

- Reflow betrifft Geometrie, Repaint die Darstellung.
- Viele Layoutänderungen können Performance kosten.
- Gute UI-Performance bündelt und begrenzt Änderungen.
