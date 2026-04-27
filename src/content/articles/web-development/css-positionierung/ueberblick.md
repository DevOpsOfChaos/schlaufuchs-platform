---
title: "CSS-Positionierung"
description: "Allgemeiner Überblick über Positionierung in CSS, normale Dokumentflüsse und gezielte Platzierung."
subject: web-development
section: "CSS"
topicPath:
  - "css-positionierung"
  - "ueberblick"
learningGoals:
  - "Du kannst CSS-Positionierung grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "CSS-Positionierung nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "CSS-Positionierung beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um CSS-Positionierung, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich CSS-Positionierung in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "web-development"
  - "css"
  - "positionierung"
  - "layout"
draft: false
---
# CSS-Positionierung

CSS-Positionierung beschreibt, wie Elemente im Dokumentfluss oder außerhalb davon platziert werden. Sie ergänzt Layoutsysteme wie Flexbox und Grid, ersetzt sie aber nicht vollständig.

## Bedeutung

Standardmäßig folgen Elemente dem normalen Dokumentfluss. Positionierungsarten wie relative, absolute, fixed oder sticky verändern diesen Zusammenhang und sollten gezielt eingesetzt werden.

## Typische Teilaspekte

- **Normalfluss:** Elemente nehmen Platz ein und beeinflussen folgende Elemente.
- **Relative Positionierung:** Ein Element bleibt im Fluss, kann aber optisch verschoben werden.
- **Absolute Positionierung:** Ein Element wird aus dem normalen Fluss genommen und relativ zu einem Bezugselement platziert.
- **Sticky und fixed:** Elemente können am Viewport oder innerhalb eines Scrollbereichs haften.

## Beispiel

Ein Hinweisbadge kann absolut innerhalb einer Karte positioniert werden, während die Karte selbst weiterhin mit Grid oder Flexbox im Seitenlayout liegt.

## Abgrenzung

Positionierung ist nicht dasselbe wie Layoutplanung. Ganze Seitenlayouts sollten meist nicht ausschließlich mit `position: absolute` aufgebaut werden.

## Häufige Missverständnisse

Häufig entstehen Überlagerungen, weil Elemente aus dem Fluss genommen werden und dadurch keinen Platz mehr reservieren.

## Einordnung im Gesamtzusammenhang

Positionierung ist besonders wichtig für Overlays, Badges, Tooltips, feststehende Kopfbereiche und kleine UI-Details.
