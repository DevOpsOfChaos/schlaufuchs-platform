---
title: "break, continue und return unterscheiden"
description: "Verstehe, wie diese Anweisungen einen Ablauf unterschiedlich beeinflussen und warum sie nicht dieselbe Form von Abbruch bedeuten."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "break-continue-und-return-unterscheiden"]
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

Die drei Wörter sehen klein aus, verändern aber den Ablauf auf sehr unterschiedliche Weise. Genau deshalb sollte man nicht nur „Abbruch“ merken, sondern immer fragen: **Was endet hier genau?**

<div class="compare-card">
  <p class="card-kicker">Unterschiede klar halten</p>
  <h3>Nicht alles verlässt denselben Bereich</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>break</code></strong>
      <span>Verlässt die aktuelle Schleife oder Auswahl sofort.</span>
    </div>
    <div class="compare-item">
      <strong><code>continue</code></strong>
      <span>Beendet nur den aktuellen Schleifendurchlauf und springt zur nächsten Runde.</span>
    </div>
    <div class="compare-item">
      <strong><code>return</code></strong>
      <span>Verlässt die aktuelle Funktion und gibt optional einen Wert zurück.</span>
    </div>
  </div>
</div>

## Eine ruhige Lesefrage

Bevor du die Wirkung benennst, frage immer:

- Bin ich gerade in einer Schleife?
- Bin ich gerade in einer Funktion?
- Was soll nach dieser Stelle noch passieren?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>continue</code> bedeutet nicht „alles vorbei“, sondern nur „diese Runde überspringen und weiter zur nächsten“.</p>
</div>
