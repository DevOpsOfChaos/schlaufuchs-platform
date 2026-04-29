---
title: "ATmega – Softtimer mit Tickzähler verstehen"
description: "Verstehe, wie ein periodischer Tick am ATmega in Software zu mehreren Zeitmarken und nichtblockierenden Wartezeiten ausgebaut werden kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-softtimer-mit-tickzaehler-verstehen"]
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

Ein Hardware-Timer kann eine **periodische Marke** liefern, zum Beispiel alle 1 ms. In Software kann daraus ein **Tickzähler** werden. Genau dieser Zähler lässt sich dann nutzen, um mehrere Zeitaufgaben gleichzeitig ruhig zu organisieren – ohne überall mit `delay` zu blockieren.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Blinkaufgaben und ein Taster sollen gleichzeitig sauber reagieren</h3>
  <p>Mit Delay-Schleifen wird schnell alles nacheinander und blockierend. Mit einem Tickzähler kann das Programm dagegen regelmäßig prüfen: Ist für LED A genug Zeit vergangen? Für LED B auch? Muss der Taster gerade gelesen werden? Genau daraus entsteht eine ruhigere Programmstruktur.</p>
</div>

## Hardware-Zeit und Software-Zeit trennen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Der Timer liefert nur den Tick – den Rest macht die Software-Struktur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hardware-Timer</strong>
      <span>Liefert periodisch eine feste Grundzeit, zum Beispiel alle 1 ms.</span>
    </div>
    <div class="compare-item">
      <strong>Softtimer</strong>
      <span>Nutzen diese Grundzeit, um mehrere eigene Zeitmarken in Software zu verwalten.</span>
    </div>
  </div>
</div>

## Mini-Demo: Zeitmarke statt Delay

```c
volatile uint32_t ticks = 0;

ISR(TIMER0_COMPA_vect) {
    ticks++;
}

if (ticks - ledA_marke >= 100) {
    ledA_marke = ticks;
    // LED A umschalten
}
```

Die ruhige Lesart ist:

- Der Timer erzeugt nur die Grundmarke.
- Der Zähler zählt diese Marken mit.
- Jede Aufgabe prüft selbst, ob genug Zeit seit ihrer letzten Marke vergangen ist.

## Warum das reaktiver ist

Mit Delay wartet das Programm aktiv und macht in dieser Zeit oft nichts anderes. Mit Softtimer-Struktur bleibt die Hauptschleife dagegen offen für weitere Aufgaben.

## Eine ruhige Prüfstrategie

1. Welche periodische Grundzeit liefert die Hardware?
2. Wie wird daraus ein Tickzähler in Software?
3. Welche Aufgaben nutzen eigene Zeitmarken auf Basis dieses Zählers?
4. Wo bleibt das Programm dadurch reaktiv statt blockierend?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Softtimer ist keine zweite Hardware, sondern eine ruhige Software-Struktur auf Basis eines periodischen Ticks.</p>
</div>
