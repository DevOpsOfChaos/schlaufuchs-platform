---
title: "Session-ID und serverseitigen Zustand verstehen"
description: "Verstehe, wie eine Session den Benutzer über mehrere Requests wiedererkennbar macht, ohne alle Daten im Browser selbst zu speichern."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "session-id-und-serverseitigen-zustand-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

HTTP ist grundsätzlich zustandslos. Ein Webserver erkennt also nicht automatisch, dass zwei Requests „zur selben Person und zum selben Vorgang“ gehören. Genau hier helfen Sessions.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Warenkorb über mehrere Seiten</h3>
  <p>Eine Person legt auf Seite 1 einen Artikel in den Warenkorb und geht später zur Kasse. Damit der Server diese beiden Aufrufe zusammenführen kann, braucht er eine wiedererkennbare Sitzungslogik.</p>
</div>

## Zwei Teile der Session-Idee

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Session-ID</p>
    <h3>Der Wiedererkennungs-Schlüssel</h3>
    <p>Die ID dient dazu, eine konkrete Sitzung bei späteren Requests wiederzufinden.</p>
  </section>
  <section>
    <p class="card-kicker">Session-Daten</p>
    <h3>Der eigentliche Zustand</h3>
    <p>Hier liegen die serverseitig gespeicherten Informationen, etwa Loginstatus oder Warenkorbinhalt.</p>
  </section>
</div>

## Warum das nicht dasselbe wie ein Cookie ist

Ein Cookie kann eine Session-ID transportieren, aber die Session-Daten selbst liegen typischerweise serverseitig. Dadurch bleibt die eigentliche Zustandslogik näher am Server.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Session-ID ist nicht „der ganze Zustand“, sondern nur der Schlüssel, mit dem der Server die passende Sitzung wiederfindet.</p>
</div>
