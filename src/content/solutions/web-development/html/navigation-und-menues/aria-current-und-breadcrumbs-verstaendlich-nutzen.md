---
title: "Lösung – aria-current und Breadcrumbs verständlich nutzen"
description: "Musterlösung mit kurzer Begründung zur passenden Web-Development-Entscheidung."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "navigation-und-menues"
  - "aria-current-und-breadcrumbs-verstaendlich-nutzen"
taskId: "aria-current-und-breadcrumbs-verstaendlich-nutzen"
relatedExercise: "web-development/html/navigation-und-menues/aria-current-und-breadcrumbs-verstaendlich-nutzen"
tags:
  - "web development"
  - "html"
  - "navigation"
  - "aria-current"
  - "breadcrumbs"
draft: false
---
## Musterlösung

Alle übergeordneten Ebenen bleiben Links. Der letzte Eintrag beschreibt die aktuelle Seite und bekommt aria-current="page". Es sollte innerhalb dieser Breadcrumb-Navigation nur einen aktuellen Eintrag geben.

## Begründung

Die Lösung beginnt nicht beim Styling, sondern bei der Bedeutung. Erst wenn klar ist, was die Oberfläche ausdrücken soll, lässt sich sauber entscheiden, welche HTML- oder CSS-Struktur passt.

## Typischer Prüfpunkt

Eine Lösung ist erst dann belastbar, wenn sie nicht nur im Idealfall funktioniert. Prüfe deshalb immer auch kleine Breiten, Tastaturbedienung, verständliche Beschriftungen und die Wartbarkeit im Team.

## Häufige Fehlerquelle

Der häufigste Fehler ist eine rein optische Reparatur: Etwas sieht richtig aus, ist aber semantisch unklar, schwer bedienbar oder später schwer zu pflegen.
