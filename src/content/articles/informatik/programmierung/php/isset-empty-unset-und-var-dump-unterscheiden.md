---
title: "isset, empty, unset und var_dump unterscheiden"
description: "Verstehe, wofür isset, empty, unset und var_dump gedacht sind und warum sie nicht dieselbe Frage beantworten."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "isset-empty-unset-und-var-dump-unterscheiden"]
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

Mehrere PHP-Funktionen sehen auf den ersten Blick ähnlich aus, beantworten aber unterschiedliche Fragen. Genau das ist bei `isset()`, `empty()`, `unset()` und `var_dump()` wichtig.

<div class="visual-grid">
  <div class="visual-item">
    <strong>isset()</strong>
    <span>Prüft, ob eine Variable existiert und nicht <code>null</code> ist.</span>
  </div>
  <div class="visual-item">
    <strong>empty()</strong>
    <span>Prüft, ob ein Wert leer wirkt, etwa leerer String, 0 oder nicht gesetzt.</span>
  </div>
  <div class="visual-item">
    <strong>unset()</strong>
    <span>Entfernt eine Variable wieder aus dem aktuellen Kontext.</span>
  </div>
  <div class="visual-item">
    <strong>var_dump()</strong>
    <span>Zeigt Typ und Inhalt zu Diagnosezwecken an.</span>
  </div>
</div>

## Typische Denkfalle

Eine Variable kann existieren und trotzdem leer sein. Dann liefert `isset($x)` etwas anderes als `empty($x)`.

```php
<?php
$name = "";
var_dump(isset($name)); // true
var_dump(empty($name)); // true
```

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Erst die Frage klären</h3>
    <p>Willst du wissen, ob etwas vorhanden ist, ob etwas inhaltlich leer ist oder ob du Debug-Information brauchst?</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Irgendeine Prüffunktion nehmen</h3>
    <p>Dann bleibt unklar, ob du Existenz, Inhalt oder Diagnose eigentlich meinst.</p>
  </section>
</div>
