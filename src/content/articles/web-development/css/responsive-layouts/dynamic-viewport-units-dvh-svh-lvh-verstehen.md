---
title: "CSS – dvh, svh und lvh bei mobilen Ansichten verstehen"
description: "Lerne, warum 100vh auf mobilen Geräten nicht immer der sichtbaren Höhe entspricht und wie dynamische Viewport-Einheiten helfen."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "responsive-layouts"
  - "dynamic-viewport-units-dvh-svh-lvh-verstehen"
tags:
  - "web development"
  - "css"
  - "responsive"
  - "viewport"
  - "dvh"
learningGoals:
  - "Du erklärst das Problem klassischer Viewport-Höhen auf mobilen Browsern."
  - "Du unterscheidest kleine, große und dynamische Viewport-Höhe."
  - "Du wählst Einheiten nach Nutzererlebnis statt nach Gewohnheit."
practiceIdeas:
  - "Übertrage das Muster auf eine kleine eigene Oberfläche."
  - "Prüfe den Fall mit Tastatur, kleinem Bildschirm oder Fehlermeldung."
  - "Formuliere die technische Entscheidung in Alltagssprache."
commonMistakes:
  - "100vh pauschal für jede Vollbildfläche zu verwenden."
  - "Browserleisten und Tastatur auf mobilen Geräten zu ignorieren."
  - "Inhalte hinter feste Bereiche rutschen zu lassen."
keyTakeaways:
  - "Robuste Webentwicklung verbindet Struktur, Zustand und verständliche Rückmeldung."
  - "Eine gute Lösung bleibt auch bei Tastaturbedienung, Fehlern oder kleinen Bildschirmen nachvollziehbar."
  - "Saubere Projektpraxis bedeutet, Entscheidungen sichtbar und überprüfbar zu machen."
recognizeSignals:
  - "Eine Oberfläche funktioniert scheinbar, wird aber in Sonderfällen unklar."
  - "Nutzerinnen und Nutzer brauchen Orientierung, Status oder eine konkrete Korrekturmöglichkeit."
  - "HTML, CSS und JavaScript müssen gemeinsam statt isoliert betrachtet werden."
selfCheckPoints:
  - "Kann ich erklären, welcher Zustand gerade sichtbar gemacht wird?"
  - "Ist die Lösung auch ohne Maus, perfekte Verbindung oder großen Bildschirm verständlich?"
  - "Sind sichtbare Texte klar, deutsch und nah an der betroffenen Handlung formuliert?"
level: "fortgeschritten"
draft: false
---

## Grundidee

Lerne, warum 100vh auf mobilen Geräten nicht immer der sichtbaren Höhe entspricht und wie dynamische Viewport-Einheiten helfen. Diese Seite behandelt das Thema als praktische Entscheidung im Webprojekt: Was sehen Nutzerinnen und Nutzer, was passiert technisch im Hintergrund und wie bleibt die Lösung später wartbar?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>CSS – dvh, svh und lvh bei mobilen Ansichten verstehen</h3>
  <p>Lerne, warum 100vh auf mobilen Geräten nicht immer der sichtbaren Höhe entspricht und wie dynamische Viewport-Einheiten helfen.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Orientierung</p>
  <h3>Vom Problem zur prüfbaren Lösung</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/css-v102-layout-units.svg" alt="Schematische Lernillustration zu CSS – dvh, svh und lvh bei mobilen Ansichten verstehen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

Viele Webprobleme entstehen nicht, weil ein einzelnes HTML-Element, eine CSS-Regel oder eine JavaScript-Funktion fehlt. Häufig ist die eigentliche Frage: **Welcher Zustand soll für wen verständlich werden?** Genau deshalb lohnt es sich, Struktur, Verhalten und Rückmeldung gemeinsam zu lesen.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Struktur</strong>
    <span>Welche Elemente, Bereiche oder Komponenten tragen die Bedeutung?</span>
  </div>
  <div class="visual-item">
    <strong>Zustand</strong>
    <span>Was ist geöffnet, fehlerhaft, geladen, leer, gespeichert oder noch unbestätigt?</span>
  </div>
  <div class="visual-item">
    <strong>Rückmeldung</strong>
    <span>Wie wird dieser Zustand sichtbar, bedienbar und verständlich erklärt?</span>
  </div>
</div>

## Mini-Demo

```css
.hero {
  min-height: 100svh;
}
.app-panel {
  min-height: 100dvh;
}
```

Die Demo ist bewusst klein. Sie zeigt nicht die gesamte fertige Anwendung, sondern den entscheidenden Gedanken: erst die Zuständigkeit klären, dann die technische Umsetzung passend wählen.

## Schwach oder sauber?

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Der Unterschied liegt in der Prüfbarkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwache Lesart</strong>
      <span>Ein Vollbildbereich wirkt am Desktop korrekt, ist mobil aber teilweise verdeckt oder springt stark.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Die Einheit passt zur Situation: stabile Anfangsansicht, dynamische App-Fläche oder maximaler Raum.</span>
    </div>
  </div>
</div>

## Prüffragen für eigene Projekte

- Ist klar, welcher Zustand gerade gemeint ist?
- Bleibt die Bedienung mit Tastatur, kleinem Bildschirm oder Fehlerfall verständlich?
- Ist die sichtbare Rückmeldung konkret genug, damit jemand handeln kann?
- Kann eine andere Person im Code wiederfinden, wo die Entscheidung getroffen wird?

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Weblösung ist nicht schon deshalb gut, weil sie im Normalfall funktioniert. Sie ist gut, wenn Struktur, Zustand und Rückmeldung auch in Randfällen dieselbe Geschichte erzählen.</p>
</div>
