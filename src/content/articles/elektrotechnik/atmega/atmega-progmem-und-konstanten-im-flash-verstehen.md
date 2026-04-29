---
title: "ATmega – PROGMEM und Konstanten im Flash verstehen"
description: "Verstehe, warum konstante Tabellen oder Texte am AVR oft besser im Flash liegen als im SRAM und warum das fachlich mehr ist als bloß „Speicher sparen“."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-progmem-und-konstanten-im-flash-verstehen"]
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
Am AVR ist Speicher nicht einfach „irgendwo Platz“. Gerade das **SRAM** ist oft knapp. Deshalb wird wichtig, **welche Daten sich wirklich ändern** und welche nur als feste Tabelle, fester Text oder konstante Zuordnung im Programm gebraucht werden. Genau hier kommt **PROGMEM** ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine feste Texttabelle braucht keinen Laufzeitspeicher</h3>
  <p>Wenn ein Mikrocontroller immer dieselben Menüpunkte oder feste Lookup-Werte nutzt, wäre es unnötig, diese Daten im knappen SRAM für veränderliche Laufzeitdaten zu belegen. Fachlich ruhiger ist es, die konstanten Daten im Programmspeicher zu halten.</p>
</div>

## Die Speicherrollen ruhig trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Flash</strong>
    <span>Hier liegt das Programm, und hier können auch konstante Programmdaten sinnvoll aufgehoben sein.</span>
  </div>
  <div class="visual-item">
    <strong>SRAM</strong>
    <span>Hier liegen veränderliche Laufzeitdaten, mit denen das Programm aktiv arbeitet.</span>
  </div>
  <div class="visual-item">
    <strong>PROGMEM-Idee</strong>
    <span>Konstante Daten sollen ihre konstante Rolle behalten und nicht unnötig SRAM verbrauchen.</span>
  </div>
</div>

## Mini-Demo: dieselben Daten, andere Speicherrolle

<div class="figure-card">
  <p class="card-kicker">Speicherbild</p>
  <h3>Nicht die Tabelle ist anders, sondern ihr Aufenthaltsort</h3>
  <pre><code>Konstante Lookup-Tabelle:
  10, 20, 30, 40

Variante A:
  im SRAM abgelegt → belastet Laufzeitspeicher

Variante B:
  im Flash abgelegt → SRAM bleibt eher für veränderliche Daten frei</code></pre>
  <p>Die fachlich wichtige Frage ist also nicht „Welche Zahl steht in der Tabelle?“, sondern „Welche Speicherrolle passt zu diesen Daten?“</p>
</div>

## Warum das mehr ist als „Speicher sparen“

PROGMEM ist nicht bloß eine Sparmaßnahme. Es ist eine **saubere Rollenentscheidung**:

- konstante Daten bleiben bei den Programmdaten,
- veränderliche Daten bleiben im Arbeitsspeicher,
- und dadurch wird die Speicherstruktur des Projekts lesbarer.

## Typische Fälle für PROGMEM

Besonders naheliegend sind zum Beispiel:

- feste Textlisten,
- konstante Menüs,
- Lookup-Tabellen,
- feste Zuordnungen oder Kennfelder.

## Abgrenzung zur Nachbarseite

Diese Seite erklärt bewusst die **Rolle konstanter Programmdaten im Flash**. Sie erklärt nicht noch einmal allgemein den Unterschied zwischen Flash, SRAM und EEPROM als Gesamtspeichertypen. Dadurch bleibt die Logik sauber getrennt:

- Speichertypen unterscheiden → eigene Grundlagenseite
- konstante Programmdaten sinnvoll im Flash halten → diese Seite

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Datenrolle prüfen</strong>
    <span>Ändern sich diese Daten zur Laufzeit überhaupt?</span>
  </div>
  <div class="step-item">
    <strong>2. SRAM kritisch lesen</strong>
    <span>Belastet die Datenmenge unnötig den knappen Arbeitsspeicher?</span>
  </div>
  <div class="step-item">
    <strong>3. Flash als Datenort sehen</strong>
    <span>Konstante Programmdaten können fachlich ruhig im Programmspeicher bleiben.</span>
  </div>
  <div class="step-item">
    <strong>4. Strategie benennen</strong>
    <span>PROGMEM ist eine Speicherentscheidung, nicht bloß ein Syntaxdetail.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> PROGMEM ist keine bloße C-Besonderheit. Es ist die ruhige Entscheidung, konstante Programmdaten im Flash zu halten und das knappe SRAM für veränderliche Laufzeitdaten frei zu lassen.</p>
</div>
