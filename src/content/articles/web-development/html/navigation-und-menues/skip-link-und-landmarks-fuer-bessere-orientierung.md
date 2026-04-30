---
title: "HTML – Skip-Link und Landmarks für bessere Orientierung"
description: "Lerne, wie main, nav, header, footer und ein Skip-Link Tastatur- und Screenreader-Nutzung erleichtern."
subject: "web-development"
section: "HTML"
topicPath: ["html", "navigation-und-menues", "skip-link-und-landmarks-fuer-bessere-orientierung"]
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

Lerne, wie main, nav, header, footer und ein Skip-Link Tastatur- und Screenreader-Nutzung erleichtern. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nicht alle wollen sich durch jedes Menü tabben</h3>
  <p>Wer eine Seite mit der Tastatur bedient, möchte wiederholte Navigation überspringen können. Semantische Landmarks und ein sichtbarer Skip-Link machen die Seite schneller und berechenbarer.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-ux-kontrollpfad.svg" alt="Seitengerüst mit Skip-Link, Navigation, Hauptinhalt und Fußbereich." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Wiederholte Navigation überspringen.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>Hauptinhalt eindeutig markieren.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Navigationen verständlich benennen.</span>
  </div>
</div>

## Mini-Demo

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Eine lange Linkliste kommt vor jedem Inhalt und muss immer komplett durchlaufen werden.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Ein Skip-Link springt direkt zum main-Bereich und wird beim Tastaturfokus sichtbar.</span>
    </div>
  </div>
</div>

## Prüfraster für Reviews

1. Welche Person oder welches Gerät muss die Information verstehen?
2. Ist die Information sichtbar, semantisch oder beides?
3. Gibt es eine technische Verknüpfung, die mehr ist als reine Optik?
4. Funktioniert die Lösung auch mit Tastatur, Screenreader, kleiner Breite oder reduzierter Bewegung?
5. Bleibt der Code wartbar, ohne Spezialtricks zu stapeln?

## Abgrenzung

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
