---
title: "CSS – Container Query und Media Query unterscheiden"
description: "Verstehe, ob ein Layout auf die Größe des Viewports oder auf die Größe seines Containers reagieren soll."
subject: "web-development"
section: "CSS"
topicPath: ["css", "responsive-layouts", "container-query-und-media-query-unterscheiden"]
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

Verstehe, ob ein Layout auf die Größe des Viewports oder auf die Größe seines Containers reagieren soll. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nicht immer ist das Browserfenster die richtige Frage</h3>
  <p>Eine Karte kann im großen Viewport trotzdem schmal sein, wenn sie in einer Sidebar steckt. Dann sollte sie auf ihren Container reagieren, nicht nur auf die Fensterbreite.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/css-responsive-container-query.svg" alt="Eine Kartenkomponente reagiert unterschiedlich auf Sidebar- und Hauptbereichsbreite." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Seitenlayout: Media Query.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>Komponentenlayout: Container Query.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Vorher entscheiden, welche Größe wirklich zählt.</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code>.card-list { container-type: inline-size; }

@container (min-width: 32rem) {
  .card { grid-template-columns: 12rem 1fr; }
}

@media (min-width: 60rem) {
  .page { grid-template-columns: 18rem 1fr; }
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
      <span>Eine Karte bricht nur wegen Viewportbreite um, obwohl ihr Container schmal bleibt.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Die Karte reagiert auf den Platz, den sie tatsächlich bekommt.</span>
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

Diese Seite erklärt die Entscheidung. Browser-Support-Strategien und tiefere Container-Query-Syntax gehören in eine eigene Referenz. Dadurch bleibt die Seite klar: Sie erklärt eine konkrete Entscheidung und vermischt sie nicht mit allen Nachbarthemen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
