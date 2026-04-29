---
title: "CSS – reduced motion und Animationen zugänglich planen"
description: "Lerne, Animationen so einzusetzen, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht belasten."
subject: "web-development"
section: "CSS"
topicPath: ["css", "responsive-layouts", "reduced-motion-und-animationen-zugaenglich-planen"]
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

Lerne, Animationen so einzusetzen, dass sie Orientierung geben, aber Menschen mit Bewegungsempfindlichkeit nicht belasten. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Animation soll helfen, nicht überfordern</h3>
  <p>Bewegung kann Orientierung geben, aber sie kann auch stören. Eine gute Oberfläche respektiert die Präferenz für weniger Bewegung und bleibt trotzdem verständlich.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/css-reduced-motion.svg" alt="Zwei Pfade für normale Animation und reduzierte Bewegung." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Bewegung begründen.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>Reduzierte Alternative anbieten.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Inhalt nicht von Animation abhängig machen.</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    scroll-behavior: auto;
  }
}</code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt nicht jedes Detail, sondern den didaktischen Kern: erst Bedeutung klären, dann Code schreiben.</p>
</div>

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Ein Dialog fliegt stark herein und nur diese Bewegung zeigt, was passiert ist.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Der Dialog erscheint ruhig, Fokus und Überschrift machen den Zustandswechsel klar.</span>
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

Diese Seite behandelt CSS-seitige Reduktion. Produktentscheidungen zu Motion Design und komplexe JavaScript-Animationen müssen zusätzlich geprüft werden. Dadurch bleibt die Seite klar: Sie erklärt eine konkrete Entscheidung und vermischt sie nicht mit allen Nachbarthemen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
