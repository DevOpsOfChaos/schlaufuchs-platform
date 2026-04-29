---
title: "Stringfunktionen in PHP grundlegend nutzen"
description: "Verstehe typische PHP-Stringfunktionen als kleine Werkzeuge zum Zerlegen, Suchen, Ersetzen und Umformen von Text."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "stringfunktionen-in-php-grundlegend-nutzen"]
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

In PHP sind viele kleine Stringfunktionen keine Einzeltricks, sondern Werkzeuge für typische Textaufgaben. Wer zuerst die Aufgabe erkennt, findet meist auch die passende Funktion schneller.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Zählen</strong>
    <span><code>strlen</code> fragt nach der Länge eines Textes.</span>
  </div>
  <div class="visual-item">
    <strong>Suchen</strong>
    <span><code>strpos</code> fragt nach der Position eines Zeichens oder Teiltexts.</span>
  </div>
  <div class="visual-item">
    <strong>Ersetzen</strong>
    <span><code>str_replace</code> tauscht Textbestandteile aus.</span>
  </div>
  <div class="visual-item">
    <strong>Zerlegen / Zusammensetzen</strong>
    <span><code>explode</code> teilt, <code>implode</code> verbindet.</span>
  </div>
</div>

## Ein Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>E-Mail-Adresse und Listenwert lesen</h3>
  <p>Willst du bei <code>anna@example.com</code> das @ finden, dann suchst du. Willst du eine Liste wie <code>rot,grün,blau</code> in einzelne Werte teilen, dann zerlegst du. Willst du Leerzeichen oder Zeichen austauschen, dann ersetzt du.</p>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Vor der Funktionswahl hilft die Frage: zählen, suchen, ersetzen oder zerlegen?</p>
</div>
