---
title: "HTML – Fehlerseiten und leere Zustände hilfreich planen"
description: "Plane 404-Seiten, leere Listen und fehlende Ergebnisse so, dass Nutzerinnen und Nutzer nicht in einer Sackgasse landen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "struktur-und-semantik", "fehlerseiten-und-leere-zustaende-hilfreich-planen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Wenn eine Suche nichts findet oder eine Seite nicht existiert, ist das kein Nebenthema. Genau dann braucht die Oberfläche Orientierung: Was ist passiert, was kann ich prüfen und was ist der nächste sinnvolle Schritt?

<div class="example-card">
  <p class="card-kicker">UX-Prinzip</p>
  <h3>Ein leerer Zustand ist kein leerer Bildschirm</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich benutzen?“, sondern: „Welche Entscheidung macht die Seite verständlicher, robuster und leichter prüfbar?“</p>
</div>


<div class="figure-card">
  <p class="card-kicker">Visualisierung</p>
  <h3>Vom Problem zur besseren Entscheidung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-v104-empty-states.svg" alt="Schematische Illustration zu leeren Zuständen, Orientierung und nächster Handlung." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>


## Mini-Demo: 404-Seite ohne Sackgasse

```html
<main>
  <h1>Seite nicht gefunden</h1>
  <p>Die Adresse passt zu keiner Seite.</p>
  <a href="/wissen">Zur Wissensübersicht</a>
</main>
```

Das Beispiel ist bewusst klein. Es zeigt nicht jede mögliche Sonderregel, sondern den Kern der Entscheidung. Genau dadurch lässt sich die Idee auf echte Projekte übertragen.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du die Qualität erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
      <li>klare Überschrift</li>
      <li>kurze Erklärung</li>
      <li>nächste Handlung</li>
      <li>Such- oder Übersichtslink</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>nur „Fehler“ anzeigen</li>
      <li>Nutzende allein lassen</li>
      <li>keinen Rückweg anbieten</li>
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
