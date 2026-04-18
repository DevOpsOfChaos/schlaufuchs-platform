---
title: Figure und Figcaption verstehen
description: Verstehe, wie Bilder, Diagramme oder Codebeispiele mit figure und figcaption als zusammengehörige Einheit lesbarer werden.
subject: web-development
section: HTML
topicPath:
  - html
  - bilder-und-alt-texte
  - figure-und-figcaption-verstehen
learningGoals:
  - Du erklärst die Rolle von figure und figcaption.
  - Du beschreibst, warum Medium und erläuternder Kontext oft zusammengehören.
  - Du strukturierst Bild- oder Beispielinhalte ruhiger als Einheit statt als lose Nachbarschaft.
practiceIdeas:
  - Suche auf einer Seite Bilder oder Diagramme, die eine erklärende Beschriftung brauchen.
  - Prüfe, ob ein Codebeispiel mit kurzer Einordnung als zusammengehörige Figur gelesen werden kann.
  - Vergleiche eine lose Bildunterschrift mit einer klaren strukturellen Einheit.
commonMistakes:
  - Beschriftungen nur optisch unter etwas zu setzen.
  - figure auf Bilder zu beschränken, obwohl auch andere eingebettete Inhalte sinnvoll sein können.
  - Kontexttext und Medium als zwei unverbundene Blöcke zu behandeln.
keyTakeaways:
  - figure bündelt ein Medium oder Beispiel als eigenständige Einheit.
  - figcaption liefert eine zugehörige Beschriftung oder Einordnung.
  - Gute Struktur hilft, Inhalt und Erklärung gemeinsam zu lesen.
recognizeSignals:
  - Es geht um Bilder, Diagramme, Karten, Codebeispiele oder andere eingebettete Medien.
  - Du sollst erklären, warum Beschriftung und Inhalt zusammengehören.
  - In Beispielen ist die Beziehung zwischen Medium und Erklärung wichtiger als reine Optik.
selfCheckPoints:
  - Kann ich erklären, wann figure sinnvoll ist?
  - Kann ich beschreiben, was figcaption ergänzt?
  - Kann ich lose Nachbarschaft und echte inhaltliche Einheit unterscheiden?
tags:
  - html
  - bilder
  - figure
  - figcaption
level: einfach
draft: false
---

## Grundidee

Auf vielen Seiten stehen Bilder, Diagramme oder kleine Demos nicht für sich allein. Sie brauchen oft eine knappe Erklärung, einen Titel oder eine Einordnung. Genau dafür sind <code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> nützlich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Diagramm mit kurzer Deutung</h3>
  <p>Ein Diagramm allein zeigt Daten, aber noch nicht unbedingt, warum es an dieser Stelle steht. Eine zugehörige Beschriftung macht klar, wie der Inhalt gelesen werden soll. Zusammen entsteht eine ruhige Einheit statt zweier lose nebeneinanderstehender Teile.</p>
</div>

## Was die beiden Elemente leisten

<div class="visual-grid">
  <div class="visual-item">
    <strong>figure</strong>
    <span>Bündelt ein Medium oder Beispiel als inhaltliche Einheit.</span>
  </div>
  <div class="visual-item">
    <strong>figcaption</strong>
    <span>Liefert eine zugehörige Beschriftung, Einordnung oder kurze Erklärung.</span>
  </div>
</div>

## Mini-Demo: lose Nachbarschaft vs. zusammen gedachte Einheit

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum Medium und Einordnung zusammen gelesen werden sollten</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur nebeneinander gedacht</strong></p>
      <div style="height:8rem; border-radius:12px; background:linear-gradient(135deg,#bfdbfe,#fde68a); margin-bottom:0.6rem;"></div>
      <p style="margin:0;">Diese Beschreibung steht darunter, wirkt aber eher wie ein allgemeiner Absatz.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Als Einheit gedacht</strong></p>
      <div style="padding:0.75rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">
        <div style="height:7rem; border-radius:10px; background:linear-gradient(135deg,#bfdbfe,#fde68a);"></div>
        <p style="margin:0.6rem 0 0; color:#475569;"><strong>Abbildung:</strong> Beispielhafte Kartenfläche mit ruhigem Farbverlauf als Platzhalter für ein Diagramm oder Bild.</p>
      </div>
    </div>
  </div>
</div>

## Figure ist nicht nur für Fotos interessant

Auch Diagramme, Karten, Codebeispiele oder kleine eingebettete Visualisierungen können sinnvoll als <code>figure</code> gedacht werden, wenn sie als eigener inhaltlicher Baustein mit kurzer Beschriftung auftreten.

```html
<figure>
  <img src="diagramm.png" alt="..." />
  <figcaption>Umsatzentwicklung im ersten Halbjahr</figcaption>
</figure>
```

## Eine ruhige Prüfstrategie

1. Gibt es hier ein Medium oder Beispiel mit eigenem Fokus?
2. Braucht es eine kurze Einordnung oder Beschriftung?
3. Gehören Medium und Erklärung eng zusammen?
4. Wenn ja: Ist <code>figure</code> mit <code>figcaption</code> die ruhigere Struktur?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>figure</code> und <code>figcaption</code> helfen dann, wenn Inhalt und Erklärung als <em>gemeinsame Einheit</em> gelesen werden sollen.</p>
</div>
