---
title: "Flexbox"
description: "Allgemeiner Überblick über Flexbox als Layoutsystem für eindimensionale Anordnung."
subject: web-development
section: "CSS Layout"
topicPath:
  - flexbox
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Häufig wird Flexbox mit vielen Zusatzregeln überladen, weil Hauptachse und Querachse nicht bewusst unterschieden werden."
keyTakeaways:
  - "Flexbox ist ein CSS-Layoutmodell für die Anordnung von Elementen entlang einer Hauptachse."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "web development"
  - "css"
  - "flexbox"
  - "layout"
draft: false
---

# Flexbox

## Begriff und Zweck

Flexbox ist ein CSS-Layoutmodell für die Anordnung von Elementen entlang einer Hauptachse. Es eignet sich besonders für Navigationen, Werkzeugleisten, Kartenreihen, Zentrierung und flexible Verteilung von verfügbarem Platz. Flexbox denkt weniger in festen Koordinaten, sondern in Beziehungen zwischen Container und Elementen.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Hauptachse und Querachse
- Ausrichtung mit justify-content und align-items
- flex-grow, flex-shrink und flex-basis
- Umbruch mit flex-wrap

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Eine Navigationsleiste kann ihre Links horizontal verteilen. Eine Button-Gruppe kann zentriert werden. Karten können gleichmäßig Abstand erhalten und bei wenig Platz umbrechen. Flexbox ist stark, wenn die Reihenfolge und Verteilung innerhalb einer Zeile oder Spalte wichtig ist.

## Abgrenzung

Flexbox ist nicht für jedes zweidimensionale Raster die beste Wahl. Wenn Zeilen und Spalten gemeinsam geplant werden, ist CSS Grid oft klarer. Flexbox arbeitet dagegen besonders gut, wenn eine Richtung im Mittelpunkt steht.

## Häufige Missverständnisse

Häufig wird Flexbox mit vielen Zusatzregeln überladen, weil Hauptachse und Querachse nicht bewusst unterschieden werden. Ein weiterer Fehler ist, feste Breiten und Flex-Verhalten gleichzeitig widersprüchlich einzusetzen.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
