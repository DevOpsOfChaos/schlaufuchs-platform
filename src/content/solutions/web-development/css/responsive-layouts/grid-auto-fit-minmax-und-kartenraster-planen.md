---
title: "Lösung – Grid mit auto-fit und minmax als Kartenraster planen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "responsive-layouts"
  - "grid-auto-fit-minmax-und-kartenraster-planen"
taskId: "grid-auto-fit-minmax-und-kartenraster-planen"
relatedExercise: "web-development/css/responsive-layouts/grid-auto-fit-minmax-und-kartenraster-planen"
tags:
  - "web development"
  - "css"
  - "grid"
  - "responsive"
  - "layout"
draft: false
---
## Musterlösung

Eine robuste Lösung nutzt display: grid, repeat(auto-fit, minmax(min(100%, 15rem), 1fr)) und einen klaren gap-Wert. Dadurch bleiben Karten auf kleinen Breiten einspaltig und wachsen auf größeren Breiten automatisch.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
