---
title: "Sessions sauber beenden und aufraeumen"
description: "Verstehe, warum Session Ende mehr ist als nur ein einzelner Befehl und wie Variablen, Session Daten und Session Cookie zusammenhaengen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "sessions-sauber-beenden-und-aufraeumen"]
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

Eine Session speichert Zustand serverseitig. Damit derselbe Benutzer spaeter wieder zu dieser Sitzung findet, wird eine Session ID verwendet. Oft steckt diese ID in einem Cookie. Darum ist ein sauberes Session Ende mehr als nur ein einzelner Funktionsaufruf.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Login wird beendet</h3>
  <p>Ein Benutzer meldet sich ab. Jetzt reicht es nicht, nur eine einzelne Variable auf <code>false</code> zu setzen. Es muss klar sein, welche Session Daten geloescht werden, ob die Sitzung selbst beendet wird und ob die clientseitige Session ID weitergeschickt werden kann.</p>
</div>

## Woraus die Session praktisch besteht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Session Daten</strong>
    <span>Serverseitige Werte wie Benutzername oder Warenkorb.</span>
  </div>
  <div class="visual-item">
    <strong>Session ID</strong>
    <span>Die Kennung, mit der eine Sitzung wiedergefunden wird.</span>
  </div>
  <div class="visual-item">
    <strong>Session Cookie</strong>
    <span>Transportiert die ID oft bei spaeteren Requests wieder zum Server.</span>
  </div>
</div>

## Warum das Ende mehrere Schritte haben kann

<div class="compare-card">
  <p class="card-kicker">Nicht zu kurz denken</p>
  <h3>Variable loeschen ist nicht automatisch Session Ende</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur einzelne Werte loeschen</strong>
      <span>Entfernt vielleicht Benutzerdaten, aber nicht zwingend die ganze Session Identifikation.</span>
    </div>
    <div class="compare-item">
      <strong>Session ganz beenden</strong>
      <span>Bezieht Daten, Sitzungsmechanismus und haeufig auch das Session Cookie mit ein.</span>
    </div>
  </div>
</div>

## Typischer Aufraeumablauf

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Sauberes Session Ende ist eine kleine Folge von Schritten</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Session zugreifbar machen</strong><span>Erst dann koennen vorhandene Daten sauber bearbeitet werden.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Daten leeren</strong><span>Benutzer oder Zustandswerte entfernen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Session beenden</strong><span>Serverseitigen Mechanismus sauber schliessen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Cookie mitdenken</strong><span>Pruefen, ob die Session ID clientseitig weiterlaeuft.</span></div>
  </div>
</div>

## Warum das Cookie wichtig ist

Wenn der Browser bei spaeteren Requests dieselbe Session ID weiterliefert, kann das System eine Sitzung moeglicherweise wiedererkennen. Darum gehoert das Cookie fachlich mit zur Gesamtlogik des Zustands.

## Diese Seite behandelt bewusst Session Ende und nicht Request Arten

Hier geht es um Zustand ueber mehrere Anfragen hinweg. Die Frage, wie Formulardaten per GET oder POST ankommen, ist eine andere Ebene und gehoert auf die eigene Request Seite.

<div class="note-panel">
  <p><strong>Merke:</strong> Session Ende heisst nicht nur Wert loeschen, sondern den ganzen Identifikations und Zustandsablauf bewusst zu beenden.</p>
</div>
