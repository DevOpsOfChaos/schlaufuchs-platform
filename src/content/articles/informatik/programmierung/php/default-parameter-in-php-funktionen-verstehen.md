---
title: "Default-Parameter in PHP-Funktionen verstehen"
description: "Verstehe, wann Default-Parameter helfen, warum sie am Ende der Parameterliste stehen und wie Aufrufe dadurch kürzer werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "default-parameter-in-php-funktionen-verstehen"]
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

Ein Default-Parameter gibt einer Funktion einen Vorgabewert. Dadurch muss der aufrufende Code diesen Wert nicht immer wieder mitschicken.

```php
<?php
function markiere($wort, $pos, $anz = 1) {
  // ...
}
```

Wird `markiere("rimba", 2)` aufgerufen, dann wird für `$anz` automatisch `1` verwendet.

## Warum am Ende?

Optionale Werte stehen am Ende der Liste, weil die Pflichtargumente zuerst eindeutig zugeordnet werden müssen.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Pflicht zuerst, optional danach</h3>
    <p>So bleibt klar, welche Daten unbedingt nötig sind und welche nur eine häufige Vorgabe darstellen.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Optional mitten in der Liste</h3>
    <p>Dann wird das Lesen und Zuordnen von Aufrufen schnell unruhig.</p>
  </section>
</div>
