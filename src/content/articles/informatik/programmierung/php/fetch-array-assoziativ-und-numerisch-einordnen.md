---
title: fetch_array assoziativ und numerisch einordnen
description: Verstehe, dass gelesene Datenzeilen unterschiedlich adressiert werden können.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - fetch-array-assoziativ-und-numerisch-einordnen
learningGoals:
  - Du unterscheidest numerischen und assoziativen Zugriff auf Datenzeilen.
  - Du erklärst, warum Spaltenname und Spaltenposition zwei verschiedene Bezugspunkte sind.
  - Du liest fetch-Ergebnisse ruhiger als Struktur.
practiceIdeas:
  - Vergleiche dieselbe Datenzeile einmal über Indexzahlen und einmal über Spaltennamen.
  - Erkläre, welche Schreibweise in Beispielcode oft lesbarer wirkt.
  - Prüfe bei einer Zeile, was [0] und ['name'] jeweils bedeuten.
commonMistakes:
  - Numerische Position und Spaltenname zu verwechseln.
  - Zu denken, fetch_array liefere immer nur eine „fertige Tabelle“.
  - Die Struktur der Zeile nicht bewusst zu lesen.
keyTakeaways:
  - Eine gelesene Zeile kann über Zahlen oder Spaltennamen adressiert werden.
  - Assoziativer Zugriff ist oft fachlich lesbarer.
  - Beide Zugriffsideen beschreiben dieselbe Datenzeile aus verschiedenen Blickwinkeln.
recognizeSignals:
  - Es geht um fetch_array, Datenzeilen, Spaltennamen oder Indizes.
  - Ein Beispiel zeigt [0], [1] oder ['titel'].
  - Du sollst erklären, wie Werte aus einer Ergebnismenge gelesen werden.
selfCheckPoints:
  - Kann ich Position und Namen trennen?
  - Kann ich erklären, warum beide Zugriffsarten dieselbe Zeile betreffen?
  - Kann ich sagen, welche Variante fachlich lesbarer sein kann?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - mysqli
  - fetch-array
  - datenbank
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
