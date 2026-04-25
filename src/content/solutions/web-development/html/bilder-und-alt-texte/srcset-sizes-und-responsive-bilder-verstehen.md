---
title: "Lösung – srcset, sizes und responsive Bilder verstehen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "bilder-und-alt-texte"
  - "srcset-sizes-und-responsive-bilder-verstehen"
taskId: "srcset-sizes-und-responsive-bilder-verstehen"
relatedExercise: "web-development/html/bilder-und-alt-texte/srcset-sizes-und-responsive-bilder-verstehen"
tags:
  - "web development"
  - "html"
  - "bilder"
  - "srcset"
  - "responsive"
draft: false
---
## Musterlösung

Geeignete Kandidaten sind zum Beispiel 480w, 720w und 1080w. sizes beschreibt mobil ungefähr 100vw und ab der Desktop-Grenze 720px. Das alt-Attribut bleibt inhaltlich und beschreibt nicht die Dateigröße.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
