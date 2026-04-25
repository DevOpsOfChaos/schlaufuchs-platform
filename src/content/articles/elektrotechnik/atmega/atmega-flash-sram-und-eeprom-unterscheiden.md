---
title: ATmega – Flash, SRAM und EEPROM unterscheiden
description: Verstehe die drei wichtigsten Speicherarten am AVR und warum Programmcode, Laufdaten und dauerhafte Einstellungen nicht im selben Speicher zuhause sind.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - speicher-und-daten
  - atmega-flash-sram-und-eeprom-unterscheiden
learningGoals:
  - Du erklärst die Grundrollen von Flash, SRAM und EEPROM sauber.
  - Du unterscheidest Programmspeicher, Laufzeitspeicher und dauerhafte Einstellwerte fachlich korrekt.
  - Du liest AVR-Speicherfragen ruhiger als Rollenverteilung statt nur als Datengröße.
practiceIdeas:
  - Ordne bei kleinen Beispielen Programmcode, Zählvariable und Kalibrierwert den passenden Speicherarten zu.
  - Vergleiche, welche Daten nach dem Ausschalten erhalten bleiben und welche nicht.
  - Erkläre zuerst die Aufgabe der Information und erst dann den Speichername.
commonMistakes:
  - Alle Datenarten als austauschbar im gleichen Speicher zu sehen.
  - Zu denken, SRAM sei für dauerhafte Werte nach dem Ausschalten geeignet.
  - EEPROM wie gewöhnlichen Laufzeitspeicher in jeder Schleifenrunde behandeln zu wollen.
keyTakeaways:
  - Flash speichert typischerweise den Programmcode.
  - SRAM hält die veränderlichen Laufdaten während des Betriebs.
  - EEPROM eignet sich für Werte, die nach dem Ausschalten erhalten bleiben sollen.
recognizeSignals:
  - Es geht um Programmspeicher, Variablen, Konfiguration oder dauerhafte Werte.
  - Du sollst erklären, warum ein Wert nach Reset erhalten bleibt oder verloren geht.
  - In Aufgaben müssen Datenarten dem passenden Speicher zugeordnet werden.
selfCheckPoints:
  - Kann ich Programmspeicher, Laufdaten und dauerhafte Einstellwerte trennen?
  - Kann ich erklären, welcher Speicher flüchtig ist und welcher nicht?
  - Kann ich einen Anwendungsfall dem passenden Speicher zuordnen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - avr
  - speicher
level: einfach
draft: false
---

Am AVR ist Speicher nicht einfach „irgendwo liegt irgendetwas“. Schon im Einstieg ist es wichtig, drei Rollen sauber zu trennen: **Flash** für Programmcode, **SRAM** für veränderliche Laufdaten und **EEPROM** für Werte, die auch nach dem Ausschalten erhalten bleiben sollen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Programm, Zählerstand und Kalibrierwert</h3>
  <p>Ein AVR blinkt eine LED nach einem festen Programm. Zusätzlich zählt er Tastendrücke und hat einen Kalibrierwert, der nach dem Ausschalten erhalten bleiben soll. Genau hier sieht man: Nicht jede Information gehört in denselben Speicher.</p>
</div>

## Drei Speicherrollen ruhig trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Flash</strong>
    <span>Hier liegt typischerweise das Programm, das der Controller ausführt.</span>
  </div>
  <div class="visual-item">
    <strong>SRAM</strong>
    <span>Hier liegen veränderliche Laufdaten während des Betriebs, zum Beispiel Zähler oder temporäre Variablen.</span>
  </div>
  <div class="visual-item">
    <strong>EEPROM</strong>
    <span>Hier können Werte abgelegt werden, die auch nach dem Ausschalten erhalten bleiben sollen.</span>
  </div>
</div>

## Mini-Demo: dieselbe Schaltung, drei Datenarten

<pre><code>Programmablauf der LED      → Flash
aktueller Tastenzähler      → SRAM
Kalibrierwert nach Neustart → EEPROM</code></pre>

Die ruhige Lesart ist:

- der Programmcode selbst ist nicht bloß eine normale Laufvariable,
- ein laufender Zähler muss schnell veränderbar sein,
- ein dauerhafter Einstellwert braucht einen nichtflüchtigen Speicher.

## Flüchtig oder dauerhaft?

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Was bleibt nach dem Ausschalten erhalten?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>SRAM</strong>
      <span>Verliert seine Inhalte beim Ausschalten oder Reset typischerweise wieder.</span>
    </div>
    <div class="compare-item">
      <strong>EEPROM</strong>
      <span>Ist gerade für Werte interessant, die erhalten bleiben sollen.</span>
    </div>
  </div>
</div>

## Diese Seite behandelt bewusst Rollen, nicht schon jede Schreibstrategie

Hier geht es um die ruhige Grundtrennung der Speicherarten. Konkrete Bibliotheksaufrufe, Zugriffsmuster oder Schonung von Schreibzyklen bauen darauf auf und gehören in eigene Vertiefungen.

## Eine ruhige Prüfstrategie

1. Ist die Information Programmcode, Laufvariable oder dauerhafter Einstellwert?
2. Muss der Wert nach dem Ausschalten erhalten bleiben?
3. Muss der Wert im laufenden Betrieb schnell und häufig veränderbar sein?
4. Erst danach den passenden Speicher zuordnen.

<div class="note-panel">
  <p><strong>Merke:</strong> Flash speichert typischerweise den Code, SRAM die laufenden veränderlichen Daten und EEPROM die dauerhaft zu behaltenden Werte.</p>
</div>
