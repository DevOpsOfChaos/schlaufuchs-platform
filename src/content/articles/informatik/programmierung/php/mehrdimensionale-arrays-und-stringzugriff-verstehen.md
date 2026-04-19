---
title: Mehrdimensionale Arrays und Stringzugriff in PHP verstehen
description: Verstehe, wie PHP verschachtelte Arrays aufbaut und warum auch Strings stellenweise wie indexierbare Zeichenfolgen gelesen werden können.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mehrdimensionale-arrays-und-stringzugriff-verstehen
learningGoals:
  - Du liest zweidimensionale Arrays ruhiger.
  - Du unterscheidest numerische und assoziative Indizierung auch in verschachtelten Strukturen.
  - Du erkennst, dass ein String in PHP an Positionen gelesen werden kann, ohne ein Array zu sein.
practiceIdeas:
  - Lies in einem zweidimensionalen Array beide Indizes in der richtigen Reihenfolge.
  - Erkläre, warum $A[1][2] zwei Schritte der Auswahl meint.
  - Vergleiche Stringzugriff und Arrayzugriff, ohne beides gleichzusetzen.
commonMistakes:
  - Mehrdimensionale Arrays wie eine flache Liste zu lesen.
  - Indexreihenfolgen zu vertauschen.
  - Stringzugriff als Beweis zu sehen, dass Strings Arrays seien.
keyTakeaways:
  - Mehrdimensionale Arrays enthalten oft wieder Arrays als Elemente.
  - Zugriffe werden Schritt für Schritt gelesen.
  - Strings können positionsbasiert gelesen werden, bleiben aber eigene Datentypen.
recognizeSignals:
  - Es gibt mehrere eckige Klammerpaare hintereinander.
  - Ein Beispiel mischt Listen, Tabellen oder verschachtelte Daten.
  - Du sollst einen bestimmten Zugriff in Worte übersetzen.
selfCheckPoints:
  - Kann ich zwei Indizes in der richtigen Reihenfolge lesen?
  - Kann ich erklären, warum ein Stringzugriff kein echtes Array beweist?
  - Kann ich zwischen Struktur und Inhalt trennen?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - backend
  - web
  - grundlagen
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
