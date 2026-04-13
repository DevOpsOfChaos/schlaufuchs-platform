---
title: "Kirchhoffsche Regeln – Grundlagen"
description: "Verstehe die Knotenregel und Maschenregel als Grundideen für die Analyse elektrischer Netzwerke."
subject: elektrotechnik
section: "Grundlagen"
topicPath:
  - "elektronik"
  - "kirchhoffsche-regeln"
learningGoals:
  - "Du unterscheidest Knoten- und Maschenregel."
  - "Du liest einfache Schaltungen im Blick auf Strom- und Spannungserhaltung."
  - "Du erkennst, wann Kirchhoff für die Analyse nötig wird."
practiceIdeas:
  - "Markiere in einer Schaltung zuerst Knoten und Maschen."
  - "Formuliere zu einem Beispiel getrennt Strom- und Spannungsgleichungen."
  - "Prüfe Richtungen und Vorzeichen bewusst nach jeder Rechnung."
commonMistakes:
  - "Knoten- und Maschenregel durcheinanderzubringen."
  - "Richtungen mitten in der Rechnung zu ändern."
  - "Strom- und Spannungserhaltung nicht sauber zu trennen."
keyTakeaways:
  - "Die Knotenregel gehört zu Strömen."
  - "Die Maschenregel gehört zu Spannungen."
  - "Kirchhoff ist Grundlage für verzweigte Netzwerke."
tags:
  - "kirchhoff"
  - "knotenregel"
  - "maschenregel"
  - "schaltungsanalyse"
level: einfach
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

## Was du hier lernst

Auf dieser Seite lernst du,

- Du unterscheidest Knoten- und Maschenregel.
- Du liest einfache Schaltungen im Blick auf Strom- und Spannungserhaltung.
- Du erkennst, wann Kirchhoff für die Analyse nötig wird.

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

## So liest du Netzwerke ruhiger

Viele Fehler entstehen nicht erst beim Rechnen, sondern schon beim ersten Blick auf die Schaltung. Markiere deshalb zuerst **Knoten** und **geschlossene Wege**. Danach entscheidest du bewusst: Geht es hier eher um eine Stromaufteilung oder um eine Spannungsbilanz?

Wer Netzwerke in dieser Reihenfolge liest, benutzt Kirchhoff nicht als bloßes Rechenrezept, sondern als Strukturhilfe. Genau dadurch werden auch spätere Aufgaben mit mehreren Widerständen oder Quellen deutlich übersichtlicher.

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


## Woran du das Thema erkennst

Du erkennst dieses Thema meist daran, dass du nicht nur einen einzelnen Fachbegriff brauchst, sondern die zugrunde liegende Struktur, Anordnung oder Denkweise sauber unterscheiden musst. Genau dort entscheidet sich oft, ob ein Beispiel wirklich verstanden wurde oder nur oberflächlich bekannt wirkt.

## Mini-Check für dich

Prüfe am Ende kurz selbst:

- Kann ich das Thema in eigenen Worten erklären?
- Kann ich ein Beispiel richtig einordnen?
- Kann ich eine typische Verwechslung benennen?

## Merksätze

- Die Knotenregel gehört zu Strömen.
- Die Maschenregel gehört zu Spannungen.
- Kirchhoff ist Grundlage für verzweigte Netzwerke.
