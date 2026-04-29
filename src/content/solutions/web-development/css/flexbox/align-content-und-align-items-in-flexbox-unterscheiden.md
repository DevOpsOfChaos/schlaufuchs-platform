---
title: "Lösung – align-content und align-items in Flexbox unterscheiden"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "flexbox", "align-content-und-align-items-in-flexbox-unterscheiden"]
taskId: "align-content-und-align-items-in-flexbox-unterscheiden"
relatedExercise: "web-development/css/flexbox/align-content-und-align-items-in-flexbox-unterscheiden"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Musterlösung

align-items wirkt innerhalb der jeweiligen Flex-Zeile. align-content verteilt den freien Raum zwischen mehreren Flex-Zeilen und wird erst relevant, wenn der Container tatsächlich mehrere Zeilen hat und zusätzlicher Platz in der Querachse vorhanden ist.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
