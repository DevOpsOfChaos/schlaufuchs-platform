---
title: "Session-Start, Header und Ausgabereihenfolge verstehen"
description: "Verstehe, warum Sessions und Cookies in PHP vor der ersten Browserausgabe gestartet oder gesetzt werden müssen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "session-start-header-und-ausgabe-reihenfolge-verstehen"]
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

Sessions und Cookies sind in PHP nicht einfach normale Variablen. Sie hängen technisch am HTTP-Header. Deshalb müssen Befehle wie <code>session_start()</code> oder <code>setcookie(...)</code> laufen, bevor der eigentliche Seitentext zum Browser geschickt wird.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Erst Protokollinfos, dann Seitenausgabe</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Session/Cookie vorbereiten</strong><span>Header-Informationen festlegen</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Response aufbauen</strong><span>Technische Informationen stehen zuerst</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>HTML ausgeben</strong><span>Erst danach folgt der sichtbare Inhalt</span></div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Session-Start ist fachlich kein Textausgabe-Schritt, sondern ein früher Protokollschritt im Response-Aufbau.</p>
</div>
