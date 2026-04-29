---
title: "Mikrocontroller – Fehlersuche mit LED, UART und Messgerät"
description: "Lerne, Mikrocontrollerfehler systematisch einzugrenzen, statt Code, Schaltung und Messwert gleichzeitig zu raten."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "fehlersuche-mit-led-uart-und-messgeraet"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
## Grundidee

Bei Mikrocontrollerprojekten können Fehler aus mehreren Richtungen kommen: Verdrahtung, Versorgung, Registerkonfiguration, Programmlogik, Timing oder Messmethode. Gute Fehlersuche versucht deshalb nicht, alles gleichzeitig zu raten. Sie stellt nacheinander kleine, beantwortbare Fragen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die LED blinkt nicht – aber was heißt das?</h3>
  <p>Wenn eine LED nicht blinkt, kann der Pin falsch konfiguriert sein, die LED falsch herum stecken, der Vorwiderstand fehlen, der Takt nicht stimmen oder der Code die Stelle nie erreichen. Die Beobachtung ist wichtig, aber sie ist noch keine fertige Diagnose.</p>
</div>

## Drei Werkzeuge, drei Aussagearten

<div class="visual-grid">
  <div class="visual-item">
    <strong>LED</strong>
    <span>Zeigt grob, ob ein Programmpunkt erreicht oder ein Zustand aktiv wird.</span>
  </div>
  <div class="visual-item">
    <strong>UART</strong>
    <span>Gibt Werte, Zustände und Ablaufpunkte als Text aus.</span>
  </div>
  <div class="visual-item">
    <strong>Messgerät</strong>
    <span>Prüft elektrische Realität: Spannung, Pegel, Versorgung und Verbindung.</span>
  </div>
</div>

## Mini-Demo: Aus einer Vermutung wird ein Test

<div class="figure-card">
  <p class="card-kicker">Debugging-Frage</p>
  <h3>Schlecht ist „irgendwas stimmt nicht“. Gut ist eine prüfbare Frage.</h3>
  <pre><code>Vermutung:
Der Taster funktioniert nicht.

Bessere Testfragen:
1. Liegt am Eingang im Ruhezustand ein definierter Pegel an?
2. Ändert sich der Pegel beim Drücken elektrisch messbar?
3. Liest der Code den richtigen PINx-Wert?
4. Wird die if-Bedingung wirklich erreicht?</code></pre>
</div>

## LED-Debugging richtig einordnen

Eine LED ist schnell und robust. Sie eignet sich gut für Fragen wie:

- Wird die Hauptschleife erreicht?
- Tritt ein Interrupt überhaupt auf?
- Wechselt ein Zustand grob sichtbar?

Aber eine LED zeigt selten die genaue Ursache. Sie beweist nicht automatisch, dass die Schaltung vollständig stimmt.

## UART-Debugging richtig einordnen

UART-Ausgaben können Zustände und Werte sichtbar machen. Sie sind besonders nützlich, wenn du wissen willst, welchen Zählerstand, ADC-Wert oder Zustand das Programm gerade sieht.

Trotzdem hat UART Grenzen: Wenn Takt, Baudrate oder Verdrahtung nicht stimmen, kann die Ausgabe selbst Teil des Problems sein.

## Messgerät richtig einordnen

Ein Messgerät prüft nicht, was der Code glaubt, sondern was elektrisch tatsächlich anliegt. Das ist besonders wichtig bei:

- Versorgungsspannung,
- GND-Verbindung,
- Tasterpegeln,
- LED-Polung,
- Pull-ups,
- Sensor-Ausgangsspannungen.

<div class="compare-card">
  <p class="card-kicker">Reihenfolge</p>
  <h3>Erst Realität prüfen, dann Programmdeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhig</strong>
      <span>Code ändern, Pins tauschen, Baudrate ändern und danach hoffen.</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig</strong>
      <span>Eine Hypothese bilden, einen Test machen, eine Beobachtung notieren.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Minimaltest bauen</strong>
    <span>So wenig Code und Hardware wie möglich.</span>
  </div>
  <div class="step-item">
    <strong>2. Elektrisch prüfen</strong>
    <span>Versorgung, GND und Pegel messen.</span>
  </div>
  <div class="step-item">
    <strong>3. Programmpunkt markieren</strong>
    <span>LED oder UART zeigt, ob der Ablauf dort ankommt.</span>
  </div>
  <div class="step-item">
    <strong>4. Eine Änderung machen</strong>
    <span>Nur eine Sache ändern und die Wirkung beobachten.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Debugging ist kein Raten mit vielen Änderungen. Es ist eine Reihe kleiner Tests, die jeweils eine konkrete Frage beantworten.</p>
</div>
