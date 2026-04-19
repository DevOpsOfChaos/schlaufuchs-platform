---
title: DQL und DML bei SQL-Anweisungen unterscheiden
description: Verstehe, warum Datenbankanfragen fachlich unterschiedliche Arten von Rückgaben haben und wie sich lesende und verändernde SQL-Anweisungen unterscheiden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dql-und-dml-bei-sql-anweisungen-unterscheiden
learningGoals:
  - Du unterscheidest lesende und verändernde SQL-Anweisungen grob voneinander.
  - Du erklärst, warum ihre Rückgaben im PHP-Ablauf unterschiedlich wirken.
  - Du erkennst, dass Erfolg einer Änderung nicht dasselbe ist wie eine Ergebnismenge.
practiceIdeas:
  - Ordne SELECT, INSERT und UPDATE einer passenden Kategorie zu.
  - Erkläre, warum eine SELECT-Anfrage später Zeilen liefert, eine UPDATE-Anfrage aber oft nur Erfolg/Misserfolg.
  - Lies einen PHP-MySQL-Ablauf und nenne die Stelle, an der echte Datensätze erst später entstehen.
commonMistakes:
  - Alle SQL-Anweisungen so zu behandeln, als würden sie gleichartige Ergebnisse liefern.
  - Booleschen Erfolg und tatsächliche Datensätze zu verwechseln.
  - UPDATE oder INSERT mit Ergebniszeilen einer SELECT-Abfrage gleichzusetzen.
keyTakeaways:
  - DQL liest Daten, DML verändert Daten.
  - Darum unterscheiden sich Rückgaben und Weiterverarbeitung.
  - Ein lesender Zugriff braucht später meist ein Result-Objekt oder Datensätze, ein verändernder Zugriff eher eine Erfolgsaussage.
recognizeSignals:
  - Es geht um SELECT, INSERT, UPDATE oder DELETE.
  - Ein Beispiel zeigt query()-Rückgaben und spätere Auswertung.
  - Du sollst begründen, warum fetch_array nur bei passenden Ergebnissen Sinn ergibt.
selfCheckPoints:
  - Kann ich sagen, ob eine SQL-Anweisung Daten liest oder verändert?
  - Kann ich Bool-Erfolg und Ergebnismenge unterscheiden?
  - Kann ich erklären, warum die PHP-Weiterverarbeitung danach anders aussieht?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - dql
  - und
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
