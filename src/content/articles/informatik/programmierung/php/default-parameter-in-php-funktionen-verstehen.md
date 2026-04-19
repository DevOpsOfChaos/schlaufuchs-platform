---
title: Default-Parameter in PHP-Funktionen verstehen
description: Verstehe, wann Default-Parameter helfen, warum sie am Ende der Parameterliste stehen und wie Aufrufe dadurch kürzer werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - default-parameter-in-php-funktionen-verstehen
learningGoals:
  - Du erklärst die Grundidee von Default-Parametern.
  - Du erkennst, warum optionale Argumente am Ende stehen.
  - Du liest Aufrufe mit und ohne optionales Argument sicher.
practiceIdeas:
  - Vergleiche einen Aufruf mit zwei Argumenten mit einem Aufruf mit drei Argumenten.
  - Erkläre, welcher Wert benutzt wird, wenn das optionale Argument fehlt.
  - Prüfe, warum die Reihenfolge der Parameter wichtig bleibt.
commonMistakes:
  - Zu glauben, ein fehlendes Pflichtargument werde automatisch ersetzt.
  - Optionale Parameter mitten in die Liste zu denken.
  - Den Defaultwert als starren Teil der Programmlogik statt als Vorgabe zu lesen.
keyTakeaways:
  - Default-Parameter liefern Vorgabewerte.
  - Sie erleichtern Aufrufe, wenn ein Wert oft gleich bleibt.
  - Optionale Werte gehören ans Ende der Parameterliste.
recognizeSignals:
  - In einer Funktionsdefinition steht ein Gleichheitszeichen innerhalb der Parameterliste.
  - Aufrufe verwenden mal mehr, mal weniger Argumente.
  - Du sollst begründen, welcher Wert im Aufruf wirklich gilt.
selfCheckPoints:
  - Kann ich Pflicht- und optionale Argumente trennen?
  - Kann ich sagen, wann der Defaultwert benutzt wird?
  - Kann ich die Reihenfolge begründen?
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
