---
title: "Informatik – Funktionsschnittstellen klein und prüfbar halten"
description: "Plane Funktionen so, dass Eingabe, Ausgabe und Nebenwirkung klar bleiben und Tests nicht durch versteckte Abhängigkeiten erschwert werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmieren", "funktionen-und-schnittstellen", "funktionsschnittstellen-klein-und-pruefbar-halten"]
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

Eine Funktion ist leichter zu verstehen, wenn sie wenige klare Eingaben hat, ein erkennbares Ergebnis liefert und nicht heimlich globalen Zustand verändert.

<div class="example-card">
  <p class="card-kicker">Unterthema</p>
  <h3>Funktionsdesign: kleine Frage statt Sammelbox</h3>
  <p>Diese Seite behandelt bewusst nur einen abgegrenzten Ausschnitt. Dadurch bleibt klar, welche Entscheidung trainiert wird und welche Nachbarfragen auf andere Seiten gehören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Eindruck zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/info-v106-function-api.svg" alt="Lernillustration zu Funktionsdesign." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Mini-Demo: Prüfschritte

```text
1. Eingaben zählen
2. Ausgabe benennen
3. Nebenwirkung prüfen
4. Testfall schreiben
```

Die Schritte sind absichtlich klein gehalten. So kannst du erkennen, ob du wirklich dieses Unterthema bearbeitest oder gerade in ein Nachbarthema abrutschst.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du sauberes Arbeiten erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
        <li>Parameter haben klare Bedeutung</li>
        <li>Rückgabe ist dokumentierbar</li>
        <li>Nebenwirkungen sind bewusst</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
        <li>globale Variablen heimlich ändern</li>
        <li>zu viele Aufgaben in einer Funktion</li>
        <li>Rückgabe und Ausgabe vermischen</li>
      </ul>
    </div>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite gehört zum Unterthema **programmieren / funktionen-und-schnittstellen**. Sie soll nicht alle angrenzenden Fragen mitlösen. Genau diese Trennung macht den Bereich übersichtlicher: erst die kleine Denkentscheidung verstehen, dann bei Bedarf zum nächsten Unterthema wechseln.

<div class="step-grid">
  <div class="step-item"><strong>1. Begriff klären</strong><span>Welche Größe, Datei, Struktur oder Situation ist wirklich gemeint?</span></div>
  <div class="step-item"><strong>2. Grenze ziehen</strong><span>Was gehört noch zu dieser Frage und was schon zum Nachbarthema?</span></div>
  <div class="step-item"><strong>3. Entscheidung begründen</strong><span>Welche Regel oder Beobachtung trägt die Lösung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe nutzen</strong><span>Welcher kleine Test würde einen Denkfehler sichtbar machen?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Funktionsdesign bleibt lernbar, wenn es als eigenes Unterthema mit klarer Gegenprobe behandelt wird.</p>
</div>
