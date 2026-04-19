---
title: MySQLi-Ergebnisse mit fetch_array lesen
description: Verstehe, wie Datenbankergebnisse Zeile für Zeile gelesen werden und was numerische oder assoziative Indizes dabei bedeuten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-ergebnisse-mit-fetch-array-lesen
learningGoals:
  - Du erklärst die Grundidee eines Ergebnissesets beim Datenbankzugriff.
  - Du unterscheidest numerische, assoziative und kombinierte Zugriffe grob.
  - Du liest <code>fetch_array</code> als schrittweises Herausnehmen von Datensätzen.
practiceIdeas:
  - Ordne einer Datenbankzeile Feldnamen und Feldpositionen zu.
  - Vergleiche einen Zugriff über Spaltenname mit einem Zugriff über Position.
  - Beschreibe, warum mehrere Datensätze meist nacheinander gelesen werden.
commonMistakes:
  - Zu denken, die gesamte Abfrage sei schon direkt ein einzelner Datensatz.
  - Feldname und Feldposition nicht zu unterscheiden.
  - Ergebnisobjekt und gelesene Datenzeile zu verwechseln.
keyTakeaways:
  - Eine SELECT-Anfrage liefert oft erst ein Ergebnisobjekt, nicht sofort einzelne Werte.
  - <code>fetch_array</code> liest daraus Zeilen.
  - Zugriff kann numerisch, assoziativ oder kombiniert erfolgen.
recognizeSignals:
  - Es geht um <code>fetch_array</code>, <code>MYSQLI_ASSOC</code>, <code>MYSQLI_NUM</code> oder <code>MYSQLI_BOTH</code>.
  - Du sollst erklären, wie aus einer Datenbankabfrage konkrete Werte gelesen werden.
  - Es tauchen Spaltennamen oder Array-Indizes in Resultaten auf.
selfCheckPoints:
  - Kann ich Ergebnisobjekt und Datenzeile unterscheiden?
  - Kann ich sagen, wann Feldnamen lesbarer sind als Zahlenindizes?
  - Kann ich beschreiben, wie mehrere Datensätze nacheinander gelesen werden?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - mysqli
  - fetch
draft: false
---

## Grundidee

Eine Datenbankabfrage liefert bei vielen SELECT-Anfragen nicht sofort einzelne Werte, sondern zunächst ein Ergebnis, aus dem Datensätze gelesen werden. Genau dafür ist <code>fetch_array</code> gedacht.

<div class="compare-card">
  <p class="card-kicker">Zugriffsarten</p>
  <h3>Wie kann eine Zeile gelesen werden?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>MYSQLI_ASSOC</strong>
      <span>Zugriff über Spaltennamen wie <code>$row['email']</code>.</span>
    </div>
    <div class="compare-item">
      <strong>MYSQLI_NUM</strong>
      <span>Zugriff über Positionen wie <code>$row[0]</code>.</span>
    </div>
    <div class="compare-item">
      <strong>MYSQLI_BOTH</strong>
      <span>Beides gleichzeitig, also Namen und Zahlenindizes.</span>
    </div>
  </div>
</div>

## Ein ruhiges Denkbild

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ergebnis ist erst ein Stapel, dann einzelne Zeilen</h3>
  <p>Eine SELECT-Abfrage kann man sich wie einen Stapel von Datensätzen vorstellen. <code>fetch_array</code> nimmt jeweils einen Datensatz heraus und macht ihn im PHP-Code lesbar.</p>
</div>
