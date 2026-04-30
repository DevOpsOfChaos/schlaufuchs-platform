---
title: "isset und empty in PHP unterscheiden"
description: "Verstehe, warum in PHP nicht jede fehlende oder leere Eingabe dasselbe bedeutet und wie isset und empty unterschiedlich pruefen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "isset-und-empty-in-php-unterscheiden"]
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

Beim Verarbeiten von Daten reicht es oft nicht, nur zu fragen, ob irgendwo ein Wert steht. Manchmal musst du unterscheiden zwischen:

- **ist etwas ueberhaupt vorhanden?**
- **und falls ja: ist es inhaltlich leer?**

Genau hier werden <code>isset</code> und <code>empty</code> interessant.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Vorhandenheitsfrage und Leerefrage</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>isset</strong>
      <span>Fragt zuerst, ob etwas gesetzt und erreichbar vorhanden ist.</span>
    </div>
    <div class="compare-item">
      <strong>empty</strong>
      <span>Fragt, ob ein Wert als leer gelesen wird.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Formularfeld mit leerem Inhalt</h3>
  <p>Ein Feld kann im Request vorhanden sein, aber trotzdem nur einen leeren String enthalten. Dann ist der Schluessel da, der Inhalt aber fachlich noch unbrauchbar. Genau deshalb sind Vorhandensein und Inhalt zwei verschiedene Denkebenen.</p>
</div>

## Typische Denkfrage

**Fehlt der Schluessel ganz oder ist der Schluessel da, aber der Inhalt hilft noch nicht weiter?**

Diese kleine Vorfrage verhindert viele Fehlinterpretationen.

## Mini-Demo: dieselbe Eingabe, zwei verschiedene Prueffragen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Beide Funktionen schauen aus anderer Richtung auf denselben Wert</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Schluessel vorhanden?</strong><span>Dann hilft zuerst eine isset Idee.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Inhalt brauchbar?</strong><span>Dann wird eher eine empty Frage wichtig.</span></div>
  </div>
</div>

## Typische Beispiele

```php
if (isset($_POST["name"])) {
  // Feld ist vorhanden
}
```

```php
if (empty($_POST["name"])) {
  // Feld ist leer oder wirkt leer
}
```

Hier geht es um die ruhige Trennung der Fragen nach Vorhandensein und Leere. Vollstaendige Formularvalidierung mit Fehlermeldungen und Regeln ist ein eigenes Thema.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Schluessel fragen</strong>
    <span>Existiert der benoetigte Zugriff ueberhaupt?</span>
  </div>
  <div class="step-item">
    <strong>2. Inhalt fragen</strong>
    <span>Ist der vorhandene Wert fachlich leer oder unbrauchbar?</span>
  </div>
  <div class="step-item">
    <strong>3. Absicht benennen</strong>
    <span>Lies die Funktion erst ueber ihre Frage und nicht nur ueber ihren Namen.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>isset</code> und <code>empty</code> klingen im Alltag nah beieinander, beantworten in PHP aber zwei verschiedene Fragen.</p>
</div>
