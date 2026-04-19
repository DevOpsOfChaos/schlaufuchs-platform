---
title: isset, empty, unset und var_dump unterscheiden
description: Verstehe, wofür isset, empty, unset und var_dump gedacht sind und warum sie nicht dieselbe Frage beantworten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - isset-empty-unset-und-var-dump-unterscheiden
learningGoals:
  - Du unterscheidest Existenz, Leere, Löschen und Diagnose sauber.
  - Du erklärst, warum isset() und empty() verschiedene Fragen stellen.
  - Du liest einfache Prüfbedingungen in PHP ruhiger.
practiceIdeas:
  - Ordne typische Prüfaufgaben der passenden Funktion zu.
  - Erkläre, warum var_dump() kein Prüfersatz ist.
  - Prüfe in einem Formularbeispiel, ob eine Variable fehlt oder nur leer ist.
commonMistakes:
  - isset() und empty() als gleichbedeutend zu behandeln.
  - unset() als reine Leer-Zuweisung zu verstehen.
  - var_dump() als fertige Benutzer-Ausgabe zu verwenden.
keyTakeaways:
  - isset() prüft Existenz, empty() prüft leere Inhalte.
  - unset() entfernt eine Variable.
  - var_dump() zeigt Diagnoseinformationen.
recognizeSignals:
  - Es geht um Fehlersuche, Formularwerte oder Variablenprüfung.
  - Im Code stehen isset, empty, unset oder var_dump.
  - Du sollst die passende Prüffrage finden.
selfCheckPoints:
  - Kann ich Existenz und Leere unterscheiden?
  - Kann ich sagen, wofür unset() gedacht ist?
  - Kann ich erklären, warum var_dump() eher Diagnose als Programmlogik ist?
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
