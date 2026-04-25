---
title: ATmega – PWM-Frequenz und Tastverhältnis trennen
description: Verstehe, warum PWM nicht nur „heller oder dunkler“ bedeutet und wie Frequenz und Tastverhältnis beim AVR zwei verschiedene Stellschrauben sind.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitverhalten
  - atmega-pwm-frequenz-und-tastverhaeltnis-trennen
learningGoals:
  - Du erklärst den Unterschied zwischen PWM-Frequenz und Tastverhältnis.
  - Du beschreibst PWM eher als Zeitverhalten statt nur als Helligkeitstrick.
  - Du liest Timer-Einstellungen ruhiger, wenn Grundperiode und Einschaltanteil getrennt bleiben.
practiceIdeas:
  - Vergleiche zwei PWM-Signale mit gleicher Frequenz, aber anderem Tastverhältnis.
  - Vergleiche zwei PWM-Signale mit gleichem Tastverhältnis, aber anderer Frequenz.
  - Lies Helligkeit, Motorverhalten oder Tonhöhe nicht sofort als dieselbe Stellgröße.
commonMistakes:
  - Tastverhältnis und Frequenz als dasselbe zu behandeln.
  - Zu denken, PWM ändere einfach direkt eine analoge Spannung.
  - Einen Compare-Wert zu deuten, ohne den zugrunde liegenden Timerzyklus mitzudenken.
keyTakeaways:
  - PWM beschreibt ein periodisches Ein-Aus-Signal, keine echte Analogspannung.
  - Das Tastverhältnis bestimmt den Anteil der Ein-Zeit innerhalb einer Periode.
  - Die Frequenz beschreibt, wie schnell sich diese Periode wiederholt.
recognizeSignals:
  - Es geht um Helligkeit, Motoransteuerung, PWM, Duty Cycle oder Frequenz.
  - Du sollst erklären, warum zwei PWM-Signale gleich hell wirken können, aber sich zeitlich anders verhalten.
  - In Aufgaben müssen Einschaltanteil und Grundperiode bewusst getrennt gelesen werden.
selfCheckPoints:
  - Kann ich Tastverhältnis und Frequenz fachlich trennen?
  - Kann ich erklären, warum gleiche Helligkeit nicht automatisch dieselbe Frequenz bedeutet?
  - Kann ich ein PWM-Signal als Zeitverhalten beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
  - timer
level: mittel
draft: false
---

## Grundidee

PWM wird oft zuerst als „LED heller machen“ gelernt. Das ist nützlich, aber didaktisch zu eng. Fachlich beschreibt PWM zunächst ein **periodisches Ein-Aus-Signal**. Erst danach fragt man, wie eine Last darauf reagiert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>50 Prozent sind nicht die ganze Geschichte</h3>
  <p>Zwei PWM-Signale haben beide ein Tastverhältnis von 50&nbsp;Prozent. Trotzdem können sie sich in der Praxis anders anfühlen oder verhalten, wenn ihre Frequenzen deutlich unterschiedlich sind. Genau deshalb muss man Frequenz und Tastverhältnis getrennt lesen.</p>
</div>

## Zwei Stellgrößen statt einer Gesamtzahl

<div class="compare-card">
  <p class="card-kicker">Saubere Trennung</p>
  <h3>PWM braucht Grundperiode und Ein-Anteil</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Frequenz</strong>
      <span>Beschreibt, wie oft sich eine ganze PWM-Periode pro Sekunde wiederholt.</span>
    </div>
    <div class="compare-item">
      <strong>Tastverhältnis</strong>
      <span>Beschreibt, wie groß der Anteil der Ein-Zeit innerhalb einer Periode ist.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleicher Ein-Anteil, andere Zeitstruktur

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>50 Prozent können zeitlich trotzdem sehr verschieden aussehen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>PWM A</strong></p>
      <pre style="margin:0;"><code>██__██__██__</code></pre>
      <p style="margin:0.6rem 0 0;">50 % Tastverhältnis, eher langsame Wiederholung.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>PWM B</strong></p>
      <pre style="margin:0;"><code>█_█_█_█_█_█_</code></pre>
      <p style="margin:0.6rem 0 0;">Auch 50 % Tastverhältnis, aber viel schnellere Wiederholung.</p>
    </div>
  </div>
</div>

## Tastverhältnis ist keine Frequenz in Prozent

Ein häufiger Denkfehler ist, eine PWM-Einstellung auf „eine Zahl“ reduzieren zu wollen. Das Tastverhältnis sagt aber nur, **wie lange innerhalb einer Periode eingeschaltet ist**. Wie schnell diese Perioden hintereinander folgen, ist eine zweite Frage.

## Warum das für AVR-Register wichtig ist

Beim ATmega entstehen PWM-Signale aus Timerlogik und Compare-Werten. Genau deshalb lohnt es sich, zwei Ebenen getrennt zu lesen:

1. Welcher Timerzyklus legt die Grundperiode fest?
2. Welcher Compare-Wert bestimmt, wann innerhalb dieser Periode umgeschaltet wird?

## Diese Seite erklärt bewusst nicht den kompletten PWM-Modusvergleich

Hier geht es nur um die **Trennung von Frequenz und Tastverhältnis**. Die Auswahl bestimmter Timer-Modi oder spezieller Registerpfade kann auf anderen Seiten vertieft werden. So bleibt die Kernaussage klar:

- **Frequenz** = Wie schnell wiederholt sich die Periode?
- **Tastverhältnis** = Wie groß ist der Ein-Anteil innerhalb dieser Periode?

## Eine ruhige Prüfstrategie

1. Wie lang ist eine PWM-Periode?
2. Wie groß ist die Ein-Zeit innerhalb dieser Periode?
3. Was ist die eigentliche technische Frage: Helligkeit, Ansteuerung, Geräusch oder Zeitverhalten?
4. Wird aus einem Wert gerade Frequenz oder Tastverhältnis gelesen?

<div class="note-panel">
  <p><strong>Merke:</strong> PWM besteht nicht aus einer einzigen „Stärkezahl“. Frequenz und Tastverhältnis müssen als zwei getrennte Zeitgrößen gelesen werden.</p>
</div>
