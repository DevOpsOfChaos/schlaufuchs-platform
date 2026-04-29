---
title: "JavaScript – Feature Detection statt Browser raten"
description: "Prüfe Fähigkeiten des Browsers direkt, statt Verhalten aus User-Agent-Strings oder Gerätenamen abzuleiten."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "browser-apis", "feature-detection-statt-browser-raten"]
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

Browser ändern sich, Geräte unterscheiden sich und User-Agent-Strings sind unzuverlässig. Robuster ist die Frage: Ist die benötigte API oder CSS-Fähigkeit tatsächlich vorhanden?

<div class="example-card">
  <p class="card-kicker">Robustheit</p>
  <h3>Frage nach der Fähigkeit, nicht nach dem Browsernamen</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich benutzen?“, sondern: „Welche Entscheidung macht die Seite verständlicher, robuster und leichter prüfbar?“</p>
</div>



## Mini-Demo: Fähigkeit direkt prüfen

```html
if ('clipboard' in navigator) {
  await navigator.clipboard.writeText(text);
} else {
  showManualCopyHint(text);
}
```

Das Beispiel ist bewusst klein. Es zeigt nicht jede mögliche Sonderregel, sondern den Kern der Entscheidung. Genau dadurch lässt sich die Idee auf echte Projekte übertragen.

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du die Qualität erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
      <li>API-Verfügbarkeit prüfen</li>
      <li>Fallbacks bewusst planen</li>
      <li>Fehlerwege sichtbar machen</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>Browsernamen hart verdrahten</li>
      <li>Mobile automatisch mit schwach gleichsetzen</li>
      <li>Fallbacks nie testen</li>
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
