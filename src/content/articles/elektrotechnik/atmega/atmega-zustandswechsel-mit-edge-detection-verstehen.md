---
title: "ATmega Zustandswechsel mit Edge Detection verstehen"
description: "Verstehe, warum viele Mikrocontroller-Aufgaben nicht den dauerhaften Pegel, sondern den Übergang zwischen zwei Zuständen auswerten."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-zustandswechsel-mit-edge-detection-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

Viele Mikrocontroller-Aufgaben sollen nicht einfach auf einen dauerhaft anliegenden Zustand reagieren, sondern auf den **Übergang**. Genau dort hilft Edge Detection: Sie trennt den aktuellen Pegel vom eigentlichen Ereignis.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Taster soll nur einmal umschalten</h3>
  <p>Wenn eine LED bei jedem Tastendruck ihren Zustand wechseln soll, darf der Code nicht in jeder Schleife während des Haltens erneut umschalten. Gesucht ist dann nicht „Taster ist gerade gedrückt“, sondern „Taster ist gerade von nicht gedrückt auf gedrückt gewechselt“.</p>
</div>

## Pegel gegen Flanke

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Zustand und Übergang sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Pegel</strong>
      <span>Beschreibt, was jetzt gerade anliegt.</span>
    </div>
    <div class="compare-item">
      <strong>Flanke</strong>
      <span>Beschreibt den Wechsel von vorher nach jetzt.</span>
    </div>
  </div>
</div>

## Das notwendige Denkbild

```text
vorheriger Zustand + aktueller Zustand → daraus ergibt sich die Flanke
```

Ohne den vorherigen Zustand gibt es keine ruhige Flankenerkennung.

## Warum das in Schleifen so wichtig ist

Eine Hauptschleife läuft viele Male pro Sekunde. Wenn sie nur auf den aktuellen Pegel schaut, wird dieselbe Aktion immer wieder ausgelöst. Erst der Zustandsvergleich verhindert dieses Dauerfeuer.

## Eine ruhige Prüfstrategie

1. Soll auf den aktuellen Zustand oder auf den Wechsel reagiert werden?
2. Welcher alte Zustand muss mitgespeichert werden?
3. Welche Flanke ist gemeint – steigend oder fallend?
4. Soll das Ereignis genau einmal pro Übergang auslösen?

<div class="note-panel">
  <p><strong>Merke:</strong> Edge Detection bedeutet: Nicht nur lesen, was jetzt gilt, sondern vergleichen, was sich gerade geändert hat.</p>
</div>
