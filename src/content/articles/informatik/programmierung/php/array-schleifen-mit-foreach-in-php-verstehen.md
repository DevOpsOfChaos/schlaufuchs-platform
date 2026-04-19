---
title: Array-Schleifen mit foreach in PHP verstehen
description: Verstehe, wie foreach numerische und assoziative Arrays durchläuft und warum die Schleife gut zu fertigen Datenlisten passt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - array-schleifen-mit-foreach-in-php-verstehen
learningGoals:
  - Du erklärst den Grundablauf einer foreach-Schleife in PHP.
  - Du unterscheidest Wert- und Schlüsselzugriff bei Arrays.
  - Du erkennst, wann foreach ruhiger ist als eine selbst gebaute Zählschleife.
practiceIdeas:
  - Lies ein Arraybeispiel und sage, welcher Wert in einem Schleifendurchlauf gerade gemeint ist.
  - Vergleiche eine numerische Liste mit einem assoziativen Array.
  - Ordne Schlüssel und Wert in einer foreach-Schleife sauber zu.
commonMistakes:
  - Schlüssel und Wert zu vertauschen.
  - Zu glauben, foreach brauche immer einen Zahlenindex.
  - Die Schleife wie eine manuelle Zählschleife zu lesen, obwohl die Elemente schon vorliegen.
keyTakeaways:
  - foreach läuft direkt über vorhandene Arrayelemente.
  - Bei assoziativen Arrays können Schlüssel und Wert gemeinsam gelesen werden.
  - foreach ist besonders gut für vorhandene Datensammlungen geeignet.
recognizeSignals:
  - Es geht um Arrays, Listen, name => wert oder Wiederholung.
  - Du sollst bestehende Daten ausgeben oder verarbeiten.
  - Eine Schleife arbeitet nicht mit selbst berechnetem Index, sondern direkt mit Elementen.
selfCheckPoints:
  - Kann ich sagen, was bei jedem Durchlauf gerade in der Schleifenvariablen steckt?
  - Kann ich Schlüssel und Wert getrennt benennen?
  - Kann ich erklären, warum foreach hier passend ist?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - array
  - schleifen
draft: false
---

## Grundidee

Mit <code>foreach</code> läuft PHP schrittweise über die vorhandenen Elemente eines Arrays. Du musst dabei keinen Index selbst hochzählen. Die Schleife bekommt jedes Element nacheinander direkt geliefert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Liste von Getränken ausgeben</h3>
  <p>Ein Array enthält <code>"Wasser"</code>, <code>"Saft"</code> und <code>"Tee"</code>. Mit <code>foreach</code> kannst du jeden Eintrag einzeln ausgeben, ohne selbst mit 0, 1, 2 zu arbeiten.</p>
</div>

## Die einfache Form

```php
$liste = ["Wasser", "Saft", "Tee"];
foreach ($liste as $wert) {
  echo $wert;
}
```

Hier bedeutet das:

- <code>$liste</code> ist das Array,
- <code>$wert</code> steht in jedem Durchlauf für genau ein Element,
- die Schleife endet automatisch nach dem letzten Element.

## Bei assoziativen Arrays kommt der Schlüssel dazu

```php
$person = ["name" => "Mina", "stadt" => "Köln"];
foreach ($person as $schluessel => $wert) {
  echo $schluessel . ": " . $wert;
}
```

Jetzt wird nicht nur der Wert gelesen, sondern auch der passende Schlüssel.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Numerisch oder assoziativ</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Numerisches Array</strong>
      <span>Du willst meist nur die Elemente der Reihe nach verarbeiten.</span>
    </div>
    <div class="compare-item">
      <strong>Assoziatives Array</strong>
      <span>Du brauchst oft Schlüssel und Wert gemeinsam, weil beide Bedeutung tragen.</span>
    </div>
  </div>
</div>

## Warum foreach oft ruhiger ist

Bei fertigen Datenlisten ist <code>foreach</code> meist lesbarer als eine Schleife mit manuell erhöhtem Index. Der Schwerpunkt liegt dann auf den Daten selbst und nicht auf der Verwaltung der Laufvariable.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Arraytyp erkennen</strong>
    <span>Ist es eher eine Liste oder eher ein Schlüssel-Wert-Speicher?</span>
  </div>
  <div class="step-item">
    <strong>2. Schleifenvariablen lesen</strong>
    <span>Prüfe, ob nur <code>$wert</code> oder <code>$schluessel => $wert</code> verwendet wird.</span>
  </div>
  <div class="step-item">
    <strong>3. Einen Durchlauf denken</strong>
    <span>Setze probeweise ein Element ein und lies die Anweisungen mit diesem konkreten Inhalt.</span>
  </div>
  <div class="step-item">
    <strong>4. Danach verallgemeinern</strong>
    <span>Erst dann auf die restlichen Elemente übertragen.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>foreach</code> ist dann besonders passend, wenn die Datenliste schon da ist und du die Elemente nur noch nacheinander verarbeiten willst.</p>
</div>
