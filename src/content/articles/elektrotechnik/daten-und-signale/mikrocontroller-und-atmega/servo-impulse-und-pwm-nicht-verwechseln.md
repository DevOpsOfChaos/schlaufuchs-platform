---
title: "Mikrocontroller – Servo-Impulse und PWM nicht verwechseln"
description: "Verstehe, warum ein Servosignal zwar periodische Impulse nutzt, aber nicht einfach dieselbe Bedeutung wie Helligkeits-PWM hat."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "servo-impulse-und-pwm-nicht-verwechseln"]
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

Servos werden oft mit PWM erklärt. Das ist für den Einstieg nützlich, kann aber in die Irre führen: Beim Servo zählt die Impulsbreite als Steuerinformation, nicht der Mittelwert als Leistung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>1,5 ms ist eine Position, keine halbe Helligkeit</h3>
  <p>Ein typisches Servosignal wiederholt sich regelmäßig. Innerhalb dieser Periode sagt die Länge des High-Impulses dem Servo, welche Stellung angefahren werden soll.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>LED-PWM:   Tastverhältnis → mittlere Leistung
Servo:     Impulsbreite → Zielposition
Versorgung: Motorstrom getrennt vom Signalpin</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>LED-PWM nutzt den Mittelwert für sichtbare Helligkeit.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>Servo-Impulse codieren eine Position über die Pulsbreite.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Signalart benennen</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Impulsbreite markieren</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Stromversorgung trennen</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Masse gemeinsam führen</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
