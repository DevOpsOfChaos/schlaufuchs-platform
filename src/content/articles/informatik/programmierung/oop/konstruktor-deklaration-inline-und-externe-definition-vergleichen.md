---
title: "Konstruktor-Deklaration inline und externe Definition vergleichen"
description: "Verstehe, wie Konstruktoren in der Klasse selbst oder getrennt ausserhalb definiert werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "konstruktor-deklaration-inline-und-externe-definition-vergleichen"]
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

Bei Konstruktoren gibt es zwei gaengige Schreibweisen. Entweder steht die komplette Logik direkt in der Klasse oder nur die Ankuendigung steht dort, waehrend die eigentliche Definition spaeter ausserhalb folgt.

## Inline in der Klasse

```cpp
class Demo {
public:
  Demo() { /* Startlogik */ }
};
```

Hier sieht man Deklaration und Definition sofort zusammen.

## Definition ausserhalb

```cpp
class Demo {
public:
  Demo();
};

Demo::Demo() {
  /* Startlogik */
}
```

In der Klasse steht erst nur die Signatur. Die eigentliche Ausfuehrung folgt spaeter.

## Was der Bereichsoperator zeigt

<div class="example-card">
  <p class="card-kicker">Signal</p>
  <h3><code>Demo::Demo()</code> gehoert weiterhin zur Klasse Demo</h3>
  <p>Der doppelte Doppelpunkt ist hier kein Dekozusatz. Er zeigt, dass die ausserhalb geschriebene Definition trotzdem genau zu dieser Klasse gehoert.</p>
</div>

## Vergleich

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Zusammen geschrieben vs. getrennt geschrieben</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Inline</strong>
      <span>Kurz, direkt sichtbar und fuer kleine Beispiele oft leichter zu lesen.</span>
    </div>
    <div class="compare-item">
      <strong>Extern</strong>
      <span>Trennt Uebersicht und Detail. Die Klasse bleibt kuerzer, die Implementierung kann spaeter folgen.</span>
    </div>
  </div>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. In der Klasse suchen</strong>
    <span>Steht nur <code>Demo();</code> oder schon ein Block mit geschweiften Klammern?</span>
  </div>
  <div class="step-item">
    <strong>2. Bereichsoperator suchen</strong>
    <span>Eine externe Definition erkennst du an <code>Klassenname::...</code>.</span>
  </div>
  <div class="step-item">
    <strong>3. Beides gedanklich verbinden</strong>
    <span>Es sind nicht zwei Konstruktoren, sondern zwei Schreibweisen derselben Klassenlogik.</span>
  </div>
</div>
