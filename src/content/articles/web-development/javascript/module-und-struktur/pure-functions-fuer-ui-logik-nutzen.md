---
title: "JavaScript – Pure Functions für UI-Logik nutzen"
description: "Trenne berechenbare UI-Entscheidungen von DOM-Zugriffen, damit Verhalten leichter testbar und wartbar wird."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "module-und-struktur", "pure-functions-fuer-ui-logik-nutzen"]
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

Viele Entscheidungen einer Oberfläche sind reine Logik: Welche Meldung ist passend? Ist ein Button aktiv? Welche Klasse gehört zu welchem Zustand? Solche Regeln lassen sich oft als pure Funktionen ausdrücken.

<div class="example-card">
  <p class="card-kicker">Codequalität</p>
  <h3>Nicht jede UI-Logik muss direkt am DOM hängen</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich benutzen?“, sondern: „Welche Entscheidung macht die Seite verständlicher, robuster und leichter prüfbar?“</p>
</div>



## Mini-Demo: Erst entscheiden, dann rendern

```html
function getSubmitState(form) {
  if (!form.email) return { disabled: true, message: 'E-Mail fehlt' };
  if (!form.accepted) return { disabled: true, message: 'Zustimmung fehlt' };
  return { disabled: false, message: 'Bereit' };
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
      <li>Regeln ohne DOM testen</li>
      <li>Seiteneffekte begrenzen</li>
      <li>Rendern von Entscheiden trennen</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>alles im Event-Handler mischen</li>
      <li>Logik nur durch Klicken testbar machen</li>
      <li>globale Zustände überall verändern</li>
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
