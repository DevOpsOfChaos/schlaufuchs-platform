---
title: "Prepared Statements in PHP verstehen"
description: "Verstehe, warum vorbereitete SQL-Anfragen Eingaben sauber von der Abfrage trennen und dadurch robuster und sicherer werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "prepared-statements-in-php-verstehen"]
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

Bei Prepared Statements wird die SQL-Anfrage nicht als fertig zusammengesetzter Text mit Benutzereingaben an den Server geschickt. Stattdessen wird zuerst ein Statement mit Platzhaltern vorbereitet, und die konkreten Werte werden später getrennt eingebunden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Login oder Suche mit Anwenderdaten</h3>
  <p>Ein Benutzer gibt einen Namen oder eine ID ein. Statt diesen Wert direkt in eine SQL-Zeile einzubauen, wird das Statement vorbereitet und der Wert später typisiert gebunden. Genau diese Trennung macht den Ablauf robuster.</p>
</div>

## Die Grundlogik in vier Schritten

<div class="signal-flow">
  <div class="flow-node"><strong>Statement vorbereiten</strong><span>Die SQL-Zeile enthält Platzhalter wie <code>?</code>.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Parameter binden</strong><span>Die späteren Werte werden passend zum Typ angegeben.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Ausführen</strong><span>Erst jetzt läuft die Anfrage mit den konkreten Werten.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Ergebnis lesen</strong><span>Falls Daten zurückkommen, werden sie danach ausgewertet.</span></div>
</div>

## Warum das sicherer und ruhiger ist

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>SQL und Werte getrennt</h3>
    <p>Die Struktur der Anfrage bleibt klar, und Benutzereingaben werden nicht als Teil des SQL-Textes missverstanden.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Alles als String zusammensetzen</h3>
    <p>Dann werden Struktur und Eingabe vermischt. Das ist fehleranfälliger und sicherheitlich deutlich problematischer.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Prepared Statements sind nicht nur „schöne Syntax“. Sie trennen die Logik der Anfrage von den konkreten Anwenderdaten.</p>
</div>
