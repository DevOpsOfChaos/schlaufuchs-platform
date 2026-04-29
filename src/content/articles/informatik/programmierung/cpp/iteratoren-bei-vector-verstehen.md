---
title: "Iteratoren bei vector verstehen"
description: "Verstehe, warum Iteratoren in C++ eher Positionen in einer Struktur als einzelne Werte darstellen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "iteratoren-bei-vector-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Ein Iterator ist in C++ eine Art verallgemeinerter Positionszeiger innerhalb einer Datenstruktur. Für <code>std::vector</code> hilft das besonders, weil du nicht nur mit Nummern wie 0, 1 oder 2 denken musst, sondern mit der Idee: <em>Wo in der Struktur befinde ich mich gerade?</em>

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Alle Einträge „Bier“ aus einer Liste entfernen</h3>
  <p>Wenn du eine Liste durchgehst und dabei Elemente löschst, verändert sich die Struktur während der Iteration. Genau dann wird wichtig, nicht nur an Werte zu denken, sondern an Positionen, die sich verschieben können.</p>
</div>

## Iteratoren sind Positionen, keine Elemente

<div class="compare-card">
  <p class="card-kicker">Kernunterscheidung</p>
  <h3>Wert und Position auseinanderhalten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Element</strong>
      <span>Das ist der konkrete gespeicherte Wert, zum Beispiel <code>"Milch"</code>.</span>
    </div>
    <div class="compare-item">
      <strong>Iterator</strong>
      <span>Das ist die Position, an der du dich im Container gerade befindest.</span>
    </div>
  </div>
</div>

## begin und end ruhig lesen

```cpp
auto it = daten.begin();
auto stop = daten.end();
```

- <code>begin()</code> liefert die Startposition am ersten Element.
- <code>end()</code> liegt <strong>hinter</strong> dem letzten Element.

<div class="note-panel">
  <p><strong>Wichtig:</strong> <code>end()</code> ist nicht „das letzte Element“, sondern die Position direkt dahinter. Genau deshalb eignet sich <code>it != daten.end()</code> gut als Schleifenbedingung.</p>
</div>

## Warum das bei erase und insert wichtig wird

<div class="figure-card">
  <p class="card-kicker">Ablauflogik</p>
  <h3>Struktur ändert sich während des Laufens</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Position finden</strong><span>Iterator zeigt auf ein Element</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Element löschen oder einfügen</strong><span>Die Struktur verschiebt sich</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Position neu denken</strong><span>Der alte Ablauf passt oft nicht unverändert weiter</span></div>
  </div>
</div>

## Ein typisches Beispiel

```cpp
for (auto it = daten.begin(); it != daten.end(); ++it) {
  if (*it == "Bier") {
    it = daten.erase(it);
    --it;
  }
}
```

Das ist nicht bloß "kompliziertere Syntax". Fachlich passiert hier Folgendes:

- Eine Position wandert durch die Liste.
- Beim Treffer wird das aktuelle Element entfernt.
- Danach muss die neue Struktur wieder sinnvoll weitergelesen werden.

## Eine ruhige Prüfstrategie

1. Beschreibt der Code gerade einen Wert oder eine Position?
2. Geht es um Start, Ende, Einfügen oder Löschen?
3. Verändert sich der Container während der Iteration?
4. Wenn ja: Welche Position ist nach der Änderung sinnvoll?

<div class="note-panel">
  <p><strong>Merke:</strong> Iteratoren sind besonders dann hilfreich, wenn nicht nur gelesen, sondern an konkreten Positionen eingefügt oder gelöscht wird.</p>
</div>
