---
title: HTML-Semantik – Grundidee verstehen
description: Verstehe, warum HTML nicht nur Inhalt umschließt, sondern ihm eine klare Rolle im Dokument gibt.
subject: web-development
section: HTML
topicPath:
  - html
  - html-semantik-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee semantischer HTML-Elemente.
  - Du trennst neutrale Container und bedeutungstragende Strukturelemente sauber.
  - Du ordnest Semantik zuerst über Dokumentrolle und erst danach über Layout ein.
practiceIdeas:
  - Lies eine Seitenstruktur zuerst ohne CSS und beschreibe die Rollen der Bereiche.
  - Vergleiche eine neutrale div-Lösung mit einer semantischen HTML-Lösung.
  - Prüfe bei einer Strukturfrage zuerst, ob es um Seitengerüst oder um Inhaltsstruktur geht.
commonMistakes:
  - HTML-Tags nur nach Optik statt nach Bedeutung auszuwählen.
  - main und article gleichzusetzen.
  - Zu glauben, Semantik würde das Layout automatisch erzeugen.
keyTakeaways:
  - Semantische Elemente beschreiben die Rolle eines Bereichs im Dokument.
  - Semantik und Layout sind zwei verschiedene Entscheidungen.
  - Gute Semantik beginnt mit der Frage nach Aufgabe und Kontext eines Bereichs.
recognizeSignals:
  - Es geht um Seitenstruktur, Dokumentrollen oder verständlicheres HTML.
  - Du sollst entscheiden, ob etwas zum Seitengerüst oder zur Inhaltsstruktur gehört.
  - In Beispielen tauchen header, nav, main, article, section oder aside auf.
selfCheckPoints:
  - Kann ich Rolle und Aussehen klar trennen?
  - Kann ich neutrale und semantische Container vergleichen?
  - Kann ich erklären, warum eine Struktur auch ohne CSS sinnvoll lesbar sein sollte?
tags:
  - html
  - semantik
  - struktur
  - web-development
level: einfach
draft: false
---

## Grundidee

HTML beschreibt nicht nur, **dass** es irgendwo Inhalt gibt, sondern auch, **welche Rolle** dieser Inhalt im Dokument hat. Genau darum geht es bei Semantik.

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Zwei Ebenen der Struktur</h3>
  <p>Bei Semantik hilft eine ruhige Unterscheidung: Manche Elemente beschreiben das <strong>Seitengerüst</strong>, andere die <strong>Inhaltsstruktur</strong>. Erst diese Trennung verhindert, dass verschiedene Seitenrollen versehentlich durcheinandergeraten.</p>
</div>

## Die zwei wichtigsten Denkebenen

<div class="compare-card">
  <p class="card-kicker">Grundordnung</p>
  <h3>Seitengerüst ist nicht dasselbe wie Inhaltsstruktur</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Seitengerüst</strong>
      <span>Elemente wie <code>header</code>, <code>nav</code>, <code>main</code> und <code>footer</code> helfen dabei, die großen Rollen einer Seite zu lesen.</span>
    </div>
    <div class="compare-item">
      <strong>Inhaltsstruktur</strong>
      <span>Elemente wie <code>article</code>, <code>section</code> und <code>aside</code> helfen dabei, den Inhalt innerhalb dieses Gerüsts fachlich zu gliedern.</span>
    </div>
  </div>
</div>

## Neutrale und semantische Container

<div class="visual-grid">
  <div class="visual-item">
    <strong>div</strong>
    <span>Ein neutraler Container. Er gruppiert Inhalt, sagt aber noch nichts über dessen Rolle.</span>
  </div>
  <div class="visual-item">
    <strong>semantische Elemente</strong>
    <span>Sie gruppieren ebenfalls, beschreiben aber zusätzlich die Aufgabe des Inhalts im Dokument.</span>
  </div>
</div>

## Mini-Demo: gleiche Optik, klarere Aussage

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Beide Varianten können ähnlich aussehen, aber nur eine ist sofort lesbarer</h3>
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

## Ruhige Entscheidungslogik

<div class="step-grid">
  <div class="step-item"><strong>1. Ebene klären</strong><span>Geht es um das große Seitengerüst oder um einen Teil innerhalb des Inhalts?</span></div>
  <div class="step-item"><strong>2. Rolle benennen</strong><span>Ist der Bereich Navigation, Hauptinhalt, eigenständiger Beitrag, Abschnitt oder Ergänzung?</span></div>
  <div class="step-item"><strong>3. Erst danach CSS</strong><span>Layout, Farben und Abstände kommen erst nach der Strukturentscheidung.</span></div>
</div>

## Was diese Seite bewusst nicht doppelt erklärt

Diese Grundseite klärt nur die **große Denkordnung**. Für die genauere Unterscheidung einzelner Rollen gibt es eigene Seiten:

- `header`, `main`, `footer` und `nav` für das Seitengerüst
- `article`, `section` und `aside` für die Inhaltsstruktur

<div class="note-panel">
  <p><strong>Merke:</strong> Gute HTML-Semantik wird klarer, sobald du zuerst zwischen <strong>Seitengerüst</strong> und <strong>Inhaltsstruktur</strong> trennst.</p>
</div>
