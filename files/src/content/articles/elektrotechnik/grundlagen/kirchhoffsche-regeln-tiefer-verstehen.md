---
title: Kirchhoffsche Regeln tiefer verstehen
description: Die Kirchhoffschen Regeln beschreiben Strom- und Spannungserhaltung in Netzwerken und sind zentral für die Analyse elektrischer Schaltungen.
subject: elektrotechnik
section: Grundlagen
topicPath:
  - elektronik
  - kirchhoffsche-regeln
level: mittel
tags:
  - Kirchhoff
  - Knotenregel
  - Maschenregel
  - Schaltungsanalyse
draft: false
---

## Überblick

Sobald eine Schaltung mehrere Zweige, Quellen oder Widerstände enthält, reichen einfache Einzelbetrachtungen oft nicht mehr aus. Dann helfen die Kirchhoffschen Regeln. Sie beschreiben grundlegende Erhaltungssätze in elektrischen Netzwerken und bilden eine tragende Grundlage für viele spätere Berechnungen.

## Die zwei Grundregeln

Es gibt zwei zentrale Kirchhoffsche Regeln:

- die **Knotenregel**
- die **Maschenregel**

Beide haben unterschiedliche Aufgaben. Die Knotenregel gehört zu den Strömen, die Maschenregel zu den Spannungen.

## Knotenregel

Ein Knoten ist ein Punkt, an dem mehrere Leitungen zusammenkommen oder sich verzweigen.

Die Knotenregel sagt:

- Die Summe der zufließenden Ströme ist gleich der Summe der abfließenden Ströme.

Anschaulich bedeutet das:

- Elektrische Ladung verschwindet an einem Knoten nicht.
- Elektrische Ladung entsteht an einem Knoten auch nicht aus dem Nichts.

### Beispiel

Wenn in einen Knoten 5 A hineinfließen und über einen Zweig 2 A abfließen, dann müssen über den anderen Zweig 3 A abfließen.

Also:

- 5 A = 2 A + 3 A

## Maschenregel

Eine Masche ist ein geschlossener Weg in einer Schaltung.

Die Maschenregel sagt:

- In einer geschlossenen Masche ist die Summe aller Spannungen gleich null.

Das bedeutet:

- Spannungsquellen und Spannungsabfälle gleichen sich in einer vollständigen Runde genau aus.

### Beispiel

In einer Schaltung gibt es:

- eine Quelle von 12 V
- einen Spannungsabfall von 4 V
- einen Spannungsabfall von 8 V

Dann gilt:

- 12 V - 4 V - 8 V = 0

## Warum diese Regeln logisch sind

Die Kirchhoffschen Regeln sind keine bloßen Rechenrezepte. Sie beruhen auf Erhaltungsgesetzen.

### Knotenregel

Die Knotenregel folgt aus der Erhaltung elektrischer Ladung.

### Maschenregel

Die Maschenregel folgt daraus, dass in einer geschlossenen Runde kein Spannungsbetrag „übrig bleiben“ darf, wenn alle Quellen und Abfälle richtig berücksichtigt wurden.

## Zusammenspiel mit dem Ohmschen Gesetz

Oft reicht Kirchhoff allein noch nicht. Erst zusammen mit dem Ohmschen Gesetz entstehen vollständige Gleichungen.

- U = R · I

Typischer Ablauf:

1. Schaltung strukturieren
2. Knoten und Maschen erkennen
3. Kirchhoff-Gleichungen aufstellen
4. Spannungen oder Ströme über das Ohmsche Gesetz verknüpfen
5. Unbekannte berechnen

## Vorzeichen und Richtung

Ein häufiger Stolperpunkt ist die Wahl von Richtungen und Vorzeichen. Dabei hilft eine saubere Grundregel:

- Lege Stromrichtungen bewusst fest.
- Lege eine Umlaufrichtung für die Masche fest.
- Bleibe dann konsequent bei dieser Wahl.

Auch wenn die angenommene Richtung „falsch“ ist, zeigt ein negatives Ergebnis später, dass die reale Richtung entgegengesetzt verläuft.

## Typische Fehler

- Knoten und Masche verwechseln.
- Stromgleichungen und Spannungsgleichungen durcheinanderbringen.
- Vorzeichen unsauber behandeln.
- Das Ohmsche Gesetz nicht zusätzlich einsetzen.
- Eine Richtung mitten in der Rechnung ändern.

## Warum die Regeln so wichtig sind

Die Kirchhoffschen Regeln sind Grundlage für:

- Widerstandsnetzwerke,
- Stromaufteilungen,
- Spannungsverteilungen,
- komplexere Schaltungsanalyse,
- viele Anwendungen in Elektronik und Elektrotechnik.

Ohne diese Regeln lassen sich verzweigte Netzwerke kaum systematisch untersuchen.

## Merksätze

- Die Knotenregel gehört zu den Strömen.
- Die Maschenregel gehört zu den Spannungen.
- Beide Regeln beruhen auf Erhaltung.
- Zusammen mit dem Ohmschen Gesetz werden aus Grundideen konkrete Berechnungen.
