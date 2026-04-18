---
title: Arrays in C++ verstehen
description: Verstehe, wie ein Array mehrere gleichartige Werte an festen Positionen speichert.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - arrays-in-cpp-verstehen
learningGoals:
  - Du erklärst die Grundidee eines Arrays als feste Sammlung gleichartiger Werte.
  - Du unterscheidest Array, Index und einzelnes Element.
  - Du erkennst, warum Arrays eine feste Größe haben.
practiceIdeas:
  - Vergleiche mehrere Einzelvariablen mit einer geordneten Sammlung gleicher Werte.
  - Lies Array-Beispiele erst über Plätze und Indizes statt nur über Klammern.
  - Beschreibe, was sich bei <code>A[2]</code> auf den dritten Platz und nicht auf „zwei als Inhalt“ bezieht.
commonMistakes:
  - Den Index mit dem gespeicherten Wert zu verwechseln.
  - Zu glauben, Arrays könnten beliebige Typen gemischt aufnehmen.
  - Die feste Größe eines Arrays zu übersehen.
keyTakeaways:
  - Ein Array speichert mehrere Werte desselben Typs.
  - Über den Index wird gezielt auf einzelne Plätze zugegriffen.
  - Die Größe eines klassischen Arrays ist nachträglich nicht einfach veränderbar.
recognizeSignals:
  - Es geht um Felder, Indizes, mehrere Werte gleichen Typs oder festen Speicher.
  - Du sollst Array-Struktur oder Array-Zugriffe erklären.
  - In Beispielen musst du Platznummer und Inhalt unterscheiden.
selfCheckPoints:
  - Kann ich Array, Index und Element sauber unterscheiden?
  - Kann ich erklären, warum ein Array feste Größe hat?
  - Kann ich einen Zugriff wie <code>A[2]</code> richtig lesen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - index
draft: false
---

## Grundidee

Ein Array ist eine feste Sammlung mehrerer Werte desselben Typs. Statt viele Einzelvariablen anzulegen, werden passende Werte an geordneten Positionen zusammengefasst.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vier Messwerte desselben Typs</h3>
  <p>Wenn vier Temperaturwerte gespeichert werden sollen, ist es oft ruhiger, sie als zusammengehörige Plätze in einem Array zu denken statt als vier voneinander getrennte Variablen.</p>
</div>

## Wichtige Begriffe

<div class="visual-grid">
  <div class="visual-item">
    <strong>Array</strong>
    <span>Die gesamte Sammlung gleichartiger Werte.</span>
  </div>
  <div class="visual-item">
    <strong>Index</strong>
    <span>Die Positionsnummer, über die ein Element angesprochen wird.</span>
  </div>
  <div class="visual-item">
    <strong>Element</strong>
    <span>Der konkrete Wert an einer bestimmten Position.</span>
  </div>
</div>

## Ein kleines Beispiel

```cpp
int werte[4] = {2, 4, 6, 8};
```

So lässt sich das ruhig lesen:

- Es gibt vier Plätze.
- Die Indizes laufen von <code>0</code> bis <code>3</code>.
- <code>werte[2]</code> meint den dritten Platz mit dem Inhalt <code>6</code>.

## Warum Arrays als „fest“ gelten

Bei klassischen Arrays steht die Anzahl der Plätze als Teil der Struktur fest. Dadurch eignen sie sich besonders für überschaubare Sammlungen mit vorher bekannter Größe.

<div class="note-panel">
  <p><strong>Merke:</strong> Der Index sagt nicht, welcher Wert gespeichert ist, sondern an welchem Platz im Feld gesucht wird.</p>
</div>
