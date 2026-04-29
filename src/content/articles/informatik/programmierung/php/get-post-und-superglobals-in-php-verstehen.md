---
title: "GET, POST und Superglobals in PHP verstehen"
description: "Verstehe, wie PHP Anfragedaten über $_GET und $_POST zugänglich macht und warum die Übertragungsart fachlich einen Unterschied macht."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "get-post-und-superglobals-in-php-verstehen"]
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

Wenn der Browser Daten an ein PHP-Skript schickt, landen diese nicht einfach als lose Variablen im Programm. PHP sammelt sie typischerweise in sogenannten Superglobals wie <code>$_GET</code> oder <code>$_POST</code>.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Linkaufruf und Formular nicht gleich lesen</h3>
  <p>Ein Link kann Werte direkt in der URL übergeben. Ein Formular mit <code>method="POST"</code> schickt Werte dagegen im Request an den Server. In beiden Fällen liest PHP die Daten nicht „magisch“, sondern über passende Sammlungen aus.</p>
</div>

## GET und POST grob ordnen

<div class="compare-card">
  <p class="card-kicker">Grobe Orientierung</p>
  <h3>Wie kommen die Daten zum Skript?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>GET</strong>
      <span>Wird oft bei Linkaufrufen oder einfachen Abrufanfragen sichtbar über die URL genutzt.</span>
    </div>
    <div class="compare-item">
      <strong>POST</strong>
      <span>Wird häufig bei Formularen und beim Senden größerer oder sensiblerer Daten verwendet.</span>
    </div>
    <div class="compare-item">
      <strong>PHP-Zugriff</strong>
      <span>Im Skript werden die Werte typischerweise über <code>$_GET[...]</code> oder <code>$_POST[...]</code> gelesen.</span>
    </div>
  </div>
</div>

## Ein kleines Beispiel

```html
<form action="script.php" method="POST">
  <input type="text" name="email">
  <input type="submit" value="senden">
</form>
```

```php
<?php
$email = $_POST['email'];
?>
```

## So liest du den Weg der Daten

<div class="step-grid">
  <div class="step-item">
    <strong>1. Feldname prüfen</strong>
    <span>Welcher Bezeichner steht im Formular oder Link?</span>
  </div>
  <div class="step-item">
    <strong>2. Übertragungsart prüfen</strong>
    <span>GET oder POST?</span>
  </div>
  <div class="step-item">
    <strong>3. Superglobal lesen</strong>
    <span>Aus welchem Array holt PHP den Wert?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> In PHP ist <code>$_GET['name']</code> oder <code>$_POST['name']</code> oft die ruhigste Lesart: „Hole den übertragenen Wert mit diesem Bezeichner aus der Anfrage.“</p>
</div>
