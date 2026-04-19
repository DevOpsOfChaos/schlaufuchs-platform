---
title: Prepared Statements mit bind_param und execute lesen
description: Verstehe den Ablauf von Platzhaltern, Parameterbindung und Ausführung bei Prepared Statements in PHP/MySQLi.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - prepared-statements-mit-bind-param-und-execute-lesen
learningGoals:
  - Du erklärst den Grundablauf eines Prepared Statements.
  - Du unterscheidest SQL-Vorlage, Parameterbindung und Ausführung.
  - Du erkennst, warum die Trennung von SQL und Eingaben fachlich wichtig ist.
practiceIdeas:
  - Ordne die Schritte prepare, bind_param, execute und get_result in sinnvolle Reihenfolge.
  - Erkläre, welche Rolle Platzhalter in der SQL-Vorlage haben.
  - Vergleiche einen rohen SQL-String grob mit einem Prepared Statement.
commonMistakes:
  - Zu denken, bind_param führe die Anfrage schon aus.
  - Platzhalter mit echten Werten zu verwechseln.
  - Prepared Statements nur als „andere Syntax“ statt als Sicherheits- und Strukturidee zu sehen.
keyTakeaways:
  - Prepared Statements trennen SQL-Vorlage und Werte.
  - bind_param ordnet Werte passend an die Platzhalter.
  - execute startet erst die eigentliche Ausführung.
recognizeSignals:
  - Es geht um ?, bind_param, execute oder get_result.
  - Ein Beispiel zeigt mehrere Phasen eines DB-Zugriffs.
  - Du sollst erklären, warum dieser Ablauf vor SQL-Injection schützt.
selfCheckPoints:
  - Kann ich SQL-Vorlage und Eingabewerte trennen?
  - Kann ich die Reihenfolge der Schritte nennen?
  - Kann ich erklären, warum execute erst später kommt?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - prepared
  - statements
draft: false
---

## Grundidee

Bei Prepared Statements wird das SQL nicht sofort mit allen konkreten Eingaben als fertiger Text abgeschickt. Stattdessen wird zuerst eine Vorlage mit Platzhaltern vorbereitet. Erst danach werden Werte gebunden und schließlich ausgeführt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nach einer Benutzer-ID suchen</h3>
  <p>Statt einen vollständigen SQL-String aus Benutzereingaben zusammenzubauen, verwendet das Skript eine Vorlage wie <code>SELECT * FROM users WHERE id = ?</code>. Der konkrete Wert wird erst später gebunden.</p>
</div>

## Die Phasen im Überblick

<div class="signal-flow">
  <div class="flow-node"><strong>prepare</strong><span>SQL-Vorlage mit Platzhaltern vorbereiten</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>bind_param</strong><span>konkrete Werte und Typen an die Platzhalter binden</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>execute</strong><span>Anweisung wirklich ausführen</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>get_result / fetch</strong><span>Ergebnis lesen, falls Daten abgefragt wurden</span></div>
</div>

## Was die Platzhalter leisten

Die Platzhalter <code>?</code> sind noch keine echten Werte. Sie markieren nur Stellen, an denen später passende Parameter eingesetzt werden.

## Warum bind_param noch nicht reicht

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Vorbereiten ist nicht schon Ausführen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>bind_param</strong>
      <span>Verknüpft Werte mit der vorbereiteten SQL-Vorlage.</span>
    </div>
    <div class="compare-item">
      <strong>execute</strong>
      <span>Startet erst die eigentliche Aktion auf der Datenbank.</span>
    </div>
  </div>
</div>

## Sicherheitsidee dahinter

Weil SQL-Struktur und Eingabedaten getrennt bleiben, wird die Gefahr verringert, dass Benutzereingaben die SQL-Struktur unerwünscht verändern. Deshalb ist der Ablauf nicht nur „länger“, sondern fachlich sauberer.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Vorlage suchen</strong>
    <span>Wo steht das SQL mit <code>?</code>?</span>
  </div>
  <div class="step-item">
    <strong>2. Wertebindung lesen</strong>
    <span>Welche Variablen werden an welche Platzhalter gebunden?</span>
  </div>
  <div class="step-item">
    <strong>3. Ausführung markieren</strong>
    <span>Erst <code>execute</code> löst die Anfrage wirklich aus.</span>
  </div>
  <div class="step-item">
    <strong>4. Ergebnis nachgelagert lesen</strong>
    <span>Danach erst prüfen, ob Daten gelesen werden müssen.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Prepared Statements sind vor allem eine Trennungsidee: erst Struktur, dann Werte, dann Ausführung.</p>
</div>
