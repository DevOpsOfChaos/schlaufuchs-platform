---
title: "Web Development – event.target und currentTarget trennen"
description: "Lerne Event-Ziel als kleines, klar auffindbares Unterthema mit Abgrenzung, Prüfschritt und Gegenprobe."
subject: "web-development"
section: "Feinstruktur Web Development"
topicPath: ["javascript-browser", "events-state-async", "events", "event-target-und-currenttarget-trennen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Feinstruktur Web Development"]
draft: false
---
## Grundidee

**Event-Ziel** ist bewusst als kleines Unterthema angelegt. Lerne Event-Ziel als kleines, klar auffindbares Unterthema mit Abgrenzung, Prüfschritt und Gegenprobe. So bleibt die Lernseite auffindbar, ohne noch mehr Inhalt in ein übergroßes Sammelthema zu schieben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Klick auf ein Icon innerhalb eines Buttons löst Logik aus.</h3>
  <p>Die wichtige Frage lautet: Welche konkrete Entscheidung muss ich treffen, bevor ich rechne, messe, programmiere oder bewerte?</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Lernbild</p>
  <h3>Vier Schritte für ein enges Unterthema</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-development-v111-event-target-und-currenttarget-trennen.svg" alt="Lernillustration zu Event-Ziel." style="width:100%; max-width:54rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Ähnlich, aber nicht gleich</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Häufiger Fehler</strong><span>Auslösendes Kindelement und registriertes Element werden verwechselt.</span></div>
    <div class="compare-item"><strong>Prüffrage</strong><span>Vergleiche target und currentTarget im Ereignis.</span></div>
  </div>
</div>

## Mini-Demo

```html
<main>
  <button type="button">Aktion prüfen</button>
</main>
```

Die Mini-Demo ist absichtlich kurz. Sie soll die Trennkante zeigen, nicht das ganze Kapitel ersetzen.

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
