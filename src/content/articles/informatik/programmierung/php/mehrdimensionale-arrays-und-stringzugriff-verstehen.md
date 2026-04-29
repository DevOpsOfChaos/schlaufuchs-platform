---
title: "Mehrdimensionale Arrays und Stringzugriff in PHP verstehen"
description: "Verstehe, wie PHP verschachtelte Arrays aufbaut und warum auch Strings stellenweise wie indexierbare Zeichenfolgen gelesen werden können."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "mehrdimensionale-arrays-und-stringzugriff-verstehen"]
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

Sobald ein Array selbst wieder Arrays enthält, entsteht eine mehrdimensionale Struktur. Das wirkt schnell komplex, wird aber ruhiger, wenn du den Zugriff schrittweise liest.

```php
<?php
$A1 = array('A','B','C','D');
$A2 = array('E','F','G','H');
$A  = array($A1, $A2);
echo $A[1][2];
```

Der Zugriff bedeutet: erst Zeile oder Teilarray `1` wählen, dann daraus Element `2`.

## Stringzugriff ist etwas anderes

In PHP kann auch ein String an Positionen gelesen werden:

```php
<?php
$name = 'Rimba';
echo $name[0];
```

Das macht Strings noch nicht zu Arrays. Es ist nur eine praktische Möglichkeit, einzelne Zeichen zu lesen oder vorsichtig zu verändern.

<div class="note-panel">
  <p><strong>Merke:</strong> Mehrdimensionale Arrays sind verschachtelte Sammlungen. Stringzugriff ist nur eine positionsbezogene Lesemöglichkeit innerhalb eines Textwerts.</p>
</div>
