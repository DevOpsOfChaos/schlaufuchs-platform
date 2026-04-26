---
title: "JavaScript – Sichere DOM-Ausgabe ohne innerHTML"
description: "Lerne, Benutzereingaben sicher als Text auszugeben und HTML-Injektion durch unkontrolliertes innerHTML zu vermeiden."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "sicherheit-und-dom"
  - "sichere-dom-ausgabe-ohne-innerhtml"
learningGoals:
  - "Du erklärst, welche Kernidee hinter „Sichere DOM-Ausgabe ohne innerHTML“ steht."
  - "Du trennst sichtbare Oberfläche, technische Umsetzung und Nutzererwartung sauber."
  - "Du leitest aus einem kleinen Beispiel konkrete Verbesserungen für echte Seiten ab."
practiceIdeas:
  - "Prüfe eine vorhandene Seite mit genau diesem Blick und notiere drei Verbesserungen."
  - "Formuliere ein schwaches Beispiel in eine nutzerfreundlichere Variante um."
  - "Verbinde die technische Regel mit einer sichtbaren Auswirkung für Nutzerinnen und Nutzer."
commonMistakes:
  - "Suchbegriffe mit innerHTML ausgeben"
  - "Fehlertexte aus URL-Parametern ungefiltert einsetzen"
  - "Sicherheit erst am Ende betrachten"
keyTakeaways:
  - "Text ist nicht automatisch harmloses HTML"
  - "Gute Web-Entwicklung verbindet technische Korrektheit mit verständlicher Nutzerführung."
  - "Eine kleine, klare Regel ist wertvoller als eine große Sammlung ungetesteter Sonderfälle."
recognizeSignals:
  - "Eine Oberfläche wirkt technisch vorhanden, aber für Nutzende unklar."
  - "Ein Verhalten funktioniert im Idealfall, bricht aber bei Fehlern, langsamen Netzen oder anderen Geräten."
  - "Du sollst nicht nur Code schreiben, sondern eine robuste Entscheidung begründen."
selfCheckPoints:
  - "Kann ich das Problem in einem Satz ohne Fachjargon erklären?"
  - "Kann ich zeigen, woran Nutzende die Verbesserung bemerken?"
  - "Kann ich eine einfache Prüffrage für den nächsten Review ableiten?"
tags:
  - "web development"
  - "javascript"
  - "sicherheit"
  - "dom"
  - "xss"
level: mittel
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

Das Beispiel ist bewusst klein. Es zeigt nicht jede mögliche Sonderregel, sondern den Kern der Entscheidung. Genau dadurch lässt sich die Idee auf echte Projekte übertragen.

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
