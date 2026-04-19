---
title: GET und POST bei AJAX grob unterscheiden
description: Verstehe, warum manche Hintergrundanfragen Daten eher holen und andere Daten an den Server senden.
subject: informatik
section: Netzwerke
topicPath:
  - netzwerke
  - ajax
  - get-und-post-bei-ajax-grob-unterscheiden
learningGoals:
  - Du unterscheidest den groben Einsatzzweck von GET und POST.
  - Du erklärst, wann Daten eher in der URL und wann eher im Nachrichtenkörper übertragen werden.
  - Du liest AJAX-Beispiele ruhiger, wenn du die Richtung der Datenbewegung beachtest.
practiceIdeas:
  - Ordne Suchanfrage, Login und Formularspeicherung GET oder POST grob zu.
  - Prüfe in einem Beispiel, ob Daten nur angefordert oder aktiv übermittelt werden.
  - Erkläre, warum nicht jede Aktion dieselbe HTTP-Methode nutzen sollte.
commonMistakes:
  - GET und POST nur als zwei zufällige Schreibweisen zu sehen.
  - Zu glauben, POST sei immer "besser".
  - Die Datenrichtung im Ablauf nicht mitzudenken.
keyTakeaways:
  - GET wird oft zum Abrufen verwendet.
  - POST wird oft genutzt, wenn Daten an den Server übermittelt werden sollen.
  - Die Wahl hängt vom Zweck der Anfrage ab.
recognizeSignals:
  - Ein Beispiel unterscheidet Abrufen und Senden.
  - Es geht um Query-Parameter, Formulardaten oder Server-Skripte.
  - Du sollst die Rolle einer Anfrage fachlich erklären.
selfCheckPoints:
  - Kann ich erklären, wann GET grob passt?
  - Kann ich erklären, wann POST grob passt?
  - Kann ich sagen, welche Datenbewegung im Beispiel stattfindet?
level: einfach
tags:
  - informatik
  - netzwerke
  - ajax
  - http
  - get-post
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
