---
title: "Variablen, Strings und Ausgabe in PHP verstehen"
description: "Verstehe, wie PHP Variablen mit $ kennzeichnet, Strings zusammensetzt und Ausgaben mit echo erzeugt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-variablen-strings-und-ausgabe-verstehen"]
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

In PHP werden Variablen mit einem <code>$</code>-Zeichen geschrieben. Ausgaben entstehen oft dadurch, dass Text und Variablenwerte in einer <code>echo</code>-Anweisung zusammengesetzt werden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Link wird aus einer Variablen gebaut</h3>
  <p>Eine URL steht in einer Variablen. Danach wird daraus ein anklickbarer Link ausgegeben. Die fachlich wichtige Frage ist nicht nur „welche Syntax steht da?“, sondern: Welche Teile sind fester Text und welche stammen aus der Variablen?</p>
</div>

## Die Grundrollen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Variable</p>
    <h3>Wert unter einem Namen halten</h3>
    <p><code>$url</code> oder <code>$name</code> steht für einen gespeicherten Wert.</p>
  </section>
  <section>
    <p class="card-kicker">String</p>
    <h3>Text ausgeben</h3>
    <p>Ein String ist Text in Anführungszeichen, der direkt oder gemeinsam mit Variablen ausgegeben werden kann.</p>
  </section>
  <section>
    <p class="card-kicker">echo</p>
    <h3>Ergebnis sichtbar machen</h3>
    <p><code>echo</code> schickt Text und Werte in die Ausgabe.</p>
  </section>
</div>

## Ein kleines Beispiel

```php
<?php
$url = 'https://example.org';
echo '<a href="'.$url.'">'.$url.'</a>';
?>
```

## So liest du die Ausgabe ruhiger

<div class="step-grid">
  <div class="step-item">
    <strong>1. Variable finden</strong>
    <span>Welche Werte werden vorher gespeichert?</span>
  </div>
  <div class="step-item">
    <strong>2. Ausgabe trennen</strong>
    <span>Was ist fester Text, was kommt aus der Variablen?</span>
  </div>
  <div class="step-item">
    <strong>3. Ergebnis vorstellen</strong>
    <span>Welche fertige HTML- oder Textausgabe entsteht beim Browser?</span>
  </div>
</div>

## Verkettung und Einbettung

<div class="compare-card">
  <p class="card-kicker">Zwei Lesarten</p>
  <h3>Beides baut am Ende nur eine Ausgabe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Verkettung</strong>
      <span>Mehrere Teile werden mit dem Punkt-Operator aneinandergehängt.</span>
    </div>
    <div class="compare-item">
      <strong>Einbettung</strong>
      <span>Variablen können in manchen Strings direkt eingesetzt werden.</span>
    </div>
    <div class="compare-item">
      <strong>Wichtige Denkfrage</strong>
      <span>Nicht die Schreibweise ist zuerst wichtig, sondern welche fertige Ausgabe daraus entsteht.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine echo-Zeile ist oft leichter lesbar, wenn du sie zuerst in feste Textstücke und eingesetzte Werte zerlegst.</p>
</div>
