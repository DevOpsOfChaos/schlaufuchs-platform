---
title: "Lösung – :has(), :is() und :where() mit Spezifität einordnen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "selektoren", "has-is-where-und-spezifitaet-einordnen"]
taskId: "has-is-where-und-spezifitaet-einordnen"
relatedExercise: "web-development/css/selektoren/has-is-where-und-spezifitaet-einordnen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Musterlösung

:where() bringt selbst keine zusätzliche Spezifität ein und eignet sich gut für leicht überschreibbare Grundstile. :is() übernimmt Spezifität aus seinen Argumenten und kann dadurch stärker wirken.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
