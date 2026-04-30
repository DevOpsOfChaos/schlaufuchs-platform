---
title: "Linktexte und Links sinnvoll schreiben"
description: "Verstehe, warum gute Linktexte Orientierung geben und wie einzelne Links inhaltlich statt nur optisch wirken."
subject: "web-development"
section: "HTML"
topicPath: ["html", "linktexte-und-links"]
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

Ein Link ist nicht nur eine klickbare Stelle. Er ist ein **kleiner Wegweiser**. Darum ist bei einzelnen Links vor allem wichtig, ob ihr Text schon vor dem Klick erklärt, **wohin** er führt oder **was** dort zu finden ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Links, nur einer hilft wirklich</h3>
  <p><code>Hier klicken</code> sagt fast nichts über das Ziel. Ein Linktext wie <code>Download der Stundenplan-PDF</code> erklärt dagegen sofort, was sich hinter dem Link verbirgt.</p>
</div>

## Ein Link braucht einen erkennbaren Zweck

Ein Link ist am hilfreichsten, wenn sein Zweck aus dem Text deutlich wird.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Unklar</p>
    <h3>Hier klicken</h3>
    <p>Der Text sagt kaum etwas darüber, wohin die Reise geht oder was nach dem Klick passiert.</p>
  </section>
  <section>
    <p class="card-kicker">Klar</p>
    <h3>Zur Übersicht der Prüfungsformate</h3>
    <p>Das Ziel wird schon vor dem Klick inhaltlich verständlich.</p>
  </section>
</div>

## Ein guter Linktext beantwortet drei leise Fragen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Was finde ich dort?</strong>
    <span>Der Text sollte erkennen lassen, welches Ziel hinter dem Link liegt.</span>
  </div>
  <div class="visual-item">
    <strong>Warum sollte ich klicken?</strong>
    <span>Der Nutzen oder die Funktion wird zumindest grob sichtbar.</span>
  </div>
  <div class="visual-item">
    <strong>Würde das auch ohne Farbe funktionieren?</strong>
    <span>Ein guter Link bleibt auch als bloßer Text sinnvoll.</span>
  </div>
</div>

## Mini-Demo: Zieltext statt Klicktext

<div class="figure-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Ein Link hilft erst dann, wenn das Ziel im Text auftaucht</h3>
  <div style="display:grid; gap:0.8rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px dashed #94a3b8;">
      <strong>Schwach</strong>
      <p style="margin:0.4rem 0 0;">Weitere Informationen finden Sie <a href="#">hier</a>.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px dashed #94a3b8;">
      <strong>Ruhiger</strong>
      <p style="margin:0.4rem 0 0;">Zur <a href="#">Übersicht der Prüfungsformate</a>.</p>
    </div>
  </div>
</div>

Die **Struktur ganzer Menüs** ist eine andere Frage. Dort geht es um Hierarchie, Hauptpunkte und Erreichbarkeit. Diese Seite bleibt bewusst bei der kleineren Einheit: **dem einzelnen Linktext**.

## Gute und schwache Linktexte

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Das Ziel ist vor dem Klick erkennbar</h3>
    <p>Der Text macht deutlich, was sich hinter dem Link verbirgt oder welche Aktion damit verbunden ist.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Der Klick muss den Sinn erst verraten</h3>
    <p>Wenn der Linktext nur mehr, weiter oder hier sagt, entsteht Orientierung oft erst nach dem Öffnen der Zielseite.</p>
  </section>
</div>

<pre><code>&lt;a href="/pruefungen/formate"&gt;Zur Übersicht der Prüfungsformate&lt;/a&gt;</code></pre>

## Eine ruhige Prüfstrategie

1. Was ist das Ziel?
2. Wird dieses Ziel im Text sichtbar?
3. Würde der Link auch ohne Farbe oder direkten Kontext noch sinnvoll wirken?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Linktexte helfen auch dann, wenn Farbe, Layout oder unmittelbarer Kontext wegfallen.</p>
</div>
