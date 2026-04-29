---
title: "ATmega – TWI Start, Adresse und ACK verstehen"
description: "Verstehe, wie der AVR bei TWI beziehungsweise I²C eine Verbindung anbahnt und warum Startbedingung, Adressierung und Bestätigung logisch zusammengehören."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-start-adresse-und-ack-verstehen"]
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

Beim TWI beziehungsweise I²C beginnt Kommunikation nicht einfach mit „einem Datenbyte“. Zuerst muss auf dem Bus geordnet sichtbar werden, **dass ein Zugriff beginnt**, **welches Gerät gemeint ist** und **ob dieses Gerät überhaupt reagiert**. Genau dafür sind Startbedingung, Adresse und ACK wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensor soll angesprochen werden</h3>
  <p>Der AVR möchte von einem Sensor Daten lesen. Wenn der Zugriff sauber läuft, beginnt er mit einer Startbedingung, nennt danach die Geräteadresse und bekommt eine Bestätigung. Erst dann ist klar: Der Buspartner ist wirklich dabei und die Kommunikation kann geordnet weitergehen.</p>
</div>

## Drei Schritte, die zusammengehören

<div class="visual-grid">
  <div class="visual-item">
    <strong>Start</strong>
    <span>Der Buszugriff beginnt sichtbar und geordnet.</span>
  </div>
  <div class="visual-item">
    <strong>Adresse</strong>
    <span>Der AVR macht klar, welches Gerät auf dem Bus gemeint ist.</span>
  </div>
  <div class="visual-item">
    <strong>ACK</strong>
    <span>Die Gegenstelle bestätigt, dass sie den Schritt angenommen hat.</span>
  </div>
</div>

## Mini-Demo: mit Bestätigung oder ohne?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der Busablauf wird erst durch die Rückmeldung ruhig lesbar</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Geordneter Zugriff</strong></p>
      <p style="margin:0;"><code>Start → Adresse → ACK</code></p>
      <p style="margin:0.6rem 0 0;">Die Gegenstelle ist erreichbar und bestätigt den Schritt.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Fehlerbild</strong></p>
      <p style="margin:0;"><code>Start → Adresse → kein ACK</code></p>
      <p style="margin:0.6rem 0 0;">Jetzt ist nicht einfach „der Datenwert falsch“, sondern der Zugriff selbst kommt nicht sauber zustande.</p>
    </div>
  </div>
</div>

## ACK ist keine Nebensache

Gerade am Anfang wirkt ACK oft wie ein kleines Zusatzbit. Fachlich ist es aber entscheidend, weil es sichtbar macht, ob die Gegenstelle den Buszugriff überhaupt mitträgt. Ohne diese Bestätigung ist nicht einmal sicher, dass das adressierte Gerät wirklich teilnimmt.

## Typischer Fehlstart

Ein häufiger Denkfehler ist, beim Bus sofort auf das spätere Datenbyte zu schauen. Didaktisch ruhiger ist:

1. Hat der Zugriff sauber begonnen?
2. Wurde das richtige Gerät adressiert?
3. Kam eine Bestätigung zurück?
4. Erst dann auf den eigentlichen Dateninhalt schauen.

## Diagnose-Raster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Start prüfen</strong>
    <span>Wurde der Buszugriff überhaupt sauber begonnen?</span>
  </div>
  <div class="step-item">
    <strong>2. Adresse lesen</strong>
    <span>Ist klar, welches Gerät angesprochen werden soll?</span>
  </div>
  <div class="step-item">
    <strong>3. ACK deuten</strong>
    <span>Bestätigt die Gegenstelle diesen Zugriffsschritt?</span>
  </div>
  <div class="step-item">
    <strong>4. Erst danach Daten</strong>
    <span>Der Datenwert ist erst sinnvoll, wenn der Busablauf selbst trägt.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei TWI/I²C zuerst den Busablauf lesen: Start, Adresse, ACK. Erst danach wird aus einem Zugriff ein verständlicher Datenfall.</p>
</div>
