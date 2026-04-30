---
title: "Array-Schleifen mit foreach in PHP verstehen"
description: "Verstehe, wie foreach numerische und assoziative Arrays durchlaeuft und warum die Schleife gut zu fertigen Datenlisten passt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "array-schleifen-mit-foreach-in-php-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Mit <code>foreach</code> laeuft PHP schrittweise ueber die vorhandenen Elemente eines Arrays. Du musst dabei keinen Index selbst hochzaehlen. Die Schleife bekommt jedes Element nacheinander direkt geliefert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Liste von Getraenken ausgeben</h3>
  <p>Ein Array enthaelt <code>"Wasser"</code>, <code>"Saft"</code> und <code>"Tee"</code>. Mit <code>foreach</code> kannst du jeden Eintrag einzeln ausgeben, ohne selbst mit 0, 1, 2 zu arbeiten.</p>
</div>

## Die einfache Form

```php
$liste = ["Wasser", "Saft", "Tee"];
foreach ($liste as $wert) {
  echo $wert;
}
```

Hier bedeutet das:

- <code>$liste</code> ist das Array,
- <code>$wert</code> steht in jedem Durchlauf fuer genau ein Element,
- die Schleife endet automatisch nach dem letzten Element.

## Bei assoziativen Arrays kommt der Schluessel dazu

```php
$person = ["name" => "Mina", "stadt" => "Koeln"];
foreach ($person as $schluessel => $wert) {
  echo $schluessel . ": " . $wert;
}
```

Jetzt wird nicht nur der Wert gelesen, sondern auch der passende Schluessel.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Numerisch oder assoziativ</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Numerisches Array</strong>
      <span>Du willst meist nur die Elemente der Reihe nach verarbeiten.</span>
    </div>
    <div class="compare-item">
      <strong>Assoziatives Array</strong>
      <span>Du brauchst oft Schluessel und Wert gemeinsam, weil beide Bedeutung tragen.</span>
    </div>
  </div>
</div>

## Warum foreach oft ruhiger ist als for

<div class="compare-card">
  <p class="card-kicker">Leselogik</p>
  <h3>Index verwalten oder Elemente direkt lesen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>for</strong>
      <span>Hilft, wenn du stark ueber Positionen, Grenzen oder Schrittweiten nachdenken musst.</span>
    </div>
    <div class="compare-item">
      <strong>foreach</strong>
      <span>Hilft, wenn die Datenliste schon da ist und du die Elemente direkt nacheinander verarbeiten willst.</span>
    </div>
  </div>
</div>

## Mini-Demo: ein Schleifendurchlauf ruhig gelesen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Nicht die ganze Schleife auf einmal lesen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Array ansehen</strong><span>Welche Elemente sind vorhanden?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Einen Durchlauf denken</strong><span>Was steckt jetzt konkret in <code>$wert</code>?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Dann verallgemeinern</strong><span>Dasselbe passiert mit den restlichen Elementen.</span></div>
  </div>
</div>

Hier geht es um Schleifen ueber bereits vorhandene Arrays. Wenn du stattdessen ueber mehrere Requests hinweg Daten behalten oder aufraeumen willst, bist du schon beim Thema Sessions und nicht mehr bei foreach.

## Eine ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Arraytyp erkennen</strong>
    <span>Ist es eher eine Liste oder eher ein Schluessel Wert Speicher?</span>
  </div>
  <div class="step-item">
    <strong>2. Schleifenvariablen lesen</strong>
    <span>Pruefe, ob nur <code>$wert</code> oder <code>$schluessel => $wert</code> verwendet wird.</span>
  </div>
  <div class="step-item">
    <strong>3. Einen Durchlauf denken</strong>
    <span>Setze probeweise ein Element ein und lies die Anweisungen mit diesem konkreten Inhalt.</span>
  </div>
  <div class="step-item">
    <strong>4. Danach verallgemeinern</strong>
    <span>Erst dann auf die restlichen Elemente uebertragen.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>foreach</code> ist dann besonders passend, wenn die Datenliste schon da ist und du die Elemente nur noch nacheinander verarbeiten willst.</p>
</div>
