---
title: Spezielle Pfade mit __FILE__ und __DIR__ verstehen
description: Verstehe, was __FILE__ und __DIR__ liefern und warum feste relative Vermutungen in PHP schnell unruhig werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - spezielle-pfade-mit-file-und-dir-verstehen
learningGoals:
  - Du unterscheidest __FILE__ und __DIR__ sauber.
  - Du erklärst, warum feste Pfadannahmen in Includes oder Dateizugriffen fehleranfällig sind.
  - Du liest einfache Pfadangaben ruhiger im Kontext einer PHP-Datei.
practiceIdeas:
  - Vergleiche den kompletten Dateipfad mit dem Verzeichnis derselben Datei.
  - Erkläre, warum include-Pfade ohne klaren Bezugspunkt schnell brechen können.
  - Ordne in einem Beispiel zu, ob eher __FILE__ oder __DIR__ gebraucht wird.
commonMistakes:
  - __FILE__ nur als Dateiname statt als vollständigen Pfad zu lesen.
  - __DIR__ mit dem aktuellen Browser-URL-Pfad zu verwechseln.
  - Zu glauben, Pfadangaben würden sich immer auf die gleiche Stelle beziehen.
keyTakeaways:
  - __FILE__ beschreibt die aktuelle Datei, __DIR__ ihr Verzeichnis.
  - Solche Konstanten helfen, Pfade robuster zu formulieren.
  - Serverpfade sind etwas anderes als Browser-URLs.
recognizeSignals:
  - Es geht um include, require, Dateizugriff oder Verzeichnisbezug.
  - Im Code tauchen __FILE__ oder __DIR__ auf.
  - Du sollst erklären, warum eine Pfadangabe funktioniert oder nicht.
selfCheckPoints:
  - Kann ich __FILE__ und __DIR__ in Worten unterscheiden?
  - Kann ich sagen, warum feste Pfade unruhig sein können?
  - Kann ich Browser-URL und Serverpfad trennen?
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

In PHP stehen mit `__FILE__` und `__DIR__` zwei vordefinierte Konstanten bereit, die den Ort der gerade ausgeführten Datei beschreiben. Das ist hilfreich, wenn ein Skript andere Dateien einbinden oder sicher auf Serverdateien zugreifen soll.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Konfigurationsdatei einbinden</h3>
  <p>Eine Datei <code>index.php</code> liegt in einem Verzeichnis und soll eine daneben liegende <code>config.php</code> laden. Wer einfach nur einen vermuteten Pfad schreibt, baut schnell eine fragile Lösung. Mit <code>__DIR__</code> wird der Bezugspunkt ruhiger und klarer.</p>
</div>

## Was liefern die Konstanten?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">__FILE__</p>
    <h3>Die aktuelle Datei</h3>
    <p>Hier steckt der vollständige Pfad samt Dateiname der gerade ausgeführten Datei.</p>
  </section>
  <section>
    <p class="card-kicker">__DIR__</p>
    <h3>Das aktuelle Verzeichnis</h3>
    <p>Hier steckt nur das Verzeichnis, in dem die Datei liegt.</p>
  </section>
</div>

```php
<?php
$fullPath = __FILE__;
$folder = __DIR__;
```

## Warum das wichtig ist

Serverpfade sind nicht dasselbe wie Browser-URLs. `__DIR__` hilft also nicht dem Browser beim Navigieren, sondern dem PHP-Skript beim sauberen Bezug auf Dateien im Dateisystem.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>__FILE__</code> und <code>__DIR__</code> beschreiben Orte auf dem Server, nicht sichtbare Web-Adressen im Browser.</p>
</div>
