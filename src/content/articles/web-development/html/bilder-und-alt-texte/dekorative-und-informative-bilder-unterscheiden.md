---
title: "HTML – dekorative und informative Bilder unterscheiden"
description: "Verstehe, wann ein Bild einen Alternativtext braucht und wann ein leeres alt-Attribut die bessere Lösung ist."
subject: "web-development"
section: "HTML"
topicPath: ["html", "bilder-und-alt-texte", "dekorative-und-informative-bilder-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Verstehe, wann ein Bild einen Alternativtext braucht und wann ein leeres alt-Attribut die bessere Lösung ist. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Alt-Text beschreibt nicht das Bild, sondern seine Aufgabe</h3>
  <p>Dasselbe Symbol kann je nach Kontext dekorativ oder informativ sein. Entscheidend ist nicht die Datei, sondern welche Information die Seite ohne das Bild verlieren würde.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-alttext-entscheidung.svg" alt="Entscheidungsbaum zur Frage, ob ein Bild informativ oder dekorativ ist." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>Trägt das Bild neue Information?</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>Ist die Information schon im Text vorhanden?</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>Welche Aufgabe hat das Bild genau hier?</span>
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
      <span>alt="bild123.png" oder alt="schönes Icon".</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>alt="Warnung: Die Eingabe wird ohne Speichern verworfen." oder bewusst alt="".</span>
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
