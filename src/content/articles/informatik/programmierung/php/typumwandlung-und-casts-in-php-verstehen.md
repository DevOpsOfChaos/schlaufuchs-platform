---
title: "Typumwandlung und Casts in PHP verstehen"
description: "Verstehe, wie PHP Werte umwandelt, was ein Cast macht und warum schwache Typisierung ohne ruhige Prüfung schnell unklar wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "typumwandlung-und-casts-in-php-verstehen"]
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

PHP ist eine schwach typisierte Sprache. Das macht vieles bequem, kann aber auch unruhig werden, wenn man Datentypen gar nicht mehr beachtet. Ein Cast macht die gewünschte Umwandlung sichtbar.

```php
<?php
$wertVor = 3.14;
$wertNach = (int)$wertVor;
echo $wertNach;
```

Hier wird aus einer Fließkommazahl bewusst ein Integer. Das Ergebnis ist nicht „mehr Präzision“, sondern eher eine grobere Form desselben Werts.

## Warum Casts helfen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Implizit</p>
    <h3>PHP entscheidet mit</h3>
    <p>Die Sprache wandelt Werte je nach Kontext automatisch um.</p>
  </section>
  <section>
    <p class="card-kicker">Explizit</p>
    <h3>Du entscheidest sichtbar</h3>
    <p>Mit einem Cast machst du die beabsichtigte Richtung der Umwandlung klar.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Schwache Typisierung bedeutet nicht, dass Typen egal wären. Sie müssen nur oft bewusster mitgedacht werden.</p>
</div>
