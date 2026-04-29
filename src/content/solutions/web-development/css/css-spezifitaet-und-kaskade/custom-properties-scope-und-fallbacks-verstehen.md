---
title: "Lösung – Custom Properties, Scope und Fallbacks verstehen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-spezifitaet-und-kaskade", "custom-properties-scope-und-fallbacks-verstehen"]
taskId: "custom-properties-scope-und-fallbacks-verstehen"
relatedExercise: "web-development/css/css-spezifitaet-und-kaskade/custom-properties-scope-und-fallbacks-verstehen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Musterlösung

Der Basiswert liegt zum Beispiel auf :root. Die Karten nutzen gap: var(--space-card, 1rem). Ein kompakter Container überschreibt --space-card lokal auf 0.5rem, ohne jede Karte einzeln anzufassen.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
