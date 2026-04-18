---
title: std::vector als dynamisches Array verstehen
description: Verstehe, warum ein vector in C++ wie ein flexibler Speicherblock für gleichartige Elemente gedacht wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - vector-und-container
  - vector-als-dynamisches-array-verstehen
learningGoals:
  - Du erklärst die Grundidee von <code>std::vector</code>.
  - Du unterscheidest ein dynamisches Array von einer starren festen Größe.
  - Du liest grundlegende Methoden wie <code>size()</code>, <code>push_back()</code> und <code>pop_back()</code> ruhiger.
practiceIdeas:
  - Begründe, warum ein Warenkorb oder eine Trefferliste gut zu einem vector passt.
  - Vergleiche ein starres Feld mit einer Liste, die wächst und schrumpft.
  - Lies kleine Codeausschnitte nicht über jede Zeile, sondern über die Veränderung der Sammlung.
commonMistakes:
  - vector nur als "anderes Array" ohne Mehrwert zu sehen.
  - Methoden wie <code>push_back()</code> und <code>pop_back()</code> nur syntaktisch statt in ihrer Wirkung zu lesen.
  - Den Container und seine einzelnen Elemente durcheinanderzubringen.
keyTakeaways:
  - Ein vector speichert viele Werte desselben Typs in einer veränderbaren Sammlung.
  - Er eignet sich besonders für Listen, deren Größe sich zur Laufzeit ändert.
  - Methoden lesen sich am ruhigsten über ihre Wirkung auf die Sammlung.
recognizeSignals:
  - Es geht um Listen, Sammlungen, dynamische Größe oder Zugriffe auf mehrere gleichartige Werte.
  - Du sollst erklären, warum ein vector passend ist.
  - In Beispielen musst du Wirkung auf den Container und Zugriff auf Elemente unterscheiden.
selfCheckPoints:
  - Kann ich erklären, warum ein vector dynamisch genannt wird?
  - Kann ich die Wirkung von <code>size()</code>, <code>push_back()</code> und <code>pop_back()</code> beschreiben?
  - Kann ich Container und Einzelelemente sauber unterscheiden?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - stl
  - vector
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
