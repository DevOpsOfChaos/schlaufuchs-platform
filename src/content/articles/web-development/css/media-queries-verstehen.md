---
title: Media Queries verstehen
description: Verstehe, warum ein Layout nicht auf jedem Bildschirm gleich bleiben muss und wie CSS darauf gezielt reagiert.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - media-queries-verstehen
learningGoals:
  - Du erklärst die Grundidee von Media Queries.
  - Du beschreibst, warum Layoutregeln auf verschiedene Bildschirmbreiten reagieren.
  - Du deutest Media Queries als Anpassungsregel statt als Sonderfall-Chaos.
practiceIdeas:
  - Überlege, welche Layoutänderung auf schmalen Bildschirmen sinnvoll wäre.
  - Vergleiche dieselbe Komponente auf großem und kleinem Bildschirm.
  - Formuliere eine CSS-Regel, die ab einer bestimmten Breite anders reagieren soll.
commonMistakes:
  - Responsive Design nur als „alles kleiner machen“ zu verstehen.
  - Media Queries als vollständige Neuschreibung statt als gezielte Anpassung zu sehen.
  - Nicht zu überlegen, welche Regel sich auf kleinen Bildschirmen wirklich ändern muss.
keyTakeaways:
  - Media Queries passen CSS-Regeln an Gerätebedingungen an.
  - Ziel ist nicht ein anderes Projekt, sondern ein sinnvoll angepasstes Layout.
  - Gute Responsive-Regeln ändern gezielt, nicht beliebig.
recognizeSignals:
  - Es geht um verschiedene Bildschirmgrößen, responsive Layouts oder angepasste Regeln.
  - Du sollst erklären, warum Elemente auf Mobilgeräten anders angeordnet werden.
  - In Aufgaben wird nach Bedingungen für CSS-Anpassungen gefragt.
selfCheckPoints:
  - Kann ich die Grundidee von Media Queries erklären?
  - Kann ich beschreiben, welche Regel sich bei kleinerem Bildschirm ändern sollte?
  - Kann ich responsive Anpassung von reinem Verkleinern unterscheiden?
tags:
  - css
  - media-queries
  - responsive
  - layout
level: einfach
draft: false
---

## Grundidee

Media Queries sorgen dafür, dass CSS nicht immer unter allen Bedingungen gleich wirken muss. Ein Layout darf auf einem großen Bildschirm anders organisiert sein als auf einem kleinen – solange die Anpassung bewusst und nachvollziehbar bleibt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kartenreihe wird auf dem Handy untereinander</h3>
  <p>Ein Kartenlayout mit zwei oder drei Spalten funktioniert auf großen Bildschirmen gut. Auf kleinen Geräten ist es oft ruhiger, die Karten untereinander anzuordnen. Genau solche Anpassungen werden mit Media Queries beschrieben.</p>
</div>

## Was Media Queries tun

Media Queries prüfen Bedingungen wie zum Beispiel:

- Bildschirmbreite,
- Höhe,
- oder andere Darstellungsmerkmale.

Wenn die Bedingung passt, gelten bestimmte CSS-Regeln.

## Nicht alles neu, sondern gezielt anpassen

<div class="compare-card">
  <p class="card-kicker">Wichtige Sichtweise</p>
  <h3>Anpassung statt Chaos</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhig gedacht</strong>
      <span>Für jede Bildschirmgröße ein völlig neues Layout bauen.</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig gedacht</strong>
      <span>Die Grundstruktur bleibt, nur einzelne Regeln werden passend angepasst.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Komponente, zwei Breiten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was eine Breitenbedingung sichtbar verändert</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Breite Ansicht</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.55rem;">
        <div style="padding:0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">Karte 1</div>
        <div style="padding:0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">Karte 2</div>
        <div style="padding:0.8rem; border-radius:12px; background:#fde68a; font-weight:700;">Karte 3</div>
      </div>
    </div>
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc; max-width:20rem;">
      <p style="margin:0 0 0.45rem;"><strong>Schmale Ansicht</strong></p>
      <div style="display:grid; grid-template-columns:1fr; gap:0.55rem;">
        <div style="padding:0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">Karte 1</div>
        <div style="padding:0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">Karte 2</div>
        <div style="padding:0.8rem; border-radius:12px; background:#fde68a; font-weight:700;">Karte 3</div>
      </div>
    </div>
  </div>
  <p>Die Inhalte bleiben gleich. Geändert wird nur die <strong>Regel für die Anordnung</strong>, sobald weniger Platz vorhanden ist.</p>
</div>

## Zweite Mini-Demo: Navigation wird umgebaut, nicht nur geschrumpft

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Responsive heißt oft Umordnen statt Verkleinern</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Breite Leiste</strong></p>
      <div style="display:flex; gap:0.55rem; padding:0.65rem; border-radius:12px; background:white;">
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#dbeafe; font-weight:700;">Kurse</span>
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#dcfce7; font-weight:700;">Aufgaben</span>
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#fde68a; font-weight:700;">Kontakt</span>
      </div>
    </div>
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc; max-width:18rem;">
      <p style="margin:0 0 0.45rem;"><strong>Schmale Fläche</strong></p>
      <div style="display:grid; gap:0.45rem; padding:0.65rem; border-radius:12px; background:white;">
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#dbeafe; font-weight:700;">Kurse</span>
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#dcfce7; font-weight:700;">Aufgaben</span>
        <span style="padding:0.45rem 0.7rem; border-radius:999px; background:#fde68a; font-weight:700;">Kontakt</span>
      </div>
    </div>
  </div>
  <p>Responsive Design bedeutet oft: Die Oberfläche wird <strong>klarer umgeordnet</strong>, nicht einfach nur zusammengedrückt.</p>
</div>

## Ein kleines Beispiel

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

Hier gilt:
- auf breiten Bildschirmen drei Spalten,
- auf schmaleren Bildschirmen nur noch eine Spalte.

## Denkbild

<div class="figure-card">
  <p class="card-kicker">Responsive Bild</p>
  <h3>Erst Grundlage, dann gezielte Reaktion</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Grundlayout</strong><span>Die Seite hat eine normale Ausgangsstruktur.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Bedingung prüfen</strong><span>Zum Beispiel kleine Bildschirmbreite.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Regel anpassen</strong><span>Das Layout wird gezielt vereinfacht oder umgeordnet.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Was ist das normale Ausgangslayout?
2. Welche Bedingung wird geprüft?
3. Welche Regel ändert sich dadurch wirklich?
4. Macht die Anpassung das Layout auf kleinerem Raum klarer?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Media Queries bauen kein zweites Projekt. Sie passen das vorhandene Layout gezielt an veränderte Bedingungen an.</p>
</div>
