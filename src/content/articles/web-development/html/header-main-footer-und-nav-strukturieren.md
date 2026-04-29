---
title: "Header, Main, Footer und Nav strukturieren"
description: "Verstehe, wie diese HTML-Bereiche unterschiedliche Rollen im Seitengerüst übernehmen und warum gute Gliederung mehr ist als optische Kästen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "header-main-footer-und-nav-strukturieren"]
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

Diese Seite betrachtet nur das **große Seitengerüst**. Die zentrale Frage lautet hier nicht: Wie sehen die Boxen aus? Sondern: **Welche Aufgabe hat jeder große Bereich der Seite?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine kleine Kursseite</h3>
  <p>Oben stehen Logo und Orientierung, darunter die Navigation, in der Mitte die aktuelle Lektion und unten ergänzende Hinweise. Sichtbar sind das nur Blöcke. Fachlich sind es unterschiedliche Landmarken der Seite.</p>
</div>

## Die Rollen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>header</strong>
    <span>Ein Kopfbereich mit Einstieg, Einleitung oder Orientierung.</span>
  </div>
  <div class="visual-item">
    <strong>nav</strong>
    <span>Ein Bereich, der gezielt der Navigation dient.</span>
  </div>
  <div class="visual-item">
    <strong>main</strong>
    <span>Der zentrale Hauptinhalt, wegen dem die Seite besucht wird.</span>
  </div>
  <div class="visual-item">
    <strong>footer</strong>
    <span>Ein Abschlussbereich mit ergänzenden Informationen.</span>
  </div>
</div>

## Mini-Demo: Landmarken statt bloße Kisten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Hier wird nicht nur gestylt, sondern das Seitengerüst lesbar gemacht</h3>
  <div style="padding:0.95rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
    <div style="display:grid; gap:0.7rem; padding:0.9rem; border-radius:14px; background:white; border:1px solid #e2e8f0;">
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#dbeafe;"><strong>header</strong> – Logo, Seitentitel, kurze Einordnung</div>
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#fde68a;"><strong>nav</strong> – Start · Themen · Aufgaben</div>
      <div style="padding:1rem 0.9rem; border-radius:12px; background:#dcfce7;"><strong>main</strong> – aktuelle Lektion, Beispiel, Erklärung</div>
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#e9d5ff;"><strong>footer</strong> – Kontakt, Lizenz, ergänzende Links</div>
    </div>
  </div>
</div>

## Main ist nicht alles

`main` meint nicht den gesamten sichtbaren Seitenbereich. Navigation und Abschluss gehören oft sichtbar dazu, sind aber **nicht** der Hauptinhalt.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Orientierung ist etwas anderes als Hauptinhalt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Navigation</strong>
      <span>Hilft beim Wechseln zwischen Inhalten.</span>
    </div>
    <div class="compare-item">
      <strong>Main</strong>
      <span>Ist der Inhalt, um den es auf dieser einzelnen Seite hauptsächlich geht.</span>
    </div>
  </div>
</div>

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

## Was diese Seite bewusst nicht doppelt erklärt

Diese Seite erklärt **nur** die großen Landmarken der Seite. Für die feinere Inhaltsstruktur innerhalb von `main` sind `article`, `section` und `aside` die bessere nächste Ebene.

## Eine ruhige Prüfstrategie

1. Wo steigt man in die Seite ein?
2. Wo wird nur orientiert oder verlinkt?
3. Wo liegt der eigentliche Hauptinhalt?
4. Welche Informationen gehören eher in den Abschluss?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Seitensemantik beschreibt hier vor allem <strong>Landmarken des Seitengerüsts</strong>.</p>
</div>
