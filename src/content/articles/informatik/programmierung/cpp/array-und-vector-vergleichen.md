---
title: Array und vector vergleichen
description: Verstehe, worin sich feste Felder und dynamische Vektoren unterscheiden und wann welche Sammlungsidee ruhiger passt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - sammlungen-und-speicher
  - array-und-vector-vergleichen
learningGoals:
  - Du vergleichst Array und <code>vector</code> nach Größe, Zugriff und Änderbarkeit.
  - Du erklärst, wann eine feste und wann eine dynamische Sammlung sinnvoll ist.
  - Du vermeidest die Gleichsetzung „beides ist einfach dasselbe“.
practiceIdeas:
  - Vergleiche eine Liste mit fester Länge mit einer Einkaufsliste, die wachsen kann.
  - Begründe bei einem Beispiel, ob eine feste Größe schon bekannt ist.
  - Beschreibe, warum <code>push_back</code> bei Arrays nicht passt.
commonMistakes:
  - Array und <code>vector</code> für völlig identisch zu halten.
  - Zu übersehen, dass Arrays feste Größe haben.
  - Dynamische Änderungen gedanklich auf Arrays zu übertragen.
keyTakeaways:
  - Arrays haben feste Größe.
  - <code>vector</code> kann wachsen und schrumpfen.
  - Beide erlauben geordneten Zugriff, aber nicht mit derselben Flexibilität.
recognizeSignals:
  - Es geht um Sammlungen, feste Länge, dynamische Größe oder Zugriff über Positionen.
  - Du sollst begründen, welche Datenstruktur ruhiger passt.
  - In Beispielen musst du Änderbarkeit und feste Planung vergleichen.
selfCheckPoints:
  - Kann ich feste und dynamische Größe unterscheiden?
  - Kann ich erklären, wann ein Array genügt?
  - Kann ich beschreiben, warum ein <code>vector</code> flexibler ist?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - array
  - vector
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
