---
title: "ATmega – Arduino-Pins und AVR-Register nicht verwechseln"
description: "Verstehe, warum D13, PB5 und Bit 5 in PORTB unterschiedliche Namen für zusammenhängende Ebenen sind."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "avr-pinmapping-arduino-und-register"
learningGoals:
  - "Du unterscheidest Board-Pinnummer, Controller-Pin und Registerbit."
  - "Du erklärst, warum Arduino-Bezeichnungen beim Registerzugriff übersetzt werden müssen."
  - "Du liest Beispiele mit PORTB, DDRB und PB5 ruhiger."
practiceIdeas:
  - "Ordne D13 einem konkreten AVR-Portbit zu."
  - "Markiere in Code, ob Arduino-API oder Registerzugriff verwendet wird."
  - "Vergleiche Board-Beschriftung und Datenblattname."
commonMistakes:
  - "D13 direkt für ein Registerbit zu halten."
  - "PB5 und physische IC-Pinnummer gleichzusetzen."
  - "Arduino-API und AVR-Registerzugriff im Kopf zu vermischen."
keyTakeaways:
  - "Pinnamen hängen von der Ebene ab: Board, Controllergehäuse oder Register."
  - "Registercode arbeitet mit Ports und Bits, nicht direkt mit Arduino-D-Nummern."
  - "Gute Fehlersuche beginnt mit einer Pinzuordnungstabelle."
recognizeSignals:
  - "Code nutzt PORTB, DDRB oder PINB neben Arduino-Pinnamen."
  - "Eine LED an D13 soll über Register geschaltet werden."
  - "Eine Aufgabe fragt nach Zuordnung statt nach neuer Schaltung."
selfCheckPoints:
  - "Kann ich drei Ebenen der Pinbezeichnung benennen?"
  - "Kann ich erklären, warum D13 nicht automatisch Bit 13 ist?"
  - "Kann ich bei Registercode zuerst das Mapping prüfen?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "arduino"
  - "register"
  - "pinmapping"
  - "gpio"
level: "einfach"
draft: false
---
## Grundidee

Viele Lernende kennen zuerst die Arduino-Beschriftung. Beim direkten Registerzugriff tauchen dann plötzlich PB5, DDRB und PORTB auf. Das ist kein Widerspruch, sondern ein Wechsel der Benennungsebene.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>D13 ist auf vielen Arduino-Boards PB5</h3>
  <p>Wenn eine LED an D13 hängt, kann sie auf dem ATmega über PORTB Bit 5 geschaltet werden. Die Zahl 13 gehört zur Board-Abstraktion, die Zahl 5 zum Portbit.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>Arduino-Ebene: digitalWrite(13, HIGH)
AVR-Ebene:     PORTB |= (1 << PB5)
Merke:         D13 ist nicht Bit 13</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>Board-Pin beschreibt den Anschluss auf der Platine.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>Registerbit beschreibt die interne Steuerstelle im Mikrocontroller.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Board-Pin lesen</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Datenblatt/Mapping prüfen</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Port und Bit notieren</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Erst dann Registercode schreiben</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
