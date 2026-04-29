---
title: "ATmega – Kooperative Zeitplanung ohne RTOS verstehen"
description: "Verstehe, wie ein AVR mehrere wiederkehrende Aufgaben ohne Betriebssystem geordnet abarbeiten kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-kooperative-zeitplanung-ohne-rtos-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

Ein kleiner Mikrocontroller hat oft kein großes Betriebssystem und trotzdem mehrere Aufgaben: LED blinken, Taster prüfen, Sensor lesen, Nachrichten senden. Das wirkt schnell nach „alles gleichzeitig“, obwohl der Controller in Wahrheit nur Schritt für Schritt arbeitet. Genau deshalb ist **kooperative Zeitplanung** ein starkes Denkmodell.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Aufgaben, aber keine einzige Delay-Kette</h3>
  <p>Alle 1 Millisekunde soll ein Taster geprüft werden, alle 10 Millisekunden ein Sensorwert, und alle 500 Millisekunden eine Status-LED wechseln. Statt diese Abläufe mit großen Warteblöcken zu verketten, kann die Hauptschleife bei jedem Tick prüfen, welche Aufgabe gerade fällig ist.</p>
</div>

## Was kooperativ hier bedeutet

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kurze Schleifendurchläufe</strong>
    <span>Die Hauptschleife blockiert nicht unnötig lange.</span>
  </div>
  <div class="visual-item">
    <strong>Zeitmarken oder Flags</strong>
    <span>Aufgaben werden dann ausgeführt, wenn sie wirklich fällig sind.</span>
  </div>
  <div class="visual-item">
    <strong>Kein großes RTOS nötig</strong>
    <span>Die Struktur bleibt trotzdem geordnet und erweiterbar.</span>
  </div>
</div>

## Mini-Demo: zwei Denkstile im Vergleich

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Blockieren oder koordinieren?</h3>
  <pre><code>Stil A: LED tun → delay → Taster prüfen → delay → Sensor lesen → delay
Stil B: Tick prüfen → fällige Aufgaben ausführen → Schleife sofort weiter</code></pre>
  <p>Der zweite Stil macht Reaktionszeiten und Aufgabentrennung meist deutlich ruhiger.</p>
</div>

## Eine ruhige Prüfstrategie

1. Welche Aufgaben laufen regelmäßig?
2. Welche Aufgabe braucht die schnellste Reaktion?
3. Wo blockieren Delays die Hauptschleife unnötig?
4. Lassen sich Aufgaben über Ticks oder Zeitmarken sauber trennen?

<div class="note-panel">
  <p><strong>Merke:</strong> Auch ohne RTOS kann ein AVR mehrere Aufgaben ruhig organisieren. Entscheidend ist, ob die Hauptschleife blockiert oder ob sie als Koordinator arbeitet.</p>
</div>
