---
title: Kirchhoffsche Regeln – Grundlagen
description: Verstehe die Knotenregel und Maschenregel als Grundideen für die Analyse elektrischer Netzwerke.
subject: elektrotechnik
section: Grundlagen
topicPath:
  - elektronik
  - kirchhoffsche-regeln
learningGoals:
  - Du unterscheidest Knotenregel und Maschenregel.
  - Du ordnest Strom- und Spannungsgleichungen korrekt zu.
  - Du verstehst, warum Kirchhoff für Schaltungsanalyse unverzichtbar ist.
level: einfach
tags: [kirchhoff, knotenregel, maschenregel, schaltungsanalyse]
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Die Kirchhoffschen Regeln helfen immer dann, wenn Schaltungen nicht mehr nur aus einem einzelnen Bauteil bestehen. Sie ordnen Ströme an Knoten und Spannungen in Maschen. Damit werden verzweigte Netzwerke überhaupt systematisch analysierbar.</p>
  <ul>
    <li>Du lernst die Grundidee der Knotenregel kennen.</li>
    <li>Du verstehst die Maschenregel als Spannungsbilanz.</li>
    <li>Du erkennst, wann Kirchhoff im Vergleich zu einfacheren Grundideen nötig wird.</li>
  </ul>
</div>

## Die zwei Grundregeln

Es gibt zwei zentrale Regeln:

- die <strong>Knotenregel</strong> für Ströme,
- die <strong>Maschenregel</strong> für Spannungen.

Beide beruhen nicht auf Zufall, sondern auf Erhaltungsgesetzen.

## Knotenregel

Ein Knoten ist eine Stelle, an der Leitungen zusammenkommen oder sich verzweigen.

Die Knotenregel sagt:

- Die Summe der zufließenden Ströme ist gleich der Summe der abfließenden Ströme.

Das heißt: An einem Knoten geht keine Ladung verloren und es entsteht auch keine aus dem Nichts.

## Maschenregel

Eine Masche ist ein geschlossener Weg in einer Schaltung.

Die Maschenregel sagt:

- In einer geschlossenen Masche ist die Summe aller Spannungen gleich null.

Quellen und Spannungsabfälle gleichen sich also entlang eines vollständigen Umlaufs aus.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Strom am Knoten, Spannung in der Runde</h3>
  <p>Fließen an einem Knoten 5 A hinein und 2 A in einen Zweig hinaus, dann müssen im anderen Zweig 3 A hinausfließen. Läufst du in einer Masche um eine Quelle von 12 V und zwei Spannungsabfälle von 4 V und 8 V, dann ergibt sich insgesamt wieder null. Genau das sind die beiden Grundideen von Kirchhoff.</p>
</div>

## Warum Kirchhoff gebraucht wird

Sobald Schaltungen mehrere Zweige, Quellen oder Widerstände enthalten, reichen einfache Einzelbetrachtungen oft nicht mehr aus. Kirchhoff macht aus der Schaltung eine strukturierte Sammlung von Beziehungen.

Darauf bauen später auf:

- Stromaufteilungen,
- Spannungsverteilungen,
- Netzwerkanalyse,
- komplexere Widerstands- und Quellenmodelle.

## Knoten und Maschen nicht verwechseln

Ein häufiger Fehler ist, die Begriffe nur formal auswendig zu lernen. Besser ist diese klare Trennung:

- Knoten → Ströme,
- Masche → Spannungen.

<div class="practice-card">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So liest du Schaltungen mit Kirchhoff</h3>
  <ul>
    <li>Suche zuerst Verzweigungen und markiere Knoten.</li>
    <li>Suche danach geschlossene Wege und markiere Maschen.</li>
    <li>Entscheide erst dann, ob du eine Strom- oder Spannungsgleichung aufstellst.</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Knotenregel und Maschenregel werden vertauscht.</li>
    <li>Es wird nicht sauber zwischen Strom- und Spannungsgleichungen unterschieden.</li>
    <li>Man überspringt die Schaltungsstruktur und möchte sofort rechnen.</li>
    <li>Vorzeichen und Umlaufrichtung werden nicht bewusst festgelegt.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Die Knotenregel gehört zu den Strömen.</li>
    <li>Die Maschenregel gehört zu den Spannungen.</li>
    <li>Beide Regeln beruhen auf Erhaltung.</li>
    <li>Kirchhoff ist eine Grundlage für fast jede Netzwerkanalyse.</li>
  </ul>
</div>
