---
title: "Temporäre Dateien sicher nutzen"
description: "Namenskollisionen und Aufräumen beachten"
subject: "linux"
section: "Feinstruktur Linux"
topicPath: ["shell-automation", "robuste-skripte", "temporaere-dateien-sicher-nutzen-v114"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Feinstruktur Linux"]
draft: false
---
## Grundidee

**Temporäre Dateien sicher nutzen** ist bewusst als kleines Unterthema angelegt. Namenskollisionen und Aufräumen beachten. Dadurch bleibt die Seite auffindbar und vermischt sich nicht mit einem übergroßen Sammelkapitel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Skript speichert Zwischenergebnisse.</h3>
  <p>Die wichtige Frage lautet: <strong>Ist der temporäre Name eindeutig und wird er gelöscht?</strong></p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Vom Kontext zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/linux-v114-temporaere-dateien-sicher-nutzen-v114.svg" alt="Lernillustration zu Temporäre Dateien sicher nutzen." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich, aber nicht gleich</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Häufiger Fehler</strong><span>Immer derselbe Dateiname in /tmp wird genutzt.</span></div>
    <div class="compare-item"><strong>Prüffrage</strong><span>Ist der temporäre Name eindeutig und wird er gelöscht?</span></div>
  </div>
</div>

## Mini-Demo

```text
Kontext lesen → kleine Entscheidung treffen → Ergebnis prüfen → Gegenprobe formulieren
```

Die Mini-Demo ist kurz gehalten. Sie soll die Trennkante sichtbar machen, nicht das ganze Kapitel ersetzen.

## Vier-Fragen-Raster

<div class="step-grid">
  <div class="step-item"><strong>1. Kontext</strong><span>Welche Situation liegt vor?</span></div>
  <div class="step-item"><strong>2. Entscheidung</strong><span>Welche konkrete Unterscheidung muss getroffen werden?</span></div>
  <div class="step-item"><strong>3. Begründung</strong><span>Welche Regel, Messung, Rechnung oder Beobachtung trägt die Entscheidung?</span></div>
  <div class="step-item"><strong>4. Gegenprobe</strong><span>Woran würde ich merken, dass die Entscheidung falsch war?</span></div>
</div>

## Warum dieses Unterthema klein bleiben soll

Dieses Thema gehört zu **Robuste Skripte**, aber es soll nicht das ganze Unterthema ersetzen. Die Seite beantwortet eine einzelne Prüffrage. Andere Seiten können danach benachbarte Fälle, Sonderfälle oder Vertiefungen übernehmen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Struktur entsteht nicht durch mehr Sammelkapitel, sondern durch kleine Seiten mit klarer Prüffrage.</p>
</div>
