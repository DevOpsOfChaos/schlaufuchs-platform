---
title: "GET-Parameter im Linkaufruf verstehen"
description: "Verstehe, wie Werte an eine URL angehängt werden, wie der Server sie über $_GET liest und wann diese Übertragungsart sinnvoll ist."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "get-parameter-im-linkaufruf-verstehen"]
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

Bei einer GET-Übertragung werden Werte direkt an die URL angehängt. Der Server kann diese Werte anschließend über das assoziative Array <code>$_GET</code> lesen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Link übergibt einen Suchbegriff</h3>
  <p>Ein Link ruft <code>suche.php?begriff=php&amp;seite=2</code> auf. Für den Menschen ist schon in der URL sichtbar, welche Daten gesendet werden. Der Server liest später <code>$_GET['begriff']</code> und <code>$_GET['seite']</code>.</p>
</div>

## Aufbau einer GET-URL

```html
<a href="ziel.php?bez1=wert1&bez2=wert2">Link</a>
```

Die Zeichen haben klare Rollen:

- <code>?</code> beginnt den Parameterteil,
- <code>=</code> trennt Name und Wert,
- <code>&amp;</code> trennt mehrere Paare voneinander.

## Wie der Server die Werte liest

```php
$var1 = $_GET['bez1'];
$var2 = $_GET['bez2'];
```

Der Parameternamen links in der URL wird also später als Schlüssel in <code>$_GET</code> verwendet.

<div class="compare-card">
  <p class="card-kicker">Einordnen</p>
  <h3>GET ist sichtbar – POST eher verdeckt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>GET</strong>
      <span>Die Daten stehen in der URL und sind daher im Browser leichter sichtbar, teilbar oder speicherbar.</span>
    </div>
    <div class="compare-item">
      <strong>POST</strong>
      <span>Die Daten stehen nicht sichtbar in der Adresszeile und eignen sich eher für Formularübertragungen mit mehr Inhalt.</span>
    </div>
  </div>
</div>

## Wann GET gut passt

GET ist oft sinnvoll bei:

- Suchbegriffen,
- Filtereinstellungen,
- Seitenzahlen,
- einfachen Auswahlzuständen.

Weniger gut passt GET, wenn Daten vertraulich, sehr lang oder stark veränderbar sind.

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. URL teilen</strong>
    <span>Trenne zuerst den eigentlichen Dateinamen vom Parameterteil.</span>
  </div>
  <div class="step-item">
    <strong>2. Paare lesen</strong>
    <span>Lies dann jede Kombination als <em>Name = Wert</em>.</span>
  </div>
  <div class="step-item">
    <strong>3. Serverzugriff denken</strong>
    <span>Übersetze den Namen in den passenden <code>$_GET</code>-Schlüssel.</span>
  </div>
  <div class="step-item">
    <strong>4. Zweck prüfen</strong>
    <span>Frage zuletzt, ob sichtbare URL-Parameter hier sinnvoll sind.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> GET ist kein „anderer Inhalt“, sondern eine andere Art, Daten zum Server zu schicken – sichtbar als Teil der URL.</p>
</div>
