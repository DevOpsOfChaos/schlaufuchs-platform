---
title: "JavaScript – Sichere DOM-Ausgabe ohne innerHTML"
description: "Lerne, Benutzereingaben sicher als Text auszugeben und HTML-Injektion durch unkontrolliertes innerHTML zu vermeiden."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "sicherheit-und-dom", "sichere-dom-ausgabe-ohne-innerhtml"]
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

Wenn fremde oder benutzernahe Inhalte mit innerHTML eingefügt werden, kann aus Text ausführbares Markup werden. In vielen Fällen reicht textContent und ist deutlich sicherer.

<div class="example-card">
  <p class="card-kicker">Sicherheit</p>
  <h3>Text ist nicht automatisch harmloses HTML</h3>
  <p>Die wichtigste Frage lautet nicht: „Welche Technik kann ich benutzen?“, sondern: „Welche Entscheidung macht die Seite verständlicher, robuster und leichter prüfbar?“</p>
</div>


## Mini-Demo: Text als Text einsetzen

```html
const item = document.createElement('li');
item.textContent = userInput;
list.append(item);
```

<div class="compare-card">
  <p class="card-kicker">Gut gegen schwach</p>
  <h3>Woran du die Qualität erkennst</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreiche Richtung</strong>
      <ul>
      <li>textContent für reine Texte nutzen</li>
      <li>HTML nur aus vertrauenswürdigen Templates erzeugen</li>
      <li>Eingaben und Ausgaben getrennt prüfen</li>
      </ul>
    </div>
    <div class="compare-item">
      <strong>Typische Stolperstelle</strong>
      <ul>
      <li>Suchbegriffe mit innerHTML ausgeben</li>
      <li>Fehlertexte aus URL-Parametern ungefiltert einsetzen</li>
      <li>Sicherheit erst am Ende betrachten</li>
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
