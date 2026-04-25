---
title: "HTML – caption, scope und Tabellenkopf sauber nutzen"
description: "Lerne, Datentabellen so auszuzeichnen, dass Überschriften, Bedeutung und Datenbezug klar erkennbar bleiben."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "tabellen-barrierearm"
  - "caption-scope-und-tabellenkopf-sauber-nutzen"
learningGoals:
  - "Du erklärst den Unterschied zwischen Layouttabelle und Datentabelle."
  - "Du nutzt caption, th und scope für klare Tabellenstruktur."
  - "Du erkennst, warum Tabellenköpfe nicht nur optische Fettschrift sind."
practiceIdeas:
  - "Baue eine kleine Preistabelle mit caption und Spaltenköpfen."
  - "Prüfe, ob jede Datenzelle fachlich zu einer Überschrift gehört."
  - "Vergleiche eine CSS-Layouttabelle mit einer echten Datentabelle."
commonMistakes:
  - "Tabellen nur für Layout zu verwenden."
  - "Kopfzellen als normale td-Zellen mit Fettschrift zu schreiben."
  - "Eine Tabelle ohne erkennbare Beschreibung einzubauen."
keyTakeaways:
  - "caption beschreibt, worum es in der Tabelle geht."
  - "th und scope verbinden Datenzellen mit Überschriften."
  - "Semantische Tabellen sind für Orientierung wichtiger als reine Optik."
recognizeSignals:
  - "Es geht um Datenvergleich, Tabellenkopf, caption, th oder scope."
  - "Eine Aufgabe fragt, warum Screenreader Tabellenstruktur brauchen."
  - "Eine Tabelle sieht gut aus, ist aber semantisch flach."
selfCheckPoints:
  - "Hat die Tabelle eine verständliche caption?"
  - "Sind Kopfzellen als th ausgezeichnet?"
  - "Ist scope für einfache Zeilen- oder Spaltenbezüge passend?"
tags:
  - "web development"
  - "html"
  - "tabellen"
  - "accessibility"
  - "semantik"
level: mittel
draft: false
---
## Grundidee

Lerne, Datentabellen so auszuzeichnen, dass Überschriften, Bedeutung und Datenbezug klar erkennbar bleiben. Die Kernfrage lautet dabei nicht: „Wie bekomme ich es irgendwie hin?“, sondern: **Welche Information braucht die Person, und welche technische Struktur unterstützt diese Information?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Tabelle ist mehr als ein Raster</h3>
  <p>Wer Daten vergleicht, braucht Orientierung. Die Beschriftung sagt, worum es geht; Kopfzellen sagen, wie Werte zu lesen sind; scope macht einfache Bezüge eindeutig.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-html-tabellenstruktur.svg" alt="Schematische Tabelle mit Beschriftung, Spaltenkopf und Datenzellen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Kontext lesen</strong>
    <span>caption für die Tabellenabsicht.</span>
  </div>
  <div class="visual-item">
    <strong>Technik zuordnen</strong>
    <span>th für echte Überschriften.</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung prüfen</strong>
    <span>scope für den einfachen Zellbezug.</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine, aber entscheidende Struktur</h3>
  <pre><code><table>
  <caption>Vergleich der Tarife</caption>
  <thead>
    <tr><th scope="col">Tarif</th><th scope="col">Preis</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Basis</th><td>9 €</td></tr>
  </tbody>
</table></code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt nicht jedes Detail, sondern den didaktischen Kern: erst Bedeutung klären, dann Code schreiben.</p>
</div>

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Nur optisch fette Tabellenzellen ohne th und ohne Beschreibung.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>Eine kurze caption plus echte Kopfzellen mit scope.</span>
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

Diese Seite erklärt einfache Datentabellen. Komplexe Tabellen mit mehrstufigen Kopfbereichen brauchen weitere Muster wie headers und id. Dadurch bleibt die Seite klar: Sie erklärt eine konkrete Entscheidung und vermischt sie nicht mit allen Nachbarthemen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Weboberflächen entstehen selten durch einen einzelnen Trick. Sie entstehen, wenn Inhalt, Semantik, Gestaltung und Verhalten dieselbe Aussage stützen.</p>
</div>
