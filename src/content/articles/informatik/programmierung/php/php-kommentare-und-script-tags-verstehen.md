---
title: PHP-Kommentare und Script-Tags verstehen
description: Verstehe, wie PHP in Dateien markiert wird, warum der Server nur die markierten Bereiche verarbeitet und wofür Kommentare im Alltag nützlich sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - php-kommentare-und-script-tags-verstehen
learningGoals:
  - Du unterscheidest HTML-Inhalt, PHP-Tags und Kommentare sauber voneinander.
  - Du erklärst, warum nur der markierte PHP-Bereich ausgeführt wird.
  - Du erkennst, wofür Kommentare beim Testen und Erklären von Code nützlich sind.
practiceIdeas:
  - Ordne in einem gemischten Beispiel HTML-Text, PHP-Code und Kommentare richtig zu.
  - Erkläre, welche Teile im Browser sichtbar werden und welche nur auf dem Server existieren.
  - Nutze Kommentare, um einen Abschnitt gedanklich auszublenden und den Ablauf ruhiger zu lesen.
commonMistakes:
  - Zu denken, jede Zeile in einer .php-Datei werde automatisch als PHP ausgeführt.
  - Kommentare mit sichtbarer Ausgabe zu verwechseln.
  - PHP-Tags und HTML-Tags fachlich gleich zu behandeln.
keyTakeaways:
  - PHP läuft nur innerhalb markierter PHP-Bereiche.
  - Kommentare erklären oder blenden Code aus, erzeugen aber keine Ausgabe.
  - HTML und PHP können in einer Datei gemischt sein, haben aber unterschiedliche Rollen.
recognizeSignals:
  - Es geht um <?php ... ?>, Ausgabestellen oder Kommentare.
  - Du sollst erklären, warum eine Zeile verarbeitet wird oder nicht.
  - In einem Beispiel stehen HTML und PHP direkt nebeneinander.
selfCheckPoints:
  - Kann ich sagen, was vom Server verarbeitet wird und was nicht?
  - Kann ich ein Kommentarstück als Erklärung statt als Programmaktion lesen?
  - Kann ich PHP-Tags und HTML-Tags sicher unterscheiden?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - php
  - kommentare
draft: false
---

## Grundidee

In einer PHP-Datei ist nicht automatisch alles PHP-Code. Der Server verarbeitet nur die Teile, die als PHP markiert sind. Der Rest bleibt normales HTML oder normaler Text.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Datei mischt HTML und PHP</h3>
  <p>Im <code>body</code> steht eine Überschrift in HTML. Dazwischen wird mit <code><?php ... ?></code> ein Name ausgegeben. Für den Browser wirkt das später wie eine einzige HTML-Seite, obwohl serverseitig vorher nur der markierte PHP-Teil verarbeitet wurde.</p>
</div>

## Was die Tags bedeuten

<div class="visual-grid">
  <div class="visual-item">
    <strong>HTML</strong>
    <span>Strukturiert die Seite und bleibt als Markup im Ergebnis erhalten.</span>
  </div>
  <div class="visual-item">
    <strong>PHP-Tags</strong>
    <span>Markieren den Bereich, den der Server als PHP-Code liest und ausführt.</span>
  </div>
  <div class="visual-item">
    <strong>Kommentar</strong>
    <span>Erklärt Code oder blendet ihn testweise aus, ohne selbst etwas auszugeben.</span>
  </div>
</div>

## HTML- und PHP-Rolle ruhig trennen

```php
<h1>Willkommen</h1>
<?php
  echo "Hallo";
  // Testausgabe
?>
<p>Ende</p>
```

Hier gilt:

- <code>&lt;h1&gt;Willkommen&lt;/h1&gt;</code> und <code>&lt;p&gt;Ende&lt;/p&gt;</code> sind HTML.
- <code>echo "Hallo";</code> ist PHP und erzeugt Ausgabe.
- <code>// Testausgabe</code> ist nur ein Kommentar.

## Kommentare sind keine Programmausgabe

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Kommentar erklären – echo ausgeben</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Kommentar</strong>
      <span>Hilft Menschen beim Lesen oder Testen des Codes, wird aber nicht als sichtbarer Inhalt ausgegeben.</span>
    </div>
    <div class="compare-item">
      <strong>echo</strong>
      <span>Erzeugt tatsächlichen Text oder HTML im Ergebnis, das der Browser später anzeigt.</span>
    </div>
  </div>
</div>

## Einzeilig und mehrzeilig kommentieren

- <code>// ...</code> eignet sich für kurze Hinweise.
- <code>/* ... */</code> eignet sich für längere Blöcke.

Gerade beim Testen ist das nützlich: Ein Kommentar kann helfen, einen Abschnitt vorübergehend auszublenden, ohne den Text zu löschen.

## Eine ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Datei ansehen</strong>
    <span>Suche zuerst die PHP-Tags.</span>
  </div>
  <div class="step-item">
    <strong>2. Ausgabe suchen</strong>
    <span>Prüfe danach, wo tatsächlich mit <code>echo</code> oder ähnlichen Mitteln etwas erzeugt wird.</span>
  </div>
  <div class="step-item">
    <strong>3. Kommentare ausblenden</strong>
    <span>Lies Kommentare als Erklärung, nicht als Aktion.</span>
  </div>
  <div class="step-item">
    <strong>4. Ergebnis denken</strong>
    <span>Frage am Ende: Was bleibt nach der Serververarbeitung als HTML übrig?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> PHP-Tags markieren verarbeitbaren Code. Kommentare erklären nur. Im Browser erscheint später nur das Ergebnis der Verarbeitung.</p>
</div>
