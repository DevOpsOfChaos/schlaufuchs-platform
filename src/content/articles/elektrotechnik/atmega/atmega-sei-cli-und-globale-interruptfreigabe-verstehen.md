---
title: "ATmega – sei, cli und globale Interruptfreigabe verstehen"
description: "Verstehe, warum Interruptlogik am ATmega nicht nur von einzelnen Quellen abhängt, sondern auch von einer globalen Freigabe des Gesamtsystems."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-sei-cli-und-globale-interruptfreigabe-verstehen"]
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
Am ATmega reicht es für Interrupts nicht, nur eine Quelle „einzuschalten“. Didaktisch wichtig ist die doppelte Lesart: **eine Quelle kann lokal freigegeben sein, aber das Gesamtsystem global noch gesperrt bleiben.** Genau hier kommen `sei` und `cli` ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Timer setzt Ereignisse – aber keine ISR läuft</h3>
  <p>Ein Timer ist korrekt konfiguriert, sein Interrupt ist lokal aktiviert, trotzdem wird die ISR scheinbar nie ausgeführt. Wer nur auf die Quelle schaut, übersieht leicht die zweite Ebene: Vielleicht ist die globale Interruptfreigabe noch gar nicht gesetzt.</p>
</div>

## Zwei Freigabeebenen sauber trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Lokale Freigabe</strong>
    <span>Eine bestimmte Quelle, zum Beispiel Timer oder externer Interrupt, wird grundsätzlich zugelassen.</span>
  </div>
  <div class="visual-item">
    <strong>Globale Freigabe</strong>
    <span>Das Gesamtsystem erlaubt überhaupt, dass Interrupts verarbeitet werden.</span>
  </div>
  <div class="visual-item">
    <strong><code>sei</code></strong>
    <span>Schaltet die globale Interruptfreigabe ein.</span>
  </div>
  <div class="visual-item">
    <strong><code>cli</code></strong>
    <span>Schaltet die globale Interruptfreigabe aus.</span>
  </div>
</div>

## Mini-Demo: Quelle bereit, System noch zu

<div class="signal-flow">
  <div class="flow-node"><strong>Quelle konfiguriert</strong><span>Timer oder externer Interrupt ist grundsätzlich vorbereitet.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Lokales Enable gesetzt</strong><span>Die einzelne Quelle ist freigegeben.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Globale Freigabe fehlt</strong><span>Ohne <code>sei</code> läuft trotzdem noch keine ISR.</span></div>
</div>

## Warum diese Seite nicht dieselbe Geschichte wie „ISR verstehen“ erzählt

Die ISR-Seite fragt: **Was passiert, wenn ein Interrupt wirklich verarbeitet wird?** Diese Seite fragt vorher: **Unter welchen Freigabebedingungen darf das überhaupt geschehen?** Genau dadurch bleibt die Trennung didaktisch sauber.

## Eine ruhige Prüfstrategie

1. Ist die Quelle selbst korrekt konfiguriert?
2. Ist ihr lokales Interrupt-Enable gesetzt?
3. Ist die globale Interruptfreigabe aktiv?
4. Erst danach die ISR selbst genauer prüfen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Interrupt ist nicht nur eine Quelle plus ISR. Dazwischen liegt auch die globale Freigabelogik des Systems.</p>
</div>
