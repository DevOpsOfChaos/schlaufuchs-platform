---
title: "ATmega – TWI-Repeated-Start verstehen"
description: "Verstehe am AVR-TWI, warum auf dem I2C-Bus zwischen zwei Phasen einer Kommunikation nicht immer ein Stop nötig ist und wozu ein Repeated Start dient."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-repeated-start-verstehen"]
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

Beim TWI- oder I2C-Bus ist eine Kommunikation oft mehrstufig. Ein Master schreibt zum Beispiel zuerst eine Registeradresse und liest danach Daten zurück. Genau dabei ist wichtig zu verstehen, dass zwischen diesen Phasen **nicht immer ein Stop** gesetzt wird. Stattdessen kann ein **Repeated Start** die Transaktion zusammenhängend halten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst Register auswählen, dann Daten lesen</h3>
  <p>Ein AVR schreibt zuerst an einen Sensor, welches Register er meint. Direkt danach soll gelesen werden. Fachlich ist das keine beliebige Unterbrechung mit Neustart, sondern oft eine zusammenhängende Busfolge mit Repeated Start.</p>
</div>

## Stop und Repeated Start sind nicht dasselbe

<div class="compare-card">
  <p class="card-kicker">Rahmenblick</p>
  <h3>Ende der Transaktion oder fortgesetzte Busübernahme?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Stop</strong>
      <span>Der aktuelle Busvorgang wird beendet. Die Transaktion schließt sauber ab.</span>
    </div>
    <div class="compare-item">
      <strong>Repeated Start</strong>
      <span>Der Master bleibt in einer zusammenhängenden Transaktion und leitet die nächste Phase ein.</span>
    </div>
  </div>
</div>

## Mini-Demo: typische Schreib-Lese-Folge

<div class="figure-card">
  <p class="card-kicker">Busfolge</p>
  <h3>Registerzugriff als zusammenhängende Transaktion</h3>
  <pre><code>START
Slave-Adresse + Write
Registeradresse
REPEATED START
Slave-Adresse + Read
Datenbyte
STOP</code></pre>
</div>

## Warum das didaktisch wichtig ist

Ohne diese Sicht wirkt die Buskommunikation schnell wie eine lose Kette von Einzelteilen. Mit der Repeated-Start-Perspektive wird ruhiger klar:

- welche Phase der Vorbereitung dient,
- wann die Richtung wechselt,
- und warum der Bus als zusammenhängende Transaktion gelesen werden sollte.

## Eine ruhige Prüfstrategie

1. Wird zuerst etwas geschrieben und danach gelesen?
2. Gehört beides fachlich zusammen?
3. Taucht zwischen beiden Phasen ein Stop auf oder ein Repeated Start?
4. Welche Buskontinuität soll damit erhalten bleiben?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Repeated Start ist kein beliebiger Neustart, sondern oft die strukturierte Fortsetzung einer noch laufenden TWI-Transaktion.</p>
</div>
