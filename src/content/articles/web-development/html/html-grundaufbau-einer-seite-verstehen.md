---
title: HTML-Grundaufbau einer Seite verstehen
description: Verstehe, welche Grundteile ein HTML-Dokument hat und warum head und body unterschiedliche Aufgaben erfüllen.
subject: web-development
section: HTML
topicPath:
  - html
  - html-grundaufbau-einer-seite-verstehen
learningGoals:
  - Du beschreibst den Grundaufbau eines HTML-Dokuments.
  - Du unterscheidest head und body sauber.
  - Du ordnest Doctype, html, meta und title grob ihrer Rolle zu.
practiceIdeas:
  - Lies eine kleine HTML-Datei von oben nach unten und erkläre die Aufgabe jeder Zeile.
  - Vergleiche sichtbaren Seiteninhalt mit Metadaten im head.
  - Prüfe, welche Angaben im Browserfenster sichtbar werden und welche nur für Verarbeitung wichtig sind.
commonMistakes:
  - Zu denken, der head sei ein sichtbarer Seitenbereich.
  - Den title mit einer sichtbaren Überschrift zu verwechseln.
  - Den Grundaufbau als bloße Pflichtsyntax statt als Strukturhilfe zu sehen.
keyTakeaways:
  - Ein HTML-Dokument hat einen klaren Grundrahmen.
  - Der head enthält Metainformationen, der body den sichtbaren Inhalt.
  - title und h1 sind nicht dasselbe.
recognizeSignals:
  - Es geht um <!DOCTYPE html>, html, head, meta, title oder body.
  - Du sollst eine HTML-Datei in ihrer Reihenfolge verstehen.
  - In Aufgaben geht es um sichtbare und nicht sichtbare Teile eines Dokuments.
selfCheckPoints:
  - Kann ich head und body klar trennen?
  - Kann ich title und sichtbare Überschrift unterscheiden?
  - Kann ich erklären, warum ein Grundaufbau mehr ist als nur Formalität?
tags:
  - html
  - grundaufbau
  - dokument
  - web-development
level: einfach
draft: false
---

## Grundidee

Eine HTML-Seite ist nicht einfach nur „irgendwo Text mit Tags“. Sie hat einen **Grundrahmen**, der dem Browser sagt, wie das Dokument aufgebaut ist und welche Teile sichtbar sind.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>Seitentitel</title>
  </head>
  <body>
    Inhalt der Seite
  </body>
</html>
```

## Von außen nach innen lesen

<div class="visual-grid">
  <div class="visual-item"><strong>DOCTYPE</strong><span>Signalisiert, dass das Dokument als modernes HTML gelesen werden soll.</span></div>
  <div class="visual-item"><strong>html</strong><span>Umschließt das gesamte Dokument.</span></div>
  <div class="visual-item"><strong>head</strong><span>Enthält Metainformationen und Einstellungen.</span></div>
  <div class="visual-item"><strong>body</strong><span>Enthält den sichtbaren Inhalt der Seite.</span></div>
</div>

## head und body nicht verwechseln

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Metadaten gegen sichtbaren Inhalt</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>head</strong><span>Hier stehen Informationen über das Dokument, z. B. Zeichensatz oder Seitentitel.</span></div>
    <div class="compare-item"><strong>body</strong><span>Hier steht der Inhalt, den Besucher auf der Seite sehen und benutzen.</span></div>
  </div>
</div>

## title ist nicht h1

Viele Anfänger verwechseln den Seitentitel im <code>&lt;title&gt;</code>-Element mit einer sichtbaren Überschrift im Dokument.

- <code>title</code> gehört in den <code>head</code>.
- <code>h1</code> gehört in den sichtbaren Inhalt im <code>body</code>.

## Mini-Demo: Browser-Tab gegen Seiteninhalt

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Wo landet welcher Inhalt?</h3>
  <div style="display:grid; gap:0.65rem;">
    <div style="padding:0.75rem 0.9rem; border-radius:14px; background:#e2e8f0; border:1px solid #cbd5e1;"><strong>Browser-Tab:</strong> Seitentitel</div>
    <div style="padding:0.9rem; border-radius:14px; background:#f8fafc; border:1px dashed #94a3b8;">
      <h3 style="margin:0 0 0.35rem;">Sichtbare Überschrift</h3>
      <p style="margin:0;">Das ist Inhalt aus dem body, nicht aus dem title.</p>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Dokumentrahmen suchen</strong><span>Wo beginnt und endet das HTML-Dokument?</span></div>
  <div class="step-item"><strong>2. Metadaten suchen</strong><span>Welche Angaben beschreiben das Dokument statt sichtbaren Inhalt zu bilden?</span></div>
  <div class="step-item"><strong>3. Sichtbaren Bereich lesen</strong><span>Was gehört wirklich in den body?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Der <code>head</code> hilft dem Browser beim Verstehen der Seite. Der <code>body</code> ist die Seite, die der Nutzer tatsächlich sieht.</p>
</div>
