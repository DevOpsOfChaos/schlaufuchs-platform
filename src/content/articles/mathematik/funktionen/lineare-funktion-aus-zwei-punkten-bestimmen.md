---
title: "Lineare Funktion aus zwei Punkten bestimmen"
description: "Verstehe, wie aus zwei gegebenen Punkten zuerst die Steigung und danach die vollständige lineare Funktionsgleichung bestimmt werden kann."
subject: "mathematik"
section: "Funktionen"
topicPath: ["funktionen", "lineare-funktion-aus-zwei-punkten-bestimmen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["mathematik", "Funktionen"]
draft: false
---
## Grundidee

Wenn zwei Punkte einer linearen Funktion bekannt sind, ist der Zusammenhang bereits stark festgelegt. Aus diesen beiden Punkten lässt sich zuerst die **Steigung** und danach der **Startwert** bestimmen. So entsteht Schritt für Schritt die Funktionsgleichung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei gemessene Werte einer linearen Situation</h3>
  <p>Ein Tarif oder ein Messzusammenhang liefert zwei bekannte Punkte. Jetzt soll nicht nur gesagt werden, dass die Gerade „irgendwie dazwischen verläuft“, sondern die vollständige Funktionsgleichung bestimmt werden. Genau dafür braucht man eine ruhige Zweischritt-Logik.</p>
</div>

## Was zwei Punkte verraten

<div class="visual-grid">
  <div class="visual-item">
    <strong>Veränderung</strong>
    <span>Aus dem Unterschied der beiden Punkte lässt sich die Steigung bestimmen.</span>
  </div>
  <div class="visual-item">
    <strong>Lage der Geraden</strong>
    <span>Mit der bekannten Steigung kann danach der Startwert gefunden werden.</span>
  </div>
</div>

## Beispielpunkte

Gegeben seien die Punkte:

<div class="equation-card">
  <p class="card-kicker">Gegeben</p>
  <h3>Zwei Punkte einer linearen Funktion</h3>
  <div class="equation-block">
    <p class="equation-line">P(1|4)</p>
    <p class="equation-line">Q(3|8)</p>
  </div>
</div>

## Schritt 1: Steigung bestimmen

Zuerst wird geschaut, wie stark sich der y-Wert verändert, wenn x von 1 auf 3 wächst.

<div class="equation-card">
  <p class="card-kicker">Änderungsrate</p>
  <h3>Vom Zuwachs zur Steigung</h3>
  <div class="equation-block">
    <p class="equation-line">Δy = 8 - 4 = 4</p>
    <p class="equation-line">Δx = 3 - 1 = 2</p>
    <p class="equation-line">m = Δy / Δx = 4 / 2 = 2</p>
  </div>
</div>

Die Steigung ist also 2.

## Schritt 2: Startwert bestimmen

Nun wird die bekannte Steigung in die Form

<div class="equation-card">
  <p class="card-kicker">Grundform</p>
  <h3>Lineare Funktion</h3>
  <div class="equation-block">
    <p class="equation-line">y = mx + b</p>
  </div>
</div>

mit einem der beiden Punkte eingesetzt.

Mit Punkt P(1|4):

<div class="equation-card">
  <p class="card-kicker">Einsetzen</p>
  <h3>Startwert berechnen</h3>
  <div class="equation-block">
    <p class="equation-line">4 = 2 · 1 + b</p>
    <p class="equation-line">4 = 2 + b</p>
    <p class="equation-line">b = 2</p>
  </div>
</div>

Damit lautet die gesuchte Funktion:

<div class="equation-card">
  <p class="card-kicker">Ergebnis</p>
  <h3>Funktionsgleichung</h3>
  <div class="equation-block">
    <p class="equation-line">y = 2x + 2</p>
  </div>
</div>

## Warum die Reihenfolge hilft

<div class="figure-card">
  <p class="card-kicker">Rechenlogik</p>
  <h3>Erst Veränderung, dann Lage</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Beide Punkte lesen</strong><span>Welche Änderung steckt zwischen ihnen?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Steigung bestimmen</strong><span>Die Änderungsrate wird zuerst sauber berechnet.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Startwert finden</strong><span>Danach wird die Gerade in ihrer Lage festgelegt.</span></div>
  </div>
</div>

## Typische Fehler ruhig vermeiden

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>y-Änderung und x-Änderung bewusst trennen</h3>
    <p>Dann wird die Steigung als Verhältnis klar und nachvollziehbar bestimmt.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Zahlen ungeordnet vermischen</h3>
    <p>Dann verschwimmt, welche Differenz oben, welche unten und welche Zahl der Startwert sein soll.</p>
  </section>
</div>

## Probe mit beiden Punkten

Die gefundene Funktion lautet `y = 2x + 2`.

- Für `x = 1` ergibt sich `y = 4`.
- Für `x = 3` ergibt sich `y = 8`.

Beide Punkte passen. Die Funktion ist also konsistent.

<div class="note-panel">
  <p><strong>Merke:</strong> Zwei Punkte liefern zuerst die Steigung. Mit der Steigung und einem Punkt lässt sich danach der Startwert ruhig und systematisch bestimmen.</p>
</div>
