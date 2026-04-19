---
title: MySQLi-Connection, Result und Statement unterscheiden
description: Verstehe, dass beim Datenbankzugriff verschiedene Objektrollen beteiligt sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-connection-result-und-statement-unterscheiden
learningGoals:
  - Du unterscheidest Verbindung, Ergebnis und Prepared Statement fachlich.
  - Du erklärst, warum diese Rollen nicht dieselbe Aufgabe haben.
  - Du liest Datenbankcode mehr als Rollenmodell statt als Namenssammlung.
practiceIdeas:
  - Ordne Verbindungsobjekt, Ergebnisobjekt und Statement-Objekt ihren Aufgaben zu.
  - Erkläre, warum ein SELECT nicht direkt „die Zeile“ ist, sondern zuerst ein Ergebnisobjekt liefern kann.
  - Vergleiche query-Ablauf und prepared-statement-Ablauf auf Rollenebene.
commonMistakes:
  - Verbindung und Ergebnis zu verwechseln.
  - Ein Prepared Statement mit dem ausgeführten Ergebnis gleichzusetzen.
  - Zu glauben, alle Datenbankfunktionen arbeiteten auf demselben Objekttyp.
keyTakeaways:
  - Eine Verbindung hält den Kontakt zur Datenbank.
  - Ein Result repräsentiert gelesene Ergebnisse.
  - Ein Statement steht eher für die vorbereitete und gebundene Anfrage.
recognizeSignals:
  - Es geht um mysqli, query, result, stmt oder fetch.
  - Ein Beispiel arbeitet mit SELECT oder Prepared Statements.
  - Du sollst Objektrollen und nicht nur Funktionsnamen trennen.
selfCheckPoints:
  - Kann ich Verbindung, Result und Statement voneinander trennen?
  - Kann ich sagen, welches Objekt für das Lesen von Ergebnissen typisch ist?
  - Kann ich den Nutzen von Statements grob erklären?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - mysqli
  - prepared-statements
  - datenbank
draft: false
---

## Grundidee

Beim MySQLi-Zugriff tauchen oft unterschiedliche Objekttypen oder Rollen auf. Wer sie sauber trennt, liest Datenbankcode deutlich ruhiger.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Connection</strong>
    <span>Stellt die Verbindung zur Datenbank her und hält sie.</span>
  </div>
  <div class="visual-item">
    <strong>Result</strong>
    <span>Repräsentiert typischerweise eine Ergebnismenge aus einer Lesefrage wie SELECT.</span>
  </div>
  <div class="visual-item">
    <strong>Statement</strong>
    <span>Repräsentiert eine vorbereitete Anfrage, oft mit gebundenen Parametern.</span>
  </div>
</div>

## Warum diese Rollen hilfreich sind

<div class="compare-card">
  <p class="card-kicker">Nicht alles ist „die Datenbank“</p>
  <h3>Verschiedene Schritte brauchen verschiedene technische Träger</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Verbinden</strong>
      <span>Ohne Connection gibt es keinen Kontakt zur Datenbank.</span>
    </div>
    <div class="compare-item">
      <strong>Lesen</strong>
      <span>Ein Result hält die Daten, die danach noch ausgelesen werden müssen.</span>
    </div>
    <div class="compare-item">
      <strong>Vorbereiten</strong>
      <span>Ein Statement beschreibt die vorbereitete Abfrage mit Parametern und Ausführung.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein SELECT ergibt nicht direkt „die fertige Datenzeile“. Häufig steht zuerst ein Ergebnisobjekt da, das erst noch gelesen werden muss.</p>
</div>
