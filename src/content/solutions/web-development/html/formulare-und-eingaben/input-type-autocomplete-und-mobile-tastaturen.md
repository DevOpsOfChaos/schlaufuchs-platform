---
title: "Lösung – input type, autocomplete und mobile Tastaturen sinnvoll wählen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formulare-und-eingaben", "input-type-autocomplete-und-mobile-tastaturen"]
taskId: "input-type-autocomplete-und-mobile-tastaturen"
relatedExercise: "src/content/exercises/web-development/html/formulare-und-eingaben/input-type-autocomplete-und-mobile-tastaturen"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Musterlösung

E-Mail wird type="email" mit autocomplete="email". Der Name bekommt autocomplete="name". Das Passwort erhält eine sichtbare Regel und einen passenden Passworttyp. Die Postleitzahl bleibt fachlich kein Rechenwert, kann aber über inputmode="numeric" eine passende Tastatur auslösen.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
