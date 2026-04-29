---
title: "Medienqueries"
description: "Allgemeiner Überblick über Medienqueries, Breakpoints und anpassungsfähige Weboberflächen."
subject: "web-development"
section: "CSS"
topicPath: ["medienqueries", "ueberblick"]
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
