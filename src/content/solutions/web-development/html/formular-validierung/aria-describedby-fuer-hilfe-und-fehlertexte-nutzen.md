---
title: "Lösung – aria-describedby für Hilfe- und Fehlertexte nutzen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "formular-validierung"
  - "aria-describedby-fuer-hilfe-und-fehlertexte-nutzen"
taskId: "aria-describedby-fuer-hilfe-und-fehlertexte-nutzen"
relatedExercise: "web-development/html/formular-validierung/aria-describedby-fuer-hilfe-und-fehlertexte-nutzen"
tags:
  - "web development"
  - "html"
  - "aria-describedby"
  - "formulare"
  - "accessibility"
draft: false
---
## Musterlösung

Der Hilfetext bekommt eine stabile ID. Die Fehlermeldung bekommt ebenfalls eine ID, sobald sie sichtbar ist. aria-describedby verweist auf beide Texte. aria-invalid wird nur gesetzt, wenn der aktuelle Feldwert tatsächlich ungültig ist.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
