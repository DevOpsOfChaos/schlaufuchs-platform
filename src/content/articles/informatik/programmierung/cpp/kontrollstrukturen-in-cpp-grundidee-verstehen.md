---
title: "Kontrollstrukturen in C++ – Grundidee verstehen"
description: "Verstehe, wie C++ mit Sequenz, Auswahl und Wiederholung den Ablauf eines Programms steuert."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "kontrollstrukturen-in-cpp-grundidee-verstehen"]
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

Programme laufen nicht immer nur starr Zeile für Zeile durch. Sie brauchen Stellen, an denen entschieden, wiederholt oder einfach nacheinander abgearbeitet wird. Genau dafür gibt es Kontrollstrukturen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein kleines Prüfprogramm</h3>
  <p>Ein Programm liest eine Zahl ein, prüft sie und wiederholt danach denselben Test für mehrere Einträge. Schon in diesem kleinen Beispiel tauchen drei Grundideen auf: erst eine Folge von Schritten, dann eine Entscheidung und schließlich eine Wiederholung.</p>
</div>

## Die drei Grundideen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Sequenz</strong>
    <span>Mehrere Anweisungen laufen nacheinander ab.</span>
  </div>
  <div class="visual-item">
    <strong>Auswahl</strong>
    <span>Je nach Bedingung wird ein anderer Weg genommen.</span>
  </div>
  <div class="visual-item">
    <strong>Wiederholung</strong>
    <span>Ein Schritt wird mehrfach nach derselben Regel ausgeführt.</span>
  </div>
</div>

## Typische C++-Formen

<div class="compare-card">
  <p class="card-kicker">Zuordnung</p>
  <h3>Welche Syntax gehört zu welcher Idee?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sequenz</strong>
      <span>Mehrere einfache Anweisungen oder Funktionsaufrufe hintereinander.</span>
    </div>
    <div class="compare-item">
      <strong>Auswahl</strong>
      <span><code>if</code>, <code>else if</code>, <code>else</code> oder <code>switch</code>.</span>
    </div>
    <div class="compare-item">
      <strong>Wiederholung</strong>
      <span><code>for</code>, <code>while</code>, <code>do while</code> oder bereichsbasiertes <code>for</code>.</span>
    </div>
  </div>
</div>

## Warum diese Sicht hilft

Wer zuerst nur Syntax sieht, merkt sich schnell viele Klammern, aber oft nicht die eigentliche Idee. Wer zuerst fragt „läuft hier etwas nacheinander, verzweigt oder wiederholt?“, liest den Code meist ruhiger.

<div class="note-panel">
  <p><strong>Merke:</strong> Kontrollstrukturen sind keine Dekoration. Sie sind die Bauteile, mit denen ein Programm seinen Ablauf steuert.</p>
</div>
