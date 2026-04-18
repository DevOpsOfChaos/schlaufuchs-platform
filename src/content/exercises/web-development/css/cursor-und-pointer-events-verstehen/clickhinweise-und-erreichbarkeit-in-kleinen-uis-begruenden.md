---
title: Klickhinweise und Erreichbarkeit in kleinen UIs begründen
description: Begründe, warum Cursor-Hinweise und echte Klickbarkeit in Oberflächen nicht automatisch dasselbe bedeuten.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - cursor-und-pointer-events-verstehen
  - clickhinweise-und-erreichbarkeit-in-kleinen-uis-begruenden
level: mittel
draft: false
tags:
  - css
  - cursor
  - pointer-events
  - interaktion
hintPoints:
  - "Trenne sichtbaren Hinweis und echte Ereignisweitergabe konsequent voneinander."
  - "Prüfe bei Overlays, ob sie nur sichtbar sind oder auch Klicks abfangen."
selfCheckPoints:
  - "Kannst du einen Hand-Cursor von echter Klickbarkeit unterscheiden?"
  - "Kannst du begründen, wann pointer-events none sinnvoll ist?"
transferIdeas:
  - "Übertrage die Logik auf Karten, Badges, Tooltips oder Bild-Overlays."
reflectionPrompt: "Woran merkst du in einer kleinen Oberfläche, dass nicht der Cursor, sondern eine obere Fläche das eigentliche Problem ist?"
---

## Aufgabe 1: Hand-Cursor ohne Wirkung

Eine Infokarte bekommt `cursor: pointer`, löst aber beim Anklicken gar nichts aus.

Erkläre, warum das für Nutzende irritierend ist und welche fachliche Rolle `cursor` hier eigentlich hat.

## Aufgabe 2: Badge auf klickbarer Karte

Über einer klickbaren Produktkarte liegt ein dekoratives Badge. Genau dort reagiert die Karte nicht.

Begründe, warum hier `pointer-events: none` auf dem Badge sinnvoll sein kann.

## Aufgabe 3: Optisch deaktiviert, funktional offen

Ein Button ist ausgegraut, lässt sich aber trotzdem anklicken.

Erkläre, warum das kein bloßes Farbproblem ist, sondern eine unstimmige Interaktionslogik.
