---
title: "ATmega – ADLAR und 8-Bit-/10-Bit-Auslesen verstehen"
description: "Verstehe, warum der AVR ADC-Ergebnisse unterschiedlich ausrichtet und wie sich das ruhige Lesen eines 8-Bit- oder 10-Bit-Messwerts daraus ergibt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adlar-und-8-bit-10-bit-auslesen-verstehen"]
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

Beim ADC am AVR ist nicht nur wichtig, **wie genau gemessen** wird, sondern auch **wie der Messwert in den Registern liegt**. Genau dafür gibt es die Ausrichtung über **ADLAR**. Sie verändert nicht die Messung selbst, sondern die Art, wie das Ergebnis in **ADCH** und **ADCL** angeordnet wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein grober Helligkeitswert genügt</h3>
  <p>Für eine einfache LED-Helligkeitssteuerung reicht manchmal schon ein grober 8-Bit-Wert. Dann ist es praktisch, wenn der relevante Anteil des ADC-Ergebnisses direkt leicht greifbar liegt. Für genauere Messungen will man dagegen den vollen 10-Bit-Wert vollständig lesen.</p>
</div>

## Was ADLAR wirklich tut

**ADLAR** steht für eine linksbündige Ausrichtung des ADC-Ergebnisses. Didaktisch wichtig ist:

- **ADLAR verändert nicht die physikalische Messung**
- ADLAR verändert die **Anordnung des Ergebnisses in den Registern**

## Zwei ruhige Lesarten

<div class="compare-card">
  <p class="card-kicker">Registerblick</p>
  <h3>Gleicher Messwert, andere Anordnung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Rechtsbündig</strong>
      <span>Der vollständige 10-Bit-Wert wird in der üblichen, vollständigen Form über ADCL und ADCH gelesen.</span>
    </div>
    <div class="compare-item">
      <strong>Linksbündig mit ADLAR</strong>
      <span>Der obere, grob gut nutzbare Anteil liegt günstiger, wenn man vor allem einen 8-Bit-Wert schnell lesen will.</span>
    </div>
  </div>
</div>

## Das ruhige Denkbild

<div class="figure-card">
  <p class="card-kicker">Ausleselogik</p>
  <h3>Nicht der Sensorwert ändert sich, sondern die Registerlage</h3>
  <div class="comparison-grid">
    <section>
      <p class="card-kicker">10-Bit-Lesart</p>
      <h3>Voller Messwert</h3>
      <p>ADCL und ADCH werden als gemeinsamer 10-Bit-Wert gedacht.</p>
    </section>
    <section>
      <p class="card-kicker">8-Bit-Lesart mit ADLAR</p>
      <h3>Praktische Groblesung</h3>
      <p>Der obere Anteil ist so angeordnet, dass er für schnelle 8-Bit-Fälle leichter nutzbar wird.</p>
    </section>
  </div>
</div>

## Wann 8 Bit praktisch sein können

Nicht jede Anwendung braucht die volle ADC-Auflösung. Wenn der Wert vor allem **grob**, **schnell** oder **einfach weiterverarbeitet** werden soll, kann eine 8-Bit-Lesart sinnvoll sein. Beispiele wären:

- grobe Helligkeitssteuerung,
- einfache Schwellenlogik,
- schnelle Visualisierung.

## Wann 10 Bit wichtiger sind

Sobald feinere Unterschiede zählen oder ein genauerer Messwert gebraucht wird, sollte der volle 10-Bit-Wert bewusst gelesen und zusammengesetzt werden. Dann wird die Registeranordnung zur technischen Pflicht statt zum bloßen Komfortthema.

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„ADLAR macht die Messung ungenauer“</h3>
    <p>Nein. ADLAR ändert die Anordnung, nicht die eigentliche ADC-Wandlung.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„ADCH ist immer schon der ganze Wert“</h3>
    <p>Nein. Das hängt davon ab, ob grob 8-Bit gelesen oder der volle 10-Bit-Wert gebraucht wird.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„8 Bit und 10 Bit sind nur zwei Anzeigeformen“</h3>
    <p>Nein. Sie stehen auch für unterschiedliche Ansprüche an Auflösung und Ausleselogik.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Messung selbst                         → ADC-Wandlung
Anordnung im Register                  → ADLAR-Frage
Schnell und grob lesen                 → 8-Bit-Lesart
Vollständige Auflösung nutzen          → 10-Bit-Lesart</code></pre>

## Eine ruhige Prüfstrategie

1. Brauchst du grob 8 Bit oder die volle 10-Bit-Auflösung?
2. Ist die Registeranordnung links- oder rechtsbündig?
3. Welche Registerteile müssen wirklich gelesen werden?
4. Erst danach den Messwert technisch bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> ADLAR ändert nicht die Messung, sondern die Registerlage. Genau das entscheidet, wie ruhig sich 8-Bit- und 10-Bit-Lesarten unterscheiden lassen.</p>
</div>
