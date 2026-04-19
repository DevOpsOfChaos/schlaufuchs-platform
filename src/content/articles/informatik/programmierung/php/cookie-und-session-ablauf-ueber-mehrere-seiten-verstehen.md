---
title: Cookie- und Session-Ablauf über mehrere Seiten verstehen
description: Verstehe, wie Cookies und Sessions einen Benutzer über mehrere Requests hinweg wiedererkennbar machen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - cookie-und-session-ablauf-ueber-mehrere-seiten-verstehen
learningGoals:
  - Du beschreibst grob, wie Cookies und Sessions über mehrere Seitenaufrufe hinweg wirken.
  - Du erklärst den Unterschied zwischen clientseitiger Cookie-Speicherung und serverseitiger Session-Speicherung.
  - Du liest Personalisierung oder Warenkorb-Logik als Mehrseiten-Ablauf statt als Einzelseite.
practiceIdeas:
  - Erkläre einen kleinen Login- oder Personalisierungsablauf über zwei Seiten.
  - Vergleiche, welche Information beim Cookie eher im Browser liegt und was bei der Session auf dem Server bleibt.
  - Beschreibe, warum der Zustand bei HTTP nicht automatisch vorhanden ist.
commonMistakes:
  - Zu glauben, eine Webanwendung merke sich Benutzerzustände ohne eigene Technik.
  - Cookie-Inhalt und Session-Daten direkt gleichzusetzen.
  - Den Request-zu-Request-Charakter von HTTP zu ignorieren.
keyTakeaways:
  - HTTP ist zustandslos.
  - Cookies speichern clientseitig kleine Zustandsinfos, Sessions speichern serverseitig Zustandsdaten.
  - Beide helfen, mehrere Seitenaufrufe zusammenhängend zu behandeln.
recognizeSignals:
  - Es geht um Warenkorb, Personalisierung, Login oder mehrere Folgeseiten.
  - Begriffe wie <code>$_COOKIE</code>, <code>$_SESSION</code> oder Session-ID tauchen auf.
  - Du sollst erklären, wie Wiedererkennung über mehrere Requests funktioniert.
selfCheckPoints:
  - Kann ich clientseitige und serverseitige Speicherung unterscheiden?
  - Kann ich erklären, warum HTTP allein keinen Zustand hält?
  - Kann ich einen Mehrseiten-Ablauf in Worten beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - cookie
  - session
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
