---
title: "HTML – srcset, sizes und responsive Bilder verstehen"
description: "Lerne, warum responsive Bilder nicht nur mehrere Dateien sind, sondern eine Absprache zwischen Inhalt, Layout und Browserauswahl."
subject: "web-development"
section: "HTML"
topicPath: ["html", "bilder-und-alt-texte", "srcset-sizes-und-responsive-bilder-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Lerne, warum responsive Bilder nicht nur mehrere Dateien sind, sondern eine Absprache zwischen Inhalt, Layout und Browserauswahl. Wichtig ist dabei nicht nur, ob der Code technisch läuft. Entscheidend ist, ob Bedeutung, Bedienung und Gestaltung dieselbe Aussage stützen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst die Entscheidung, dann der Code</h3>
  <p>Viele Webfehler entstehen, weil eine Lösung optisch plausibel wirkt, aber fachlich unklar bleibt. Diese Seite trainiert deshalb eine ruhige Lesart: Was soll die Person verstehen, was soll der Browser wissen, und was muss der Code dafür eindeutig ausdrücken?</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Der Prüfpfad in einem Bild</h3>
  <img class="content-illustration" src="/schlaufuchs-platform/illustrations/web-srcset-sizes-flow.svg" alt="Schematische Orientierung zur Entscheidung: Bedeutung klären, technische Struktur wählen und Nutzbarkeit prüfen." style="width:100%; max-width:52rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
</div>

## Worum es fachlich geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Bedeutung</strong>
    <span>Welche Information oder Handlung soll eindeutig werden?</span>
  </div>
  <div class="visual-item">
    <strong>Struktur</strong>
    <span>Welches HTML- oder CSS-Mittel beschreibt diese Bedeutung sauber?</span>
  </div>
  <div class="visual-item">
    <strong>Nutzerwirkung</strong>
    <span>Bleibt die Lösung verständlich, bedienbar und wartbar?</span>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Codeblick</p>
  <h3>Eine kleine Struktur, die viel erklärt</h3>
  <pre><code>&lt;img
  src=&quot;karte-800.jpg&quot;
  srcset=&quot;karte-400.jpg 400w, karte-800.jpg 800w, karte-1200.jpg 1200w&quot;
  sizes=&quot;(max-width: 700px) 100vw, 700px&quot;
  alt=&quot;Lageplan mit Eingang, Aufzug und Empfang&quot;&gt;</code></pre>
  <p>Die Demo ist bewusst klein. Sie zeigt den Kern der Entscheidung und vermeidet Nebenthemen, die auf eigene Seiten gehören.</p>
</div>

## Schwache und bessere Lesart

<div class="compare-card">
  <p class="card-kicker">Qualitätsvergleich</p>
  <h3>Vom schnellen Hack zur belastbaren Lösung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Ein sehr großes Bild wird immer geladen, obwohl es in der Karte nur klein erscheint.</span>
    </div>
    <div class="compare-item">
      <strong>Besser</strong>
      <span>srcset bietet sinnvolle Kandidaten, sizes beschreibt die erwartete Darstellungsbreite.</span>
    </div>
  </div>
</div>

## Prüfraster für Reviews

1. Welche sichtbare Aussage macht die Oberfläche?
2. Welche semantische oder layoutbezogene Entscheidung trägt diese Aussage?
3. Was passiert bei Tastaturbedienung, kleiner Breite oder Assistenztechnik?
4. Ist der Code auch für die nächste Person im Projekt verständlich?
5. Gibt es einen einfacheren Weg mit weniger Sonderregeln?

## Abgrenzung

Diese Seite erklärt eine konkrete Webentscheidung. Sie ersetzt keine vollständige Designsystem-Dokumentation und keine Sicherheitsprüfung. Dadurch bleibt der Lernfokus klar: erst fachlich sauber entscheiden, dann die passende Technik einsetzen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Webentwicklung verbindet sichtbare Sprache, Semantik, Gestaltung und Verhalten. Wenn eine dieser Ebenen widerspricht, fühlt sich die Oberfläche schnell unsicher an.</p>
</div>
