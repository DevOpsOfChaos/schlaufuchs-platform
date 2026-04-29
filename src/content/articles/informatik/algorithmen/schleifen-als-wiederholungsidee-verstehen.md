---
title: "Schleifen als Wiederholungsidee verstehen"
description: "Verstehe, warum viele Abläufe nicht nur einmal stattfinden, sondern denselben Schritt geordnet wiederholen."
subject: "informatik"
section: "Algorithmen"
topicPath: ["algorithmen", "schleifen-als-wiederholungsidee-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Algorithmen"]
draft: false
---
## Grundidee

Viele Abläufe enthalten Schritte, die **mehrfach** stattfinden. Statt denselben Schritt immer wieder neu aufzuschreiben, beschreibt man die Wiederholung als gemeinsame Regel.

Das ist die Grundidee einer Schleife.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Mehrere Dateien nacheinander prüfen</h3>
  <p>Eine App soll nicht nur eine Datei, sondern viele Dateien nacheinander kontrollieren. Der Prüfschritt bleibt derselbe, nur das aktuelle Objekt ändert sich. Genau hier ist eine Schleife sinnvoller als eine lange Liste fast gleicher Einzelaktionen.</p>
</div>

## Was bei einer Schleife wichtig ist

Eine Schleife braucht meistens drei Dinge:

- einen wiederholten Schritt,
- eine Regel, wann weitergemacht wird,
- und einen Punkt, an dem die Wiederholung endet.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Wiederholen</strong>
    <span>Ein Schritt kommt nicht nur einmal, sondern immer wieder vor.</span>
  </div>
  <div class="visual-item">
    <strong>Prüfen</strong>
    <span>Nach jeder Runde muss klar sein, ob es weitergeht.</span>
  </div>
  <div class="visual-item">
    <strong>Beenden</strong>
    <span>Die Schleife endet, sobald die Regel dafür erfüllt ist.</span>
  </div>
</div>

## Wiederholung ist nicht bloß eine lange Liste

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Gleiche Idee, andere Darstellung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ohne Schleife</strong>
      <span>Prüfe Datei 1. Prüfe Datei 2. Prüfe Datei 3. Die Struktur wird schnell lang und unruhig.</span>
    </div>
    <div class="compare-item">
      <strong>Mit Schleife</strong>
      <span>Prüfe jede Datei nacheinander, bis keine Datei mehr übrig ist. Die gemeinsame Idee bleibt klar sichtbar.</span>
    </div>
  </div>
</div>

## Denkbild zur Schleife

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Runde für Runde mit klarer Stoppregel</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Starte</strong><span>Es gibt etwas zu bearbeiten.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Führe den Schritt aus</strong><span>Die gleiche Aktion wird wiederholt.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Prüfe das Ende</strong><span>Weiter oder stoppen?</span></div>
  </div>
</div>

## Warum das wichtig ist

Schleifen helfen, weil sie

- Wiederholungen ruhiger darstellen,
- Abläufe kürzer und klarer machen,
- und zeigen, dass Struktur wichtiger ist als bloß viele Einzelpunkte.

## Eine ruhige Prüfstrategie

1. Welcher Schritt wiederholt sich?
2. Was ändert sich von Runde zu Runde?
3. Wann darf die Wiederholung aufhören?
4. Kann ich die Idee als allgemeine Regel formulieren?

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Schleife beschreibt nicht „immer wieder irgendetwas“, sondern eine geordnete Wiederholung mit einer klaren Stoppregel.</p>
</div>
