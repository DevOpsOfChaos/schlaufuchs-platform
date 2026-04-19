---
title: Funktionen mit Parametern und Rueckgaben in PHP ruhig lesen
description: Verstehe, wie Funktionen Eingaben annehmen, verarbeiten und Ergebnisse zurueckgeben.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - funktionen-mit-parametern-und-rueckgaben-in-php-ruhig-lesen
learningGoals:
  - Du erklaerst die Rolle von Parametern und Rueckgabewerten.
  - Du unterscheidest Eingabe, Verarbeitung und Ergebnis sauber.
  - Du liest kleine PHP Funktionen ruhiger als Datenfluss.
practiceIdeas:
  - Markiere Parameter und Rueckgabestelle in einer Funktion.
  - Beschreibe eine Funktion zuerst in Alltagssprache.
  - Verfolge, welcher Wert hineingeht und welcher zurueckkommt.
commonMistakes:
  - Parameter und Rueckgabewert zu vermischen.
  - Funktionen nur ueber Syntax statt ueber Datenfluss zu lesen.
  - Zu glauben, dass eine Funktion automatisch etwas ausgibt, nur weil sie etwas berechnet.
keyTakeaways:
  - Parameter sind Eingaben fuer eine Funktion.
  - Rueckgabewerte sind Ergebnisse, die aus der Funktion herauskommen.
  - Ruhiges Lesen gelingt ueber die Abfolge Eingabe, Verarbeitung, Ergebnis.
recognizeSignals:
  - Eine Funktion nimmt Klammerwerte an und verwendet return.
  - Es geht um kleine Berechnungen oder Umformungen.
  - Du sollst sagen, was hinein- und was herausgeht.
selfCheckPoints:
  - Kann ich Parameter und Rueckgabe sicher unterscheiden?
  - Kann ich eine Funktion als kleinen Ablauf in Worten beschreiben?
  - Kann ich erklaeren, warum return nicht dasselbe wie echo ist?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - funktionen
  - return
draft: false
---

## Grundidee

Eine Funktion ist ein kleiner verpackter Ablauf. Sie bekommt oft **Eingaben**, verarbeitet diese und liefert ein **Ergebnis** zurueck.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Preis mit Steuer berechnen</h3>
  <p>Eine Funktion bekommt einen Nettopreis als Eingabe. Im Inneren wird damit gerechnet. Am Ende kommt ein Bruttopreis als Ergebnis heraus. Genau so werden Parameter und Rueckgabe ruhig lesbar.</p>
</div>

## Drei einfache Rollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Parameter</strong>
    <span>Die Funktion bekommt Eingaben von aussen.</span>
  </div>
  <div class="visual-item">
    <strong>Verarbeitung</strong>
    <span>Im Funktionskoerper werden die Eingaben benutzt.</span>
  </div>
  <div class="visual-item">
    <strong>Rueckgabe</strong>
    <span>Mit <code>return</code> wird ein Ergebnis wieder nach aussen gegeben.</span>
  </div>
</div>

## Typisches Beispiel

```php
function bruttoPreis($netto) {
  $brutto = $netto * 1.19;
  return $brutto;
}
```

Hier bedeutet das:

- <code>$netto</code> ist die Eingabe,
- innerhalb der Funktion wird gerechnet,
- <code>return $brutto;</code> gibt das Ergebnis zurueck.

## return ist nicht dasselbe wie echo

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Ergebnis liefern oder direkt ausgeben</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>return</strong>
      <span>Gibt ein Ergebnis an die aufrufende Stelle zurueck.</span>
    </div>
    <div class="compare-item">
      <strong>echo</strong>
      <span>Schreibt etwas direkt in die Ausgabe.</span>
    </div>
  </div>
</div>

## Mini-Demo: Funktion als Datenfluss lesen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Von Eingabe zum Ergebnis</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Parameter</strong><span>Welcher Wert geht hinein?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Funktionskoerper</strong><span>Was passiert mit dem Wert?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Rueckgabe</strong><span>Welcher neue Wert kommt heraus?</span></div>
  </div>
</div>

## Diese Seite behandelt bewusst den einfachen Funktionsfluss

Hier geht es um das Lesen kleiner Funktionen. Fruehe Abbrueche, mehrere return Stellen oder komplexere Kontrolllogik sind feinere Unterthemen.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Parameter lesen</strong>
    <span>Was kommt als Eingabe in die Funktion?</span>
  </div>
  <div class="step-item">
    <strong>2. Verarbeitung benennen</strong>
    <span>Welche Umformung oder Berechnung findet statt?</span>
  </div>
  <div class="step-item">
    <strong>3. Rueckgabe lesen</strong>
    <span>Was wird am Ende wieder nach aussen gegeben?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Funktion wird ruhiger, wenn du sie nicht als Block Syntax, sondern als Weg von Eingabe zu Ergebnis liest.</p>
</div>
