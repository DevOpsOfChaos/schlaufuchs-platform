---
title: "Minmax und Auto-Fit in CSS Grid verstehen"
description: "Verstehe, wie minmax und auto-fit Grid-Spalten flexibel machen und warum Kartenraster dadurch ruhiger auf verschiedene Breiten reagieren."
subject: "web-development"
section: "CSS"
topicPath: ["css", "minmax-und-auto-fit-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Viele Raster scheitern nicht daran, dass Grid „nicht funktioniert“, sondern daran, dass die Spalten **zu starr** gedacht sind. Genau hier helfen <code>minmax()</code> und <code>auto-fit</code>.

Damit beschreibst du nicht nur „es sollen drei Spalten sein“, sondern eher:

- wie schmal eine Karte mindestens werden darf,
- wie flexibel sich Spalten strecken dürfen,
- und wann ein Umbruch sinnvoller ist als zu enge Boxen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Kartenraster für Lerninhalte</h3>
  <p>Auf breiten Bildschirmen sollen mehrere Karten nebeneinander stehen. Auf schmaleren Breiten sollen sie aber nicht gequetscht werden. Statt feste Spaltenzahlen für jeden Fall zu raten, kann das Grid selbst über Mindestbreite und freien Platz entscheiden.</p>
</div>

## Die beiden Ideen getrennt lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>minmax(14rem, 1fr)</code></strong>
    <span>Eine Spalte soll nicht kleiner als 14rem werden, darf aber größer werden und freien Platz mitnutzen.</span>
  </div>
  <div class="visual-item">
    <strong><code>repeat(auto-fit, ...)</code></strong>
    <span>Das Grid versucht so viele passende Spalten wie sinnvoll unterzubringen und bricht um, wenn der Platz knapp wird.</span>
  </div>
</div>

## Mini-Demo: starres Raster gegen flexibles Raster

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der eigentliche Unterschied liegt nicht in der Farbe, sondern in der Spaltenlogik</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Starre Idee</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.5rem; background:white; padding:0.8rem; border:1px solid #e2e8f0; border-radius:12px;">
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#dbeafe; text-align:center; font-weight:700;">Karte A</div>
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#dcfce7; text-align:center; font-weight:700;">Karte B</div>
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#fde68a; text-align:center; font-weight:700;">Karte C</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Zahl der Spalten bleibt fest. Auf knapper Breite werden Karten schnell zu schmal oder unruhig.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Flexible Idee mit minmax + auto-fit</strong></p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(8rem,1fr)); gap:0.5rem; background:white; padding:0.8rem; border:1px solid #e2e8f0; border-radius:12px;">
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#dbeafe; text-align:center; font-weight:700;">Karte A</div>
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#dcfce7; text-align:center; font-weight:700;">Karte B</div>
        <div style="padding:0.75rem 0.6rem; border-radius:10px; background:#fde68a; text-align:center; font-weight:700;">Karte C</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Karten halten eine sinnvolle Mindestbreite und verteilen freien Raum ruhiger.</p>
    </div>
  </div>
</div>

## Was <code>minmax()</code> wirklich sagt

<code>minmax(14rem, 1fr)</code> bedeutet nicht zwei konkurrierende Einzelwerte. Es beschreibt eher einen **erlaubten Breitenrahmen**:

- kleiner als 14rem bitte nicht,
- größer darf die Spalte werden,
- und bei freiem Platz teilt sie sich die verfügbare Breite mit anderen Spalten.

## Was <code>auto-fit</code> sichtbar verändert

<code>auto-fit</code> ist spannend, weil es nicht eine feste Zahl von Spalten erzwingt. Stattdessen prüft das Grid, wie viele Spalten mit der gewünschten Mindestbreite gerade sinnvoll Platz haben.

Das heißt sichtbar:

- breite Ansicht → mehr Spalten,
- weniger Breite → weniger Spalten,
- die Karten bleiben trotzdem lesbar.

```css
grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
```

<div class="compare-card">
  <p class="card-kicker">Ruhige Lesart</p>
  <h3>Erst die Mindestbreite verstehen, dann die Spaltenzahl</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhig gedacht</strong>
      <span>„Ich will immer genau vier Spalten.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig gedacht</strong>
      <span>„Jede Karte braucht mindestens diese Breite, und darüber darf das Raster selbst sinnvoll verteilen.“</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wie schmal darf eine Karte mindestens werden?
2. Soll das Raster freien Platz ausdehnen dürfen?
3. Muss die Spaltenzahl fest sein oder soll sie sich anpassen?
4. Erst danach an genaue Breakpoints denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei vielen Grids ist nicht die „richtige Spaltenzahl“ die Hauptfrage, sondern die <strong>kleinste sinnvolle Kartenbreite</strong>.</p>
</div>
