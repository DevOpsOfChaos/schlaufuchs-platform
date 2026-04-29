---
title: "filter_input in PHP verstehen"
description: "Verstehe, wie filter_input externe Eingaben direkt liest und optional prüft oder bereinigt, statt erst ungefiltert weiterzuarbeiten."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filter-input-in-php-verstehen"]
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

Mit <code>filter_input</code> liest PHP eine Eingabe von außen direkt aus einer bestimmten Quelle und kann sie dabei sofort filtern. Das macht den Zugriff oft ruhiger, weil nicht erst ungeprüfte Daten verteilt werden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine E-Mail aus einem Formular lesen</h3>
  <p>Statt zuerst <code>$_POST['email']</code> zu lesen und später darüber nachzudenken, kann ein Skript direkt mit <code>filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL)</code> arbeiten. So stehen Quelle und Absicht schon im Zugriff selbst.</p>
</div>

## Der Aufbau eines typischen Aufrufs

```php
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
```

Darin stecken drei Kernfragen:

- Woher kommt die Eingabe? → <code>INPUT_POST</code>
- Wie heißt das Feld? → <code>'email'</code>
- Was soll passieren? → filtern, hier bereinigen.

## Validieren und bereinigen

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Prüfen ist nicht dasselbe wie säubern</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>VALIDATE</strong>
      <span>Prüft, ob ein Wert zu einer erwarteten Form passt, zum Beispiel zu einer E-Mail-Adresse.</span>
    </div>
    <div class="compare-item">
      <strong>SANITIZE</strong>
      <span>Entfernt oder entschärft bestimmte Zeichen, damit mit dem Wert ruhiger weitergearbeitet werden kann.</span>
    </div>
  </div>
</div>

## Warum filter_input hilfreich ist

Wer direkt mit <code>filter_input</code> arbeitet, trennt Eingabequelle und Verarbeitung klarer. Das macht den Code lesbarer und reduziert die Gefahr, dass ungeprüfte Benutzereingaben zu früh weitergereicht werden.

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Quelle nennen</strong>
    <span>INPUT_GET, INPUT_POST oder eine andere Eingabequelle.</span>
  </div>
  <div class="step-item">
    <strong>2. Feldname lesen</strong>
    <span>Welcher konkrete Wert wird angefragt?</span>
  </div>
  <div class="step-item">
    <strong>3. Filterart benennen</strong>
    <span>Wird validiert oder bereinigt?</span>
  </div>
  <div class="step-item">
    <strong>4. Ergebnis einschätzen</strong>
    <span>Was bedeutet Erfolg oder Misserfolg für den weiteren Ablauf?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>filter_input</code> ist nicht „magische Sicherheit“, aber ein klarer Startpunkt, um Eingaben bewusst und nachvollziehbar zu behandeln.</p>
</div>
