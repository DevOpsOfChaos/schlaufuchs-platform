---
title: ATmega TWI/I²C Open-Drain und Pull-up verstehen
description: Verstehe, warum I²C-Leitungen nicht aktiv auf HIGH getrieben werden und weshalb Pull-up-Widerstände für SDA und SCL mitgedacht werden müssen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-i2c-open-drain-und-pullup-verstehen
learningGoals:
  - Du erklärst, warum I²C-Leitungen als Open-Drain/Open-Collector-Logik gedacht werden.
  - Du beschreibst die Rolle von Pull-up-Widerständen auf SDA und SCL.
  - Du liest HIGH und LOW auf dem Bus eher als gemeinsames Leitungsverhalten als als einzelne Treiberaktion.
practiceIdeas:
  - Vergleiche eine aktiv getriebene Push-Pull-Leitung mit einer I²C-Leitung.
  - Begründe, warum mehrere Teilnehmer auf einer I²C-Leitung LOW ziehen dürfen, ohne sich direkt zu widersprechen.
  - Lies Pull-ups nicht als Nebendetail, sondern als Teil der Buslogik.
commonMistakes:
  - Zu denken, ein I²C-Teilnehmer würde die Leitung aktiv auf HIGH treiben.
  - SDA und SCL wie normale Push-Pull-Ausgänge zu lesen.
  - Pull-up-Widerstände als optionale Dekoration statt als Teil der Funktionslogik zu behandeln.
keyTakeaways:
  - I²C-Leitungen werden typischerweise nur aktiv nach LOW gezogen.
  - HIGH entsteht über Pull-up-Widerstände und nicht über aktives Hochdrücken eines Teilnehmers.
  - Gerade dadurch können mehrere Teilnehmer dieselbe Busleitung ruhig gemeinsam nutzen.
recognizeSignals:
  - Es geht um SDA, SCL, Pull-up-Widerstände oder gemeinsame Busleitungen.
  - Du sollst erklären, warum auf einer Leitung mehrere Teilnehmer zusammenarbeiten können.
  - In Beispielen ist das Leitungsverhalten wichtiger als der einzelne Controllerpin.
selfCheckPoints:
  - Kann ich LOW-Ziehen und HIGH-Entstehen sauber unterscheiden?
  - Kann ich erklären, warum Pull-ups auf dem I²C-Bus fachlich nötig sind?
  - Kann ich begründen, warum Open-Drain-Konflikte ruhiger beherrschbar sind als Push-Pull-Konflikte?
tags:
  - elektrotechnik
  - atmega
  - i2c
  - twi
  - pullup
level: mittel
draft: false
---

## Grundidee

Beim I²C-Bus ist die wichtigste Frage nicht nur **„Welche Bits werden übertragen?“**, sondern zuerst: **„Wie verhält sich die Leitung elektrisch?“** Genau dort unterscheidet sich I²C deutlich von einer normalen Push-Pull-Leitung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Teilnehmer an derselben Datenleitung</h3>
  <p>Wenn zwei Controller oder ein Controller und ein Sensor dieselbe SDA-Leitung nutzen, wäre ein aktives HIGH gegen ein aktives LOW ein direkter Konflikt. I²C vermeidet genau das, indem die Teilnehmer die Leitung im Kern nur nach LOW ziehen. HIGH entsteht über Pull-up-Widerstände.</p>
</div>

## Die elektrische Leitidee

<div class="visual-grid">
  <div class="visual-item">
    <strong>LOW</strong>
    <span>Ein Teilnehmer zieht die Leitung aktiv nach unten.</span>
  </div>
  <div class="visual-item">
    <strong>HIGH</strong>
    <span>Kein Teilnehmer zieht nach LOW, daher heben Pull-up-Widerstände die Leitung an.</span>
  </div>
  <div class="visual-item">
    <strong>Pull-up</strong>
    <span>Der Widerstand sorgt dafür, dass die Leitung im Ruhezustand auf HIGH liegt.</span>
  </div>
  <div class="visual-item">
    <strong>Buslogik</strong>
    <span>Mehrere Teilnehmer können dieselbe Leitung teilen, weil sie LOW gemeinsam erzwingen, aber HIGH nicht gegeneinander treiben.</span>
  </div>
</div>

## Mini-Demo: Push-Pull gegen I²C-Denken

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Warum dieselbe Leitung im I²C-Fall ruhiger teilbar ist</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Push-Pull-Denken</strong>
      <span>Ein Ausgang kann aktiv HIGH und aktiv LOW treiben. Zwei Teilnehmer auf derselben Leitung geraten dabei leicht in Konflikt.</span>
    </div>
    <div class="compare-item">
      <strong>I²C/Open-Drain-Denken</strong>
      <span>Teilnehmer ziehen die Leitung nur nach LOW. HIGH entsteht gemeinsam über den Pull-up.</span>
    </div>
  </div>
</div>

## Der ruhige Satz zum Bus

```text
LOW ist eine aktive Aktion.
HIGH ist auf dem I²C-Bus meist der Ruhezustand über den Pull-up.
```

Genau diese Lesart verhindert viele Denkfehler.

## Warum Pull-ups keine Nebensache sind

Ohne Pull-up-Widerstände würde die Leitung nach dem Loslassen nicht sauber auf HIGH zurückkehren. Der Bus hätte dann keinen klaren Ruhezustand. Pull-ups sind also kein Zubehör, sondern Teil der grundlegenden Buslogik.

## Eine ruhige Prüfstrategie

1. Wird die Leitung aktiv nach LOW gezogen oder nur freigegeben?
2. Woher kommt das HIGH-Signal wirklich?
3. Teilen sich mehrere Teilnehmer dieselbe Leitung?
4. Ist die Buslogik elektrisch oder nur rein logisch beschrieben?

<div class="note-panel">
  <p><strong>Merke:</strong> Auf dem I²C-Bus ist HIGH meist kein aktiv getriebenes Signal eines Teilnehmers, sondern das Ergebnis der Pull-up-Widerstände.</p>
</div>
