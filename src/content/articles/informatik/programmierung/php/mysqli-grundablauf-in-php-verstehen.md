---
title: MySQLi-Grundablauf in PHP verstehen
description: Verstehe den groben Ablauf von Verbindungsaufbau, Anfrage, Ergebnislesen und Schließen beim Datenbankzugriff mit PHP.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-grundablauf-in-php-verstehen
learningGoals:
  - Du beschreibst den groben Ablauf eines Datenbankzugriffs mit MySQLi.
  - Du unterscheidest Verbindung, Anfrage und Ergebnis fachlich voneinander.
  - Du erkennst, warum DQL- und DML-Anfragen unterschiedlich wirken.
practiceIdeas:
  - Ordne in einem Ablaufbild Verbindungsaufbau, Query, Ergebniszugriff und Schließen.
  - Erkläre, warum eine SELECT-Anfrage anders gelesen wird als eine UPDATE-Anfrage.
  - Vergleiche prozedurale und objektorientierte Schreibweise nur auf Ablaufebene.
commonMistakes:
  - Verbindung und Abfrage als denselben Schritt zu lesen.
  - Zu glauben, jede SQL-Anfrage liefere direkt dieselbe Art von Rückgabe.
  - Nur auf Syntax zu schauen und nicht auf die Phasen des Ablaufs.
keyTakeaways:
  - Ein Datenbankzugriff hat meist die Phasen verbinden, anfragen, auswerten, schließen.
  - SELECT liefert typischerweise Ergebnisse zum Lesen, UPDATE oder INSERT eher nur Erfolg oder Misserfolg.
  - Prozedurale und OOP-Schreibweise folgen fachlich oft derselben Logik.
recognizeSignals:
  - Es geht um PHP, MySQLi, query, fetch oder connection.
  - Ein Beispiel zeigt SELECT, UPDATE oder INSERT.
  - Du sollst den Zugriff als Ablauf statt als bloße Funktionsliste erklären.
selfCheckPoints:
  - Kann ich die vier Grundphasen nennen?
  - Kann ich DQL und DML grob auseinanderhalten?
  - Kann ich beschreiben, warum nach einer Abfrage oft noch ein Ergebniszugriff nötig ist?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - mysqli
  - datenbank
draft: false
---

## Grundidee

Ein PHP-Skript greift nicht „einfach so“ direkt auf Tabellen zu. Typisch ist ein ruhiger Ablauf: Verbindung aufbauen, eine Anfrage senden, das Ergebnis lesen und die Verbindung wieder sauber beenden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Produkte aus einer Tabelle lesen</h3>
  <p>Ein Shop möchte eine Produktliste anzeigen. Dafür wird zuerst eine Verbindung zur Datenbank aufgebaut, dann eine SELECT-Anfrage gesendet, anschließend werden die Datensätze gelesen und am Ende wird die Verbindung beendet.</p>
</div>

## Die vier Grundphasen

<div class="step-grid">
  <div class="step-item">
    <strong>1. Verbinden</strong>
    <span>Das Skript baut eine Verbindung zur Datenbank auf.</span>
  </div>
  <div class="step-item">
    <strong>2. Anfrage senden</strong>
    <span>Ein SQL-Statement wie SELECT, INSERT oder UPDATE wird abgeschickt.</span>
  </div>
  <div class="step-item">
    <strong>3. Ergebnis auswerten</strong>
    <span>Je nach Anfrage werden Datensätze gelesen oder nur Erfolg/Misserfolg geprüft.</span>
  </div>
  <div class="step-item">
    <strong>4. Schließen</strong>
    <span>Die Verbindung wird wieder beendet.</span>
  </div>
</div>

## SELECT ist nicht UPDATE

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Lesen und Verändern haben unterschiedliche Rollen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>DQL / SELECT</strong>
      <span>Liefert typischerweise ein Ergebnis, das danach noch gelesen werden muss.</span>
    </div>
    <div class="compare-item">
      <strong>DML / INSERT, UPDATE, DELETE</strong>
      <span>Zeigt eher, ob die Aktion geklappt hat, statt direkt eine Ergebnismenge zu liefern.</span>
    </div>
  </div>
</div>

## Prozedural und OOP

Bei MySQLi gibt es eine prozedurale und eine objektorientierte Schreibweise. Fachlich folgen beide aber meist demselben Ablauf: verbinden, query, auswerten, schließen.

<div class="note-panel">
  <p><strong>Merke:</strong> Wer MySQLi nur als Funktionsnamen lernt, verliert schnell den Überblick. Die eigentliche Logik ist der Ablauf von Verbindung über Anfrage bis zur Auswertung.</p>
</div>
