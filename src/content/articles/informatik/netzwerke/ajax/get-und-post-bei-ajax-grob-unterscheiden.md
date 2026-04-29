---
title: "GET und POST bei AJAX grob unterscheiden"
description: "Verstehe, warum manche Hintergrundanfragen Daten eher holen und andere Daten an den Server senden."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "ajax", "get-und-post-bei-ajax-grob-unterscheiden"]
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

Auch bei AJAX-Anfragen bleibt HTTP im Hintergrund wichtig. Zwei besonders häufige Methoden sind GET und POST. Beide schicken eine Anfrage an den Server, aber meist mit unterschiedlicher fachlicher Rolle.

<div class="compare-card">
  <p class="card-kicker">Grobe Einordnung</p>
  <h3>Holen und Senden nicht durcheinanderbringen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>GET</strong>
      <span>Wird oft genutzt, um Daten abzurufen, etwa Suchergebnisse oder Listen.</span>
    </div>
    <div class="compare-item">
      <strong>POST</strong>
      <span>Wird oft genutzt, wenn Daten aktiv an den Server übertragen werden, etwa bei Formularen oder Speichern-Aktionen.</span>
    </div>
  </div>
</div>

## Eine ruhige Entscheidungsfrage

Frage zuerst nicht nach Technikdetails, sondern nach der fachlichen Richtung:

- Soll etwas **geholt** werden?
- Oder sollen Daten **übergeben** und verarbeitet werden?

Genau diese Unterscheidung macht viele Beispiele schon deutlich ruhiger.
