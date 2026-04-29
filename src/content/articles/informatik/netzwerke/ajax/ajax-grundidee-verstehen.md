---
title: "AJAX-Grundidee verstehen"
description: "Verstehe, wie Webseiten Daten im Hintergrund nachladen können, ohne die ganze Seite neu aufzubauen."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "ajax", "ajax-grundidee-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Netzwerke"]
draft: false
---
## Grundidee

AJAX beschreibt die Idee, dass eine Webseite im Hintergrund Daten vom Server nachladen oder senden kann, ohne die komplette Seite neu aufzubauen. Für Nutzende wirkt das oft wie eine direkte, flüssige Reaktion der Oberfläche.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Suchvorschläge erscheinen beim Tippen</h3>
  <p>Beim Schreiben in ein Suchfeld werden passende Vorschläge im Hintergrund nachgeladen. Die Seite bleibt sichtbar, nur ein Teilinhalt wird aktualisiert. Genau das ist eine typische AJAX-Situation.</p>
</div>

## Wer macht was?

<div class="signal-flow">
  <div class="flow-node"><strong>Browser</strong><span>registriert Eingaben oder Klicks</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Anfrage</strong><span>wird im Hintergrund an den Server geschickt</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Server</strong><span>liefert Daten oder eine Antwort zurück</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>DOM-Aktualisierung</strong><span>nur ein Teil der Seite wird angepasst</span></div>
</div>

## AJAX ist keine eigene Sprache

AJAX kombiniert mehrere bekannte Bausteine:

- JavaScript für die Steuerung im Browser,
- HTTP-Anfragen für die Kommunikation,
- HTML und CSS für die Seite,
- und DOM-Manipulation für sichtbare Änderungen.

<div class="note-panel">
  <p><strong>Merke:</strong> AJAX bedeutet nicht „magische Live-Seite“, sondern eine gezielte Hintergrundkommunikation zwischen Browser und Server.</p>
</div>
