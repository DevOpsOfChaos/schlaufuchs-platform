---
title: "Elektrotechnik – Versorgungsspannung und Logikpegel nicht verwechseln"
description: "Unterscheide Betriebsspannung, High-Pegel, Eingangsschwelle und zulässige Pinspannung bei Mikrocontroller-Schaltungen."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["mikrocontroller-und-atmega", "stromversorgung-und-pegel", "versorgungsspannung-und-logikpegel-nicht-verwechseln"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
## Grundidee

Ein Mikrocontroller hat eine Versorgungsspannung, aber Pins sehen einzelne Spannungen. Ob ein Signal als High gilt und ob es elektrisch zulässig ist, sind zwei verschiedene Fragen.

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/el-v106-pegel.svg" alt="Lernillustration zu Logikpegel." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. VCC prüfen
2. Signalpegel messen
3. Eingangsschwelle lesen
4. Grenzwert beachten
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>High-Pegel wird zur Versorgung passend gelesen</li>
        <li>5-V- und 3,3-V-Logik werden getrennt</li>
        <li>Datenblattgrenzen werden beachtet</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>High immer als 5 V annehmen</li>
        <li>zulässig und erkannt verwechseln</li>
        <li>Pegelwandler ignorieren</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **mikrocontroller-und-atmega / stromversorgung-und-pegel**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Logikpegel bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
