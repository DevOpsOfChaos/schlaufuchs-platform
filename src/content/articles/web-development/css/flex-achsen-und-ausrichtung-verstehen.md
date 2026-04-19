---
title: Flex-Achsen und Ausrichtung verstehen
description: Verstehe, wie justify-content und align-items auf Haupt- und Kreuzachse wirken.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-achsen-und-ausrichtung-verstehen
learningGoals:
  - Du unterscheidest Hauptachse und Kreuzachse.
  - Du erklärst die Rollen von justify-content und align-items.
  - Du liest sichtbare Flex-Ausrichtung ruhiger als Achsenproblem.
practiceIdeas:
  - Ordne sichtbare Layouts den richtigen Achsenbegriffen zu.
  - Vergleiche center, flex-start und space-between an einer kleinen Leiste.
  - Prüfe, welche Eigenschaft auf welcher Achse wirkt.
commonMistakes:
  - justify-content und align-items zu vertauschen.
  - Von links/rechts statt von Haupt- und Kreuzachse aus zu denken.
  - Zu vergessen, dass flex-direction die Achsrichtung verändern kann.
keyTakeaways:
  - justify-content steuert die Verteilung auf der Hauptachse.
  - align-items steuert die Ausrichtung auf der Kreuzachse.
  - flex-direction verändert, wie Haupt- und Kreuzachse gelesen werden.
recognizeSignals:
  - Es geht um center, stretch, flex-start, flex-end oder space-between.
  - Eine Flex-Leiste ist sichtbar ausgerichtet und du sollst die Ursache benennen.
  - In Beispielen wird flex-direction erwähnt.
selfCheckPoints:
  - Kann ich Achsen statt Himmelsrichtungen denken?
  - Kann ich justify-content und align-items sicher trennen?
  - Kann ich erklären, was sich bei flex-direction: column ändert?
tags:
  - css
  - flexbox
  - ausrichtung
  - web-development
level: einfach
draft: false
---

## Grundidee

Bei Flexbox hilft eine ruhige Denkweise: **nicht sofort links, rechts, oben oder unten**, sondern zuerst **Hauptachse** und **Kreuzachse**.

## Zwei zentrale Eigenschaften

<div class="visual-grid">
  <div class="visual-item"><strong>justify-content</strong><span>Verteilt Items auf der Hauptachse.</span></div>
  <div class="visual-item"><strong>align-items</strong><span>Richtet Items auf der Kreuzachse aus.</span></div>
</div>

## flex-direction verändert die Lesart

Wenn die Hauptachse durch <code>flex-direction: row</code> horizontal läuft, wirkt justify-content horizontal. Bei <code>column</code> läuft sie vertikal – und dieselbe Eigenschaft wirkt dann entsprechend anders.

## Mini-Demo: Hauptachse gegen Kreuzachse

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Welche Eigenschaft erklärt welches Bild?</h3>
  <div style="display:grid; gap:0.75rem;">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; min-height:84px; padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="padding:0.55rem 0.7rem; border-radius:12px; background:#dbeafe;">A</div>
      <div style="padding:0.9rem 0.7rem; border-radius:12px; background:#dcfce7;">B</div>
      <div style="padding:0.7rem 0.7rem; border-radius:12px; background:#fef3c7;">C</div>
    </div>
    <p style="margin:0;">Die großen Abstände zwischen A, B und C kommen von <code>justify-content: space-between</code>. Die obere Ausrichtung kommt von <code>align-items: flex-start</code>.</p>
  </div>
</div>

## Typische Verwechslung

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Erst Achse, dann Eigenschaft</h3>
    <p>Du prüfst zuerst, welche Richtung die Hauptachse hat, und wählst danach justify-content oder align-items.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur "horizontal" oder "vertikal" merken</h3>
    <p>Dann kippt die Logik schnell, sobald flex-direction geändert wird.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. flex-direction lesen</strong><span>Welche Richtung hat die Hauptachse?</span></div>
  <div class="step-item"><strong>2. Verteilung suchen</strong><span>Geht es um die Strecke entlang der Hauptachse? Dann justify-content.</span></div>
  <div class="step-item"><strong>3. Quer-Ausrichtung suchen</strong><span>Geht es um die Ausrichtung quer dazu? Dann align-items.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> In Flexbox ist nicht "oben" oder "links" der Startpunkt der Logik, sondern die aktuell gewählte Hauptachse.</p>
</div>
