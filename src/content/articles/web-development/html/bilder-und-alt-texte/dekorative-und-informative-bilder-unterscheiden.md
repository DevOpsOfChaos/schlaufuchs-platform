---
title: "HTML – dekorative und informative Bilder unterscheiden"
description: "Verstehe, wann ein Bild einen Alternativtext braucht und wann ein leeres alt-Attribut die bessere Lösung ist."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "bilder-und-alt-texte"
  - "dekorative-und-informative-bilder-unterscheiden"
learningGoals:
  - "Du unterscheidest dekorative von informativen Bildern."
  - "Du formulierst Alternativtexte nach Funktion statt nach Dateiname."
  - "Du erkennst, warum alt=\"\" bewusst richtig sein kann."
practiceIdeas:
  - "Entscheide bei drei Bildern, ob sie Information tragen oder nur schmücken."
  - "Formuliere einen Alt-Text für ein Diagramm und einen für ein Icon."
  - "Prüfe, ob Bildunterschrift und Alt-Text dieselbe Information doppeln."
commonMistakes:
  - "Jedes Bild mit „Bild von ...“ zu beginnen."
  - "Dekorative Bilder mit langen Alt-Texten zu versehen."
  - "Informative Diagramme nur mit Dateinamen zu beschreiben."
keyTakeaways:
  - "Der Alt-Text beschreibt die Funktion des Bildes im Kontext."
  - "Dekorative Bilder dürfen alt=\"\" haben."
  - "Informative Bilder brauchen die entscheidende Aussage, nicht jedes Pixel."
recognizeSignals:
  - "Es geht um img, alt, Icons, Diagramme oder dekorative Bilder."
  - "Eine Aufgabe fragt, warum ein leeres alt nicht automatisch falsch ist."
  - "Bild und Text transportieren teilweise dieselbe Information."
selfCheckPoints:
  - "Ist das Bild für das Verständnis nötig?"
  - "Welche Information ginge ohne Bild verloren?"
  - "Doppelt der Alt-Text nur sichtbaren Text?"
tags:
  - "web development"
  - "html"
  - "bilder"
  - "alt text"
  - "accessibility"
level: einfach
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

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code><img src="linie.svg" alt="">
<img src="warnung.svg" alt="Warnung: Die Eingabe wird ohne Speichern verworfen."></code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt nicht jedes Detail, sondern den didaktischen Kern: erst Bedeutung klären, dann Code schreiben.</p>
</div>

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

Diese Seite behandelt einfache Bilder und Icons. Komplexe Diagramme brauchen oft zusätzlich erklärenden Text neben dem Bild. Dadurch bleibt die Seite klar: Sie erklärt eine konkrete Entscheidung und vermischt sie nicht mit allen Nachbarthemen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
