---
title: "Dateizugriff mit fopen, fgets und fclose verstehen"
description: "Verstehe den typischen Grundablauf beim serverseitigen Lesen und Schreiben von Dateien in PHP."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dateizugriff-mit-fopen-fgets-und-fclose-verstehen"]
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

Wenn ein PHP-Skript auf eine Datei auf dem Server zugreift, passiert das nicht in einem einzigen magischen Schritt. Meist gibt es einen klaren Ablauf: Datei öffnen, Inhalt lesen oder schreiben, Datei wieder schließen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine kleine Logdatei lesen</h3>
  <p>Ein Skript soll Einträge aus einer Textdatei ausgeben. Dazu wird zuerst eine Verbindung zur Datei aufgebaut, dann Zeile für Zeile gelesen, und am Ende wird der Zugriff wieder beendet. Genau diese ruhige Dreiteilung macht Dateizugriff verständlich.</p>
</div>

## Der Grundablauf

<div class="step-grid">
  <div class="step-item">
    <strong>1. Öffnen</strong>
    <span><code>fopen(...)</code> erzeugt einen Dateizugriff mit bestimmtem Modus.</span>
  </div>
  <div class="step-item">
    <strong>2. Bearbeiten</strong>
    <span><code>fgets(...)</code> liest, <code>fputs(...)</code> schreibt, <code>feof(...)</code> prüft das Ende.</span>
  </div>
  <div class="step-item">
    <strong>3. Schließen</strong>
    <span><code>fclose(...)</code> beendet den Zugriff sauber.</span>
  </div>
</div>

## Ein kleines Beispiel

```php
<?php
$handle = fopen("log.txt", "r");
while (!feof($handle)) {
  echo fgets($handle);
}
fclose($handle);
?>
```

## Rollen der Funktionen

<div class="compare-card">
  <p class="card-kicker">Funktionsrollen</p>
  <h3>Nicht alle Funktionen tun dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>fopen</strong>
      <span>Öffnet die Datei und liefert einen Zugriffspunkt zurück.</span>
    </div>
    <div class="compare-item">
      <strong>fgets / fputs</strong>
      <span>Bearbeiten den Inhalt, also lesen oder schreiben.</span>
    </div>
    <div class="compare-item">
      <strong>feof / fclose</strong>
      <span>Prüfen das Ende oder schließen den Zugriff sauber ab.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Datei-Zugriff in PHP ist am ruhigsten lesbar als Ablauf: erst Zugriff aufbauen, dann Inhalt bearbeiten, dann wieder sauber beenden.</p>
</div>
