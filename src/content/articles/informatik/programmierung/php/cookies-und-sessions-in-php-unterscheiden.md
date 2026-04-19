---
title: Cookies und Sessions in PHP unterscheiden
description: Verstehe, wie Webanwendungen Zustände über mehrere Aufrufe hinweg halten und warum Cookies und Sessions dabei unterschiedliche Rollen spielen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - cookies-und-sessions-in-php-unterscheiden
learningGoals:
  - Du erklärst, warum HTTP von sich aus zustandslos ist.
  - Du unterscheidest Cookies und Sessions nach Speicherort und Rolle.
  - Du erkennst, warum Session-Start und Cookie-Funktionen vor anderer Ausgabe liegen müssen.
practiceIdeas:
  - Ordne Warenkorb, Login und einfache Personalisierung Cookie oder Session grob zu.
  - Erkläre, wann ein Cookie erst beim nächsten Aufruf verfügbar wird.
  - Lies einen Ablauf mit Session-ID und Serverdaten in eigenen Worten nach.
commonMistakes:
  - Cookie und Session für dasselbe zu halten.
  - Zu glauben, alle Zustandsdaten lägen automatisch sicher auf dem Server.
  - Zu übersehen, dass Header-bezogene Funktionen nicht nach beliebiger Ausgabe aufgerufen werden können.
keyTakeaways:
  - HTTP merkt sich ohne Zusatzmechanismen keinen Zustand.
  - Cookies speichern clientseitig kleine Daten oder Kennungen.
  - Sessions halten die eigentlichen Sitzungsdaten typischerweise serverseitig.
recognizeSignals:
  - Es geht um Login, Warenkorb, Personalisierung oder mehrere Seitenaufrufe hintereinander.
  - Ein Beispiel nutzt $_COOKIE, $_SESSION oder session_start().
  - Du sollst erklären, wie eine Webanwendung einen Benutzer wiedererkennt.
selfCheckPoints:
  - Kann ich erklären, warum ein Webserver ohne Hilfe keine Sitzung „merkt“?
  - Kann ich Cookie und Session nach ihrer Rolle unterscheiden?
  - Kann ich sagen, warum session_start vor der Ausgabe stehen muss?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - cookies
  - sessions
  - zustand
draft: false
---

## Grundidee

HTTP ist von Natur aus zustandslos. Jeder Seitenaufruf steht für sich. Wenn eine Webanwendung einen Benutzer über mehrere Aufrufe hinweg wiedererkennen will, braucht sie deshalb zusätzliche Mechanismen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Warenkorb und Anrede über mehrere Seiten</h3>
  <p>Ein Shop oder Formularablauf muss sich Namen, Auswahl oder Warenkorb zwischen mehreren Aufrufen merken. Genau dafür werden Cookies und Sessions genutzt, aber nicht auf dieselbe Weise.</p>
</div>

## Cookie und Session grob trennen

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Wo liegen Daten und welche Rolle haben sie?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Cookie</strong>
      <span>Liegt clientseitig im Browser und kann kleine Informationen oder Kennungen transportieren.</span>
    </div>
    <div class="compare-item">
      <strong>Session</strong>
      <span>Hält die eigentlichen Sitzungsdaten typischerweise serverseitig und nutzt oft nur eine Kennung beim Client.</span>
    </div>
    <div class="compare-item">
      <strong>Gemeinsame Aufgabe</strong>
      <span>Beide helfen dabei, mehrere Aufrufe zu einem zusammenhängenden Ablauf zu verbinden.</span>
    </div>
  </div>
</div>

## Warum die Reihenfolge im Code wichtig ist

Cookie-Funktionen und <code>session_start()</code> arbeiten über HTTP-Header. Diese Informationen müssen gesendet werden, bevor bereits normale Ausgaben an den Browser geschickt wurden.

<div class="figure-card">
  <p class="card-kicker">Ablauflogik</p>
  <h3>So bleibt der Sitzungsaufbau nachvollziehbar</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Aufruf</strong><span>Der Browser fordert eine Seite an.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Server setzt Cookie oder startet Session</strong><span>Das passiert im Header-Bereich.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Nächster Request</strong><span>Cookie oder Session-ID kommt wieder mit.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wiedererkennen</strong><span>Die Anwendung kann an frühere Angaben anknüpfen.</span></div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Cookie ist nicht automatisch „die ganze Session“. Oft trägt es nur dazu bei, dass der Server die richtige serverseitige Sitzung wiederfindet.</p>
</div>
