---
title: AJAX-Grundidee verstehen
description: Verstehe, wie Webseiten Daten im Hintergrund nachladen können, ohne die ganze Seite neu aufzubauen.
subject: informatik
section: Netzwerke
topicPath:
  - netzwerke
  - ajax
  - ajax-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee asynchroner Anfragen im Web.
  - Du beschreibst, warum Inhalte mit AJAX gezielt nachgeladen werden können.
  - Du unterscheidest den sichtbaren Seiteninhalt von der Hintergrundkommunikation.
practiceIdeas:
  - Beschreibe ein Suchfeld oder Kommentarformular, das Inhalte ohne kompletten Reload aktualisiert.
  - Markiere in einem Ablauf, welche Schritte im Browser und welche auf dem Server stattfinden.
  - Vergleiche eine vollständige Neuladung mit einer kleinen Hintergrundanfrage.
commonMistakes:
  - Zu denken, AJAX sei eine eigene Programmiersprache.
  - Hintergrundanfrage und komplette Seitenaktualisierung gleichzusetzen.
  - Nur die Oberfläche zu sehen und den Client-Server-Ablauf zu vergessen.
keyTakeaways:
  - AJAX ermöglicht Anfragen im Hintergrund.
  - Dabei kann nur ein Teil der Seite aktualisiert werden.
  - Die Technik verbindet Browserlogik, HTTP-Anfragen und DOM-Aktualisierung.
recognizeSignals:
  - Eine Seite aktualisiert Inhalte ohne kompletten Reload.
  - Es geht um Hintergrundanfragen oder dynamische Weboberflächen.
  - Du sollst Client, Server und Seitendarstellung unterscheiden.
selfCheckPoints:
  - Kann ich erklären, was bei AJAX im Hintergrund passiert?
  - Kann ich sagen, warum nicht die ganze Seite neu geladen werden muss?
  - Kann ich Browser-, Server- und DOM-Rolle trennen?
level: einfach
tags:
  - informatik
  - netzwerke
  - ajax
  - web
  - client-server
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
