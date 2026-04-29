---
title: "MySQLi prozedural und objektorientiert vergleichen"
description: "Verstehe, warum MySQLi in PHP sowohl prozedural als auch objektorientiert geschrieben werden kann und wie beide Schreibweisen fachlich zusammenhängen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "mysqli-prozedural-und-objektorientiert-vergleichen"]
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
