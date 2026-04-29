---
title: "DQL und DML bei SQL-Anweisungen unterscheiden"
description: "Verstehe, warum Datenbankanfragen fachlich unterschiedliche Arten von Rückgaben haben und wie sich lesende und verändernde SQL-Anweisungen unterscheiden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dql-und-dml-bei-sql-anweisungen-unterscheiden"]
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

Nicht jede SQL-Anweisung liefert dieselbe Art von Ergebnis. Einige lesen Daten aus einer Tabelle. Andere verändern Daten. Diese Unterscheidung ist wichtig, weil der PHP-Ablauf danach unterschiedlich weitergeht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>SELECT liest – UPDATE verändert</h3>
  <p>Eine <code>SELECT</code>-Anweisung soll Datensätze anzeigen. Eine <code>UPDATE</code>-Anweisung soll nur Werte ändern. Beide werden zwar an die Datenbank geschickt, aber die serverseitige Weiterverarbeitung ist nicht gleich.</p>
</div>

## Zwei Grundarten ruhig trennen

<div class="compare-card">
  <p class="card-kicker">Einordnung</p>
  <h3>Lesen oder verändern?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>DQL</strong>
      <span>Typisch ist <code>SELECT</code>. Ziel ist das Lesen von Datensätzen.</span>
    </div>
    <div class="compare-item">
      <strong>DML</strong>
      <span>Typisch sind <code>INSERT</code>, <code>UPDATE</code> oder <code>DELETE</code>. Ziel ist das Verändern von Daten.</span>
    </div>
  </div>
</div>

## Warum das im PHP-Ablauf wichtig ist

Bei einem lesenden Zugriff musst du später oft über die Ergebnismenge iterieren oder Zeilen einzeln lesen. Bei einer verändernden Anweisung ist dagegen oft nur wichtig, ob die Aktion erfolgreich war.

## Typischer Denkfehler

Ein <code>UPDATE</code> erzeugt nicht plötzlich eine Tabelle voller lesbarer Datensätze nur weil ebenfalls <code>query()</code> aufgerufen wurde. Erst die Art der SQL-Anweisung entscheidet, wie das Ergebnis fachlich zu lesen ist.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. SQL-Verb lesen</strong>
    <span>Beginnt die Anweisung mit SELECT, INSERT, UPDATE oder DELETE?</span>
  </div>
  <div class="step-item">
    <strong>2. Ziel benennen</strong>
    <span>Sollen Daten gelesen oder verändert werden?</span>
  </div>
  <div class="step-item">
    <strong>3. PHP-Folge denken</strong>
    <span>Braucht der nächste Schritt Datensätze oder nur Erfolg/Misserfolg?</span>
  </div>
  <div class="step-item">
    <strong>4. Methoden passend lesen</strong>
    <span>Beurteile danach, ob etwa <code>fetch_array</code> fachlich überhaupt Sinn ergibt.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gleiches Datenbank-API heißt nicht automatisch gleiche Ergebnisart. Erst die SQL-Anweisung selbst verrät, ob gelesen oder verändert wird.</p>
</div>
