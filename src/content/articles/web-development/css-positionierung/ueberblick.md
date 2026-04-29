---
title: "CSS-Positionierung"
description: "Allgemeiner Überblick über Positionierung in CSS, normale Dokumentflüsse und gezielte Platzierung."
subject: "web-development"
section: "CSS"
topicPath: ["css-positionierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
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
