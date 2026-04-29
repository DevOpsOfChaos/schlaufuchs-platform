---
title: "filter_has_var und filter_var in PHP gezielt nutzen"
description: "Verstehe, wie PHP-Eingaben zuerst auf Existenz geprüft und dann validiert oder bereinigt werden können."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filter_has_var-und-filter_var-in-php-gezielt-nutzen"]
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
