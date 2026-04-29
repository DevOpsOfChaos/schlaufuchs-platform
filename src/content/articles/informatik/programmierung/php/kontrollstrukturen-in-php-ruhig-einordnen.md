---
title: "Kontrollstrukturen in PHP ruhig einordnen"
description: "Verstehe, wie PHP mit Verzweigungen und Schleifen den Ablauf steuert und wie sich if, while, for und foreach grob unterscheiden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "kontrollstrukturen-in-php-ruhig-einordnen"]
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

Kontrollstrukturen bestimmen, wie ein Programm abläuft. Einige wählen zwischen Alternativen, andere wiederholen Schritte.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Auswahl</p>
    <h3>if / else</h3>
    <p>Hier entscheidet eine Bedingung, welcher Pfad ausgeführt wird.</p>
  </section>
  <section>
    <p class="card-kicker">Wiederholung</p>
    <h3>while / do while / for / foreach</h3>
    <p>Hier laufen ähnliche Schritte mehrfach, aber mit unterschiedlicher Steueridee.</p>
  </section>
</div>

## Wann ist foreach besonders ruhig?

Sobald du über die Elemente eines Arrays laufen willst, ist `foreach` oft klarer als eine selbst gebaute Zählschleife.

```php
<?php
foreach ($werte as $wert) {
  echo $wert;
}
```

<div class="note-panel">
  <p><strong>Merke:</strong> Nicht jede Schleife ist gleich. Die ruhigste Struktur ist meist die, die schon zum Problemtyp passt.</p>
</div>
