---
title: break, continue und return unterscheiden
description: Verstehe, wie diese Anweisungen einen Ablauf unterschiedlich beeinflussen und warum sie nicht dieselbe Form von Abbruch bedeuten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollfluss-und-abbruch
  - break-continue-und-return-unterscheiden
learningGoals:
  - Du beschreibst die unterschiedliche Wirkung von <code>break</code>, <code>continue</code> und <code>return</code>.
  - Du liest Abbruch und Fortsetzung im Kontext von Schleife und Funktion.
  - Du vermeidest die Gleichsetzung „alles beendet einfach irgendetwas“.
practiceIdeas:
  - Vergleiche die Wirkung in einer Schleife mit mehreren Durchläufen.
  - Frage bei jedem Schlüsselwort: Was endet genau, was geht weiter?
  - Formuliere die Wirkung einmal ohne Fachbegriffe in Alltagssprache.
commonMistakes:
  - break und return gleichzusetzen.
  - continue als kompletten Schleifenabbruch zu lesen.
  - Nicht zu beachten, ob man sich in einer Schleife oder Funktion befindet.
keyTakeaways:
  - <code>break</code> beendet meist eine Schleife oder Auswahl sofort.
  - <code>continue</code> springt nur zum nächsten Schleifendurchlauf.
  - <code>return</code> verlässt die aktuelle Funktion.
recognizeSignals:
  - Es geht um Ablaufsteuerung, Schleifenabbruch, Überspringen oder Funktionsende.
  - Du sollst erklären, was nach einem Schlüsselwort noch weiterläuft.
  - In Beispielen musst du den genauen Wirkungskreis benennen.
selfCheckPoints:
  - Kann ich sagen, was genau endet?
  - Kann ich continue von echtem Abbruch unterscheiden?
  - Kann ich return im Funktionskontext erklären?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - kontrollfluss
  - break
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
