---
title: "PHP-Code in HTML markieren und serverseitig denken"
description: "Verstehe, wie PHP in eine Seite eingebettet wird und warum der Browser am Ende nur das Ergebnis sieht."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-code-in-html-markieren-und-serverseitig-denken"]
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

PHP ist eine **serverseitige** Sprache. Das bedeutet: Der Quelltext wird zuerst auf dem Server verarbeitet. Erst das Ergebnis dieser Verarbeitung wird an den Browser geschickt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Titel wird mit PHP ausgegeben</h3>
  <p>In einer Datei steht innerhalb von <code><?php ... ?></code> ein <code>echo</code>. Der Browser sieht später nicht diesen PHP-Quelltext, sondern nur den erzeugten Text im fertigen HTML.</p>
</div>

## Der Ablauf in vier ruhigen Schritten

<div class="step-grid">
  <div class="step-item">
    <strong>1. Browser fragt an</strong>
    <span>Der Client fordert eine Ressource beim Webserver an.</span>
  </div>
  <div class="step-item">
    <strong>2. Server prüft die Datei</strong>
    <span>Eine HTML-Datei kann direkt ausgeliefert werden, eine PHP-Datei wird an den PHP-Prozessor weitergegeben.</span>
  </div>
  <div class="step-item">
    <strong>3. PHP wird ausgeführt</strong>
    <span>PHP-Code wird verarbeitet und kann HTML-Teile erzeugen oder ersetzen.</span>
  </div>
  <div class="step-item">
    <strong>4. Antwort geht zurück</strong>
    <span>Der Browser erhält das Ergebnis, meist als fertiges HTML.</span>
  </div>
</div>

## Was der Browser sieht – und was nicht

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Quelltext auf dem Server vs. Ergebnis im Browser</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Serverseite</strong>
      <span>Hier liegen <code><?php ... ?></code>, Variablen und PHP-Logik.</span>
    </div>
    <div class="compare-item">
      <strong>Browserseite</strong>
      <span>Hier kommt nur an, was die Verarbeitung erzeugt hat, etwa HTML oder Text.</span>
    </div>
  </div>
</div>

## Warum Dateiendung und Server wichtig sind

Damit PHP verarbeitet wird, muss die Datei typischerweise als <code>.php</code> gespeichert und über einen Webserver aufgerufen werden. Nur lokal in einem Browserfenster geöffnet, fehlt die serverseitige Verarbeitung.

<div class="note-panel">
  <p><strong>Merke:</strong> PHP ist kein „sichtbarer Seitencode“ für den Browser, sondern eine Verarbeitungsschicht auf dem Server, die HTML erzeugt.</p>
</div>
