---
title: "Einfache und doppelte Anführungszeichen in PHP unterscheiden"
description: "Verstehe, wann PHP Variablen in Zeichenketten ersetzt und wann nicht."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "einfache-und-doppelte-anfuehrungszeichen-in-php-unterscheiden"]
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

In PHP können Zeichenketten mit einfachen oder doppelten Anführungszeichen geschrieben werden. Der wichtige Unterschied ist nicht nur die Optik, sondern die **Auswertung im String**.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Einfach</p>
    <h3>Eher wörtlich lesen</h3>
    <p>Bei einfachen Anführungszeichen wird der Inhalt in vielen Fällen direkter und ohne Variablenersetzung behandelt.</p>
  </section>
  <section>
    <p class="card-kicker">Doppelt</p>
    <h3>Variablen können ersetzt werden</h3>
    <p>Bei doppelten Anführungszeichen können Variablen im String durch ihren aktuellen Wert ersetzt werden.</p>
  </section>
</div>

## Ein kleines Beispiel

```php
$url = "http://example.org";
echo '<a href="'.$url.'">'.$url.'</a>';
echo "<a href="$url">$url</a>";
```

Beide Ausgaben können fachlich zum selben Ergebnis führen, aber die Denkweise ist etwas anders:

- In der ersten Variante wird mit dem Punkt-Operator verkettet.
- In der zweiten Variante arbeitet PHP innerhalb eines großen Strings mit Variablenersetzung und Maskierung.

## Was du zuerst prüfen solltest

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welche Anführungszeichen?</strong>
    <span>Erst prüfen, ob der String einfach oder doppelt notiert ist.</span>
  </div>
  <div class="step-item">
    <strong>2. Gibt es Variablen im String?</strong>
    <span>Dann wird klar, ob automatische Ersetzung eine Rolle spielt.</span>
  </div>
  <div class="step-item">
    <strong>3. Gibt es Maskierungen?</strong>
    <span>Zeichen wie <code>"</code> oder <code>
</code> solltest du bewusst lesen.</span>
  </div>
  <div class="step-item">
    <strong>4. Was sieht der Browser?</strong>
    <span>Am Ende zählt die tatsächliche Ausgabe, nicht die Schreibweise im Editor.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Die ruhigste Frage lautet nicht „Welche Schreibweise ist schöner?“, sondern „Welche Ausgabe entsteht wirklich und wie klar lässt sie sich lesen?“</p>
</div>
