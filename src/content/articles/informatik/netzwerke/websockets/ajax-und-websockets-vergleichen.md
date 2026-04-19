---
title: AJAX und WebSockets vergleichen
description: Verstehe, wann Hintergrundanfragen genügen und wann eine dauerhafte Echtzeitverbindung sinnvoller ist.
subject: informatik
section: Netzwerke
topicPath:
  - netzwerke
  - websockets
  - ajax-und-websockets-vergleichen
learningGoals:
  - Du vergleichst AJAX und WebSockets nach Kommunikationsmodell.
  - Du ordnest typische Anwendungsfälle dem passenderen Modell zu.
  - Du erklärst, warum nicht jede dynamische Webseite gleich eine Echtzeitverbindung braucht.
practiceIdeas:
  - Vergleiche Kommentar-Formular, Live-Chat und Dashboard fachlich.
  - Begründe, wann einzelne Hintergrundanfragen ausreichen.
  - Suche in einem Szenario nach der Frage: seltene Aktualisierung oder laufender Strom neuer Daten?
commonMistakes:
  - AJAX und WebSockets als direkte Konkurrenten für jede Aufgabe zu sehen.
  - WebSockets überall einzusetzen, nur weil sie moderner wirken.
  - Echtzeit und Hintergrundkommunikation gleichzusetzen.
keyTakeaways:
  - AJAX arbeitet meist mit einzelnen Hintergrundanfragen.
  - WebSockets arbeiten mit einer offenen bidirektionalen Verbindung.
  - Das passende Modell hängt vom Kommunikationsbedarf ab.
recognizeSignals:
  - Eine Aufgabe fragt nach passender Web-Kommunikation.
  - Ein Beispiel braucht seltene Updates oder laufende Live-Daten.
  - Du sollst den Unterschied im Kommunikationsmodell begründen.
selfCheckPoints:
  - Kann ich AJAX und WebSockets fachlich trennen?
  - Kann ich ein Beispiel für jede Technik nennen?
  - Kann ich begründen, wann Echtzeit wirklich nötig ist?
level: einfach
tags:
  - informatik
  - netzwerke
  - ajax
  - websockets
  - kommunikation
draft: false
---

## Grundidee

AJAX und WebSockets sorgen beide dafür, dass Webseiten dynamischer wirken. Sie tun das aber mit unterschiedlicher Kommunikationslogik.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Einzelanfrage oder dauerhafte Verbindung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>AJAX</strong>
      <span>Geeignet, wenn bei Bedarf einzelne Daten im Hintergrund geholt oder gesendet werden.</span>
    </div>
    <div class="compare-item">
      <strong>WebSockets</strong>
      <span>Geeignet, wenn laufend neue Daten in beide Richtungen ausgetauscht werden sollen.</span>
    </div>
  </div>
</div>

## Typische Einordnung

- Ein Formular mit Zwischenspeichern oder Validierung kann oft gut mit AJAX arbeiten.
- Ein Live-Chat, Multiplayer-Spiel oder Sensor-Dashboard profitiert eher von WebSockets.

<div class="note-panel">
  <p><strong>Merke:</strong> Nicht jede dynamische Oberfläche braucht eine offene Echtzeitverbindung. Oft reichen gezielte Hintergrundanfragen völlig aus.</p>
</div>
