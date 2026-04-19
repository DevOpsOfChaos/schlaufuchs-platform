---
title: Article, Section und Aside unterscheiden
description: Verstehe, wie diese HTML-Elemente unterschiedliche Rollen innerhalb des Inhalts markieren und warum ähnliche Boxen nicht automatisch dieselbe Bedeutung haben.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
  - article-section-und-aside-unterscheiden
learningGoals:
  - Du unterscheidest article, section und aside nach ihrer inhaltlichen Rolle.
  - Du erklärst, warum ähnliche sichtbare Boxen fachlich trotzdem verschieden sein können.
  - Du wählst Strukturelemente eher nach Bedeutung als nach dem späteren Layout.
practiceIdeas:
  - Prüfe bei einem Seitenausschnitt, welcher Teil eigenständig, welcher thematisch gruppiert und welcher ergänzend ist.
  - Begründe, warum ein Merkkasten nicht automatisch ein article ist.
  - Lies diese Elemente als Rollen innerhalb des Inhalts statt als Designbausteine.
commonMistakes:
  - article, section und aside nur optisch zu unterscheiden.
  - section mit irgendeinem Container gleichzusetzen.
  - ergänzende Inhalte als Hauptinhalt zu markieren.
keyTakeaways:
  - article steht eher für eigenständig sinnvolle Inhalte.
  - section bündelt thematisch zusammengehörige Teile.
  - aside ergänzt den Hauptinhalt, steht aber nicht im Zentrum der Seite.
recognizeSignals:
  - Es geht um Seitenteile, Wissensboxen, Randspalten oder eigenständige Beiträge.
  - Du sollst begründen, warum ein Element strukturell passt.
  - In Beispielen zählt die Rolle des Inhalts stärker als seine sichtbare Form.
selfCheckPoints:
  - Kann ich article, section und aside fachlich auseinanderhalten?
  - Kann ich einen ergänzenden Inhalt als solchen erkennen?
  - Kann ich Struktur nach Rolle statt nach Optik wählen?
tags:
  - html
  - semantik
  - article
  - section
  - aside
level: mittel
draft: false
---

## Grundidee

Diese Seite betrachtet **nicht** das große Seitengerüst, sondern die **innere Struktur des Inhalts**. Die ruhige Leitfrage lautet: **Ist dieser Teil eigenständig, untergeordnet oder ergänzend?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Lernartikel mit Unterabschnitten und Merkkasten</h3>
  <p>Der eigentliche Beitrag ist ein zusammenhängender Hauptinhalt. Darin gibt es Abschnitte mit Unterthemen und daneben einen ergänzenden Merkkasten. Obwohl alles wie „eine Box“ wirken kann, erfüllen diese Teile unterschiedliche Aufgaben im Dokument.</p>
</div>

## Die drei Rollen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>article</code></strong>
    <span>Ein in sich sinnvoller Inhalt, etwa ein Beitrag, eine Meldung oder ein kompletter Lernartikel.</span>
  </div>
  <div class="visual-item">
    <strong><code>section</code></strong>
    <span>Ein thematischer Abschnitt innerhalb eines größeren Ganzen.</span>
  </div>
  <div class="visual-item">
    <strong><code>aside</code></strong>
    <span>Ein ergänzender Bereich, etwa Zusatzinfos, Merkkästen oder Randhinweise.</span>
  </div>
</div>

## Mini-Demo: gleiche Boxform, andere Inhaltsrolle

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Optik kann ähnlich sein, die Dokumentrolle nicht</h3>
  <div style="display:grid; grid-template-columns:minmax(0,2fr) minmax(14rem,1fr); gap:0.9rem; align-items:start;">
    <div style="display:grid; gap:0.8rem;">
      <div style="padding:0.9rem; border-radius:16px; background:#e2e8f0;">
        <strong>article</strong>
        <div style="margin-top:0.45rem; padding:0.8rem; border-radius:12px; background:white;">Gesamter Beitrag „Wie Formulare lesbar werden“</div>
      </div>
      <div style="padding:0.9rem; border-radius:16px; background:#dbeafe;">
        <strong>section</strong>
        <div style="margin-top:0.45rem; padding:0.8rem; border-radius:12px; background:white;">Abschnitt „Labels und Eingabefelder“</div>
      </div>
      <div style="padding:0.9rem; border-radius:16px; background:#dcfce7;">
        <strong>section</strong>
        <div style="margin-top:0.45rem; padding:0.8rem; border-radius:12px; background:white;">Abschnitt „Fehlermeldungen und Hinweise“</div>
      </div>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#fde68a;">
      <strong>aside</strong>
      <div style="margin-top:0.45rem; padding:0.8rem; border-radius:12px; background:white;">Merkkasten mit Zusatzhinweis</div>
    </div>
  </div>
</div>

## Drei ruhige Leitfragen

<div class="step-grid">
  <div class="step-item"><strong>1. Eigenständig</strong><span>Würde dieser Inhalt auch allein noch als eigener Beitrag Sinn ergeben?</span></div>
  <div class="step-item"><strong>2. Untergeordnet</strong><span>Ist er eher ein Teil innerhalb eines größeren Haupttextes?</span></div>
  <div class="step-item"><strong>3. Ergänzend</strong><span>Oder unterstützt er den Hauptinhalt nur am Rand?</span></div>
</div>

```html
<article>
  <section>...</section>
  <aside>...</aside>
</article>
```

## Gute und schwache Wahl

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Rolle vor Optik</h3>
    <p>Du wählst das Element danach, ob der Inhalt eigenständig, untergeordnet oder ergänzend ist.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Alles nur nach Boxform</h3>
    <p>Dann bekommen sehr unterschiedliche Inhalte dieselbe Struktur, obwohl ihre Funktion im Dokument verschieden ist.</p>
  </section>
</div>

## Was diese Seite bewusst nicht doppelt erklärt

Diese Seite behandelt nur die **Inhaltsstruktur innerhalb des Inhaltsbereichs**. Für das große Seitengerüst mit `header`, `nav`, `main` und `footer` gibt es die eigene Landmarken-Seite.

<div class="note-panel">
  <p><strong>Merke:</strong> Gleiche Boxoptik bedeutet nicht gleiche inhaltliche Rolle.</p>
</div>
