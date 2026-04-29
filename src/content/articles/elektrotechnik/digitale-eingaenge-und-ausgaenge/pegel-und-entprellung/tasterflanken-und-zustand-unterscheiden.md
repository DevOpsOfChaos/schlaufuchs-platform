---
title: "Elektrotechnik – Tasterflanken und Zustand unterscheiden"
description: "Trenne gedrückten Zustand, Loslassen und Flankenereignis, damit Tasterlogik nicht mehrfach oder zu spät reagiert."
subject: "elektrotechnik"
section: "Digitale Eingänge"
topicPath: ["digitale-eingaenge-und-ausgaenge", "pegel-und-entprellung", "tasterflanken-und-zustand-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Digitale Eingänge"]
draft: false
---
## Grundidee

Ein Taster hat einen Zustand, aber viele Programme brauchen ein Ereignis: gerade gedrückt, gerade losgelassen oder dauerhaft gehalten. Diese Unterscheidung verhindert Mehrfachaktionen.

<div class="example-card">
  <p class="card-kicker">Unterthema</p>
  <h3>Tasterlogik: kleine Frage statt Sammelbox</h3>
  <p>Diese Seite behandelt bewusst nur einen abgegrenzten Ausschnitt. Dadurch bleibt klar, welche Entscheidung trainiert wird und welche Nachbarfragen auf andere Seiten gehören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/el-v106-button-edge.svg" alt="Lernillustration zu Tasterlogik." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. alten Zustand merken
2. neuen Zustand lesen
3. Flanke erkennen
4. Aktion einmal auslösen
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>Zustand und Ereignis werden getrennt</li>
        <li>Entprellung ist eingeplant</li>
        <li>Aktion hängt an der passenden Flanke</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>bei jedem Loop erneut auslösen</li>
        <li>Loslassen ignorieren</li>
        <li>Prellen als Codefehler missverstehen</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **digitale-eingaenge-und-ausgaenge / pegel-und-entprellung**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Tasterlogik bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
