---
title: "Mikrocontroller – Open-Drain, Pull-up und Buslogik verstehen"
description: "Verstehe, warum manche Schnittstellen nicht aktiv High treiben, sondern die Leitung nur nach Low ziehen und den High-Pegel einem Pull-up überlassen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "open-drain-pullup-und-buslogik"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
## Grundidee

Bei Open-Drain ist High kein aktiv getriebener Zustand des Teilnehmers. High entsteht, wenn niemand die Leitung herunterzieht und der Pull-up sie auf einen definierten Pegel bringt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>I²C funktioniert, weil Low gemeinsam erlaubt ist</h3>
  <p>Mehrere Bausteine dürfen dieselbe Leitung nach Low ziehen. Wenn keiner zieht, hebt der Pull-up die Leitung wieder an. Genau dadurch lässt sich Buslogik mit mehreren Teilnehmern aufbauen.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>niemand zieht      → Pull-up macht High
Teilnehmer zieht   → Leitung wird Low
mehrere ziehen Low → kein elektrischer Streit</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>Push-Pull kann aktiv High und Low treiben.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>Open-Drain zieht aktiv Low und braucht für High einen Pull-up.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ausgangsart erkennen</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Pull-up suchen</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Pull-up-Spannung prüfen</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Buskonflikte vermeiden</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
