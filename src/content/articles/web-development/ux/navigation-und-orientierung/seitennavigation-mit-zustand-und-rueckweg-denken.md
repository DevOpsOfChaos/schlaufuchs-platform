---
title: "UX – Seitennavigation mit Zustand und Rückweg denken"
description: "Plane Navigation so, dass Nutzende wissen, wo sie sind, was gerade aktiv ist und wie sie kontrolliert zurückfinden."
subject: "web-development"
section: "UX"
topicPath: ["ux", "navigation-und-orientierung", "seitennavigation-mit-zustand-und-rueckweg-denken"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "UX"]
draft: false
---
## Grundidee

Navigation ist nicht nur eine Liste von Links. Sie erklärt Standort, Bereich, aktiven Zustand und Rückweg. Besonders auf Lernseiten entscheidet das über Ruhe oder Verwirrung.

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v106-navigation-state.svg" alt="Lernillustration zu Orientierung." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. Bereich erkennen
2. aktiven Punkt markieren
3. Rückweg anbieten
4. Linktext prüfen
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>aktive Seite ist eindeutig</li>
        <li>Breadcrumb und Überschrift passen zusammen</li>
        <li>Linktexte nennen Ziel und Zweck</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>mehrere aktive Punkte</li>
        <li>Zurück-Link ohne Kontext</li>
        <li>gleich klingende Navigationslabels</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **ux / navigation-und-orientierung**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Orientierung bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
