---
title: "ID und Fragment-Links verstehen"
description: "Verstehe, wie IDs einzelne Bereiche einer Seite eindeutig markieren und wie Fragment-Links gezielt zu genau diesen Stellen springen."
subject: "web-development"
section: "HTML"
topicPath: ["html", "id-und-fragment-links-verstehen"]
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

Lange Seiten brauchen oft mehr als nur normale Links. Manchmal soll ein Klick **nicht auf eine andere Seite**, sondern direkt zu einer bestimmten Stelle **innerhalb derselben Seite** führen. Genau dafür sind IDs und Fragment-Links wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein kleines Inhaltsverzeichnis am Seitenanfang</h3>
  <p>Eine Lernseite enthält mehrere große Abschnitte. Ein Inhaltsverzeichnis soll direkt zu „Beispiel“, „Aufgabe“ oder „Kontakt“ springen. Dafür braucht jede Zielstelle einen eindeutigen Namen im Dokument.</p>
</div>

## Die Grundrollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>ID</strong>
    <span>Markiert ein Element eindeutig im Dokument.</span>
  </div>
  <div class="visual-item">
    <strong>Fragment-Link</strong>
    <span>Verweist mit <code>#name</code> auf genau diese markierte Stelle.</span>
  </div>
</div>

## Mini-Demo: Seite wechseln oder innerhalb der Seite springen?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die gleiche Linkoptik kann zwei verschiedene Zielarten haben</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Normale Seitennavigation</strong></p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#dbeafe;">Start</span>
        <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#dbeafe;">Kurse</span>
        <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#dbeafe;">Kontakt</span>
      </div>
      <p style="margin:0.55rem 0 0;">Hier denkt man an andere Seiten oder neue Adressen.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Sprung innerhalb derselben Seite</strong></p>
      <div style="display:grid; gap:0.55rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        <div style="display:flex; gap:0.45rem; flex-wrap:wrap;">
          <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#fde68a;">#beispiel</span>
          <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#fde68a;">#aufgabe</span>
          <span style="padding:0.35rem 0.6rem; border-radius:999px; background:#fde68a;">#kontakt</span>
        </div>
        <div style="display:grid; gap:0.35rem;">
          <div style="padding:0.45rem 0.6rem; border-radius:10px; background:#e2e8f0;">Bereich mit id="beispiel"</div>
          <div style="padding:0.45rem 0.6rem; border-radius:10px; background:#e2e8f0;">Bereich mit id="aufgabe"</div>
          <div style="padding:0.45rem 0.6rem; border-radius:10px; background:#e2e8f0;">Bereich mit id="kontakt"</div>
        </div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier bleibt die Seite dieselbe, nur das Ziel innerhalb der Seite ändert sich.</p>
    </div>
  </div>
</div>

## Eine ID ist ein eindeutiger Bezugspunkt

Eine ID sagt: **Genau dieses Element** ist gemeint.

```html
<h2 id="kontakt">Kontakt</h2>
<a href="#kontakt">Direkt zum Kontaktbereich</a>
```

Wichtig ist dabei:

- derselbe ID-Wert sollte auf einer Seite nicht mehrfach vorkommen,
- der Name sollte sinnvoll und lesbar sein,
- und das Ziel sollte für Nutzende wirklich orientierend sein.

## Gute Sprungziele sind inhaltlich sinnvoll

<div class="compare-card">
  <p class="card-kicker">Orientierung statt Zufall</p>
  <h3>Eine ID ist am stärksten, wenn sie einen echten Abschnitt markiert</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Gut</strong>
      <span>Eine große Überschrift oder ein klarer Themenblock bekommt eine eindeutige ID und wird dadurch zum sinnvollen Sprungziel.</span>
    </div>
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Beliebige kleine Elemente bekommen IDs, obwohl sie kein sinnvoller Orientierungspunkt auf der Seite sind.</span>
    </div>
  </div>
</div>

## Fragment-Link heißt nicht neue Seite

Ein Link mit `#beispiel` zeigt oft auf dieselbe Seite. Das ist fachlich etwas anderes als eine normale Navigation zu einer anderen Adresse.

Deshalb ist die richtige Lesart:

- **normale Navigation**: wechselt Seite oder Ressource,
- **Fragment-Link**: wechselt das Ziel innerhalb eines Dokuments.

## Eine ruhige Prüfstrategie

1. Braucht die Seite überhaupt Sprungziele?
2. Welche Abschnitte sind groß genug, um Orientierung zu geben?
3. Ist jede ID wirklich eindeutig?
4. Springt der Link zu einem inhaltlich sinnvollen Bereich?

<div class="note-panel">
  <p><strong>Merke:</strong> IDs sind nicht nur CSS-Haken. Auf längeren Seiten sind sie vor allem eindeutige Zielmarken für Orientierung und Sprunglinks.</p>
</div>
