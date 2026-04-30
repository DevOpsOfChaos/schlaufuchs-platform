---
title: "HTML – Breadcrumb und Seitentitel zur Orientierung nutzen"
description: "Verstehe, wie Breadcrumbs, Seitentitel und Hauptüberschriften zusammen Orientierung geben, ohne Navigation zu überladen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "navigation-und-menues", "breadcrumb-und-seitentitel-zur-orientierung-nutzen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Gute Navigation besteht nicht nur aus Menüpunkten. Eine Seite braucht auch einen klaren Titel, eine sichtbare Hauptüberschrift und manchmal einen Breadcrumb, der den Weg zurück in die Struktur zeigt.

<div class="example-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Nutzer sollen wissen, wo sie sind</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich benutzen?“, sondern: „Welche Entscheidung macht die Seite verständlicher, robuster und leichter prüfbar?“</p>
</div>


<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Problem zur besseren Entscheidung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v104-breadcrumb-title.svg" alt="Schematische Illustration zu Breadcrumb, Seitentitel und Hauptüberschrift." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>


## Mini-Demo: Titel, H1 und Breadcrumb trennen

```html
<nav aria-label="Brotkrumen">
  <a href="/wissen">Wissen</a> ›
  <a href="/wissen/html">HTML</a> ›
  <span aria-current="page">Formulare</span>
</nav>
<h1>Formulare verständlich strukturieren</h1>
```

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du die Qualität erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
      <li>Seitentitel beschreibt die aktuelle Seite</li>
      <li>Breadcrumb zeigt Hierarchie</li>
      <li>aria-current markiert den aktuellen Punkt</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>Breadcrumb als Hauptnavigation missbrauchen</li>
      <li>Titel und H1 widersprechen lassen</li>
      <li>nur kryptische Slugs anzeigen</li>
      </ul>
    </div>
  </div>
</div>

## Prüfstrategie für echte Seiten

<div class="step-grid">
  <div class="step-item">
    <strong>1. Situation benennen</strong>
    <span>Was sieht oder tut die Nutzerin gerade?</span>
  </div>
  <div class="step-item">
    <strong>2. Risiko finden</strong>
    <span>Wo entsteht Unsicherheit, Überforderung oder ein technischer Bruch?</span>
  </div>
  <div class="step-item">
    <strong>3. Kleine Regel formulieren</strong>
    <span>Welche einfache Entscheidung verbessert genau diese Stelle?</span>
  </div>
  <div class="step-item">
    <strong>4. Gegenprobe machen</strong>
    <span>Funktioniert die Lösung auch bei Tastatur, kleinem Bildschirm, Fehlern oder langsamem Netz?</span>
  </div>
</div>

## Abgrenzung

Diese Seite ist keine vollständige Spezifikation. Sie trainiert eine einzelne robuste Denkbewegung. Die Nachbarseiten erklären verwandte Themen wie Semantik, Kaskade, Fetch, Formularvalidierung oder Barrierefreiheit im Detail.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Web-Entwicklung zeigt sich besonders an den Rändern: Fehler, leere Zustände, langsame Antworten, kleine Bildschirme und ungewohnte Bedienwege.</p>
</div>
