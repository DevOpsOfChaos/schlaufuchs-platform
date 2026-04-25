---
title: ATmega – ADC als Grundidee verstehen
description: Verstehe, wie ein AVR aus einer analogen Eingangsspannung einen digitalen Messwert macht und warum Referenzspannung und Auflösung dabei wichtig sind.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - analoge-eingaenge
  - atmega-adc-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee eines ADC beim AVR.
  - Du beschreibst den Zusammenhang zwischen analoger Spannung, Referenzspannung und digitalem Messwert.
  - Du liest eine ADC-Messung ruhiger als Übersetzung statt als magische Zahl.
practiceIdeas:
  - Vergleiche eine analoge Spannung mit dem dazugehörigen digitalen Messwert.
  - Erkläre die Rolle der Referenzspannung in Worten.
  - Lies einen Messwert nicht nur als Zahl, sondern als Ergebnis einer Spannungsübersetzung.
commonMistakes:
  - Zu denken, der ADC messe Spannung absolut ohne Bezug zur Referenz.
  - Den digitalen Messwert mit der Eingangsspannung direkt gleichzusetzen.
  - Zu vergessen, dass Auflösung und Referenz zusammen die Lesbarkeit des Messwerts bestimmen.
keyTakeaways:
  - Der ADC übersetzt eine analoge Eingangsspannung in einen digitalen Zahlenwert.
  - Die Referenzspannung bestimmt, auf welchen Bereich sich der Messwert bezieht.
  - Ein ADC-Wert ist keine Spannung selbst, sondern die digitale Darstellung innerhalb eines Bezugsbereichs.
recognizeSignals:
  - Es geht um ADC, Messwert, Referenzspannung oder analoge Eingänge.
  - Du sollst erklären, warum aus einer Spannung ein Zahlenwert wird.
  - In Aufgaben müssen Messwerte und Bezugsbereich zusammen gedacht werden.
selfCheckPoints:
  - Kann ich analoge Eingangsspannung und digitalen ADC-Wert sauber unterscheiden?
  - Kann ich die Rolle der Referenzspannung erklären?
  - Kann ich sagen, warum derselbe Messwert nur mit Bezugsbereich sinnvoll ist?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - analog
level: mittel
draft: false
---

Ein AVR kann nicht direkt „mit Spannungen denken“. Damit ein Mikrocontroller eine analoge Spannung auswerten kann, braucht er einen **Analog-Digital-Wandler (ADC)**. Dieser übersetzt eine Eingangsspannung in einen digitalen Zahlenwert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Potentiometer liefert keine fertige Zahl</h3>
  <p>Drehst du an einem Potentiometer, ändert sich eine Spannung am ADC-Eingang. Der AVR liest dort aber nicht „2,3 Volt“, sondern erzeugt einen digitalen Messwert, der sich auf eine Referenzspannung bezieht.</p>
</div>

## Was der ADC fachlich leistet

<div class="visual-grid">
  <div class="visual-item">
    <strong>Analoger Eingang</strong>
    <span>Hier liegt eine reale Spannung an, die sich kontinuierlich ändern kann.</span>
  </div>
  <div class="visual-item">
    <strong>Referenzspannung</strong>
    <span>Sie bestimmt, auf welchen Messbereich sich der ADC-Wert bezieht.</span>
  </div>
  <div class="visual-item">
    <strong>Digitaler Messwert</strong>
    <span>Das Ergebnis ist eine Zahl, nicht die Spannung selbst.</span>
  </div>
</div>

## Mini-Demo: gleiche Logik, verschiedene Darstellung

<div class="figure-card">
  <p class="card-kicker">Messbild</p>
  <h3>Spannung und Zahlenwert sind nicht dasselbe</h3>
  <pre><code>Eingang: 0 V           → kleiner ADC-Wert
Eingang: mittlere Spannung → mittlerer ADC-Wert
Eingang: nahe Referenz  → großer ADC-Wert
</code></pre>
  <p>Der ADC liefert also eine geordnete Zahlenübersetzung. Fachlich wichtig ist: Diese Zahl hat nur mit Bezug zur Referenzspannung eine ruhige Bedeutung.</p>
</div>

## Referenzspannung ruhig mitdenken

Ein ADC-Wert ist nur dann sinnvoll lesbar, wenn klar ist:

- Welche Referenzspannung gilt?
- Welche Auflösung wird benutzt?
- In welchem Bereich liegt die Eingangsspannung?

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Analoge Größe erkennen</strong>
    <span>Welche reale Spannung wird überhaupt gemessen?</span>
  </div>
  <div class="step-item">
    <strong>2. Bezugsbereich erkennen</strong>
    <span>Welche Referenzspannung bestimmt den Messrahmen?</span>
  </div>
  <div class="step-item">
    <strong>3. Zahlenwert einordnen</strong>
    <span>Ist der ADC-Wert eher klein, mittel oder groß im gewählten Messbereich?</span>
  </div>
  <div class="step-item">
    <strong>4. Übersetzung benennen</strong>
    <span>Der ADC-Wert ist die digitale Darstellung einer analogen Eingangssituation.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ist nicht direkt die Spannung selbst, sondern die digitale Übersetzung einer Spannung innerhalb eines definierten Bezugsbereichs.</p>
</div>
