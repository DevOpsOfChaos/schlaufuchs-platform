---
title: "PHP-Grundidee und serverseitige Verarbeitung verstehen"
description: "Verstehe, wie PHP im Webserver läuft, warum der Browser nur das Ergebnis sieht und wie aus einer Anfrage eine HTML-Antwort wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-grundidee-und-serverseitige-verarbeitung-verstehen"]
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

PHP ist eine serverseitige Skriptsprache. Das bedeutet: Nicht der Browser führt den PHP-Code aus, sondern der Webserver beziehungsweise die daran angeschlossene PHP-Verarbeitung. Der Browser bekommt am Ende nur das Ergebnis zurück.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Seite begrüßt den Benutzer dynamisch</h3>
  <p>Eine PHP-Seite liest einen Namen, erzeugt daraus eine Begrüßung und schickt dem Browser danach nur die fertige HTML-Ausgabe. Im Browser ist also das Ergebnis sichtbar, nicht der ursprüngliche PHP-Code.</p>
</div>

## Wer macht was?

<div class="visual-grid">
  <div class="visual-item">
    <strong>Browser</strong>
    <span>Fordert eine Ressource an und zeigt die Antwort an.</span>
  </div>
  <div class="visual-item">
    <strong>Webserver</strong>
    <span>Nimmt die Anfrage entgegen und entscheidet, ob eine Datei direkt ausgeliefert oder verarbeitet werden muss.</span>
  </div>
  <div class="visual-item">
    <strong>PHP-Verarbeitung</strong>
    <span>Führt den PHP-Code aus und ersetzt ihn durch erzeugte Inhalte.</span>
  </div>
  <div class="visual-item">
    <strong>Antwort</strong>
    <span>Kommt meist als fertiges HTML beim Browser an.</span>
  </div>
</div>

## Der ruhige Ablauf

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Von der Anfrage zur Ausgabe</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Anfrage</strong><span>Der Browser ruft eine Seite auf.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Server prüft</strong><span>HTML kann direkt gehen, PHP muss erst verarbeitet werden.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>PHP läuft</strong><span>Code erzeugt Text, HTML oder andere Ausgaben.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Browser zeigt Ergebnis</strong><span>Der Benutzer sieht die fertige Antwort.</span></div>
  </div>
</div>

## HTML-Datei und PHP-Datei nicht gleich lesen

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Statisch und dynamisch nicht vermischen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>HTML</strong>
      <span>Eine reine HTML-Datei kann der Server meist direkt ausliefern.</span>
    </div>
    <div class="compare-item">
      <strong>PHP</strong>
      <span>Eine PHP-Datei muss erst verarbeitet werden, bevor etwas an den Browser geschickt wird.</span>
    </div>
    <div class="compare-item">
      <strong>Ergebnis im Browser</strong>
      <span>Der Browser sieht typischerweise nicht den PHP-Quellcode, sondern nur das, was daraus erzeugt wurde.</span>
    </div>
  </div>
</div>

## Warum der Aufruf über den Server wichtig ist

PHP-Code wird nur dann korrekt verarbeitet, wenn die Datei in einer passenden Serverumgebung liegt und über den Webserver aufgerufen wird. Wird dieselbe Datei nur wie ein normaler Text geöffnet, fehlt genau dieser Verarbeitungsschritt.

<div class="note-panel">
  <p><strong>Merke:</strong> PHP ist keine Browser-Logik. Die Seite wird zuerst auf dem Server gebaut und danach als Ergebnis an den Browser geschickt.</p>
</div>
