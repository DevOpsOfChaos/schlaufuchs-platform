---
title: Formulardaten aus GET und POST ruhig auslesen
description: Verstehe, wie PHP abgesendete Formulardaten ueber Superglobals bereitstellt und warum das Auslesen eine eigene Denkebene ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - formulardaten-aus-get-und-post-ruhig-auslesen
learningGoals:
  - Du erklaerst, wie PHP Formulardaten in GET und POST bereitstellt.
  - Du unterscheidest Request Art und Datenzugriff im Code.
  - Du liest einfache Formularverarbeitung ruhiger ueber Quelle und Feldname.
practiceIdeas:
  - Ordne Formularfelder den passenden Zugriffen in <code>$_GET</code> oder <code>$_POST</code> zu.
  - Pruefe, welcher Feldname im Array benutzt werden muss.
  - Vergleiche dieselbe Formularidee einmal mit GET und einmal mit POST.
commonMistakes:
  - GET und POST als reine Form Syntax ohne Bezug zum PHP Zugriff zu lesen.
  - Feldnamen im Formular und Arrayzugriff zu vertauschen.
  - Zu glauben, dass die Daten ohne Schluessel direkt als Variable auftauchen.
keyTakeaways:
  - PHP stellt abgesendete Formulardaten meist ueber <code>$_GET</code> oder <code>$_POST</code> bereit.
  - Der Feldname im Formular wird zum Schluessel im entsprechenden Superglobal.
  - Die Request Art und der Zugriff im Code sind verwandt, aber nicht dieselbe Ebene.
recognizeSignals:
  - Es geht um Formulare, <code>method="get"</code>, <code>method="post"</code> oder Superglobals.
  - Eine Aufgabe zeigt HTML Felder und spaeteren Zugriff in PHP.
  - Du sollst erklaeren, warum ein Wert in PHP unter einem bestimmten Schluessel auftaucht.
selfCheckPoints:
  - Kann ich die Datenquelle im PHP Code richtig benennen?
  - Kann ich Feldname und Array Schluessel verbinden?
  - Kann ich erklaeren, warum Formularmethode und Superglobal zusammenpassen?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - formular
  - superglobal
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
