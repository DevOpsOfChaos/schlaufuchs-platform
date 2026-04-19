---
title: filter_has_var und filter_var in PHP gezielt nutzen
description: Verstehe, wie PHP-Eingaben zuerst auf Existenz geprüft und dann validiert oder bereinigt werden können.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filter_has_var-und-filter_var-in-php-gezielt-nutzen
learningGoals:
  - Du unterscheidest Existenzprüfung, Validierung und Bereinigung fachlich voneinander.
  - Du erklärst die Rollen von <code>filter_has_var</code> und <code>filter_var</code>.
  - Du liest einfache Filterlogik ruhiger als Prüfablauf statt als Funktionsnamenliste.
practiceIdeas:
  - "Beschreibe, was zuerst geprüft werden sollte: ob ein Wert da ist oder ob er gültig ist."
  - Ordne E-Mail, URL und Zahl passenden Filterideen zu.
  - Vergleiche validieren und bereinigen an einem kleinen Beispiel.
commonMistakes:
  - Zu glauben, dass jede Bereinigung automatisch auch eine Gültigkeitsprüfung ist.
  - Existenzprüfung und Inhaltsprüfung zu verwechseln.
  - Filterlogik erst nach der Speicherung statt vor der Verarbeitung zu denken.
keyTakeaways:
  - <code>filter_has_var</code> prüft zuerst, ob eine Variable vorhanden ist.
  - <code>filter_var</code> validiert oder bereinigt konkrete Werte.
  - "Gute Prüfabläufe laufen meist in klarer Reihenfolge: vorhanden, plausibel, dann weiterverarbeiten."
recognizeSignals:
  - Im Code tauchen Filterfunktionen oder Begriffe wie VALIDATE und SANITIZE auf.
  - Es geht um E-Mail, URL, Integer oder Formulareingaben.
  - Du sollst erklären, wie Eingaben serverseitig sicherer verarbeitet werden.
selfCheckPoints:
  - Kann ich Existenzprüfung und Validierung unterscheiden?
  - Kann ich sagen, wann bereinigen statt validieren im Vordergrund steht?
  - Kann ich einen kleinen Prüfablauf in Worten erklären?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - filter
  - validierung
draft: false
---

## Grundidee

Bei Servereingaben reicht es nicht zu wissen, dass ein Feld theoretisch existieren sollte. Fachlich geht es oft um drei getrennte Fragen: Ist der Wert überhaupt vorhanden? Entspricht er dem erwarteten Typ oder Muster? Muss er vor einer Ausgabe oder Weiterverarbeitung noch bereinigt werden?

<div class="compare-card">
  <p class="card-kicker">Prüfrollen</p>
  <h3>Nicht jede Prüfung tut dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Existenz prüfen</strong>
      <span><code>filter_has_var(...)</code> fragt: Gibt es die Variable überhaupt?</span>
    </div>
    <div class="compare-item">
      <strong>Validieren</strong>
      <span><code>filter_var(..., FILTER_VALIDATE_...)</code> fragt: Passt der Wert fachlich?</span>
    </div>
    <div class="compare-item">
      <strong>Bereinigen</strong>
      <span><code>FILTER_SANITIZE_...</code> versucht, problematische Zeichen oder Form zu entschärfen.</span>
    </div>
  </div>
</div>

## Ein kleiner Prüfablauf

```php
<?php
if (filter_has_var(INPUT_POST, "email")) {
  $email = $_POST["email"];
  $ok = filter_var($email, FILTER_VALIDATE_EMAIL);
}
?>
```

## Ruhige Leselogik

<div class="step-grid">
  <div class="step-item">
    <strong>1. Gibt es den Wert?</strong>
    <span>Ohne vorhandene Eingabe bringt inhaltliches Prüfen noch nichts.</span>
  </div>
  <div class="step-item">
    <strong>2. Ist der Wert fachlich plausibel?</strong>
    <span>Zum Beispiel als E-Mail, Zahl oder URL.</span>
  </div>
  <div class="step-item">
    <strong>3. Muss vor Ausgabe oder Speicherung bereinigt werden?</strong>
    <span>Dann kommt die Bereinigung gezielt dazu.</span>
  </div>
</div>
