---
title: "ATmega TWI Start, Stop und ACK verstehen"
description: "Verstehe, wie ein I²C-Austausch durch Startbedingung, Stopbedingung und Bestätigung logisch gerahmt wird."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-start-stop-und-ack-verstehen"]
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

Ein I²C-Transfer besteht nicht nur aus Adresse und Daten. Fachlich ruhiger wird er erst, wenn du auch den **Rahmen** mitliest: Wann beginnt der Austausch, wann wird bestätigt und wann endet er?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensor wird angesprochen</h3>
  <p>Der Master startet die Übertragung, sendet eine Adresse, bekommt eine Bestätigung und überträgt anschließend Daten. Erst durch Start, ACK und Stop wird daraus ein verständlicher Busablauf statt nur eine Reihe von Bits.</p>
</div>

## Die Grundrollen im Ablauf

<div class="visual-grid">
  <div class="visual-item">
    <strong>Start</strong>
    <span>Markiert den Beginn eines Busrahmens.</span>
  </div>
  <div class="visual-item">
    <strong>Adresse/Daten</strong>
    <span>Tragen die eigentliche Nutzinformation.</span>
  </div>
  <div class="visual-item">
    <strong>ACK/NACK</strong>
    <span>Zeigen, ob ein Schritt bestätigt wird oder nicht.</span>
  </div>
  <div class="visual-item">
    <strong>Stop</strong>
    <span>Beendet den aktuellen Austausch sauber.</span>
  </div>
</div>

## Mini-Denkbild: Rahmen statt bloß Bytes

<pre><code>START → Adresse → ACK → Datenbyte → ACK → STOP</code></pre>

Diese Lesart ist oft viel hilfreicher als nur:

<pre><code>Adresse, Daten, fertig</code></pre>

## Warum ACK didaktisch wichtig ist

ACK zeigt, dass der Buspartner den letzten Schritt bestätigt hat. NACK zeigt dagegen: Hier wird nicht bestätigt oder der Austausch endet. Genau daran lässt sich oft ruhiger lesen, warum eine Kommunikation weiterläuft oder abbricht.

## Eine ruhige Prüfstrategie

1. Wo beginnt der Austausch?
2. Welche Adresse oder welches Byte kommt als Nächstes?
3. Wird dieser Schritt bestätigt?
4. Wo endet der Rahmen?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein I²C-Byte ist fachlich erst dann sauber beschrieben, wenn auch Start, ACK/NACK und Stop mitgedacht werden.</p>
</div>
