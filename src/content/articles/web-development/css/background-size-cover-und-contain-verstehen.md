---
title: Background-Size Cover und Contain verstehen
description: Verstehe, warum Hintergrundbilder mit cover und contain unterschiedlich in ihre Fläche eingepasst werden und welche sichtbaren Folgen das hat.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - background-size-cover-und-contain-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen cover und contain.
  - Du beschreibst, ob eher Zuschnitt oder freier Rand entsteht.
  - Du liest Bildanpassung eher über Fläche und Verhältnis als über bloße Größe.
practiceIdeas:
  - Vergleiche eine Hero-Fläche mit einem Logoslot oder Vorschaurahmen.
  - Prüfe, ob das Bild die Fläche komplett füllen oder vollständig sichtbar bleiben soll.
  - Achte bei kleinen Demos darauf, ob Ränder oder Zuschnitte entstehen.
commonMistakes:
  - cover mit contain zu verwechseln.
  - zu erwarten, dass jedes Bild ohne Kompromiss komplett sichtbar und vollflächig sein kann.
  - die Rolle des Seitenverhältnisses zu ignorieren.
keyTakeaways:
  - cover füllt die Fläche vollständig und nimmt dafür oft Zuschnitt in Kauf.
  - contain zeigt das ganze Bild und nimmt dafür oft freie Ränder in Kauf.
  - Die richtige Wahl hängt vom Ziel der Fläche ab, nicht nur vom Bild selbst.
recognizeSignals:
  - Es geht um Headerbilder, Kacheln, Teaserflächen oder visuelle Hintergründe.
  - Du sollst erklären, warum ein Bild beschnitten wirkt oder warum leere Fläche übrig bleibt.
  - In Beispielen ist die Beziehung zwischen Bildverhältnis und Boxgröße zentral.
selfCheckPoints:
  - Kann ich cover und contain fachlich unterscheiden?
  - Kann ich erklären, warum Zuschnitt oder freie Fläche entsteht?
  - Kann ich eine sinnvolle Entscheidung zwischen cover und contain begründen?
tags:
  - css
  - background-size
  - images
  - cover
level: mittel
draft: false
---

## Grundidee

Ein Hintergrundbild und seine Box haben oft **nicht dasselbe Seitenverhältnis**. Dann muss CSS entscheiden, wie das Bild in die Fläche passt. Genau dafür ist `background-size` mit Werten wie `cover` und `contain` wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine breite Hero-Fläche mit Hintergrundbild</h3>
  <p>Der sichtbare Bereich soll komplett gefüllt aussehen. Gleichzeitig ist das Ausgangsbild vielleicht höher oder schmaler als die Box. Jetzt muss entschieden werden: Ist vollständige Flächenfüllung wichtiger oder vollständige Bildsichtbarkeit?</p>
</div>

## Zwei typische Ziele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Fläche komplett füllen</strong>
    <span>Dann ist `cover` oft die naheliegende Wahl.</span>
  </div>
  <div class="visual-item">
    <strong>Bild komplett zeigen</strong>
    <span>Dann ist `contain` oft die ruhigere Lösung.</span>
  </div>
</div>

## Mini-Demo: Zuschnitt oder freier Rand?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Dieselbe Fläche, andere Einpassung</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>cover</strong></p>
      <div style="height:8rem; border-radius:14px; overflow:hidden; background:linear-gradient(90deg,#7dd3fc 0 25%,#38bdf8 25% 50%,#fda4af 50% 75%,#fb7185 75% 100%); border:1px solid #cbd5e1; display:flex; align-items:center; justify-content:center;">
        <div style="padding:0.3rem 0.55rem; border-radius:999px; background:rgba(255,255,255,.85); font-weight:700;">voll gefüllt</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Fläche wirkt voll. Dafür kann seitlich oder oben/unten Bildinhalt wegfallen.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>contain</strong></p>
      <div style="height:8rem; border-radius:14px; border:1px solid #cbd5e1; background:white; display:flex; align-items:center; justify-content:center; padding:0.7rem;">
        <div style="width:100%; height:100%; max-width:9rem; border-radius:12px; background:linear-gradient(90deg,#7dd3fc 0 25%,#38bdf8 25% 50%,#fda4af 50% 75%,#fb7185 75% 100%);"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Das ganze Bild bleibt sichtbar. Dafür kann freie Fläche in der Box übrig bleiben.</p>
    </div>
  </div>
</div>

## Cover und contain sind Zielentscheidungen

<div class="compare-card">
  <p class="card-kicker">Entscheidungslogik</p>
  <h3>Was ist hier wichtiger?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>cover</strong>
      <span>Die Fläche soll ohne leere Ränder gefüllt wirken.</span>
    </div>
    <div class="compare-item">
      <strong>contain</strong>
      <span>Das Bild soll vollständig sichtbar bleiben.</span>
    </div>
  </div>
</div>

```css
.hero {
  background-size: cover;
}

.logo-flaeche {
  background-size: contain;
}
```

## Wo welches Denken sinnvoll ist

- `cover` für große Bildflächen, Stimmungsbilder und vollflächige Header,
- `contain` für Logos, Produktabbildungen oder Inhalte, die nicht abgeschnitten werden sollen.

## Eine ruhige Prüfstrategie

1. Muss die Fläche vollständig gefüllt wirken?
2. Oder muss das ganze Bild sichtbar bleiben?
3. Welches Seitenverhältnis hat die Box?
4. Dann erst entscheidest du zwischen `cover` und `contain`.

<div class="note-panel">
  <p><strong>Merke:</strong> `cover` und `contain` sind keine Konkurrenzwerte für "größer" oder "kleiner", sondern zwei <strong>verschiedene Prioritäten beim Einpassen</strong>.</p>
</div>
