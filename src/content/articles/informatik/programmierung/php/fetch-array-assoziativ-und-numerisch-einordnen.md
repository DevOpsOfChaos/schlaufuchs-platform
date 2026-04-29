---
title: "fetch_array assoziativ und numerisch einordnen"
description: "Verstehe, dass gelesene Datenzeilen unterschiedlich adressiert werden können."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "fetch-array-assoziativ-und-numerisch-einordnen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Nach einer Datenbankabfrage wird eine Zeile oft nicht einfach als „fertiger Text“ geliefert, sondern als Struktur, auf deren Inhalte unterschiedlich zugegriffen werden kann.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Numerisch</p>
    <h3>Zugriff über Position</h3>
    <p>Die erste Spalte liegt an Position 0, die zweite an Position 1 und so weiter.</p>
  </section>
  <section>
    <p class="card-kicker">Assoziativ</p>
    <h3>Zugriff über Namen</h3>
    <p>Statt einer Zahl wird der Spaltenname wie <code>'titel'</code> oder <code>'preis'</code> genutzt.</p>
  </section>
</div>

## Warum das wichtig ist

Bei Zahlenzugriffen musst du die Spaltenreihenfolge mitdenken. Beim assoziativen Zugriff liest du den fachlichen Namen direkter. Deshalb wirkt assoziatives Lesen oft ruhiger, auch wenn technisch beide Wege dieselbe Zeile beschreiben.

<div class="note-panel">
  <p><strong>Merke:</strong> fetch_array liefert keine „zweite Tabelle“, sondern eine Datenzeile, auf die du mit unterschiedlichen Bezugspunkten zugreifen kannst.</p>
</div>
