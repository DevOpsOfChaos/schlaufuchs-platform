---
title: "MySQLi-Connection, Result und Statement unterscheiden"
description: "Verstehe, dass beim Datenbankzugriff verschiedene Objektrollen beteiligt sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "mysqli-connection-result-und-statement-unterscheiden"]
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
