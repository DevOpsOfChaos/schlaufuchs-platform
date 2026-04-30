---
title: "CSS – focus-visible, hover und Pointer-Zustände planen"
description: "Verstehe, warum Interaktionszustände nicht nur hübsch sein dürfen, sondern Tastatur, Maus und Touch sauber unterstützen müssen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "selektoren", "focus-visible-hover-und-pointer-zustaende-planen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Verstehe, warum Interaktionszustände nicht nur hübsch sein dürfen, sondern Tastatur, Maus und Touch sauber unterstützen müssen. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Hover ist ein Komfortzustand, Fokus ist Orientierung</h3>
  <p>Wer mit der Tastatur navigiert, braucht einen sichtbaren Fokus. Ein hübscher Hover-Effekt hilft dort nicht, weil er nur bei bestimmten Eingabegeräten entsteht.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/css-focus-hover-pointer.svg" alt="Vergleich von Maus-Hover, Tastaturfokus und Touch-Interaktion." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Hover ergänzt, ersetzt aber nicht.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>focus-visible zeigt Tastaturorientierung.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Touch hat oft keinen echten Hover.</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code>a:hover { text-decoration-thickness: 0.18em; }

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>outline: none; und wichtige Menüpunkte nur bei hover sichtbar.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Ein klarer focus-visible-Stil plus robuste sichtbare Inhalte.</span>
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
