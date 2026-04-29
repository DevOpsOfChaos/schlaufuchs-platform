---
title: "ATmega UART Baudratenfehler und Toleranz verstehen"
description: "Verstehe, warum UART nicht nur nominal dieselbe Baudrate braucht, sondern auch kleine Abweichungen innerhalb eines tolerierbaren Fensters."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-baudratenfehler-und-toleranz-verstehen"]
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

Bei UART ist nicht nur wichtig, **welche Baudrate eingestellt wurde**, sondern auch, **wie genau sie tatsächlich getroffen wird**. Gerade aus Taktquelle und Registerwahl ergibt sich oft eine kleine Abweichung – und genau die kann ruhig tolerierbar oder bereits problematisch sein.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>9600 Baud ist nicht immer exakt 9600 Baud</h3>
  <p>Zwei Geräte sind beide auf 9600 Baud eingestellt. Trotzdem wirken Zeichen gelegentlich fehlerhaft. Dann lohnt sich die ruhigere Frage: Treffen beide Geräte die gewünschte Zeitbasis wirklich ähnlich genug?</p>
</div>

## Was bei UART zeitlich mitläuft

Ein Zeichen wird nicht als ein großer Block gelesen, sondern bitweise über die Zeit. Wenn Sender und Empfänger zeitlich leicht auseinanderlaufen, verschiebt sich das Abtastfenster mit jedem Bit ein Stück.

## Sollwert und tatsächlich entstehender Wert

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Nicht nur eingestellte Baudrate, sondern auch reale Abweichung lesen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sollwert</strong>
      <span>Der Zielwert, den du im Code oder im Tool auswählst.</span>
    </div>
    <div class="compare-item">
      <strong>Istwert</strong>
      <span>Der tatsächlich entstehende Wert aus Taktquelle und Registereinstellung.</span>
    </div>
  </div>
</div>

## Warum Toleranz ein Timingfenster ist

Es geht nicht nur um „x Prozent Fehler“, sondern darum, ob die Abtastung über Startbit, Datenbits und Stopbit hinweg noch im stabilen Bereich bleibt. Genau deshalb sind kleine Abweichungen oft noch ruhig tragbar, größere aber irgendwann nicht mehr.

## Eine ruhige Prüfstrategie

1. Welche Soll-Baudrate ist gewünscht?
2. Welche reale Baudrate ergibt sich aus Taktquelle und Register?
3. Wie groß ist die Abweichung?
4. Passt das noch zur Gegenstelle und zum Timingfenster?

<div class="note-panel">
  <p><strong>Merke:</strong> UART-Probleme sind nicht nur Leitungsprobleme. Häufig lohnt sich zuerst die Frage nach Zeitbasis, Baudratenabweichung und Toleranz.</p>
</div>
