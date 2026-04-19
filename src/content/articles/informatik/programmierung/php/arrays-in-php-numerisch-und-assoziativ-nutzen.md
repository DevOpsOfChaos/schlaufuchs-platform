---
title: Arrays in PHP numerisch und assoziativ nutzen
description: Verstehe, wie PHP Arrays mit Zahlen- oder Textschlüsseln organisiert und warum das für Formulardaten und Listen praktisch ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - arrays-in-php-numerisch-und-assoziativ-nutzen
learningGoals:
  - Du unterscheidest numerisch und assoziativ indizierte Arrays.
  - Du liest Array-Zugriffe in PHP sicher über Name und Index beziehungsweise Schlüssel.
  - Du erkennst, wann Listen und wann benannte Werte besser passen.
practiceIdeas:
  - Baue eine kleine Liste mit Zahlenindizes und ein kleines Datenset mit Schlüsseln wie name oder stadt.
  - Lies einen Ausdruck wie <code>$daten['email']</code> in Worten.
  - Prüfe in einem Beispiel, ob eher eine Reihenfolge oder eher benannte Felder wichtig sind.
commonMistakes:
  - Index und Wert zu verwechseln.
  - Zu glauben, Arrays müssten immer nur Zahlenindizes haben.
  - Assoziative Arrays wie lose Textsammlungen zu lesen statt als strukturierte Zuordnung.
keyTakeaways:
  - PHP-Arrays können numerisch oder assoziativ indiziert sein.
  - Listen passen gut zu Reihenfolgen, Schlüssel gut zu benannten Feldern.
  - Mehrdimensionale Arrays entstehen, wenn Array-Werte selbst wieder Arrays sind.
recognizeSignals:
  - Du siehst eckige Klammern nach einem Variablennamen.
  - Ein Beispiel enthält Schlüssel wie <code>'name'</code> oder <code>'stadt'</code>.
  - Es geht um Formulardaten, Datensätze oder tabellenähnliche Informationen.
selfCheckPoints:
  - Kann ich numerische und assoziative Arrays unterscheiden?
  - Kann ich einen Array-Zugriff fachlich in Worten beschreiben?
  - Kann ich sagen, warum ein Schlüssel hier sinnvoller ist als nur eine Position?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - arrays
  - assoziativ
draft: false
---

## Grundidee

Arrays bündeln mehrere Werte unter einem gemeinsamen Namen. In PHP können diese Werte entweder über Positionen oder über benannte Schlüssel angesprochen werden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Liste und ein kleiner Datensatz</h3>
  <p>Eine Hobbysammlung braucht meist nur eine Reihenfolge. Ein Benutzerprofil mit Name, Stadt und E-Mail wirkt dagegen viel ruhiger, wenn die Werte über sprechende Schlüssel angesprochen werden.</p>
</div>

## Zwei Grundformen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Numerisch</p>
    <h3>Position zählt</h3>
    <p>Die Elemente werden über Zahlen angesprochen, etwa <code>$liste[0]</code> oder <code>$liste[2]</code>.</p>
  </section>
  <section>
    <p class="card-kicker">Assoziativ</p>
    <h3>Schlüssel zählt</h3>
    <p>Die Elemente werden über Namen angesprochen, etwa <code>$daten['name']</code> oder <code>$daten['stadt']</code>.</p>
  </section>
</div>

## Ein kleines Beispiel

```php
<?php
$hobbys = array('Lesen', 'Klettern', 'Musik');
$profil = array(
  'name' => 'Mira',
  'stadt' => 'Karlsruhe',
  'alter' => 17
);
?>
```

## So liest du einen Zugriff

<div class="figure-card">
  <p class="card-kicker">Leselogik</p>
  <h3>Vom Namen zur Zelle</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Arrayname</strong><span>Welcher Datenblock ist gemeint?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Index oder Schlüssel</strong><span>Welche Stelle oder welches Feld wird ausgewählt?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wert</strong><span>Welcher Inhalt kommt am Ende heraus?</span></div>
  </div>
</div>

## Mehrdimensionale Arrays

Ein Array-Wert kann selbst wieder ein Array sein. Dann entsteht eine verschachtelte Struktur, zum Beispiel eine Liste von Datensätzen oder ein Raster aus Zeilen und Spalten.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein assoziatives Array ist fachlich oft leichter lesbar, wenn Werte nicht nur in einer Reihenfolge stehen, sondern klar benannte Rollen haben.</p>
</div>
