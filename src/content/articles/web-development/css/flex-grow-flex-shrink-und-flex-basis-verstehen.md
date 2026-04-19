---
title: flex-grow, flex-shrink und flex-basis verstehen
description: Verstehe, wie Flex-Items wachsen, schrumpfen und von welcher Basisgröße sie ausgehen.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-grow-flex-shrink-und-flex-basis-verstehen
learningGoals:
  - Du beschreibst die Rollen von flex-grow, flex-shrink und flex-basis.
  - Du liest die Kurzschreibweise flex grob fachlich richtig.
  - Du erklärst, warum Items unterschiedlich viel Platz bekommen können.
practiceIdeas:
  - Vergleiche zwei Items mit unterschiedlichem flex-grow.
  - Lies eine Kurzschreibweise wie flex: 1 1 auto und ordne die Teile zu.
  - Prüfe, welches Item bei Platzmangel schrumpfen darf.
commonMistakes:
  - Zu denken, flex-grow sei eine absolute Breite.
  - flex-basis mit endgültiger Breite gleichzusetzen.
  - Kurzschreibweise flex nur auswendig, aber nicht inhaltlich zu lesen.
keyTakeaways:
  - flex-basis beschreibt die Ausgangsgröße.
  - flex-grow beschreibt zusätzliches Wachsen.
  - flex-shrink beschreibt Verhalten bei Platzmangel.
recognizeSignals:
  - Es geht um flex, flex-grow, flex-shrink oder flex-basis.
  - Items in einem Flex-Layout werden unterschiedlich groß.
  - Eine Kurzschreibweise wie flex: 0 1 auto soll erklärt werden.
selfCheckPoints:
  - Kann ich Ausgangsgröße und Wachstumsverhalten trennen?
  - Kann ich die drei Teile der Kurzschreibweise grob einordnen?
  - Kann ich erklären, warum zwei Items trotz gleicher Grundgröße unterschiedlich enden?
tags:
  - css
  - flexbox
  - groesse
  - web-development
level: einfach
draft: false
---

## Grundidee

Bei Flexbox entscheidet nicht nur die Position, sondern auch das **Größenverhalten** der Items. Dafür sind drei Begriffe besonders wichtig: <code>flex-grow</code>, <code>flex-shrink</code> und <code>flex-basis</code>.

## Die drei Rollen ruhig trennen

<div class="visual-grid">
  <div class="visual-item"><strong>flex-basis</strong><span>Die Ausgangsgröße, von der aus das Item gedacht wird.</span></div>
  <div class="visual-item"><strong>flex-grow</strong><span>Wie stark ein Item zusätzlichen freien Platz mitnutzen darf.</span></div>
  <div class="visual-item"><strong>flex-shrink</strong><span>Wie ein Item bei Platzmangel kleiner werden darf.</span></div>
</div>

## Kurzschreibweise flex

```css
.item {
  flex: 0 1 auto;
}
```

Das ist eine Kurzform für:

- <code>flex-grow: 0</code>
- <code>flex-shrink: 1</code>
- <code>flex-basis: auto</code>

## Mini-Demo: gleicher Start, anderes Wachstum

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum ein Item mehr Platz bekommt</h3>
  <div style="display:flex; gap:0.6rem; padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
    <div style="flex:1 1 120px; padding:0.7rem; border-radius:12px; background:#dbeafe;"><strong>flex:1 1 120px</strong></div>
    <div style="flex:2 1 120px; padding:0.7rem; border-radius:12px; background:#dcfce7;"><strong>flex:2 1 120px</strong></div>
  </div>
  <p style="margin:0.6rem 0 0;">Beide starten mit derselben Basis. Das zweite Item wächst stärker, weil sein flex-grow größer ist.</p>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Basisgröße gegen Endgröße</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>flex-basis</strong><span>Der Startpunkt der Größenberechnung.</span></div>
    <div class="compare-item"><strong>endgültige Breite</strong><span>Das Ergebnis nach Wachsen, Schrumpfen und Platzverteilung.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Basis lesen</strong><span>Mit welcher Größe startet das Item?</span></div>
  <div class="step-item"><strong>2. Freien Platz prüfen</strong><span>Darf das Item wachsen? Dann wird flex-grow wichtig.</span></div>
  <div class="step-item"><strong>3. Platzmangel prüfen</strong><span>Fehlt Platz? Dann wird flex-shrink wichtig.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>flex-basis</code> ist der Startpunkt, nicht automatisch das fertige Endmaß.</p>
</div>
