---
title: "Array und vector vergleichen"
description: "Verstehe, worin sich feste Felder und dynamische Vektoren unterscheiden und wann welche Sammlungsidee ruhiger passt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-und-vector-vergleichen"]
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

Sowohl Arrays als auch <code>vector</code> speichern mehrere Werte desselben Typs. Der entscheidende Unterschied liegt darin, ob die Anzahl der Elemente schon feststeht oder sich noch ändern kann.

<div class="compare-card">
  <p class="card-kicker">Zwei Sammlungsideen</p>
  <h3>Fest geplant oder veränderbar</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Array</strong>
      <span>Die Größe steht von Anfang an fest. Das passt gut, wenn die Anzahl der Elemente bekannt ist.</span>
    </div>
    <div class="compare-item">
      <strong>vector</strong>
      <span>Die Sammlung kann wachsen oder schrumpfen. Das passt gut, wenn die Menge erst zur Laufzeit klar wird.</span>
    </div>
  </div>
</div>

## Warum der Unterschied wichtig ist

Die Wahl beeinflusst nicht nur die Syntax, sondern die ganze Denkweise:

- Ist die Größe schon sicher?
- Müssen später Elemente hinzukommen oder verschwinden?
- Soll die Sammlung eher starr oder beweglich sein?

<div class="note-panel">
  <p><strong>Merke:</strong> Array und <code>vector</code> sind beides Sammlungen, aber nicht dieselbe Entscheidung. Die feste oder dynamische Größe ist der wichtigste Unterschied.</p>
</div>
