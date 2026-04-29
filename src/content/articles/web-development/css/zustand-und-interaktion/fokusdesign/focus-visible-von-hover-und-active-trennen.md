---
title: "Web Development – focus-visible von hover und active trennen"
description: "Lerne Fokusdesign als klar abgegrenztes Unterthema mit Beispiel, Prüfraster und Gegenprobe."
subject: "web-development"
section: "CSS"
topicPath: ["css", "zustand-und-interaktion", "fokusdesign", "focus-visible-von-hover-und-active-trennen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

**Fokusdesign** ist ein kleines, bewusst abgegrenztes Unterthema. Lerne Fokusdesign als klar abgegrenztes Unterthema mit Beispiel, Prüfraster und Gegenprobe. Die Seite verhindert, dass mehrere Nachbarfragen in einem breiten Sammelbegriff verschwimmen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst einordnen, dann lösen</h3>
  <p>Viele Fehler entstehen nicht durch fehlendes Wissen, sondern durch eine zu breite Einordnung. Benenne zuerst die konkrete Trennkante, dann wird der Lösungsweg deutlich ruhiger.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Vier Prüfschritte</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/webdevelopment-v107-focus-visible-von-hover-und-active-trennen.svg" alt="Lernillustration zu Fokusdesign." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Woran du das Unterthema erkennst

- Zwei Begriffe oder Zustände klingen ähnlich, führen aber zu verschiedenen Entscheidungen.
- Eine breite Erklärung wäre möglich, aber für die Aufgabe zu ungenau.
- Eine kleine Gegenprobe zeigt schnell, ob die Einordnung stimmt.

## Kleine Arbeitsregel

```html
<section aria-labelledby="bereich-title">
  <h2 id="bereich-title">Prüfbarer Bereich</h2>
</section>
```

Arbeite in kleinen Schritten. Erst Kontext, dann Entscheidung, dann Rechnung, Code, Messung oder Begründung.

## Abgrenzung

<div class="compare-card">
  <p class="card-kicker">Struktur statt Sammelordner</p>
  <h3>Warum diese Seite ein eigenes Unterthema ist</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Zu breit</strong><span>Alles unter einem allgemeinen Fachbegriff sammeln und die eigentliche Trennkante übersehen.</span></div>
    <div class="compare-item"><strong>Besser</strong><span>Das konkrete Unterthema benennen und mit einer Gegenprobe absichern.</span></div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Einordnen</strong><span>Welches kleine Unterthema entscheidet den Fall?</span></div>
  <div class="step-item"><strong>2. Trennen</strong><span>Welche Begriffe dürfen nicht vermischt werden?</span></div>
  <div class="step-item"><strong>3. Prüfen</strong><span>Welche Rechnung, Messung, Beobachtung oder Codeprobe passt?</span></div>
  <div class="step-item"><strong>4. Übertragen</strong><span>Was ändert sich bei einem zweiten Beispiel?</span></div>
</div>

<div class="note-panel"><p><strong>Merke:</strong> Kleine Unterthemen machen Lernseiten nicht kleiner, sondern auffindbarer und besser prüfbar.</p></div>
