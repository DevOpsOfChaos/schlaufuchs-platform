---
title: "Informatik – Bedrohungsmodell für kleine Anwendungen erstellen"
description: "Denke Sicherheit über Akteure, Daten, Grenzen und Missbrauchsfälle, bevor du einzelne Schutzmaßnahmen auswählst."
subject: "informatik"
section: "Sicherheit"
topicPath: ["sicherheit", "bedrohungsmodelle", "bedrohungsmodell-fuer-kleine-anwendungen-erstellen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Sicherheit"]
draft: false
---
## Grundidee

Sicherheit beginnt nicht mit Werkzeugnamen. Zuerst muss klar sein, welche Daten schützenswert sind, wer darauf zugreifen darf und welche Grenze zwischen vertrauenswürdig und unsicher liegt.

<div class="example-card">
  <p class="card-kicker">Unterthema</p>
  <h3>Bedrohungsmodell: kleine Frage statt Sammelbox</h3>
  <p>Diese Seite behandelt bewusst nur einen abgegrenzten Ausschnitt. Dadurch bleibt klar, welche Entscheidung trainiert wird und welche Nachbarfragen auf andere Seiten gehören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/info-v106-threat-model.svg" alt="Lernillustration zu Bedrohungsmodell." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. Daten benennen
2. Akteure trennen
3. Grenzen markieren
4. Missbrauchsfall formulieren
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>Risiko wird konkret beschrieben</li>
        <li>Grenzen sind sichtbar</li>
        <li>Maßnahme passt zum Szenario</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>Sicherheit nur als Passwortthema sehen</li>
        <li>Angreifer unklar lassen</li>
        <li>Maßnahmen ohne Risiko sammeln</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **sicherheit / bedrohungsmodelle**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bedrohungsmodell bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
