---
title: "Mikrocontroller – I²C-Adressen, Pull-ups und Busfehler erkennen"
description: "Verstehe, warum I²C-Probleme oft an Adressen, Pull-ups, Buspegeln oder blockierten Leitungen liegen und nicht nur am Bibliotheksaufruf."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - i2c-adressen-pullups-und-busfehler
learningGoals:
  - "Du erklärst die Rolle von SDA, SCL, Pull-ups und gemeinsamen Busleitungen."
  - "Du unterscheidest Adressfehler, Pegelproblem und blockierte Leitung."
  - "Du beschreibst eine ruhige Reihenfolge zur I²C-Fehlersuche."
practiceIdeas:
  - "Prüfe bei einem I²C-Modul zuerst Adresse, Versorgung und Pull-ups."
  - "Vergleiche 7-Bit-Adresse und Schreibweise mit R/W-Bit."
  - "Skizziere, was passiert, wenn SDA dauerhaft Low bleibt."
commonMistakes:
  - "Eine falsche Adresse sofort als defekten Sensor zu deuten."
  - "Pull-ups zu vergessen oder mehrfach ungünstig zu kombinieren."
  - "I²C wie UART als Punkt-zu-Punkt-Verbindung zu lesen."
keyTakeaways:
  - "I²C ist ein gemeinsamer Bus mit offenen Leitungen und Pull-ups."
  - "Adressierung, Pegel und Leitungslage müssen gemeinsam passen."
  - "Eine blockierte SDA- oder SCL-Leitung kann den ganzen Bus lahmlegen."
recognizeSignals:
  - "Es geht um Sensor wird nicht gefunden, I²C-Scanner, Adresse, SDA, SCL oder Pull-up."
  - "Mehrere Module hängen an denselben zwei Leitungen."
  - "Eine Aufgabe fragt nach NACK, Bus hängt oder falscher Adresse."
selfCheckPoints:
  - "Kann ich erklären, wozu Pull-ups am I²C-Bus dienen?"
  - "Kann ich eine 7-Bit-Adresse von einer verschobenen Adresse unterscheiden?"
  - "Kann ich eine Bus-Fehlersuche in sinnvoller Reihenfolge durchführen?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - i2c
  - pullup
  - bus
  - adresse
  - fehlersuche
level: mittel
draft: false
---

## Grundidee

I²C wirkt einfach, weil nur zwei Signalleitungen genutzt werden. Genau diese Einfachheit führt aber oft zu falschen Annahmen. SDA und SCL sind gemeinsame Busleitungen, deren Pegel über Pull-ups und Teilnehmerverhalten entstehen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der I²C-Scanner findet keinen Sensor</h3>
  <p>Der Sensor ist angeschlossen, aber der Scanner meldet keine Adresse. Mögliche Ursachen sind falsche Versorgung, fehlender gemeinsamer GND, ungeeignete Pull-ups, falsche Adresse oder eine dauerhaft blockierte Leitung.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Adresse</strong>
    <span>Der Master spricht einen Teilnehmer über seine Busadresse an.</span>
  </div>
  <div class="visual-item">
    <strong>Pull-ups</strong>
    <span>Die Leitungen werden nicht aktiv High getrieben, sondern über Widerstände hochgezogen.</span>
  </div>
  <div class="visual-item">
    <strong>Buszustand</strong>
    <span>Ein Teilnehmer kann SDA oder SCL festhalten und damit den ganzen Bus blockieren.</span>
  </div>
</div>

## Mini-Demo: I²C-Fehler nicht nur im Code suchen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Adresse, Pegel und Buszustand gehören zusammen</h3>
  <pre><code>Scanner findet nichts
→ Versorgung prüfen
→ GND prüfen
→ SDA/SCL vertauscht?
→ Pull-ups vorhanden?
→ Adresse richtig gelesen?
→ Leitung dauerhaft Low?</code></pre>
  <p>Diese Reihenfolge verhindert, dass man lange Bibliotheken tauscht, obwohl eine Leitung falsch steckt oder der Bus elektrisch nicht sauber ist.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Bus statt Einzelleitung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Wenn ein Sensor nicht antwortet, ist nur seine Adresse falsch.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Ich prüfe Adresse, Pull-ups, Pegel, Verdrahtung und blockierte Leitungen als gemeinsames Busproblem.“</span>
    </div>
  </div>
</div>

## Praxisraster

I²C-Fehlersuche ist besonders ruhig, wenn du erst die elektrischen Voraussetzungen prüfst und dann den Protokollteil.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Sind Versorgung, GND, SDA und SCL korrekt angeschlossen?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Gibt es passende Pull-ups zur richtigen Spannung?</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Stimmt die 7-Bit-Adresse, und ist kein anderer Teilnehmer im Konflikt?</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Sind SDA oder SCL dauerhaft Low und blockieren den Bus?</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite ergänzt die I²C/SPI-Unterscheidung um konkrete I²C-Fehlersuche. Sie behandelt nicht jedes Register eines Sensors, sondern die Busgrundlagen.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei I²C ist ein Fehler selten nur eine Codezeile. Der ganze Bus muss elektrisch und logisch stimmen.</p>
</div>
