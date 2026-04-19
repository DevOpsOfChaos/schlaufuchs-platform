---
title: WebSockets-Grundidee verstehen
description: Verstehe, warum WebSockets für Echtzeitkommunikation geeignet sind und wie sie sich von reinen HTTP-Antworten unterscheiden.
subject: informatik
section: Netzwerke
topicPath:
  - netzwerke
  - websockets
  - websockets-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee einer dauerhaften bidirektionalen Verbindung.
  - Du erkennst, warum WebSockets für Echtzeit-Anwendungen nützlich sind.
  - Du unterscheidest eine dauerhafte Verbindung von einzelnen HTTP-Anfragen.
practiceIdeas:
  - Ordne Chat, Live-Ticker oder Statusanzeigen als Echtzeitszenarien ein.
  - Beschreibe, warum der Server bei WebSockets auch ohne neue Benutzeraktion Daten schicken kann.
  - Vergleiche WebSockets grob mit einer wiederholten Polling-Lösung.
commonMistakes:
  - WebSockets mit einer normalen einmaligen HTTP-Anfrage zu verwechseln.
  - Zu denken, der Server könne sonst nie ungefragt Daten senden.
  - Die Bedeutung der offenen Verbindung zu unterschätzen.
keyTakeaways:
  - WebSockets nutzen eine dauerhafte Verbindung.
  - Beide Seiten können Nachrichten senden.
  - Das macht WebSockets besonders geeignet für Echtzeit-Webanwendungen.
recognizeSignals:
  - Eine Anwendung zeigt laufend neue Daten ohne ständiges Neuladen.
  - Es geht um Chat, Live-Werte oder Statusänderungen.
  - Du sollst erklären, warum eine offene Verbindung nützlich ist.
selfCheckPoints:
  - Kann ich die Rolle der dauerhaften Verbindung erklären?
  - Kann ich beschreiben, warum WebSockets bidirektional sind?
  - Kann ich ein passendes Echtzeitbeispiel nennen?
level: einfach
tags:
  - informatik
  - netzwerke
  - websockets
  - echtzeit
  - web
draft: false
---

## Grundidee

WebSockets ermöglichen eine dauerhafte Verbindung zwischen Browser und Server. Dadurch können beide Seiten Nachrichten austauschen, ohne für jede einzelne Nachricht eine komplett neue Anfrage aufzubauen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Live-Chat mit sofortigen Nachrichten</h3>
  <p>Wenn eine Person eine Nachricht abschickt, sollen alle anderen sie sofort sehen. Eine dauerhafte Verbindung macht diesen Austausch deutlich direkter als ein Modell, bei dem ständig neue Einzelanfragen nötig wären.</p>
</div>

## Warum WebSockets für Echtzeit passen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Dauerhafte Verbindung</strong>
    <span>Die Verbindung bleibt bestehen, statt für jede Nachricht neu aufgebaut zu werden.</span>
  </div>
  <div class="visual-item">
    <strong>Bidirektional</strong>
    <span>Client und Server können beide Nachrichten senden.</span>
  </div>
  <div class="visual-item">
    <strong>Schnelle Reaktion</strong>
    <span>Neue Daten können direkt übertragen werden, ohne auf eine neue Benutzeraktion zu warten.</span>
  </div>
</div>

## Handshake und offene Leitung

Typisch ist: Die Verbindung wird zunächst über einen HTTP-nahen Einstieg ausgehandelt. Danach bleibt die zugrunde liegende Verbindung offen und kann für laufende Nachrichten genutzt werden.

<div class="note-panel">
  <p><strong>Merke:</strong> Der entscheidende Unterschied ist nicht nur "schneller", sondern: Die Verbindung bleibt offen und beide Seiten können aktiv senden.</p>
</div>
