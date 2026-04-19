---
title: MySQLi prozedural und objektorientiert vergleichen
description: Verstehe, warum MySQLi in PHP sowohl prozedural als auch objektorientiert geschrieben werden kann und wie beide Schreibweisen fachlich zusammenhängen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-prozedural-und-objektorientiert-vergleichen
learningGoals:
  - Du unterscheidest prozedurale und objektorientierte MySQLi-Schreibweise grob.
  - Du ordnest vergleichbare Aufrufe fachlich derselben Datenbankaktion zu.
  - Du erkennst, warum gemischte Schreibweise unnötig unruhig werden kann.
practiceIdeas:
  - Vergleiche <code>mysqli_query(...)</code> mit <code>$con->query(...)</code>.
  - Lies denselben Datenbankzugriff einmal funktional und einmal objektorientiert.
  - Begründe, warum ein Stil im Projekt konsequent durchgezogen werden sollte.
commonMistakes:
  - Zu glauben, es seien zwei völlig verschiedene Datenbanktechniken.
  - Die Schreibweise zu mischen, obwohl der Ablauf derselbe bleibt.
  - Objekt und Ergebnisressource durcheinanderzubringen.
keyTakeaways:
  - MySQLi unterstützt zwei Schreibstile für ähnliche Aufgaben.
  - Fachlich bleibt der Ablauf gleich: verbinden, Anfrage senden, Ergebnis lesen, schließen.
  - Ruhiger Code entsteht meist durch konsequenten Stil.
recognizeSignals:
  - Es geht um <code>mysqli_connect</code> oder <code>new mysqli(...)</code>.
  - Du siehst <code>mysqli_query(...)</code> oder <code>$con->query(...)</code>.
  - Du sollst Zusammenhänge statt bloß Syntaxunterschiede erklären.
selfCheckPoints:
  - Kann ich beide Schreibweisen fachlich auf denselben Ablauf beziehen?
  - Kann ich sagen, was am Mischen unruhig wird?
  - Kann ich Verbindung und Ergebnis voneinander trennen?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - mysqli
  - mysql
draft: false
---

## Grundidee

Beim MySQLi-Zugriff in PHP gibt es oft zwei Schreibweisen: prozedural und objektorientiert. Fachlich lösen beide dieselben Grundaufgaben, nur die Syntax wirkt anders.

<div class="compare-card">
  <p class="card-kicker">Gleicher Zweck, andere Form</p>
  <h3>Der Datenbankablauf bleibt derselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Prozedural</strong>
      <span><code>mysqli_query($con, $sql)</code> wirkt wie ein Funktionsaufruf mit Verbindung als Argument.</span>
    </div>
    <div class="compare-item">
      <strong>Objektorientiert</strong>
      <span><code>$con->query($sql)</code> bindet denselben Schritt als Methode an das Verbindungsobjekt.</span>
    </div>
    <div class="compare-item">
      <strong>Fachlich</strong>
      <span>Beides heißt: Schicke die Anfrage über die Verbindung an die Datenbank.</span>
    </div>
  </div>
</div>

## Typischer Ablauf

1. Verbindung aufbauen
2. Anfrage schicken
3. Ergebnis lesen
4. Verbindung schließen

<div class="note-panel">
  <p><strong>Merke:</strong> Prozedural vs. objektorientiert ist beim MySQLi-Zugriff zuerst eine Stilfrage – fachlich bleibt der Ablauf sehr ähnlich.</p>
</div>
