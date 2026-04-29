---
title: "Formulardaten aus GET und POST ruhig auslesen"
description: "Verstehe, wie PHP abgesendete Formulardaten ueber Superglobals bereitstellt und warum das Auslesen eine eigene Denkebene ist."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "formulardaten-aus-get-und-post-ruhig-auslesen"]
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

Wenn ein Formular abgeschickt wird, muessen die Eingaben in PHP an einer Stelle wieder auftauchen. Genau dafuer gibt es zum Beispiel <code>$_GET</code> und <code>$_POST</code>.

Die ruhigste Leitfrage lautet dabei:

**Aus welcher Request Art kommen die Daten und unter welchem Feldnamen liegen sie vor?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Suchfeld mit dem Namen q</h3>
  <p>Wenn ein Formular ein Feld <code>name="q"</code> besitzt und per GET abgeschickt wird, taucht der gesendete Wert spaeter in PHP typischerweise unter <code>$_GET["q"]</code> auf. Der Feldname wird also zum Schluessel.</p>
</div>

## Request Art und Zugriffsebene trennen

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Formularmethode und PHP Zugriff sind zwei zusammenhaengende Ebenen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Im Formular</strong>
      <span>Du entscheidest mit GET oder POST, wie die Anfrage gesendet wird.</span>
    </div>
    <div class="compare-item">
      <strong>In PHP</strong>
      <span>Du liest spaeter ueber <code>$_GET</code> oder <code>$_POST</code> die passenden Werte aus.</span>
    </div>
  </div>
</div>

## Typisches Beispiel

```html
<form method="post">
  <input name="email" />
</form>
```

```php
$email = $_POST["email"];
```

Hier wird derselbe Feldname weitergedacht:

- im HTML heisst das Feld <code>email</code>,
- in PHP wird <code>"email"</code> zum Schluessel im passenden Superglobal.

## Mini-Demo: Quelle und Schluessel ruhiger lesen

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Ein Formularwert wandert nicht magisch, sondern ueber zwei klare Schritte</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Formularfeld</strong><span>Das Feld bekommt einen Namen wie <code>email</code>.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Request Art</strong><span>GET oder POST bestimmt die Zugriffsfamilie.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>PHP Zugriff</strong><span>Der Wert wird ueber <code>$_GET["email"]</code> oder <code>$_POST["email"]</code> gelesen.</span></div>
  </div>
</div>

## Diese Seite behandelt bewusst den Datenzugriff und nicht die Wahl zwischen GET und POST

Die Frage, **wann** ein Formular eher GET oder POST benutzen sollte, ist ein eigenes Thema. Hier geht es darum, wie die Daten spaeter im PHP Code wiedergefunden werden.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Formularmethode lesen</strong>
    <span>Ist die Anfrage per GET oder POST gedacht?</span>
  </div>
  <div class="step-item">
    <strong>2. Feldnamen suchen</strong>
    <span>Welche Namen tragen die Eingabefelder?</span>
  </div>
  <div class="step-item">
    <strong>3. Passendes Superglobal waehlen</strong>
    <span>Die Methode fuehrt zur Quelle, der Feldname zum Schluessel.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Formulardaten werden in PHP ruhiger, wenn du immer zuerst Quelle und Schluessel benennst.</p>
</div>
