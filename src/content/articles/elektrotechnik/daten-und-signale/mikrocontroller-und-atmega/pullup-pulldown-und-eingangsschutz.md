---
title: "Mikrocontroller – Pull-up, Pull-down und Eingangsschutz unterscheiden"
description: "Verstehe, warum ein Eingang einen definierten Ruhezustand braucht und warum Schutz nicht dasselbe ist wie ein Pull-Widerstand."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "pullup-pulldown-und-eingangsschutz"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
Verstehe, warum ein Eingang einen definierten Ruhezustand braucht und warum Schutz nicht dasselbe ist wie ein Pull-Widerstand.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Taster ist nicht gedrückt – aber der Eingang weiß es nicht</h3>
  <p>Wenn ein Pin offen bleibt, hat er keinen festen Pegel. Ein Pull-up oder Pull-down sorgt dafür, dass der Eingang im Ruhezustand zuverlässig eine bekannte Logik liest.</p>
</div>

## Die drei Fragen der Seite

<div class="visual-grid">
  <div class="visual-item"><strong>Pull-up</strong><span>zieht den offenen Eingang nach High.</span></div>
  <div class="visual-item"><strong>Pull-down</strong><span>zieht den offenen Eingang nach Low.</span></div>
  <div class="visual-item"><strong>Schutz</strong><span>begrenzt gefährliche Spannungen oder Ströme.</span></div>
</div>

## Mini-Demo: ruhig statt hektisch lesen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Einmal als Ablauf lesen</h3>

```text
Pull-up:   Ruhe = 1, Taster nach GND → 0
Pull-down: Ruhe = 0, Taster nach VCC → 1
Schutz:    zusätzliche Frage nach Strom und Überspannung
```

  <p>Die kleine Darstellung zwingt dazu, Ursache und Wirkung getrennt zu halten.</p>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Definieren ist nicht immer schützen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Pegeldefinition</strong><span>sorgt für High oder Low im offenen Zustand.</span></div>
    <div class="compare-item"><strong>Eingangsschutz</strong><span>verhindert Überlastung, Überspannung oder Störschäden.</span></div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Ruhezustand bestimmen</strong><span>Was soll der Eingang lesen, wenn nichts passiert?</span></div>
  <div class="step-item"><strong>2. Ereignis lesen</strong><span>Was ändert der Taster oder Sensor elektrisch?</span></div>
  <div class="step-item"><strong>3. Widerstandsrolle klären</strong><span>Definiert der Widerstand den Pegel oder begrenzt er Strom?</span></div>
  <div class="step-item"><strong>4. Störung bedenken</strong><span>Sind lange Leitungen, fremde Spannungen oder ESD möglich?</span></div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite ist bewusst als eigener Baustein formuliert, damit sie Nachbarseiten ergänzt und nicht wiederholt.

<div class="note-panel">
  <p><strong>Merke:</strong> Erst der sauber benannte Zustand macht die technische Lösung begründbar.</p>
</div>
