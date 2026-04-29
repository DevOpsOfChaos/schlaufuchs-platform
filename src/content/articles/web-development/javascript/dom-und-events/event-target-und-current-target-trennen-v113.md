---
title: "Event Target und Current Target trennen"
description: "Lerne Event Target und Current Target trennen als kleines, klar abgegrenztes Unterthema mit Prüffrage und Gegenprobe."
subject: "web-development"
section: "Feinstruktur Web Development"
topicPath: ["javascript", "dom-und-events", "event-target-und-current-target-trennen-v113"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "Feinstruktur Web Development"]
draft: false
---
## Grundidee

**Event Target und Current Target trennen** ist bewusst als kleines Unterthema angelegt. Lerne Event Target und Current Target trennen als kleines, klar abgegrenztes Unterthema mit Prüffrage und Gegenprobe. Dadurch bleibt die Seite auffindbar und vermischt sich nicht mit einem übergroßen Sammelkapitel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Klick in einer verschachtelten Karte löst einen Handler aus.</h3>
  <p>Die wichtige Frage lautet: Welche konkrete Entscheidung muss ich treffen, bevor ich rechne, messe, programmiere, prüfe oder bewerte?</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Vom Kontext zur Gegenprobe</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-development-v113-event-target-und-current-target-trennen-v113.svg" alt="Lernillustration zu Event Target und Current Target trennen." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich, aber nicht gleich</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Häufiger Fehler</strong><span>Auslösendes Element und registriertes Element werden verwechselt.</span></div>
    <div class="compare-item"><strong>Prüffrage</strong><span>Welches Element hat den Handler und welches wurde wirklich geklickt?</span></div>
  </div>
</div>

## Mini-Demo

```html
<main>
  <button type="button">Zustand prüfen</button>
</main>
```

Die Mini-Demo ist absichtlich kurz. Sie soll die Trennkante sichtbar machen, nicht das ganze Kapitel ersetzen.

## Vier-Fragen-Raster

<div class="step-grid">
  <div class="step-item"><strong>1. Kontext</strong><span>Welche Situation liegt vor?</span></div>
  <div class="step-item"><strong>2. Trennkante</strong><span>Was wird leicht verwechselt?</span></div>
  <div class="step-item"><strong>3. Prüfung</strong><span>Welche Rechnung, Messung, Abfrage oder Beobachtung entscheidet?</span></div>
  <div class="step-item"><strong>4. Gegenprobe</strong><span>Was müsste anders aussehen, wenn die Einordnung falsch wäre?</span></div>
</div>

## Warum diese Unterteilung hilft

In einem breiten Unterthema sieht vieles ähnlich aus. Dieses kleinere Unterthema zwingt dazu, die Frage eng zu formulieren. Dadurch passen Wissensseite, Aufgabe und Lösung besser zusammen.

<div class="note-panel"><p><strong>Merke:</strong> Gute Feinstruktur bedeutet nicht mehr Komplexität, sondern weniger Suchaufwand: Eine Seite, eine Trennkante, eine passende Aufgabe.</p></div>
