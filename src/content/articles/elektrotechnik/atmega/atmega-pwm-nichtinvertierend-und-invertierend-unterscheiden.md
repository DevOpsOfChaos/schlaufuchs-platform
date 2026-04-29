---
title: "ATmega – PWM nichtinvertierend und invertierend unterscheiden"
description: "Verstehe, warum der AVR denselben PWM-Zeitverlauf mit unterschiedlicher Ausgangslogik ausgeben kann und wie sich das auf den sichtbaren Tastgrad auswirkt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-pwm-nichtinvertierend-und-invertierend-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

Bei PWM denkt man oft zuerst an Frequenz und Tastgrad. Am AVR gehört aber noch eine zweite Ebene dazu: **Wie wird der Pin beim Compare-Ereignis behandelt?** Genau darüber entscheidet, ob die PWM **nichtinvertierend** oder **invertierend** ausgegeben wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Compare-Wert, aber „falsch herum“ wirkendes Signal</h3>
  <p>Zwei AVR-Programme verwenden denselben Timer und denselben OCR-Wert. Trotzdem wirkt bei einem Aufbau die High-Zeit groß und beim anderen klein. Der Unterschied liegt nicht in einem Rechenfehler, sondern in der gewählten Ausgangslogik am PWM-Pin.</p>
</div>

## Zwei Ausgangslogiken

<div class="visual-grid">
  <div class="visual-item">
    <strong>Nichtinvertierend</strong>
    <span>Das PWM-Signal verhält sich in der üblichen Lesart: mehr Compare-Wert bedeutet typischerweise mehr sichtbare Aktiv-Zeit in derselben Logikrichtung.</span>
  </div>
  <div class="visual-item">
    <strong>Invertierend</strong>
    <span>Die Ausgangslogik wird umgedreht. Derselbe Compare-Wert wirkt daher am Pin zeitlich gegensinnig.</span>
  </div>
</div>

## Das ruhige Denkbild

<div class="compare-card">
  <p class="card-kicker">Nicht nur Zeitbasis, sondern auch Pinlogik</p>
  <h3>Die PWM entsteht aus Timerlogik plus Ausgangslogik</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zeitbasis</strong>
      <span>Der Timer bestimmt, wann Compare-Ereignisse und Periodengrenzen stattfinden.</span>
    </div>
    <div class="compare-item">
      <strong>Ausgangslogik</strong>
      <span>Die COM-Einstellung bestimmt, wie der Pin auf diese Zeitereignisse reagiert.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleicher OCR-Wert, anderer sichtbarer Eindruck

```text
Gleicher OCR-Wert
→ gleicher Vergleichspunkt im Timer

Nichtinvertierend
→ am Pin wirkt die Aktiv-Zeit „normal herum“

Invertierend
→ am Pin wirkt die Aktiv-Zeit „umgedreht“
```

## Warum derselbe Wert nicht dieselbe High-Zeit garantiert

Ein häufiger Denkfehler lautet:

> „Wenn OCR gleich bleibt, bleibt auch das sichtbare Signal gleich.“

Das stimmt nur, wenn auch die **Ausgangslogik** gleich bleibt. Ändert sich die PWM von nichtinvertierend auf invertierend, ändert sich die Lesart des Pins – obwohl Timer, Prescaler und OCR selbst unverändert bleiben können.

## Mini-Prüfbild für den Kopf

<pre><code>Timer bestimmt den Vergleichspunkt      → wann passiert etwas?
COM-Bits bestimmen die Pinreaktion      → wie sieht es am Pin aus?
Gleicher OCR-Wert, andere Pinlogik      → anderer sichtbarer Tastgradeindruck</code></pre>

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„OCR bestimmt alles“</h3>
    <p>Nein. Der Compare-Wert bestimmt den Zeitpunkt im Timer, aber nicht allein die sichtbare Pinlogik.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„Invertierend ist nur Spezialwissen“</h3>
    <p>Nein. Gerade bei Treibern, aktiver Low-Logik oder komplementärem Denken wird diese Unterscheidung praktisch wichtig.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„Mehr OCR heißt immer mehr High“</h3>
    <p>Nur in derselben Ausgangslogik. Bei invertierender PWM ist die sichtbare Wirkung am Pin anders zu lesen.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

1. In welchem PWM-Modus läuft der Timer?
2. Welche COM-Einstellung bestimmt die Ausgangslogik?
3. Wird der Pin nichtinvertierend oder invertierend angesteuert?
4. Erst danach den sichtbaren Tastgrad am Pin bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Zur PWM am AVR gehören nicht nur Timer und OCR-Wert, sondern auch die gewählte Ausgangslogik am Pin.</p>
</div>
