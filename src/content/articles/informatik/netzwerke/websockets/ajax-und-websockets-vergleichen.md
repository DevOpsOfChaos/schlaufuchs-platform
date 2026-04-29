---
title: "AJAX und WebSockets vergleichen"
description: "Verstehe, wann Hintergrundanfragen genügen und wann eine dauerhafte Echtzeitverbindung sinnvoller ist."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "websockets", "ajax-und-websockets-vergleichen"]
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
