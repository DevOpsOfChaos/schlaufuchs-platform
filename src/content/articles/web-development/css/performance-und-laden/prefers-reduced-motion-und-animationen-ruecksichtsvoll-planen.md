---
title: "CSS – prefers-reduced-motion und Animationen rücksichtsvoll planen"
description: "Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören."
subject: "web-development"
section: "CSS"
topicPath: ["css", "performance-und-laden", "prefers-reduced-motion-und-animationen-ruecksichtsvoll-planen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>prefers-reduced-motion und Animationen rücksichtsvoll planen</h3>
  <p>Plane Animationen so, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht stören.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-quality-loop.svg" alt="Schematische Lernillustration zu CSS – prefers-reduced-motion und Animationen rücksichtsvoll planen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

Gute Weboberflächen entstehen selten durch eine einzelne Eigenschaft. Meist müssen Struktur, Zustand und Rückmeldung zusammenpassen. Die technische Lösung ist dann gut, wenn sie für Nutzerinnen und Nutzer nachvollziehbar bleibt und später im Code wiedergefunden werden kann.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Struktur lesen</strong>
    <span>Welche HTML- oder Komponentenstruktur ist wirklich vorhanden?</span>
  </div>
  <div class="visual-item">
    <strong>Zustand benennen</strong>
    <span>Was ist gerade aktiv, fehlerhaft, leer, geladen oder noch unbestätigt?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung planen</strong>
    <span>Wie erfahren Nutzerinnen und Nutzer, was passiert ist oder was als Nächstes möglich ist?</span>
  </div>
</div>

## Mini-Demo

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    scroll-behavior: auto;
  }
}
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Alle Übergänge bleiben aktiv, egal welche Systemeinstellung Nutzerinnen gewählt haben.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Bewegung unterstützt Orientierung, lässt sich aber über reduced motion deutlich beruhigen.</span>
    </div>
  </div>
</div>

