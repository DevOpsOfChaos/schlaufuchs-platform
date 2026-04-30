---
title: "ATmega – TWI/I²C mit Open-Drain und Pull-up verstehen"
description: "Verstehe, warum der AVR auf dem TWI-Bus Leitungen nicht aktiv nach oben treibt und weshalb Pull-up-Widerstände zur Grundidee des Busses gehören."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-open-drain-und-pullup-verstehen"]
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

TWI beziehungsweise I²C arbeitet nicht wie eine gewöhnliche Leitung, auf der ein Gerät einfach „0“ oder „1“ aktiv herausdrückt. Stattdessen ist der Bus so gedacht, dass Teilnehmer die Leitung **aktiv nach unten ziehen** können. Nach oben geht sie wieder über **Pull-up-Widerstände**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Warum mehrere Geräte nicht gegeneinander „hochdrücken“</h3>
  <p>Wenn mehrere TWI-Teilnehmer dieselbe Datenleitung benutzen, wäre ein normales Push-Pull-Prinzip problematisch. Das Open-Drain-Denken löst dieses Problem, weil ein Teilnehmer die Leitung sicher nach unten ziehen kann, ohne dass ein anderer sie gleichzeitig aktiv nach oben drücken muss.</p>
</div>

## High ist oft nur „hochgezogen“

<div class="compare-card">
  <p class="card-kicker">Wichtige Lesart</p>
  <h3>Bus-Ruhepegel und aktives Ziehen trennen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>High</strong>
      <span>Die Leitung wird über Pull-ups auf einen hohen Pegel gebracht.</span>
    </div>
    <div class="compare-item">
      <strong>Low</strong>
      <span>Ein Teilnehmer zieht die Leitung aktiv nach unten.</span>
    </div>
  </div>
</div>

## Mini-Demo: normale Ausgangslogik gegen Buslogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum ein TWI-Bus nicht wie zwei normale GPIO-Leitungen gedacht wird</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Push-Pull-Denken</strong></p>
      <p style="margin:0;">Ein Ausgang treibt aktiv nach High oder nach Low.</p>
      <p style="margin:0.6rem 0 0;">Das ist für viele normale GPIO-Situationen passend.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>TWI-Busdenken</strong></p>
      <p style="margin:0;">Teilnehmer ziehen aktiv auf Low; High entsteht über Pull-up.</p>
      <p style="margin:0.6rem 0 0;">Genau dadurch können mehrere Geräte dieselbe Leitung teilen.</p>
    </div>
  </div>
</div>

## Warum Pull-ups kein optionales Deko-Bauteil sind

Ohne Pull-up-Widerstände gäbe es keinen ruhigen High-Pegel, zu dem die Leitung zurückkehren kann. Der Bus wäre dann nicht sauber lesbar.

- Pull-ups stellen die Ruhelage her.
- Teilnehmer erzeugen Low aktiv.
- Das Zusammenspiel ergibt das typische TWI-Busverhalten.

Hier geht es um die **elektrische und logische Grundidee der Leitung**. Die Frage, wie Startbedingung, Adresse und ACK im Ablauf zusammenspielen, gehört auf die vorhandene TWI-Ablauf-Seite.

## Eine ruhige Prüfstrategie

1. Wird High hier aktiv getrieben oder nur über Pull-up hergestellt?
2. Was passiert, wenn ein Teilnehmer die Leitung aktiv nach Low zieht?
3. Warum ist dieses Prinzip bei gemeinsam genutzten Busleitungen nützlich?
4. Gehören Pull-ups hier nur dazu oder sind sie Teil der Grundidee?

<div class="note-panel">
  <p><strong>Merke:</strong> Auf dem TWI/I²C-Bus bedeutet High oft nicht „aktiv hochgetrieben“, sondern „über Pull-up hochgezogen“.</p>
</div>
