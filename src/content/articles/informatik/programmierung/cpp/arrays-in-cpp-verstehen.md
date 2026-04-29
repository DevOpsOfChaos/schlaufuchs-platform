---
title: "Arrays in C++ verstehen"
description: "Verstehe, wie ein Array mehrere gleichartige Werte an festen Positionen speichert."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "arrays-in-cpp-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
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
