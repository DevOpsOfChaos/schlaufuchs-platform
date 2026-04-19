---
title: Textformatierung und Strukturierung in HTML verstehen
description: Verstehe, welche HTML-Elemente Inhalt strukturieren und warum Bedeutung wichtiger ist als reine Optik.
subject: web-development
section: HTML
topicPath:
  - html
  - textformatierung-und-strukturierung-in-html-verstehen
learningGoals:
  - Du unterscheidest typische Text- und Struktur-Elemente in HTML.
  - Du erklärst, warum p, h1-h6, div und span unterschiedliche Rollen haben.
  - Du trennst inhaltliche Struktur von späterer CSS-Gestaltung.
practiceIdeas:
  - Lies einen kleinen HTML-Ausschnitt und benenne, welche Elemente Abschnitte, Überschriften oder Inline-Hervorhebungen bilden.
  - Vergleiche span und div in einem Beispiel.
  - Begründe, wann pre, code oder kbd näherliegen als normale Absätze.
commonMistakes:
  - Jede Hervorhebung als reines Designproblem zu sehen.
  - div und span nur nach Größe statt nach Block- und Inline-Verhalten zu unterscheiden.
  - h-Tags nur wegen großer Schrift zu wählen.
keyTakeaways:
  - HTML-Struktur beschreibt Inhalt, nicht Design.
  - div ist Block, span ist Inline.
  - Überschriften bilden eine inhaltliche Hierarchie.
recognizeSignals:
  - Es geht um p, div, span, h1-h6, code, pre, br oder hr.
  - Du sollst Textstellen sinnvoll auszeichnen.
  - In Aufgaben wird zwischen Block und Inline oder Struktur und Gestaltung unterschieden.
selfCheckPoints:
  - Kann ich div und span sauber unterscheiden?
  - Kann ich Überschriften nach Struktur statt Optik wählen?
  - Kann ich erklären, wann ein Element eher Inhalt als Stil beschreibt?
tags:
  - html
  - struktur
  - text
  - web-development
level: einfach
draft: false
---

## Grundidee

HTML-Elemente für Text und Struktur sagen nicht nur, **wie** etwas aussieht, sondern vor allem, **welche Rolle** ein Inhaltsteil hat.

## Typische Strukturelemente

<div class="visual-grid">
  <div class="visual-item"><strong>p</strong><span>Ein normaler Textabsatz.</span></div>
  <div class="visual-item"><strong>h1 bis h6</strong><span>Überschriften mit inhaltlicher Hierarchie.</span></div>
  <div class="visual-item"><strong>div</strong><span>Ein neutraler Block-Container.</span></div>
  <div class="visual-item"><strong>span</strong><span>Ein neutraler Inline-Container innerhalb von Text.</span></div>
  <div class="visual-item"><strong>code / kbd / pre</strong><span>Code, Tastatureingaben oder vorformatierte Inhalte.</span></div>
</div>

## Block und Inline ruhig trennen

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>div gegen span</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>div</strong><span>Bildet einen Block. Gut zum Gruppieren größerer Bereiche.</span></div>
    <div class="compare-item"><strong>span</strong><span>Bleibt inline im Textfluss. Gut für kleine Textstellen.</span></div>
  </div>
</div>

## Überschriften nicht nach Größe wählen

Eine <code>h1</code> ist nicht einfach „die größte Schrift“, sondern die wichtigste Überschrift auf der Seite. Danach folgen <code>h2</code>, <code>h3</code> und so weiter.

## Mini-Demo: gleicher Text, andere Auszeichnung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was ist ein Bereich, was nur eine Textstelle?</h3>
  <div style="display:grid; gap:0.75rem;">
    <div style="padding:0.8rem; border-radius:14px; border:1px dashed #94a3b8; background:#f8fafc;">
      <div style="padding:0.55rem; background:#dbeafe; border-radius:10px; margin-bottom:0.45rem;"><strong>div:</strong> ganzer Infoblock</div>
      <p style="margin:0;">Hier ist <span style="background:#fef3c7; padding:0 0.25rem; border-radius:6px;"><strong>span</strong></span> nur eine kleine Stelle im laufenden Text.</p>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Bereich oder Textstelle?</strong><span>Geht es um einen ganzen Block oder nur um einen Teil im Satz?</span></div>
  <div class="step-item"><strong>2. Struktur oder Stil?</strong><span>Beschreibt die Entscheidung eine Rolle oder nur eine gewünschte Optik?</span></div>
  <div class="step-item"><strong>3. Hierarchie prüfen</strong><span>Passt die Überschriftenstufe wirklich zur Gliederung?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> HTML-Struktur sollte auch dann noch sinnvoll bleiben, wenn du das ganze CSS entfernst.</p>
</div>
