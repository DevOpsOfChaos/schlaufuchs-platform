---
title: "CSS – Font Loading und Layout Shift vermeiden"
description: "Lerne, warum Schriftarten Layoutverschiebungen auslösen können und wie du Fallback, font-display und Größen stabil planst."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "performance-und-laden"
  - "font-loading-und-layout-shift-vermeiden"
learningGoals:
  - "Du erklärst die Grundidee von Font Loading und Layout Shift vermeiden."
  - "Du trennst sichtbares Nutzerverhalten, technische Ursache und passende Entscheidung."
  - "Du begründest eine robuste Lösung statt nur einen einzelnen Trick zu merken."
practiceIdeas:
  - "Beschreibe zuerst die sichtbare Situation auf der Seite."
  - "Markiere danach die technische Stelle, an der die Entscheidung getroffen wird."
  - "Formuliere am Ende eine Prüffrage, mit der du die Lösung kontrollierst."
commonMistakes:
  - "Nur den Erfolgsfall oder Schönfall zu betrachten."
  - "Performance, Sicherheit oder Wartbarkeit erst nachträglich zu prüfen."
  - "Werkzeuge zu benutzen, ohne die eigentliche Browserentscheidung zu benennen."
keyTakeaways:
  - "Robuste Webentwicklung verbindet Inhalt, Gestaltung, Verhalten und Prüfung."
  - "Gute Entscheidungen sind sichtbar begründet und nicht nur technisch möglich."
  - "Gute Font-Nutzung bedeutet nicht nur die richtige Schrift, sondern ein stabiles Verhalten während des Ladens."
recognizeSignals:
  - "Es geht um Ladeverhalten, Diagnose, Sicherheit oder Projektqualität."
  - "Eine Seite funktioniert grundsätzlich, soll aber stabiler, schneller oder verständlicher werden."
  - "Du sollst nicht nur Code schreiben, sondern eine Entscheidung begründen."
selfCheckPoints:
  - "Kann ich die sichtbare Auswirkung für Nutzerinnen und Nutzer benennen?"
  - "Kann ich die technische Ursache von der Lösung trennen?"
  - "Habe ich einen Fehler-, Lade- oder Sicherheitsfall mitgedacht?"
level: "mittel"
tags:
  - "web development"
  - "css"
  - "fonts"
  - "layout shift"
  - "performance"
draft: false
---

## Grundidee

Webfonts machen eine Seite oft schöner, können aber die Nutzererfahrung stören, wenn Text erst unsichtbar bleibt oder beim Nachladen springt. Gute Schriftplanung ist deshalb auch Performance- und UX-Arbeit.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Überschrift springt, obwohl nur die Schrift gewechselt wurde</h3>
  <p>Wenn Fallback-Schrift und Webfont sehr unterschiedliche Breiten haben, verändert sich nach dem Laden die Zeilenlänge. Plötzlich rutscht ein Button tiefer oder ein Textblock nimmt mehr Raum ein.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Die Entscheidung als kleiner Ablauf</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-font-loading-shift.svg" alt="Vergleich zwischen instabiler Schriftumschaltung und stabil geplantem Font Loading." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Die drei wichtigsten Blickrichtungen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Fallback-Schrift</strong>
    <span>Welche sichtbare oder technische Rolle spielt dieser Teil im Browser?</span>
  </div>
  <div class="visual-item">
    <strong>font-display</strong>
    <span>Welche Entscheidung muss hier bewusst getroffen werden?</span>
  </div>
  <div class="visual-item">
    <strong>stabile Zeilenlängen</strong>
    <span>Woran erkennst du, ob die Entscheidung wirklich zur Seite passt?</span>
  </div>
</div>

## Mini-Demo

```html
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-display: swap;
}

body {
  font-family: "Inter", system-ui, sans-serif;
}
```

Das Beispiel ist bewusst klein. Es soll nicht alle Sonderfälle abdecken, sondern den fachlichen Kern sichtbar machen: Erst die Aufgabe verstehen, dann die Browserentscheidung treffen, dann prüfen.

## Zwei Lesarten vergleichen

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>So wird aus einem Trick eine begründete Entscheidung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur schön gedacht</strong>
      <span>Die Webfont wird gewählt, ohne Ladeverhalten zu prüfen.</span>
    </div>
    <div class="compare-item">
      <strong>Robust gedacht</strong>
      <span>Fallback, Zeilenhöhe und Ladeverhalten werden gemeinsam geplant.</span>
    </div>
  </div>
</div>

## Ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Prüfen,</strong>
    <span>Prüfen, welche Schrift sofort sichtbar sein muss.</span>
  </div>
  <div class="step-item">
    <strong>2. Fallback-Schrift</strong>
    <span>Fallback-Schrift bewusst wählen statt zufällig übernehmen.</span>
  </div>
  <div class="step-item">
    <strong>3. Zeilenhöhe</strong>
    <span>Zeilenhöhe und wichtige Container stabil setzen.</span>
  </div>
  <div class="step-item">
    <strong>4. Im</strong>
    <span>Im langsamen Netzwerk testen, ob Text springt oder unsichtbar bleibt.</span>
  </div>
</div>

## Typische Kontrollfragen

- Welche sichtbare Wirkung soll für Nutzerinnen und Nutzer entstehen?
- Welche Ressource, welcher Zustand oder welche Sicherheitseigenschaft ist dafür entscheidend?
- Was passiert im langsamen Netzwerk, bei fehlenden Daten oder bei ungeplanter Eingabe?
- Kann eine andere Person die Entscheidung später nachvollziehen?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Font-Nutzung bedeutet nicht nur die richtige Schrift, sondern ein stabiles Verhalten während des Ladens.</p>
</div>
