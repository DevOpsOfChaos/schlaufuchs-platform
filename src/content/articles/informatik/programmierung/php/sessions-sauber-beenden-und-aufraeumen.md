---
title: Sessions sauber beenden und aufräumen
description: Verstehe, warum Session-Ende mehr ist als nur ein einzelner Befehl und wie Variablen, Session-Daten und Session-Cookie zusammenhängen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - sessions-sauber-beenden-und-aufraeumen
learningGoals:
  - Du erklärst, was beim Beenden einer Session aufgeräumt werden sollte.
  - Du unterscheidest Session-Daten, Session-ID und Session-Cookie.
  - Du erkennst, warum ein Session-Ende aus mehreren Schritten besteht.
practiceIdeas:
  - Ordne die Schritte zum Session-Ende in sinnvolle Reihenfolge.
  - Erkläre, warum nur session_destroy() oft nicht als ganze Geschichte reicht.
  - Beschreibe, welche Rolle das Session-Cookie beim Fortsetzen einer Sitzung spielt.
commonMistakes:
  - Zu denken, das Löschen einer Variablen beende automatisch die gesamte Session.
  - Session-Daten und Session-ID gleichzusetzen.
  - Zu übersehen, dass die Identifikation oft über ein Cookie weiterläuft.
keyTakeaways:
  - Eine Session besteht aus Daten auf dem Server und einer Identifikation durch die Session-ID.
  - Sauberes Beenden betrifft Daten, Session-Mechanismus und meist auch das Cookie.
  - Session-Ende ist ein Ablauf, kein einzelner Knopf.
recognizeSignals:
  - Es geht um session_start, session_destroy oder PHPSESSID.
  - Ein Beispiel zeigt mehrere Seitenaufrufe mit Zustand.
  - Du sollst erklären, warum eine Sitzung unerwartet weiterlebt oder endet.
selfCheckPoints:
  - Kann ich Session-Daten und Session-ID trennen?
  - Kann ich die Aufräumschritte in sinnvoller Reihenfolge nennen?
  - Kann ich erklären, warum das Cookie eine Rolle spielt?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - sessions
  - sauber
draft: false
---

## Grundidee

Eine Session speichert Zustand serverseitig. Damit derselbe Benutzer später wieder zu dieser Sitzung findet, wird eine Session-ID verwendet. Oft steckt diese ID in einem Cookie. Darum ist ein sauberes Session-Ende mehr als nur ein einzelner Funktionsaufruf.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Login wird beendet</h3>
  <p>Ein Benutzer meldet sich ab. Jetzt reicht es nicht, nur eine einzelne Variable auf <code>false</code> zu setzen. Es muss klar sein, welche Session-Daten gelöscht werden, ob die Sitzung selbst beendet wird und ob die clientseitige Session-ID weitergeschickt werden kann.</p>
</div>

## Woraus die Session praktisch besteht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Session-Daten</strong>
    <span>Serverseitige Werte wie Benutzername oder Warenkorb.</span>
  </div>
  <div class="visual-item">
    <strong>Session-ID</strong>
    <span>Die Kennung, mit der eine Sitzung wiedergefunden wird.</span>
  </div>
  <div class="visual-item">
    <strong>Session-Cookie</strong>
    <span>Transportiert die ID oft bei späteren Requests wieder zum Server.</span>
  </div>
</div>

## Warum das Ende mehrere Schritte haben kann

<div class="compare-card">
  <p class="card-kicker">Nicht zu kurz denken</p>
  <h3>Variable löschen ist nicht automatisch Session-Ende</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur einzelne Werte löschen</strong>
      <span>Entfernt vielleicht Benutzerdaten, aber nicht zwingend die ganze Session-Identifikation.</span>
    </div>
    <div class="compare-item">
      <strong>Session ganz beenden</strong>
      <span>Bezieht Daten, Sitzungsmechanismus und häufig auch das Session-Cookie mit ein.</span>
    </div>
  </div>
</div>

## Ein typischer Denkablauf

1. Session starten oder fortsetzen, damit überhaupt auf die Sitzung zugegriffen werden kann.
2. Registrierte Session-Daten leeren.
3. Die Sitzung serverseitig beenden.
4. Falls nötig auch das Session-Cookie auf Clientseite ungültig machen.

## Warum das Cookie wichtig ist

Wenn der Browser bei späteren Requests dieselbe Session-ID weiterliefert, kann das System eine Sitzung möglicherweise wiedererkennen. Darum gehört das Cookie fachlich mit zur Gesamtlogik des Zustands.

<div class="note-panel">
  <p><strong>Merke:</strong> Session-Ende heißt nicht nur „Wert löschen“, sondern den ganzen Identifikations- und Zustandsablauf bewusst zu beenden.</p>
</div>
