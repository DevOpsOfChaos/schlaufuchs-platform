---
title: HTML-Semantik – Grundidee verstehen
description: Verstehe, warum HTML nicht nur Inhalt umschließt, sondern ihm auch eine klare Rolle gibt.
subject: web-development
section: HTML
topicPath:
  - html
  - html-semantik-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee semantischer HTML-Elemente.
  - Du unterscheidest neutrale Container und bedeutungstragende Strukturelemente.
  - Du begründest HTML-Entscheidungen eher mit Rolle als mit Aussehen.
practiceIdeas:
  - Lies eine kleine Seitenstruktur und benenne die Rollen von Kopf, Navigation, Hauptinhalt und Randnotiz.
  - Vergleiche eine Lösung mit vielen div-Containern mit einer semantischeren Variante.
  - Begründe für einzelne Bereiche, warum article, section oder aside näherliegt.
commonMistakes:
  - HTML-Tags nur nach Optik statt nach Bedeutung auszuwählen.
  - main und article gleichzusetzen.
  - Zu glauben, Semantik würde das Layout automatisch erzeugen.
keyTakeaways:
  - Semantische Elemente beschreiben die Rolle eines Bereichs.
  - Semantik und Layout sind zwei verschiedene Entscheidungen.
  - Gute Semantik macht Seiten verständlicher und wartbarer.
recognizeSignals:
  - Es geht um Seitenstruktur, Rollen von Bereichen oder verständlicheres HTML.
  - Du sollst entscheiden, ob etwas Navigation, Hauptinhalt, Abschnitt oder Ergänzung ist.
  - In Beispielen tauchen header, main, nav, article, section oder aside auf.
selfCheckPoints:
  - Kann ich Rolle und Aussehen klar trennen?
  - Kann ich neutrale und semantische Container vergleichen?
  - Kann ich erklären, warum eine Struktur auch ohne CSS sinnvoll sein sollte?
tags:
  - html
  - semantik
  - struktur
  - web-development
level: einfach
draft: false
---

## Grundidee

HTML beschreibt nicht nur, **dass** es irgendwo Inhalt gibt, sondern auch, **welche Rolle** dieser Inhalt auf der Seite hat. Genau darum geht es bei Semantik.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleiche Optik, aber andere Aussage</h3>
  <p>Zwei Seiten können gleich aussehen. Auf der ersten wurde alles mit <code>&lt;div&gt;</code> gebaut, auf der zweiten mit <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> und <code>&lt;aside&gt;</code>. Für das Design kann beides gleich wirken. Für Struktur, Lesbarkeit und Wartung ist die zweite Variante oft klarer.</p>
</div>

## Semantik fragt nach der Rolle

Eine ruhige Leitfrage ist: **Was ist dieser Bereich auf der Seite?**

Nicht: Wie breit ist er? Welche Farbe hat er? Wie sieht er aus?  
Sondern: Ist es Navigation, Hauptinhalt, ein eigenständiger Beitrag oder nur Ergänzung?

## Typische semantische Elemente

<div class="visual-grid">
  <div class="visual-item"><strong>header</strong><span>Kopfbereich einer Seite oder eines Abschnitts.</span></div>
  <div class="visual-item"><strong>nav</strong><span>Ein Bereich mit Navigationslinks.</span></div>
  <div class="visual-item"><strong>main</strong><span>Der zentrale Hauptinhalt der Seite.</span></div>
  <div class="visual-item"><strong>article</strong><span>Eigenständiger Inhalt, der auch für sich stehen kann.</span></div>
  <div class="visual-item"><strong>section</strong><span>Ein inhaltlicher Abschnitt innerhalb eines größeren Zusammenhangs.</span></div>
  <div class="visual-item"><strong>aside</strong><span>Ergänzende Randinformation, die nicht den Kern trägt.</span></div>
</div>

## div ist nicht falsch, aber neutral

<div class="compare-card">
  <p class="card-kicker">Wichtiger Vergleich</p>
  <h3>Neutraler Container gegen semantisches Element</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>div</strong><span>Ein neutraler Container. Er gruppiert Inhalt, sagt aber nichts über dessen Bedeutung.</span></div>
    <div class="compare-item"><strong>semantische Elemente</strong><span>Sie gruppieren ebenfalls, beschreiben aber zusätzlich die Rolle des Inhalts.</span></div>
  </div>
</div>

## Mini-Demo: gleiche Seite, unterschiedliche Aussagekraft

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Beide Versionen können gleich aussehen</h3>
  <div style="display:grid; gap:0.8rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Neutral</strong></p>
      <code>&lt;div class="kopf"&gt;...&lt;/div&gt;</code><br />
      <code>&lt;div class="menu"&gt;...&lt;/div&gt;</code><br />
      <code>&lt;div class="inhalt"&gt;...&lt;/div&gt;</code>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Semantisch</strong></p>
      <code>&lt;header&gt;...&lt;/header&gt;</code><br />
      <code>&lt;nav&gt;...&lt;/nav&gt;</code><br />
      <code>&lt;main&gt;...&lt;/main&gt;</code>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Rolle suchen</strong><span>Was ist dieser Bereich fachlich auf der Seite?</span></div>
  <div class="step-item"><strong>2. Eigenständig oder Teil?</strong><span>Ist der Inhalt für sich verständlich oder nur Teil eines größeren Blocks?</span></div>
  <div class="step-item"><strong>3. Erst danach CSS</strong><span>Layout und Aussehen kommen erst nach der Strukturentscheidung.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute HTML-Semantik macht eine Seite nicht automatisch schöner, aber oft deutlich verständlicher.</p>
</div>
