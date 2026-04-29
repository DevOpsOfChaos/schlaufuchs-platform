---
title: "ATmega – Polling als Grundidee verstehen"
description: "Verstehe, warum der Mikrocontroller bei Polling einen Zustand immer wieder aktiv abfragt und wie sich das fachlich von Interrupts unterscheidet."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-polling-grundidee-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
Polling bedeutet: Der Mikrocontroller fragt einen Zustand **immer wieder aktiv selbst** ab. Er wartet also nicht darauf, dass ein Ereignis ihn unterbricht, sondern prüft in seiner Hauptschleife regelmäßig neu.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Taster prüfen statt auf Unterbrechung warten</h3>
  <p>Ein ATmega soll erkennen, ob ein Taster gedrückt wurde. Beim Polling schaut das Hauptprogramm immer wieder auf den Eingang. Genau deshalb ist Polling als Einstieg oft didaktisch klar: Der Ablauf bleibt sichtbar in der Hauptschleife.</p>
</div>

## Polling in einem Satz

**Polling = wiederholtes aktives Nachsehen, ob ein bestimmter Zustand gerade vorliegt.**

## Mini-Demo: dieselbe Frage, aber andere Struktur

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Hauptschleife bleibt beim Polling der zentrale Ort</h3>
  <pre><code>while (1) {
    if (!(PINB & (1 << PB2))) {
        PORTB |= (1 << PB0);
    } else {
        PORTB &= ~(1 << PB0);
    }
}
</code></pre>
  <p>Der Eingang wird hier nicht einmal, sondern immer wieder neu gelesen. Die Hauptschleife ist also bewusst eine Prüf-Schleife.</p>
</div>

## Polling und Interrupt nicht vermischen

<div class="compare-card">
  <p class="card-kicker">Trennschärfe</p>
  <h3>Beide reagieren auf Ereignisse, aber anders</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Polling</strong>
      <span>Die Hauptschleife schaut immer wieder aktiv nach, ob ein Zustand eingetreten ist.</span>
    </div>
    <div class="compare-item">
      <strong>Interrupt</strong>
      <span>Ein Ereignis unterbricht den normalen Ablauf kurz und springt in eine ISR.</span>
    </div>
  </div>
</div>

## Warum Polling didaktisch oft der ruhigere Start ist

Bei Polling liegt die ganze Logik sichtbar in der Hauptschleife. Das hilft besonders am Anfang, weil man den Weg **lesen** kann:

- Eingang prüfen,
- Bedingung auswerten,
- Ausgang ändern.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Hauptschleife finden</strong>
    <span>Wo wiederholt sich der Ablauf?</span>
  </div>
  <div class="step-item">
    <strong>2. Prüfpunkt finden</strong>
    <span>Welcher Eingang oder Zustand wird jedes Mal neu gelesen?</span>
  </div>
  <div class="step-item">
    <strong>3. Reaktion finden</strong>
    <span>Welche sichtbare oder technische Aktion folgt aus der Abfrage?</span>
  </div>
  <div class="step-item">
    <strong>4. Struktur benennen</strong>
    <span>Ist das aktives Polling oder eine unterbrechungsgetriebene Lösung?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Polling ist nicht bloß „dauernd dasselbe“, sondern eine bewusst wiederholte Prüfhaltung des Hauptprogramms.</p>
</div>
