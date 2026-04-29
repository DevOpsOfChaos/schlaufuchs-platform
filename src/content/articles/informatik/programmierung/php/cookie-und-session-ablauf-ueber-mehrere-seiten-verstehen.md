---
title: "Cookie- und Session-Ablauf über mehrere Seiten verstehen"
description: "Verstehe, wie Cookies und Sessions einen Benutzer über mehrere Requests hinweg wiedererkennbar machen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "cookie-und-session-ablauf-ueber-mehrere-seiten-verstehen"]
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

Webanwendungen laufen über viele einzelne Requests. Der Server behandelt diese Anfragen zunächst unabhängig voneinander. Damit trotzdem ein Benutzer über mehrere Seitenaufrufe hinweg wiedererkannt werden kann, braucht es zusätzliche Zustandslogik.

<div class="compare-card">
  <p class="card-kicker">Zustand über mehrere Requests</p>
  <h3>Cookie und Session lösen dieselbe Grundfrage auf unterschiedliche Weise</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Cookie</strong>
      <span>Kleine Zustandsdaten oder Kennungen werden auf Client-Seite im Browser mitgeführt.</span>
    </div>
    <div class="compare-item">
      <strong>Session</strong>
      <span>Die eigentlichen Zustandsdaten bleiben auf dem Server, der Browser trägt meist nur eine Kennung mit.</span>
    </div>
    <div class="compare-item">
      <strong>Gemeinsame Aufgabe</strong>
      <span>Mehrere Seitenaufrufe sollen fachlich als zusammengehörig erkennbar werden.</span>
    </div>
  </div>
</div>

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Personalisierung über zwei Seiten</h3>
  <p>Auf der ersten Seite gibt ein Nutzer einen Namen ein. Auf der nächsten Seite soll dieser Name wieder auftauchen. Ohne Cookie oder Session wäre der neue Request fachlich wieder "leer". Erst die temporäre Zustandslogik macht aus zwei Requests einen zusammenhängenden Ablauf.</p>
</div>
