---
title: "std::vector als dynamisches Array verstehen"
description: "Verstehe, warum ein vector in C++ wie ein flexibler Speicherblock für gleichartige Elemente gedacht wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "vector-als-dynamisches-array-verstehen"]
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

Ein <code>std::vector</code> ist in C++ eine Sammlung für viele Werte desselben Typs. Fachlich kannst du ihn dir wie ein Array vorstellen, dessen Größe nicht schon von Anfang an starr feststehen muss.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Warenkorb wächst und schrumpft</h3>
  <p>Ein Warenkorb startet vielleicht leer, bekommt später mehrere Artikel und verliert wieder einen Eintrag. Genau für solche Sammlungen ist ein vector gut geeignet: Die Liste bleibt geordnet, aber ihre Größe darf sich verändern.</p>
</div>

## Warum ein vector mehr ist als nur "mehr Platz"

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Starr gegen veränderbar</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Starres Feld</strong>
      <span>Hier ist die Anzahl der Plätze früh festgelegt. Das kann ruhig und effizient sein, aber nicht immer passend.</span>
    </div>
    <div class="compare-item">
      <strong>vector</strong>
      <span>Hier darf die Sammlung wachsen oder kleiner werden, ohne dass du jeden Speicherplatz selbst verwalten musst.</span>
    </div>
  </div>
</div>

## Ein typisches Beispiel

```cpp
#include <vector>
#include <string>

std::vector<std::string> warenkorb{"Milch", "Brot"};
warenkorb.push_back("Käse");
warenkorb.pop_back();
```

So lässt sich das ruhig lesen:

- Die Sammlung enthält Zeichenketten.
- Zuerst liegen zwei Elemente vor.
- Danach wird hinten ein Element angefügt.
- Anschließend wird das letzte Element wieder entfernt.

## Grundlegende Methoden über ihre Wirkung lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>size()</code></strong>
    <span>Liefert, wie viele Elemente aktuell im vector liegen.</span>
  </div>
  <div class="visual-item">
    <strong><code>push_back(x)</code></strong>
    <span>Hängt ein neues Element hinten an.</span>
  </div>
  <div class="visual-item">
    <strong><code>pop_back()</code></strong>
    <span>Entfernt das letzte Element.</span>
  </div>
  <div class="visual-item">
    <strong><code>at(n)</code></strong>
    <span>Greift auf ein bestimmtes Element an einer Position zu.</span>
  </div>
</div>

## Container und Elemente nicht verwechseln

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Erst die Sammlung, dann die Position</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>vector</strong><span>Die ganze Sammlung</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Elementzahl prüfen</strong><span>Wie viele Einträge gibt es gerade?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Einzelelement lesen</strong><span>Erst dann z. B. mit <code>at(n)</code> auf eine Position zugreifen.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Was speichert der vector überhaupt?
2. Wird die ganze Sammlung verändert oder nur ein Element gelesen?
3. Wenn verändert wird: wächst sie oder schrumpft sie?
4. Wenn gelesen wird: welche Position ist gemeint?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein vector ist nicht nur eine Menge einzelner Werte. Er ist ein eigener Container mit Zustand, Größe und typischen Operationen.</p>
</div>
