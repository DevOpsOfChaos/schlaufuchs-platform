---
title: "MySQLi-Ergebnisse mit fetch_array lesen"
description: "Verstehe, wie Datenbankergebnisse Zeile für Zeile gelesen werden und was numerische oder assoziative Indizes dabei bedeuten."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "mysqli-ergebnisse-mit-fetch-array-lesen"]
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
