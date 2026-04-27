---
title: "CSS-Vererbung"
description: "Überblick über CSS-Vererbung, geerbte Eigenschaften und ihre Bedeutung für konsistente Gestaltung."
subject: web-development
section: "CSS"
topicPath:
  - "css-vererbung"
  - "ueberblick"
learningGoals:
  - "Du kannst CSS-Vererbung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Es wird oft erwartet, dass alle CSS-Eigenschaften automatisch an Kinder weitergegeben werden."
keyTakeaways:
  - "Nur bestimmte CSS-Eigenschaften werden vererbt."
  - "Vererbung hilft bei konsistenter Typografie."
  - "Kaskade und Vererbung müssen getrennt verstanden werden."
recognizeSignals:
  - "Eine Schrift- oder Farbänderung wirkt auf viele Elemente."
  - "DevTools zeigen inherited oder geerbte Werte."
selfCheckPoints:
  - "Kann ich CSS-Vererbung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "css"
  - "vererbung"
draft: false
---

# CSS-Vererbung

CSS-Vererbung bedeutet, dass bestimmte Eigenschaften von einem Element an seine Kindelemente weitergegeben werden. Typische Beispiele sind Schriftart, Textfarbe und Zeilenhöhe.

## Einordnung

Vererbung erklärt, warum eine Änderung an `body` viele Texte beeinflusst. Sie ist Grundlage konsistenter Typografie, kann aber verwirren, wenn direkte und geerbte Regeln vermischt werden.

## Zentrale Aspekte

- **Geerbte Eigenschaften:** Textbezogene Eigenschaften werden häufig weitergegeben.
- **Nicht geerbte Eigenschaften:** Layout- und Boxeigenschaften bleiben meist am Element.
- **Kaskade:** Vererbung wirkt mit Spezifität und Reihenfolge zusammen.
- **DevTools:** Browserwerkzeuge zeigen geerbte Werte an.

## Beispiele und Zusammenhang

Wenn `body` eine Schriftfamilie bekommt, nutzen viele Texte diese automatisch. Ein `margin` am `body` wird dagegen nicht an alle Absätze vererbt.

## Abgrenzung

Vererbung ist nicht dasselbe wie Kaskade. Die Kaskade entscheidet, welche Regel gewinnt; Vererbung füllt Werte aus.

## Häufige Missverständnisse

Es wird oft erwartet, dass alle CSS-Eigenschaften automatisch an Kinder weitergegeben werden.

## Kurz zusammengefasst

- Nur bestimmte CSS-Eigenschaften werden vererbt.
- Vererbung hilft bei konsistenter Typografie.
- Kaskade und Vererbung müssen getrennt verstanden werden.
