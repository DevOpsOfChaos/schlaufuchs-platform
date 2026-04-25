---
title: ATmega – PWM mit RC-Filter als DAC-Ersatz verstehen
description: Verstehe, warum ein PWM-Signal mit Tiefpass ähnlich wie eine analoge Ausgangsspannung wirken kann und wo die Grenzen dieser Idee liegen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ausgabe-und-pwm
  - atmega-pwm-mit-rc-filter-als-dac-ersatz-verstehen
learningGoals:
  - Du erklärst die Grundidee eines PWM-Ausgangs mit RC-Filter.
  - Du unterscheidest Tastverhältnis und geglätteten Mittelwert sauber voneinander.
  - Du benennst die Grenzen dieser Lösung gegenüber einem echten DAC.
practiceIdeas:
  - Vergleiche ein rohes PWM-Signal mit einer geglätteten Spannung hinter einem RC-Filter.
  - Prüfe, warum PWM-Frequenz und Filterzeitkonstante zusammen gedacht werden müssen.
  - Lies eine analoge Näherung nicht sofort als vollwertigen DAC-Ersatz.
commonMistakes:
  - Zu denken, der PWM-Pin liefere direkt eine echte Analogspannung.
  - Tastverhältnis und Filterwirkung getrennt voneinander zu betrachten.
  - Zu übersehen, dass Restwelligkeit und Dynamik Grenzen setzen.
keyTakeaways:
  - PWM liefert zunächst nur ein getaktetes Digitalsignal.
  - Erst ein Tiefpass macht daraus eine ruhigere Spannung mit Mittelwertcharakter.
  - Diese Lösung ist praktisch, aber nicht gleichwertig mit einem echten präzisen DAC.
recognizeSignals:
  - Es geht um PWM, RC-Filter, analoge Näherung oder „Pseudo-DAC“.
  - Du sollst erklären, warum ein digitales Signal analog wirken kann.
  - In Aufgaben ist der Zusammenhang zwischen Frequenz, Tastverhältnis und Filter entscheidend.
selfCheckPoints:
  - Kann ich rohes PWM-Signal und geglättete Spannung trennen?
  - Kann ich den Mittelwertgedanken verständlich erklären?
  - Kann ich die Grenzen gegenüber einem echten DAC benennen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
  - dac
level: fortgeschritten
draft: false
---

## Grundidee

Ein PWM-Pin des ATmega ist zunächst kein Analogausgang. Er schaltet nur zwischen zwei digitalen Pegeln um. Wenn dieses Signal aber schnell genug ist und danach durch einen **RC-Tiefpass** läuft, entsteht am Ausgang eine geglättete Spannung, die sich wie ein analoger Mittelwert lesen lässt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Aus einem Tastverhältnis wird eine ruhige Spannung</h3>
  <p>Ein PWM-Signal mit 25 Prozent High-Zeit liegt die meiste Zeit auf Low und nur einen kleineren Anteil auf High. Hinter einem passenden RC-Filter wird daraus keine harte Rechteckfolge mehr, sondern eine deutlich ruhigere Spannung mit entsprechend kleinerem Mittelwert.</p>
</div>

## Das Denkmodell in drei Schritten

<div class="visual-grid">
  <div class="visual-item">
    <strong>Digitalsignal</strong>
    <span>Der Pin schaltet nur zwischen Low und High.</span>
  </div>
  <div class="visual-item">
    <strong>Tastverhältnis</strong>
    <span>Es bestimmt, wie groß der mittlere High-Anteil ist.</span>
  </div>
  <div class="visual-item">
    <strong>RC-Filter</strong>
    <span>Er glättet die schnellen Wechsel zu einer ruhigeren Spannung.</span>
  </div>
</div>

## Mini-Demo: rohes Signal gegen geglätteten Eindruck

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Aus Rechteck wird kein Wunder, aber oft eine brauchbare Näherung</h3>
  <pre><code>PWM roh:  _-_-_-_-_-_
Filter:   ────────

25 % Tastverhältnis → kleiner Mittelwert
75 % Tastverhältnis → größerer Mittelwert</code></pre>
</div>

## Warum das nicht einfach ein perfekter DAC ist

<div class="compare-card">
  <p class="card-kicker">Grenzen mitdenken</p>
  <h3>Praktisch nützlich heißt nicht vollwertig gleich</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Praktischer Vorteil</strong>
      <span>Mit wenig Hardware entsteht oft eine brauchbare analoge Näherung.</span>
    </div>
    <div class="compare-item">
      <strong>Grenze</strong>
      <span>Restwelligkeit, Lastabhängigkeit und Dynamik bleiben wichtige Einschränkungen.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wie hoch ist die PWM-Frequenz?
2. Welches Tastverhältnis liegt vor?
3. Ist der RC-Filter passend genug zum Signal?
4. Reicht eine geglättete Näherung oder wird ein echter DAC gebraucht?

<div class="note-panel">
  <p><strong>Merke:</strong> PWM plus RC-Filter ist oft ein praktischer Analog-Ersatz. Trotzdem bleibt der Ausgang fachlich ein geglättetes PWM-Ergebnis und nicht automatisch ein echter präziser DAC.</p>
</div>
