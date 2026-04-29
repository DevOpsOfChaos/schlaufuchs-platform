---
title: "ATmega – TWI Clock Stretching verstehen"
description: "Verstehe, warum ein I²C beziehungsweise TWI-Teilnehmer die Taktleitung kurz festhalten kann und warum das kein zufälliger Fehler sein muss."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-clock-stretching-verstehen"]
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

Bei TWI beziehungsweise I²C wirkt es auf den ersten Blick so, als würde der Master den Takt einfach ausgeben und alle anderen folgen. In der Praxis ist die Taktleitung aber eine **gemeinsame Busleitung**. Genau deshalb kann eine Gegenstelle den Takt kurz festhalten, wenn sie noch nicht bereit ist. Dieses Verhalten nennt man **Clock Stretching**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensor braucht noch einen Moment</h3>
  <p>Der AVR spricht einen Sensor an. Der Sensor hat die Adresse verstanden, braucht aber noch kurz Zeit, bevor der nächste Schritt sauber weiterlaufen kann. Statt dass der Bus sofort weitertaktet, hält die Gegenstelle SCL kurz auf Low. Erst dann geht der Zugriff geordnet weiter.</p>
</div>

## Was dabei fachlich passiert

<div class="visual-grid">
  <div class="visual-item">
    <strong>Master startet</strong>
    <span>Der Zugriff wird normal begonnen.</span>
  </div>
  <div class="visual-item">
    <strong>Gegenstelle braucht Zeit</strong>
    <span>Ein Slave ist noch nicht bereit für den nächsten Schritt.</span>
  </div>
  <div class="visual-item">
    <strong>SCL bleibt kurz Low</strong>
    <span>Der Bus wartet sichtbar an der Taktleitung.</span>
  </div>
  <div class="visual-item">
    <strong>Ablauf geht weiter</strong>
    <span>Danach läuft die Kommunikation geordnet weiter.</span>
  </div>
</div>

## Mini-Demo: geordnetes Warten oder echter Hänger?

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Die Dauer und der Kontext entscheiden</h3>
  <pre><code>Fall A: Start → Adresse → ACK → kurzes Warten auf SCL → Daten
Fall B: Start → Adresse → ACK → SCL bleibt dauerhaft Low → Busproblem</code></pre>
  <p>Beide Fälle sehen am Anfang ähnlich aus. Erst die Dauer und der weitere Ablauf zeigen, ob noch ein geordneter Busmechanismus läuft oder ob der Bus wirklich hängt.</p>
</div>

## Diese Seite behandelt bewusst Buslogik, nicht Registerdetails

Hier geht es darum, **warum** der Bus manchmal wartet. Die genaue Initialisierung des AVR-TWI-Moduls oder einzelne Statuscodes sind eine andere Ebene. Diese Seite soll zuerst das Denkmodell für die Leitung selbst ruhig machen.

## Eine ruhige Prüfstrategie

1. Läuft der Zugriff grundsätzlich an?
2. Gibt es eine plausible Gegenstelle, die Zeit brauchen könnte?
3. Ist das Halten von SCL nur kurz und kontextgebunden?
4. Oder bleibt der Buszustand dauerhaft stehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Clock Stretching bedeutet nicht automatisch „der Bus ist kaputt“. Oft zeigt es nur, dass eine Gegenstelle gerade noch nicht bereit für den nächsten Schritt ist.</p>
</div>
