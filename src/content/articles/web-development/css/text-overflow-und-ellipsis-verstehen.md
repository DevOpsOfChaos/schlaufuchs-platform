---
title: Text-Overflow und Ellipsis verstehen
description: Verstehe, wie zu lange Texte in schmalen Flächen abgeschnitten werden können und warum Ellipsis eine sichtbare Lesehilfe statt bloßer Deko ist.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - text-overflow-und-ellipsis-verstehen
learningGoals:
  - Du erklärst die Grundidee von text-overflow und ellipsis.
  - Du beschreibst, warum schmale Oberflächen manchmal verkürzte Texte brauchen.
  - Du liest Ellipsis eher als Lesehinweis als als zufällige Abkürzung.
practiceIdeas:
  - Vergleiche eine Kartenliste mit kurzen und zu langen Titeln.
  - Prüfe, wo Zeilen bewusst begrenzt werden, damit Karten ruhig bleiben.
  - Lies Auslassungspunkte eher als Signal für verborgenen Resttext.
commonMistakes:
  - zu denken, ellipsis verkürze den Textinhalt selbst.
  - Ellipsis mit normalem Zeilenumbruch zu verwechseln.
  - zu lange Titel einfach laufen zu lassen, obwohl die Oberfläche dadurch unruhig wird.
keyTakeaways:
  - Text-Overflow regelt, wie zu langer Text in einer begrenzten Fläche behandelt wird.
  - Ellipsis zeigt an, dass sichtbarer Text bewusst abgeschnitten wurde.
  - Gute Oberflächen balancieren Lesbarkeit, Ruhe und verfügbaren Platz.
recognizeSignals:
  - Es geht um Karten, Listen, Navigationen oder Dateinamen in schmalen Bereichen.
  - Du sollst erklären, warum Titel abgeschnitten sind und dennoch lesbar bleiben.
  - In Beispielen zählt die Oberflächenruhe stärker als die vollständige Anzeige in jeder Zeile.
selfCheckPoints:
  - Kann ich erklären, was Ellipsis signalisiert?
  - Kann ich Zeilenumbruch und abgeschnittenen Text unterscheiden?
  - Kann ich eine sinnvolle Einsatzsituation für verkürzte Einzeilentexte nennen?
tags:
  - css
  - text-overflow
  - ellipsis
  - ui
level: mittel
draft: false
---

## Grundidee

In schmalen Oberflächen passt Text nicht immer vollständig in eine Zeile. Dann braucht man eine bewusste Entscheidung: Soll der Text umbrechen, aus dem Bereich ragen oder als verkürzte Zeile mit `…` enden? Genau hier hilft `text-overflow: ellipsis`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Dateinamen in einer kompakten Liste</h3>
  <p>Eine Dateiliste soll ruhig und ordentlich aussehen. Manche Namen sind aber deutlich länger als die verfügbare Kartenbreite. Wenn jede Zeile unterschiedlich hoch wird, verliert die Liste schnell ihre Ruhe. Ein sichtbarer Kürzungshinweis kann hier sinnvoller sein als unkontrollierter Umbruch.</p>
</div>

## Was Ellipsis eigentlich signalisiert

<div class="visual-grid">
  <div class="visual-item">
    <strong>Der Text existiert weiter</strong>
    <span>Ellipsis löscht nicht den Inhalt, sondern zeigt nur eine gekürzte sichtbare Darstellung.</span>
  </div>
  <div class="visual-item">
    <strong>Die Fläche ist begrenzt</strong>
    <span>Die verfügbare Breite reicht nicht für die komplette Zeile.</span>
  </div>
  <div class="visual-item">
    <strong>Die Oberfläche priorisiert Ruhe</strong>
    <span>Einheitliche Karten oder Listen werden höher gewichtet als vollständiger Einzeilentext.</span>
  </div>
</div>

## Mini-Demo: Umbruch oder Kürzung?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Dasselbe Label wirkt je nach Behandlung sehr unterschiedlich</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit normalem Umbruch</strong></p>
      <div style="width:13rem; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; line-height:1.35;">
        Projektbericht-Endfassung-nach-Korrekturen-und-Freigabe.pdf
      </div>
      <p style="margin:0.55rem 0 0;">Der Inhalt bleibt vollständig sichtbar, aber die Kartenhöhe wächst deutlich.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Ellipsis gedacht</strong></p>
      <div style="width:13rem; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
        Projektbericht-Endfassung-nach-Korrekturen-und-Freigabe.pdf
      </div>
      <p style="margin:0.55rem 0 0;">Die Zeile bleibt ruhig und einheitlich, der sichtbare Rest wird durch `…` signalisiert.</p>
    </div>
  </div>
</div>

## Ellipsis ist keine Inhaltsänderung

<div class="compare-card">
  <p class="card-kicker">Wichtige Lesart</p>
  <h3>Sichtbare Kürzung und tatsächlicher Text sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Textinhalt</strong>
      <span>Der eigentliche Name oder Satz bleibt fachlich derselbe.</span>
    </div>
    <div class="compare-item">
      <strong>Sichtbare Darstellung</strong>
      <span>Nur die Anzeige in einer begrenzten Fläche wird verkürzt.</span>
    </div>
  </div>
</div>

```css
.dateiname {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Wann Ellipsis sinnvoll ist

- bei einzeiligen Labels,
- in Listen oder Karten mit fester Höhe,
- in Navigationsleisten oder kompakten Übersichten,
- wenn Oberflächenruhe wichtiger ist als vollständige Einzeilensicht.

## Eine ruhige Prüfstrategie

1. Ist die Fläche bewusst schmal?
2. Soll die Zeile unbedingt einzeilig bleiben?
3. Muss der Nutzer trotzdem erkennen, dass mehr Text vorhanden ist?
4. Dann ist Ellipsis oft die passendere Lesart.

<div class="note-panel">
  <p><strong>Merke:</strong> Ellipsis bedeutet nicht "der Rest ist unwichtig", sondern <strong>der sichtbare Platz ist begrenzt</strong>.</p>
</div>
