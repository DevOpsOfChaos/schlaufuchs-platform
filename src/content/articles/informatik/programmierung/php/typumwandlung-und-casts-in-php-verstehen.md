---
title: Typumwandlung und Casts in PHP verstehen
description: Verstehe, wie PHP Werte umwandelt, was ein Cast macht und warum schwache Typisierung ohne ruhige Prüfung schnell unklar wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - typumwandlung-und-casts-in-php-verstehen
learningGoals:
  - Du erklärst, was ein Cast in PHP macht.
  - Du unterscheidest implizite und explizite Umwandlung grob.
  - Du liest einfache Typkonvertierungen ruhiger.
practiceIdeas:
  - Prüfe, wie aus einer Fließkommazahl ein Integer wird.
  - Vergleiche einen automatischen Kontextwechsel mit einem expliziten Cast.
  - Erkläre, warum schwach typisierte Übergaben zusätzliche Prüfung brauchen.
commonMistakes:
  - Zu glauben, ein Cast ändere die ganze Variable immer dauerhaft.
  - Jede automatische Umwandlung als zuverlässig und eindeutig zu behandeln.
  - Datentypen gar nicht mitzudenken, nur weil PHP vieles automatisch annimmt.
keyTakeaways:
  - Ein Cast setzt einen Wert gezielt in einen anderen Typ um.
  - PHP arbeitet oft implizit, aber explizite Umwandlung macht Absichten klarer.
  - Gerade bei Formulardaten lohnt sich ruhiges Typdenken.
recognizeSignals:
  - Es geht um (int), (string), (bool) oder ähnliche Schreibweisen.
  - Ein Beispiel arbeitet mit Formulardaten oder numerischen Werten.
  - Du sollst erklären, warum ein Ergebnis anders aussieht als vorher.
selfCheckPoints:
  - Kann ich sagen, was ein Cast leistet?
  - Kann ich implizite und explizite Umwandlung grob trennen?
  - Kann ich begründen, warum Typdenken bei Eingaben wichtig bleibt?
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
