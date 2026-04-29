---
title: "POST-Formulardaten aus name-Attributen lesen"
description: "Verstehe, wie HTML-Formulare ihre Werte über name-Attribute an PHP senden und wie $_POST diese Daten bereitstellt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "post-formulardaten-aus-name-attributen-lesen"]
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

Bei POST-Formularen werden Werte aus HTML-Feldern an ein Serverskript geschickt. Entscheidend für den späteren Zugriff in PHP ist dabei vor allem das <code>name</code>-Attribut eines Feldes.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Formular sendet zwei Textfelder</h3>
  <p>Ein Formular enthält die Felder <code>name="email"</code> und <code>name="stadt"</code>. Nach dem Absenden liest PHP die Daten mit <code>$_POST['email']</code> und <code>$_POST['stadt']</code>.</p>
</div>

## Die Form im Überblick

```html
<form action="script.php" method="POST">
  <input type="text" name="email">
  <input type="text" name="stadt">
  <input type="submit" value="Senden">
</form>
```

Die wichtigsten Teile sind:

- <code>action</code>: Wohin wird gesendet?
- <code>method="POST"</code>: Wie wird gesendet?
- <code>name</code>: Unter welchem Schlüssel ist der Wert später auf dem Server erreichbar?

## Serverseitiger Zugriff

```php
$email = $_POST['email'];
$stadt = $_POST['stadt'];
```

Der Server orientiert sich also nicht am sichtbaren Text neben dem Feld, sondern am hinterlegten Namen.

<div class="compare-card">
  <p class="card-kicker">Merkhilfe</p>
  <h3>Sichtbarer Text und technischer Schlüssel sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Label oder Beschriftung</strong>
      <span>Hilft Menschen beim Ausfüllen, ist aber nicht automatisch der PHP-Schlüssel.</span>
    </div>
    <div class="compare-item">
      <strong>name-Attribut</strong>
      <span>Bestimmt, unter welchem Namen der Wert im Array <code>$_POST</code> landet.</span>
    </div>
  </div>
</div>

## Was oft übersehen wird

Ein Feld ohne passendes <code>name</code>-Attribut liefert serverseitig normalerweise keinen normalen Schlüssel in <code>$_POST</code>. Für die Übertragung ist das Attribut also wesentlich.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Formularziel prüfen</strong>
    <span>Zu welchem Skript geht die Anfrage?</span>
  </div>
  <div class="step-item">
    <strong>2. Methode prüfen</strong>
    <span>Wird per POST übertragen?</span>
  </div>
  <div class="step-item">
    <strong>3. name lesen</strong>
    <span>Bestimme für jedes relevante Feld den echten technischen Namen.</span>
  </div>
  <div class="step-item">
    <strong>4. Zugriff ableiten</strong>
    <span>Formuliere daraus den passenden <code>$_POST</code>-Zugriff.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Nicht die Beschriftung wird an PHP gebunden, sondern das <code>name</code>-Attribut.</p>
</div>
