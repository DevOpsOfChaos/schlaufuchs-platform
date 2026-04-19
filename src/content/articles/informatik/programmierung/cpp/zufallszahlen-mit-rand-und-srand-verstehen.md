---
title: Zufallszahlen mit rand und srand verstehen
description: Verstehe, wie einfache Zufallszahlen in C++ erzeugt werden und warum srand für den Startwert wichtig ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - cmath
  - zufallszahlen-mit-rand-und-srand-verstehen
learningGoals:
  - Du erklärst die Rollen von rand, srand und einem Startwert.
  - Du beschreibst, wie aus einem großen Bereich ein kleiner Bereich wie 1 bis 6 entsteht.
  - Du liest Zufallsbeispiele ruhiger als Ablauf aus Startwert und Erzeugung.
practiceIdeas:
  - Erkläre an einem Würfelbeispiel den Bereich 1 bis 6.
  - Vergleiche einen Lauf mit und ohne Startwert.
  - Beschreibe, warum eine Zufallszahl nicht direkt „magisch“ entsteht.
commonMistakes:
  - rand und srand zu verwechseln.
  - Den Startwert als eigentliche Zufallszahl zu lesen.
  - Den Bereich einer erzeugten Zahl nicht sauber zu prüfen.
keyTakeaways:
  - rand liefert eine Zahl aus einem großen Bereich.
  - srand setzt den Startwert für die Zahlenfolge.
  - Mit Modulo und Verschiebung kann ein kleiner Zielbereich erzeugt werden.
recognizeSignals:
  - Es geht um Würfeln, Zufallszahlen oder rand().
  - Du sollst erklären, warum ein Startwert gesetzt wird.
  - In Beispielen wird eine Zahl auf ein kleines Intervall begrenzt.
selfCheckPoints:
  - Kann ich rand und srand unterscheiden?
  - Kann ich erklären, wie aus rand() ein Bereich 1 bis 6 wird?
  - Kann ich den Startwert als Vorbereitung und nicht als Ergebnis lesen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - rand
  - srand
  - zufall
draft: false
---

## Grundidee

Zufallszahlen werden in Einstiegsbeispielen oft mit <code>rand()</code> erzeugt. Für eine verständliche Lesart solltest du aber zwei Dinge trennen: **die Vorbereitung der Zahlenfolge** und **die spätere eigentliche Zahlenerzeugung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Würfel von 1 bis 6</h3>
  <p>Das Programm soll nicht irgendeine riesige Zufallszahl zeigen, sondern eine Zahl wie bei einem Würfel. Deshalb wird aus dem großen Bereich von <code>rand()</code> ein kleiner Zielbereich 1 bis 6 gebildet.</p>
</div>

## Die zwei Rollen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">srand(...)</p>
    <h3>Startwert setzen</h3>
    <p>Hier wird die Zahlenfolge vorbereitet. Für Einstiegsbeispiele wird oft die aktuelle Zeit genutzt.</p>
  </section>
  <section>
    <p class="card-kicker">rand()</p>
    <h3>Zahl erzeugen</h3>
    <p>Erst danach liefert <code>rand()</code> einen konkreten Wert aus einem großen Bereich.</p>
  </section>
</div>

## Ein typisches Würfelmuster

```cpp
srand(time(NULL));
int wurf = 1 + rand() % 6;
```

Ruhige Lesart:

- <code>srand(time(NULL))</code> bereitet den Startwert vor,
- <code>rand()</code> liefert eine große Zahl,
- <code>% 6</code> reduziert auf einen Rest von 0 bis 5,
- das zusätzliche <code>1 +</code> verschiebt den Bereich auf 1 bis 6.

## Bereich bewusst lesen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Wie der Würfelbereich entsteht</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>rand()</strong><span>liefert eine Zahl aus großem Bereich</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>% 6</strong><span>macht daraus 0 bis 5</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>+ 1</strong><span>verschiebt auf 1 bis 6</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Gibt es einen Startwert?</strong>
    <span>Suche zuerst nach <code>srand(...)</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Wo entsteht die Zufallszahl?</strong>
    <span>Suche danach den Aufruf von <code>rand()</code>.</span>
  </div>
  <div class="step-item">
    <strong>3. Wie wird der Bereich verkleinert?</strong>
    <span>Achte auf <code>%</code> oder andere Begrenzungen.</span>
  </div>
  <div class="step-item">
    <strong>4. Welcher Endbereich kommt heraus?</strong>
    <span>Prüfe den endgültigen Zahlenraum bewusst.</span>
  </div>
</div>
