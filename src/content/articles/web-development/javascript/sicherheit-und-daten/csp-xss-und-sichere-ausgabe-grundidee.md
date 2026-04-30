---
title: "JavaScript – CSP, XSS und sichere Ausgabe als Grundidee"
description: "Lerne, warum fremde Eingaben nicht ungeprüft als HTML ausgegeben werden sollten und welche Rolle eine Content Security Policy spielt."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "sicherheit-und-daten", "csp-xss-und-sichere-ausgabe-grundidee"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["web-development", "JavaScript"]
draft: false
---
## Grundidee

XSS entsteht, wenn fremde oder veränderbare Inhalte als ausführbarer Code in die Seite gelangen. Der wichtigste Gedanke ist deshalb: Daten sind nicht automatisch HTML, und HTML ist nicht automatisch sicher.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Name ist Text, kein Stück Oberfläche</h3>
  <p>Wenn ein eingegebener Name mit innerHTML gesetzt wird, kann daraus gefährlicher HTML-Code werden. textContent behandelt denselben Wert als Text und verhindert, dass daraus ausführbare Struktur entsteht.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung als kleiner Ablauf</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/js-xss-csp-schutz.svg" alt="Schutzkette von Eingabevalidierung über sichere Ausgabe bis zur Content Security Policy." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Die drei wichtigsten Blickrichtungen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Eingabe</strong>
    <span>Welche sichtbare oder technische Rolle spielt dieser Teil im Browser?</span>
  </div>
  <div class="visual-item">
    <strong>Ausgabe</strong>
    <span>Welche Entscheidung muss hier bewusst getroffen werden?</span>
  </div>
  <div class="visual-item">
    <strong>Browser-Schutzschicht</strong>
    <span>Woran erkennst du, ob die Entscheidung wirklich zur Seite passt?</span>
  </div>
</div>

## Mini-Demo

```html
// sicherer für reinen Text
output.textContent = userName;

// riskant bei ungeprüften Inhalten
output.innerHTML = userName;
```

## Zwei Lesarten vergleichen

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>So wird aus einem Trick eine begründete Entscheidung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sichere Ausgabe</strong>
      <span>Text bleibt Text und wird nicht als HTML interpretiert.</span>
    </div>
    <div class="compare-item">
      <strong>Riskante Ausgabe</strong>
      <span>Ungeprüfter Inhalt wird als HTML-Struktur eingefügt.</span>
    </div>
  </div>
</div>

## Ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Klären,</strong>
    <span>Klären, ob Inhalt wirklich HTML sein muss.</span>
  </div>
  <div class="step-item">
    <strong>2. Für</strong>
    <span>Für Textausgabe textContent verwenden.</span>
  </div>
  <div class="step-item">
    <strong>3. HTML</strong>
    <span>HTML nur aus vertrauenswürdiger oder bereinigter Quelle einfügen.</span>
  </div>
  <div class="step-item">
    <strong>4. CSP</strong>
    <span>CSP als zusätzliche Schutzlinie, nicht als alleinige Lösung verstehen.</span>
  </div>
</div>

## Typische Kontrollfragen

- Welche sichtbare Wirkung soll für Nutzerinnen und Nutzer entstehen?
- Welche Ressource, welcher Zustand oder welche Sicherheitseigenschaft ist dafür entscheidend?
- Was passiert im langsamen Netzwerk, bei fehlenden Daten oder bei ungeplanter Eingabe?
- Kann eine andere Person die Entscheidung später nachvollziehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Sichere Ausgabe beginnt im Code. Eine CSP kann zusätzlich begrenzen, was der Browser ausführen darf.</p>
</div>
