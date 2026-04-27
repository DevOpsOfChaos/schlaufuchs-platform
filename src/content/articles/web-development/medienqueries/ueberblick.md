---
title: "Medienqueries"
description: "Allgemeiner Überblick über Medienqueries, Breakpoints und anpassungsfähige Weboberflächen."
subject: web-development
section: "CSS"
topicPath:
  - "medienqueries"
  - "ueberblick"
learningGoals:
  - "Du kannst Medienqueries grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Medienqueries nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Medienqueries beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Medienqueries, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Medienqueries in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "web-development"
  - "css"
  - "medienqueries"
  - "responsive"
draft: false
---
# Medienqueries

Medienqueries erlauben CSS-Regeln, die nur unter bestimmten Bedingungen gelten. Dazu gehören Bildschirmbreite, Darstellungstyp, Nutzerpräferenzen oder Gerätefähigkeiten.

## Bedeutung

Sie sind ein Werkzeug für responsive Gestaltung, aber nicht die einzige Grundlage. Gute Layouts sind bereits flexibel und nutzen Medienqueries vor allem für deutliche Umbrüche.

## Typische Teilaspekte

- **Breakpoints:** Breakpoints markieren Punkte, an denen sich Layout oder Darstellung sinnvoll ändern.
- **Mobile First:** Grundstile werden für kleine Ansichten formuliert und dann erweitert.
- **Nutzerpräferenzen:** Medienqueries können reduzierte Bewegung oder Farbschema berücksichtigen.
- **Inhalt statt Gerät:** Breakpoints sollten sich am Inhalt orientieren, nicht nur an Gerätemodellen.

## Beispiel

Eine zweispaltige Kartenliste kann bei schmalem Viewport einspaltig werden. Der Breakpoint ergibt sich aus Lesbarkeit und Platzbedarf, nicht aus einem bestimmten Smartphone.

## Abgrenzung

Medienqueries lösen keine schlecht strukturierte Oberfläche. Wenn Inhalte zu breit, zu fest oder zu verschachtelt sind, helfen zusätzliche Breakpoints nur begrenzt.

## Häufige Missverständnisse

Ein häufiger Fehler ist eine lange Liste gerätespezifischer Breakpoints. Robuster sind wenige inhaltsbezogene Übergänge.

## Einordnung im Gesamtzusammenhang

Medienqueries verbinden CSS-Einheiten, Layoutsysteme, Barrierefreiheit und Responsive Design.
