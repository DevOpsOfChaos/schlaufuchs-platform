---
title: ATmega – Registerbits sicher setzen und löschen
description: Lerne, wie einzelne Registerbits geändert werden, ohne Nachbarbits versehentlich zu überschreiben.
subject: elektrotechnik
section: Mikrocontroller und ATmega
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - registerbits-sicher-setzen-und-loeschen
learningGoals:
  - "Du erklärst, warum Registeränderungen meistens bitweise erfolgen sollten."
  - "Du unterscheidest Setzen, Löschen, Umschalten und Prüfen einzelner Bits."
  - "Du vermeidest typische Fehler, bei denen Nachbarbits unabsichtlich verändert werden."
practiceIdeas:
  - "Markiere in einem Register zuerst das Zielbit und dann alle Bits, die unverändert bleiben müssen."
  - "Übersetze jede Bitoperation einmal in Alltagssprache: setzen, löschen, umschalten oder prüfen."
  - "Vergleiche eine sichere Bitmaske mit einer direkten Registerzuweisung."
commonMistakes:
  - "Ein ganzes Register neu zu beschreiben, obwohl nur ein einzelnes Bit geändert werden soll."
  - "Setzen und Prüfen eines Bits im Code miteinander zu verwechseln."
  - "Bitmasken zu kopieren, ohne zu lesen, welches Bit tatsächlich betroffen ist."
keyTakeaways:
  - "Register enthalten oft mehrere unabhängige Einstellungen im selben Byte."
  - "Bitmasken ändern gezielt einzelne Bits und schützen die übrigen Einstellungen."
  - "Sichere Registerarbeit beginnt mit der Frage, welches Bit verändert werden darf."
recognizeSignals:
  - "Es geht um DDRx, PORTx, PINx oder andere Register mit einzelnen Steuerbits."
  - "Im Code stehen Operatoren wie |, &, ~ oder ^ zusammen mit einer Bitverschiebung."
  - "Eine Aufgabe fragt, warum eine direkte Zuweisung zu grob oder gefährlich wäre."
selfCheckPoints:
  - "Kann ich sagen, welches Bit mein Code verändert?"
  - "Bleiben alle Nachbarbits unverändert?"
  - "Kann ich die Bitoperation ohne Codewörter erklären?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - register
  - bitmasken
level: einfach
draft: false
---

## Grundidee

Ein ATmega steuert viele Funktionen über Register. Ein Register ist dabei kein einzelner Schalter, sondern eher eine kleine Schalterleiste aus Bits. Darum ist die wichtigste Frage nicht nur: **Welches Register brauche ich?** Sondern auch: **Welches Bit in diesem Register darf ich verändern?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Pin soll Ausgang werden, aber die anderen Pins sollen bleiben wie sie sind</h3>
  <p>Wenn nur <code>PB3</code> als Ausgang gesetzt werden soll, darf der Code nicht nebenbei <code>PB0</code>, <code>PB1</code> oder <code>PB2</code> verändern. Genau dafür sind Bitmasken da.</p>
</div>

## Vier Grundoperationen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Bit setzen</strong>
    <span>Ein Zielbit wird auf 1 gebracht, die übrigen Bits bleiben erhalten.</span>
  </div>
  <div class="visual-item">
    <strong>Bit löschen</strong>
    <span>Ein Zielbit wird auf 0 gebracht, die übrigen Bits bleiben erhalten.</span>
  </div>
  <div class="visual-item">
    <strong>Bit umschalten</strong>
    <span>Ein Zielbit wechselt zwischen 0 und 1.</span>
  </div>
  <div class="visual-item">
    <strong>Bit prüfen</strong>
    <span>Ein Zielbit wird gelesen, ohne das Register zu verändern.</span>
  </div>
</div>

## Mini-Demo: Nachbarbits schützen

<div class="figure-card">
  <p class="card-kicker">Codevergleich</p>
  <h3>Sicher ist die Operation, wenn nur das Zielbit betroffen ist</h3>
  <pre><code>// PB3 als Ausgang setzen:
DDRB |= (1 << PB3);

// PB3 wieder als Eingang setzen:
DDRB &= ~(1 << PB3);

// PB3 in PORTB umschalten:
PORTB ^= (1 << PB3);

// PB3 in PINB prüfen:
if (PINB & (1 << PB3)) {
    // Eingang ist logisch 1
}</code></pre>
</div>

## Warum direkte Zuweisungen oft zu grob sind

Eine direkte Zuweisung wie `DDRB = 0b00001000;` kann in einfachen Beispielen funktionieren. In echter Registerarbeit ist sie aber oft zu grob: Sie schreibt das komplette Register neu. Dadurch können Einstellungen verloren gehen, die vorher an anderen Bits gesetzt waren.

<div class="compare-card">
  <p class="card-kicker">Denkfehler vermeiden</p>
  <h3>Register sind gemeinsam genutzte Steuerfelder</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ungünstig</strong>
      <span>„Ich schreibe das Register einfach komplett neu.“</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>„Ich ändere nur das Zielbit und lasse den Rest unangetastet.“</span>
    </div>
  </div>
</div>

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Register benennen</strong>
    <span>Geht es um Richtung, Ausgangswert, Eingangslesen oder ein Spezialregister?</span>
  </div>
  <div class="step-item">
    <strong>2. Zielbit markieren</strong>
    <span>Welches Bit soll wirklich verändert oder gelesen werden?</span>
  </div>
  <div class="step-item">
    <strong>3. Operation übersetzen</strong>
    <span>Setzen, löschen, umschalten oder prüfen?</span>
  </div>
  <div class="step-item">
    <strong>4. Nachbarbits prüfen</strong>
    <span>Bleiben alle anderen Bits erhalten?</span>
  </div>
</div>

## Abgrenzung

Diese Seite erklärt die **Bitoperationen selbst**. Sie ersetzt nicht die Seiten zu `DDRx`, `PORTx` und `PINx`, sondern macht deren Code lesbarer. Wer Registerbits sicher lesen kann, versteht danach auch Taster, LEDs, Pull-ups, Timer-Flags und Interrupt-Masken deutlich ruhiger.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Registerarbeit ist selten „Register komplett neu schreiben“. Meist heißt sie: ein Bit gezielt ändern und alle anderen Bits schützen.</p>
</div>
