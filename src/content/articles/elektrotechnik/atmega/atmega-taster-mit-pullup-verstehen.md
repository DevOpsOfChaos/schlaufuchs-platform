---
title: ATmega – Taster mit Pull-up verstehen
description: Verstehe, warum ein Tastereingang ohne definierten Pegel unruhig ist und wie der interne Pull-up am ATmega das sauber löst.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - digitale-eingaenge-und-ausgaenge
  - atmega-taster-mit-pullup-verstehen
learningGoals:
  - Du erklärst, warum ein offener Eingang ohne Pull-up problematisch ist.
  - Du beschreibst die Grundidee eines Tasters gegen Masse mit internem Pull-up.
  - Du liest Tastercode ruhiger über Ruhezustand und Aktivzustand statt nur über if-Abfragen.
practiceIdeas:
  - Vergleiche einen offenen Eingang mit einem Pull-up-Eingang.
  - Lies Tasterlogik zuerst als Zustandsfrage und dann erst als C-Code.
  - Erkläre, warum „nicht gedrückt“ und „gedrückt“ an einem Pull-up-Taster invertiert wirken können.
commonMistakes:
  - Zu denken, ein nicht beschalteter Eingang liefere schon von selbst einen sauberen Wert.
  - Den Pull-up mit einem Ausgangs-High zu verwechseln.
  - Vergessen, dass ein gegen Masse geschalteter Taster oft active low arbeitet.
keyTakeaways:
  - Ein Eingang braucht einen definierten Ruhezustand.
  - Der interne Pull-up sorgt dafür, dass ein offener Tastereingang nicht flottiert.
  - Bei einem Taster gegen Masse ist gedrückt oft logisch 0.
recognizeSignals:
  - Es geht um Taster, Eingänge, Pull-up oder unruhige Pegel.
  - Im Code wird ein Eingang konfiguriert und über PORTx der Pull-up aktiviert.
  - In Aufgaben soll erklärt werden, warum ein Taster invertiert gelesen wird.
selfCheckPoints:
  - Kann ich erklären, warum ein Eingang ohne Pull-up unruhig sein kann?
  - Kann ich den Ruhezustand und den gedrückten Zustand eines Pull-up-Tasters benennen?
  - Kann ich einen Tastercode fachlich korrekt lesen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - taster
  - pullup
level: einfach
draft: false
---

Unbenutzte oder offen gelassene AVR-Eingänge sollten einen definierten Pegel haben; Microchip empfiehlt ausdrücklich, Floating Inputs zu vermeiden und bei Bedarf interne Pull-ups zu aktivieren. Ein Pull-up wird aktiviert, indem ein Pin als Eingang konfiguriert bleibt und gleichzeitig das zugehörige `PORTx`-Bit auf 1 gesetzt wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Taster an PB1</h3>
  <p>PB1 soll einen Taster lesen. Im Ruhezustand soll ein sauberer definierter Wert anliegen. Erst beim Drücken soll sich der Pegel eindeutig ändern. Genau dafür ist der interne Pull-up am ATmega ein ruhiger Standardweg.</p>
</div>

## Warum ein offener Eingang problematisch ist

Ein Eingang ohne definierten Bezug kann zwischen Zuständen schwanken oder unruhig gelesen werden. Der Mikrocontroller „weiß“ dann nicht verlässlich, ob dort logisch 0 oder 1 anliegt.

<div class="compare-card">
  <p class="card-kicker">Ruhiger gegen unruhiger Eingang</p>
  <h3>Definierter Pegel statt Zufallszustand</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Offener Eingang</strong>
      <span>Kein sauber definierter Ruhezustand, der gelesene Wert kann unruhig sein.</span>
    </div>
    <div class="compare-item">
      <strong>Eingang mit Pull-up</strong>
      <span>Im Ruhezustand liegt ein definierter High-Pegel an, beim Drücken kann gezielt nach Masse gezogen werden.</span>
    </div>
  </div>
</div>

## Typischer Standardaufbau

```c
DDRB  &= ~(1 << PB1);  // PB1 als Eingang
PORTB |=  (1 << PB1);  // internen Pull-up aktivieren
```

Danach wird der Taster oft so beschaltet, dass er beim Drücken den Pin nach GND zieht.

## Mini-Demo: Ruhezustand und Aktivzustand

<pre><code>Taster nicht gedrückt  → Pull-up hält den Eingang auf logisch 1
Taster gedrückt        → Eingang wird nach GND gezogen, logisch 0</code></pre>

Gerade deshalb wirken Pull-up-Taster beim ersten Lesen oft „invertiert“:

- **nicht gedrückt** = 1
- **gedrückt** = 0

## Der Pull-up ist kein normaler Ausgangs-High

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>High am Ausgang ist etwas anderes als Pull-up am Eingang</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Pin als Ausgang</strong>
      <span>`PORTx = 1` treibt den Pin aktiv auf High.</span>
    </div>
    <div class="compare-item">
      <strong>Pin als Eingang</strong>
      <span>`PORTx = 1` aktiviert den internen Pull-up und schafft einen definierten Ruhezustand.</span>
    </div>
  </div>
</div>

## Typischer Tastercode

```c
if ((PINB & (1 << PB1)) == 0) {
  // Taster gedrückt
}
```

Die ruhige Lesart lautet:

- `PINB` wird gelesen,
- beim Drücken wird der Eingang auf 0 gezogen,
- deshalb bedeutet **0 hier: Taster ist aktiv**.

## Diese Seite behandelt bewusst die Grundidee, nicht schon Entprellung

Hier geht es um **definierte Eingangspegel** und den internen Pull-up. Themen wie Entprellung, Interrupts oder Zustandsautomaten gehören auf eigene Seiten, damit nicht alles in eine einzige „Tastergeschichte“ kippt.

## Eine ruhige Prüfstrategie

1. Ist der Pin wirklich als Eingang konfiguriert?
2. Gibt es einen definierten Ruhezustand?
3. Wird der Taster gegen Masse gelesen?
4. Dann prüfen: Bedeutet gedrückt in diesem Fall logisch 0 oder logisch 1?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Tastereingang braucht einen definierten Ruhezustand. Der interne Pull-up ist am ATmega dafür oft der einfachste saubere Weg.</p>
</div>
