---
title: "Browser – Accessibility Tree in DevTools prüfen"
description: "Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "debugging-und-diagnose", "accessibility-tree-in-devtools-pruefen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "JavaScript"]
draft: false
---
## Grundidee

Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente. Die Seite betrachtet das Thema nicht als isolierten Syntaxtrick, sondern als kleine Entscheidung für Bedienbarkeit, Wartbarkeit und verständliche Rückmeldung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Accessibility Tree in DevTools prüfen</h3>
  <p>Nutze DevTools nicht nur für Layout und Netzwerk, sondern auch zum Prüfen von Name, Rolle und Zustand interaktiver Elemente.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung sichtbar machen</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v101-landmarks-skiplink.svg" alt="Schematische Lernillustration zu Browser – Accessibility Tree in DevTools prüfen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
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

```js
<button aria-label="Menü öffnen">☰</button>
<!-- Prüfen: Name = Menü öffnen, Rolle = button -->
```

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Zuständigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Ein Icon-Button sieht klar aus, hat aber keinen verständlichen zugänglichen Namen.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Der sichtbare Zweck und der Accessibility Tree erzählen dieselbe Bediengeschichte.</span>
    </div>
  </div>
</div>

