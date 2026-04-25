---
title: ATmega – ADC-Prescaler und Wandlungszeit verstehen
description: Verstehe, wie am ATmega aus ADC-Prescaler und Taktbasis die Wandlungsdauer entsteht und warum schnelle Wandlung nicht automatisch die ruhigste ist.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - analoge-eingaenge
  - atmega-adc-prescaler-und-wandlungszeit-verstehen
learningGoals:
  - Du erklärst die Rolle des ADC-Prescalers am ATmega.
  - Du beschreibst, wie aus Taktbasis und ADC-Takt eine Wandlungszeit entsteht.
  - Du liest ADC-Tempo ruhiger als Abwägung statt nur als „möglichst schnell“.
practiceIdeas:
  - Vergleiche zwei Prescaler-Einstellungen bei derselben Taktbasis.
  - Lies eine ADC-Konfiguration als Zeitproblem und nicht nur als Registerbits.
  - Prüfe bei einer Messaufgabe, ob die Wandlungsgeschwindigkeit überhaupt der Engpass ist.
commonMistakes:
  - Zu denken, der ADC solle immer mit maximal möglicher Geschwindigkeit laufen.
  - ADC-Prescaler und CPU-Takt unabhängig voneinander zu betrachten.
  - Messprobleme sofort dem Sensor statt der Taktwahl oder Wandlungszeit zuzuschreiben.
keyTakeaways:
  - Der ADC-Prescaler teilt die Taktbasis für den ADC herunter.
  - Aus ADC-Takt und Wandlungsdauer ergibt sich die Zeit pro Messung.
  - Die ruhigste ADC-Einstellung ist nicht automatisch die schnellste, sondern die zur Aufgabe passende.
recognizeSignals:
  - Es geht um ADPS-Bits, ADC-Takt, Wandlungszeit oder zu schnelle bzw. zu grobe Messung.
  - Du sollst erklären, warum eine ADC-Messung Zeit braucht.
  - In Aufgaben ist das Zusammenspiel von F_CPU, Prescaler und Messdauer entscheidend.
selfCheckPoints:
  - Kann ich CPU-Takt und ADC-Takt sauber unterscheiden?
  - Kann ich erklären, warum der Prescaler die Messgeschwindigkeit beeinflusst?
  - Kann ich begründen, warum „schneller“ beim ADC nicht automatisch „besser“ ist?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - prescaler
level: mittel
draft: false
---

## Grundidee

Der ADC am ATmega misst nicht in einem einzigen magischen Schritt. Er braucht dafür einen **ADC-Takt** – und dieser entsteht aus der Taktbasis plus **Prescaler**. Genau daraus ergibt sich, wie lange eine Messung ungefähr dauert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der gleiche Sensor, aber zwei sehr verschiedene ADC-Takte</h3>
  <p>Mit derselben CPU und demselben Sensor können zwei ADC-Konfigurationen völlig unterschiedlich schnell messen. Entscheidend ist nicht nur der Sensor, sondern auch, wie der ADC getaktet wird. Genau deshalb gehört zur ADC-Grundidee immer auch die Zeitbasis.</p>
</div>

## Drei Größen gehören zusammen

<div class="visual-grid">
  <div class="visual-item">
    <strong>F_CPU</strong>
    <span>Das ist die allgemeine Taktbasis des Systems.</span>
  </div>
  <div class="visual-item">
    <strong>ADC-Prescaler</strong>
    <span>Er teilt diese Taktbasis für den ADC herunter.</span>
  </div>
  <div class="visual-item">
    <strong>Wandlungszeit</strong>
    <span>Sie ergibt sich aus ADC-Takt und der internen Dauer einer Messung.</span>
  </div>
</div>

## Mini-Rechenblick

```text
F_CPU = 16 MHz
Prescaler = 128
ADC-Takt = 16 000 000 / 128 = 125 000 Hz
1 ADC-Takt = 8 µs
Eine Wandlung braucht ungefähr 13 ADC-Zyklen
Wandlungszeit ≈ 13 × 8 µs = 104 µs
```

Die ruhige Lesart ist:

- Der Prescaler bestimmt, wie schnell der ADC intern arbeitet.
- Daraus ergibt sich die Dauer einer einzelnen Wandlung.
- Erst danach kann man sinnvoll über Messrate oder Reaktionszeit sprechen.

## Nicht nur „schneller ist besser“

<div class="compare-card">
  <p class="card-kicker">Abwägung</p>
  <h3>ADC-Tempo ist eine Aufgabenfrage</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu grob gedacht</strong>
      <span>„Dann stelle ich den ADC einfach maximal schnell ein.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig gedacht</strong>
      <span>„Ich prüfe zuerst, welche Messrate überhaupt nötig ist und welche ADC-Zeitbasis dazu passt.“</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche allgemeine Taktbasis liegt an?
2. Welcher Prescaler wird für den ADC gewählt?
3. Welcher ADC-Takt entsteht daraus?
4. Welche Wandlungszeit ergibt sich ungefähr für eine Messung?

<div class="note-panel">
  <p><strong>Merke:</strong> Beim ADC ist „ruhig passend“ oft wichtiger als „maximal schnell“. Der Prescaler macht aus Taktbasis eine sinnvolle Messgeschwindigkeit.</p>
</div>
