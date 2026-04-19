---
title: Header, Main, Footer und Nav strukturieren
description: Verstehe, wie diese HTML-Bereiche unterschiedliche Rollen auf einer Seite übernehmen und warum gute Seitengliederung mehr ist als nur optische Kästen.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
  - header-main-footer-und-nav-strukturieren
learningGoals:
  - Du unterscheidest header, main, footer und nav nach ihrer Rolle.
  - Du beschreibst eine Seite eher über Dokumentbereiche als über bloße Boxen.
  - Du begründest, warum Navigation nicht einfach nur eine Linkreihe ist.
practiceIdeas:
  - Zerlege eine kleine Seite in Kopfbereich, Hauptinhalt, Navigation und Abschlussbereich.
  - Prüfe bei einem Entwurf, wo der eigentliche Hauptinhalt liegt.
  - Erkläre, warum ein Navigationsblock eine andere Aufgabe hat als ein normaler Inhaltsabschnitt.
commonMistakes:
  - main mit dem ganzen sichtbaren Bereich gleichzusetzen.
  - nav nur als optische Menüleiste zu lesen.
  - header und footer nur über Position statt über Funktion zu unterscheiden.
keyTakeaways:
  - Header, main, footer und nav markieren unterschiedliche Rollen auf einer Seite.
  - Gute Struktur hilft beim Verstehen, Navigieren und Weiterverarbeiten.
  - "Semantik bedeutet hier vor allem: Der Bereich bekommt eine nachvollziehbare Aufgabe."
recognizeSignals:
  - Es geht um Seitengerüst, Orientierung oder strukturelle HTML-Bereiche.
  - Du sollst erklären, wo der Hauptinhalt beginnt und wo Navigation liegt.
  - In Beispielen zählt die Dokumentrolle stärker als das Layout.
selfCheckPoints:
  - Kann ich den Hauptinhalt einer Seite klar benennen?
  - Kann ich erklären, warum ein Navigationsblock als nav sinnvoll ist?
  - Kann ich Kopfbereich und Abschlussbereich funktional unterscheiden?
tags:
  - html
  - semantik
  - nav
  - main
  - struktur
level: einfach
draft: false
---

## Grundidee

Viele Seiten bestehen sichtbar aus mehreren Kästen. Fachlich spannender ist aber: **Welche Aufgabe hat jeder dieser Bereiche?** Genau hier helfen `header`, `main`, `footer` und `nav`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine kleine Kursseite</h3>
  <p>Oben stehen Logo und Hauptnavigation, in der Mitte die aktuelle Lektion, unten ergänzende Hinweise und Kontaktlinks. Sichtbar sind das nur Blöcke – semantisch sind es aber unterschiedliche Rollen, die beim Lesen und Navigieren helfen.</p>
</div>

## Die Rollen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>header</strong>
    <span>Ein Kopfbereich mit Einstieg, Orientierung oder Einleitung.</span>
  </div>
  <div class="visual-item">
    <strong>nav</strong>
    <span>Ein Bereich, der gezielt der Navigation dient.</span>
  </div>
  <div class="visual-item">
    <strong>main</strong>
    <span>Der zentrale Hauptinhalt der Seite.</span>
  </div>
  <div class="visual-item">
    <strong>footer</strong>
    <span>Ein Abschlussbereich mit ergänzenden Informationen.</span>
  </div>
</div>

## Mini-Demo: gleiche Seite, klarere Rollen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Hier wird nicht nur gestylt, sondern der Seitenbau lesbar gemacht</h3>
  <div style="padding:0.95rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
    <div style="display:grid; gap:0.7rem; padding:0.9rem; border-radius:14px; background:white; border:1px solid #e2e8f0;">
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#dbeafe;"><strong>header</strong> – Logo, Seitentitel, kurze Einordnung</div>
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#fde68a;"><strong>nav</strong> – Start · Themen · Aufgaben</div>
      <div style="padding:1rem 0.9rem; border-radius:12px; background:#dcfce7;"><strong>main</strong> – aktuelle Lektion, Beispiel, Erklärung</div>
      <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#e9d5ff;"><strong>footer</strong> – Kontakt, Lizenz, ergänzende Links</div>
    </div>
    <p style="margin:0.65rem 0 0;">Die Farben sind hier nur Hilfe. Der eigentliche Punkt ist die unterschiedliche <strong>Dokumentrolle</strong> der Bereiche.</p>
  </div>
</div>

## Main ist nicht einfach „alles in der Mitte“

`main` meint nicht irgendeinen großen Container, sondern den **eigentlichen Hauptinhalt**, wegen dem die Seite besucht wird.

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
      <span>Ist der Inhalt, um den es auf dieser Seite hauptsächlich geht.</span>
    </div>
  </div>
</div>

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

## Rollen zuerst, Feinschliff später

Gerade bei Seitenstrukturen hilft es, nicht mit Farben oder Breiten zu starten, sondern mit der Frage: Welcher Bereich eröffnet, navigiert, trägt den Hauptinhalt oder schließt die Seite ab?

## Eine ruhige Prüfstrategie

1. Wo steigt man in die Seite ein?
2. Wo wird nur orientiert oder verlinkt?
3. Wo liegt der eigentliche Hauptinhalt?
4. Welche Informationen gehören eher in den Abschluss?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Seitensemantik beschreibt nicht primär Farben oder Boxen, sondern <strong>Rollen im Dokument</strong>.</p>
</div>
