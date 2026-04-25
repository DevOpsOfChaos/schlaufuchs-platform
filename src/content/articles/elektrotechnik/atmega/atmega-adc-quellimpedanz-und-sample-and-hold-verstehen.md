---
title: ATmega – ADC-Quellimpedanz und Sample-and-Hold verstehen
description: Verstehe am AVR, warum ein ADC-Eingang nicht nur eine Spannung „anschaut“, sondern warum Quellimpedanz und Ladezeit das Messergebnis beeinflussen können.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adc-quellimpedanz-und-sample-and-hold-verstehen
learningGoals:
  - Du erklärst die Grundidee von Sample-and-Hold am ADC.
  - Du beschreibst, warum eine hochohmige Signalquelle das Einlesen erschweren kann.
  - Du liest ADC-Probleme eher als Lade- und Zeitfrage statt nur als „falsche Zahl“.
practiceIdeas:
  - Vergleiche eine niederohmige mit einer hochohmigen Signalquelle am ADC-Eingang.
  - Prüfe nach Kanalwechsel, warum ein Messwert erst noch „einschwingen“ muss.
  - Erkläre den Eingang eher als Ladeproblem eines kleinen Kondensators als als bloßen Messpunkt.
commonMistakes:
  - Zu denken, der ADC messe eine Spannung immer sofort ideal.
  - Hochohmige Quellen als belanglos für die Messqualität zu sehen.
  - Nach Kanalwechsel den ersten Wert ungeprüft als stabil anzunehmen.
keyTakeaways:
  - Der ADC braucht Zeit, um seinen internen Abtastknoten sinnvoll aufzuladen.
  - Hochohmige Quellen können das Einlesen verlangsamen oder verfälschen.
  - Auch ADC-Messprobleme sind oft Zeit- und Quellefragen.
recognizeSignals:
  - Es geht um unruhige ADC-Werte, Kanalwechsel oder Quellen mit großem Innenwiderstand.
  - Du sollst erklären, warum ein Wert erst nach kurzer Wartezeit stabil wird.
  - In Aufgaben ist die Signalquelle wichtiger als nur das Register.
selfCheckPoints:
  - Kann ich Sample-and-Hold als Ladeidee erklären?
  - Kann ich niederohmige und hochohmige Quellen am ADC unterscheiden?
  - Kann ich den ersten Messwert nach Kanalwechsel kritisch einordnen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - sample-and-hold
level: fortgeschritten
draft: false
---

## Grundidee

Ein ADC-Eingang am AVR ist kein magischer Beobachter, der jede Spannung sofort perfekt kennt. Im Inneren steckt vereinfacht gedacht eine **Abtast- und Haltestruktur**, die sich zuerst auf das Eingangssignal aufladen muss. Genau deshalb spielen **Quellimpedanz** und **Zeit** eine größere Rolle, als man anfangs vermutet.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Hochohmiger Sensor, unruhige ADC-Werte</h3>
  <p>Ein Spannungsteiler oder Sensor liefert am ADC prinzipiell das richtige Signal. Trotzdem wirkt der erste Messwert nach einem Kanalwechsel noch unruhig. Hier ist nicht sofort „der ADC kaputt“, sondern oft das Laden des Abtastknotens noch nicht sauber abgeschlossen.</p>
</div>

## Die Grundidee von Sample-and-Hold

<div class="visual-grid">
  <div class="visual-item">
    <strong>Sample</strong>
    <span>Die Eingangsspannung wird für einen kurzen Moment übernommen.</span>
  </div>
  <div class="visual-item">
    <strong>Hold</strong>
    <span>Dieser aufgenommene Zustand wird während der Wandlung festgehalten.</span>
  </div>
</div>

Die ruhige Denkhilfe lautet: Der ADC-Eingang lädt intern einen kleinen Knoten auf. Dafür muss die Signalquelle ausreichend schnell nachliefern können.

## Niederohmig gegen hochohmig

<div class="compare-card">
  <p class="card-kicker">Quellenvergleich</p>
  <h3>Die Quelle bestimmt mit, wie ruhig der ADC lesen kann</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Niederohmige Quelle</strong>
      <span>Der Eingangsknoten wird schnell nachgeladen. Der ADC sieht schneller einen stabilen Zustand.</span>
    </div>
    <div class="compare-item">
      <strong>Hochohmige Quelle</strong>
      <span>Das Nachladen dauert länger. Gerade nach Kanalwechseln oder bei kurzen Abtastzeiten können Messwerte unruhiger wirken.</span>
    </div>
  </div>
</div>

## Mini-Demo: Warum der erste Wert noch nicht vertrauenswürdig sein kann

<div class="figure-card">
  <p class="card-kicker">Zeitblick</p>
  <h3>Kanalwechsel und Einschwingen</h3>
  <pre><code>Kanal A wird gemessen     → interner Knoten liegt noch nahe an Kanal A
Kanal B wird umgeschaltet → Quelle B muss den Knoten erst auf ihren Wert ziehen
Sofort lesen              → erster Wert kann noch Übergangsanteile tragen
Kurz warten oder verwerfen→ danach wird der Wert ruhiger</code></pre>
</div>

## Diese Seite erklärt bewusst die Messquelle, nicht die Referenz

Hier geht es nicht darum, worauf sich der ADC-Wert **bezieht**. Das ist die Referenzfrage. Hier geht es darum, **wie der Eingangswert überhaupt sauber in die Wandlung hinein gelangt**.

## Eine ruhige Prüfstrategie

1. Ist die Quelle eher niederohmig oder hochohmig?
2. Wurde gerade der Kanal gewechselt?
3. Bekommt der Eingang genug Zeit zum Einschwingen?
4. Muss der erste Messwert eventuell verworfen oder zeitlich ruhiger gelesen werden?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ist nicht nur eine Registerfrage. Oft entscheidet schon die Quelle mit, wie ruhig der Eingang überhaupt gelesen werden kann.</p>
</div>
