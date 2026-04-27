---
title: "CSS-Einheiten und Größen"
description: "Allgemeiner Überblick über absolute und relative CSS-Einheiten, Skalierung und responsive Gestaltung."
subject: web-development
section: "CSS"
topicPath:
  - "css-einheiten-und-groessen"
  - "ueberblick"
learningGoals:
  - "Du kannst CSS-Einheiten und Größen grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "CSS-Einheiten und Größen nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "CSS-Einheiten und Größen beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um CSS-Einheiten und Größen, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich CSS-Einheiten und Größen in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "web-development"
  - "css"
  - "einheiten"
  - "responsive"
draft: false
---
# CSS-Einheiten und Größen

CSS-Einheiten beschreiben Größen wie Abstände, Schriftgrößen, Breiten oder Höhen. Sie bestimmen, ob Gestaltung starr bleibt oder sich an Inhalt, Gerät und Nutzereinstellungen anpassen kann.

## Bedeutung

Absolute Einheiten wirken auf den ersten Blick einfach, sind im Web aber selten die beste alleinige Lösung. Relative Einheiten wie Prozent, em, rem, vw oder vh helfen, Layouts flexibler zu gestalten und Zugänglichkeit zu erhalten.

## Typische Teilaspekte

- **Pixel:** Pixel sind praktisch für feine Linien oder feste Grenzen, aber nicht immer nutzerfreundlich für Text.
- **rem und em:** Diese Einheiten beziehen sich auf Schriftgrößen und unterstützen skalierbare Oberflächen.
- **Prozent:** Prozentwerte beziehen sich auf den verfügbaren Raum des Elternelements.
- **Viewport-Einheiten:** vw und vh beziehen sich auf die Größe des Browserfensters.

## Beispiel

Eine Schriftgröße in rem kann mit den Browsereinstellungen skalieren, während ein Container mit Prozentbreite auf verschiedene Bildschirmgrößen reagiert.

## Abgrenzung

Responsive Design besteht nicht nur aus Medienqueries. Flexible Einheiten, sinnvolle Mindest- und Maximalgrößen und inhaltsorientierte Gestaltung sind ebenso wichtig.

## Häufige Missverständnisse

Ein häufiger Fehler ist das feste Verdrahten aller Größen in Pixeln. Das kann bei Zoom, kleinen Bildschirmen oder längeren Texten schnell brechen.

## Einordnung im Gesamtzusammenhang

CSS-Einheiten verbinden Typografie, Layoutsysteme, Barrierefreiheit und robuste Oberflächen.
