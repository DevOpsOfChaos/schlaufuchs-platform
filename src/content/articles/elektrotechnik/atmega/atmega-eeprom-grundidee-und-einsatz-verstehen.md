---
title: "ATmega – EEPROM als Grundidee und Einsatz verstehen"
description: "Verstehe, warum EEPROM am ATmega für dauerhaft benötigte Daten gedacht ist und nicht einfach nur ein weiterer beliebiger Speicherbereich ist."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-eeprom-grundidee-und-einsatz-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
EEPROM am ATmega ist für Daten gedacht, die **auch nach dem Ausschalten** erhalten bleiben sollen. Genau deshalb ist EEPROM nicht einfach „noch etwas Speicher“, sondern eine eigene Speicherrolle mit klarem Einsatzgebiet.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Helligkeitseinstellung soll erhalten bleiben</h3>
  <p>Eine kleine ATmega-Schaltung merkt sich die zuletzt gewählte Helligkeitsstufe. Nach dem Ausschalten soll beim nächsten Start wieder derselbe Wert gelten. Genau für solche Fälle ist EEPROM interessant: nicht für schnelle Zwischenergebnisse, sondern für Daten mit Gedächtnis über den Neustart hinaus.</p>
</div>

## Drei Speicherrollen ruhig trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Flash</strong>
    <span>Hier liegt typischerweise das Programm selbst.</span>
  </div>
  <div class="visual-item">
    <strong>SRAM</strong>
    <span>Hier arbeiten Laufzeitvariablen, Zwischenergebnisse und aktuelle Zustände.</span>
  </div>
  <div class="visual-item">
    <strong>EEPROM</strong>
    <span>Hier liegen Daten, die nach dem Ausschalten erhalten bleiben sollen.</span>
  </div>
</div>

## Wofür EEPROM besonders gut passt

Typische EEPROM-Daten sind zum Beispiel:

- Geräte-Einstellungen,
- Kalibrierwerte,
- letzter sinnvoller Betriebszustand,
- oder selten veränderte Zähler und Kennwerte.

## Mini-Demo: dieselbe Variable, zwei völlig verschiedene Rollen

<div class="compare-card">
  <p class="card-kicker">Datenart statt Datennamen</p>
  <h3>Nicht der Name entscheidet, sondern ob der Wert den Neustart überleben muss</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>aktuelleTasterlage</code></strong>
      <span>Das ist ein typischer Laufzeitwert für SRAM, weil er sich ständig ändert und beim Neustart nicht bewahrt werden muss.</span>
    </div>
    <div class="compare-item">
      <strong><code>gespeicherteHelligkeit</code></strong>
      <span>Das ist ein typischer EEPROM-Kandidat, weil der Wert auch nach dem Ausschalten noch sinnvoll sein soll.</span>
    </div>
  </div>
</div>

## Diese Seite klärt Einsatzgebiet, nicht Schreibverschleiß

Hier geht es um die Frage, **wann EEPROM grundsätzlich sinnvoll ist**. Dass EEPROM-Schreibzugriffe nicht beliebig oft und beliebig gedankenlos erfolgen sollten, gehört auf die eigene Seite zu Schreibzyklen und Verschleiß.

## Eine ruhige Prüfstrategie

1. Muss der Wert nach dem Ausschalten erhalten bleiben?
2. Ändert sich der Wert nur gelegentlich oder ständig?
3. Ist der Wert eher Konfiguration oder eher Laufzeit-Zwischenergebnis?
4. Erst dann den passenden Speicherbereich zuordnen.

<div class="note-panel">
  <p><strong>Merke:</strong> EEPROM ist das Gedächtnis für ausgewählte Daten über den Neustart hinaus – nicht der Standardplatz für beliebige Laufzeitwerte.</p>
</div>
