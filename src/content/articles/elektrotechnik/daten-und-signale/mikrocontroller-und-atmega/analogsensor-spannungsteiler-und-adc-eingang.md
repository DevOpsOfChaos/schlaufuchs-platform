---
title: "Mikrocontroller – Analogsensor, Spannungsteiler und ADC-Eingang lesen"
description: "Verstehe, warum ein ADC nicht „den Sensor“ misst, sondern eine Spannung am Eingang, die durch Schaltung, Referenz und Sensorverhalten entsteht."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "analogsensor-spannungsteiler-und-adc-eingang"
learningGoals:
  - "Du beschreibst den ADC-Eingang als Spannungsmesspunkt."
  - "Du erklärst, warum ein Sensor oft Teil eines Spannungsteilers ist."
  - "Du prüfst Referenzspannung, Messbereich und Signalrichtung zusammen."
practiceIdeas:
  - "Markiere den ADC-Knoten in einem Spannungsteiler."
  - "Vergleiche LDR-oben und LDR-unten im Spannungsteiler."
  - "Ordne steigenden ADC-Wert einer Schaltungsrichtung zu."
commonMistakes:
  - "Den ADC-Wert direkt als Sensoreigenschaft zu lesen."
  - "Die Lage des Sensors im Spannungsteiler zu vergessen."
  - "Referenzspannung und maximalen Eingangswert nicht zu prüfen."
keyTakeaways:
  - "Der ADC misst eine Spannung relativ zur Referenz."
  - "Ein Spannungsteiler übersetzt Widerstandsänderungen in Spannungsänderungen."
  - "Ob der ADC-Wert steigt oder fällt, hängt von der Schaltung ab."
recognizeSignals:
  - "Es geht um LDR, NTC, Potentiometer oder analogen Eingang."
  - "Eine Aufgabe fragt, warum ein Messwert bei Licht steigt oder fällt."
  - "Spannungsteiler und Referenzspannung müssen gemeinsam gelesen werden."
selfCheckPoints:
  - "Kann ich den Messknoten zeigen?"
  - "Kann ich Sensorlage und ADC-Richtung erklären?"
  - "Kann ich Referenzspannung als Messrahmen nennen?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "adc"
  - "sensor"
  - "spannungsteiler"
  - "messung"
level: "mittel"
draft: false
---
## Grundidee

Ein analoger Sensor liefert nicht immer direkt eine fertige Spannung. Oft verändert er einen Widerstand, und erst der Spannungsteiler macht daraus eine messbare Spannung am ADC-Pin.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>LDR oben oder unten verändert die Richtung</h3>
  <p>Wenn der LDR im oberen Teil des Spannungsteilers liegt, kann der ADC-Wert anders auf Licht reagieren als bei einem LDR im unteren Teil. Der Sensor ist derselbe, die Schaltungsaussage aber nicht.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>Vcc → Sensor → ADC-Knoten → Widerstand → GND
oder
Vcc → Widerstand → ADC-Knoten → Sensor → GND
Folge: steigender Messwert ist nicht automatisch steigende Sensorgröße</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>Sensorgröße ist die physikalische Ursache.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>ADC-Spannung ist das elektrische Ergebnis der konkreten Schaltung.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Messknoten finden</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Sensorlage prüfen</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Referenzspannung nennen</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Werteverlauf testen</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
