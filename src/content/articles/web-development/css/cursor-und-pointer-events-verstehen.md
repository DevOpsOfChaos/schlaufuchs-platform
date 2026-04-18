---
title: Cursor und Pointer-Events verstehen
description: Verstehe, wie der Mauszeiger Hinweise auf Interaktion gibt und warum pointer-events die Klickbarkeit eines Elements anders beeinflusst als nur sein Aussehen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - cursor-und-pointer-events-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen cursor und pointer-events.
  - Du beschreibst, warum ein interaktiv wirkendes Element trotzdem nicht klickbar sein kann.
  - Du liest UI-Probleme eher über Interaktionslogik als nur über Optik.
practiceIdeas:
  - Vergleiche einen Button mit Hand-Cursor und einen Bereich, der bewusst nicht anklickbar ist.
  - Prüfe in einer kleinen Oberfläche, ob Zeigerhinweis und echte Klickbarkeit zusammenpassen.
  - Lies überlagerte Flächen eher als Interaktionsproblem statt nur als Designfehler.
commonMistakes:
  - cursor pointer mit echter Klickfunktion gleichzusetzen.
  - pointer-events nur als Spezialfall für SVG zu sehen.
  - ein Element optisch deaktiviert zu zeigen, ohne seine Interaktion wirklich zu ändern.
keyTakeaways:
  - cursor verändert vor allem die Rückmeldung des Mauszeigers.
  - pointer-events beeinflusst, ob Zeigerereignisse ein Element überhaupt erreichen.
  - Gute Oberflächen stimmen sichtbare Hinweise und echte Interaktion aufeinander ab.
recognizeSignals:
  - Es geht um Buttons, Overlays, Badges, Karten oder klickbare Bereiche.
  - Du sollst erklären, warum etwas wie ein Link wirkt, aber nicht reagiert.
  - In Beispielen ist die Interaktionslogik wichtiger als die reine Farbe oder Größe.
selfCheckPoints:
  - Kann ich cursor und pointer-events fachlich trennen?
  - Kann ich erklären, warum ein Hand-Cursor noch keine echte Klickbarkeit beweist?
  - Kann ich bei einer UI-Situation begründen, welches Problem optisch und welches funktional ist?
tags:
  - css
  - cursor
  - pointer-events
  - interaktion
level: mittel
draft: false
---

## Grundidee

In Weboberflächen gibt es zwei verschiedene Fragen, die leicht vermischt werden:

1. **Wie wirkt ein Element für die Nutzenden?**
2. **Erreicht ein Klick dieses Element überhaupt?**

`cursor` beantwortet eher die erste Frage. `pointer-events` betrifft stärker die zweite.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Karte mit Badge und Overlay</h3>
  <p>Eine Produktkarte soll anklickbar sein. Darüber liegt aber ein dekoratives Badge. Wenn diese obere Fläche Zeigerereignisse abfängt, wirkt die Karte vielleicht normal, reagiert aber an manchen Stellen nicht. Genau hier muss man <code>cursor</code> und <code>pointer-events</code> trennen.</p>
</div>

## Zwei verschiedene Rollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>cursor</strong>
    <span>Gibt dem Mauszeiger eine sichtbare Rolle, zum Beispiel Standardpfeil oder Hand.</span>
  </div>
  <div class="visual-item">
    <strong>pointer-events</strong>
    <span>Bestimmt, ob Zeigerereignisse ein Element erreichen oder durch es hindurchgehen.</span>
  </div>
</div>

## Mini-Demo: gleiches Aussehen, andere Klicklogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der Cursor kann etwas versprechen, was die Interaktion gar nicht hält</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur Cursor-Hinweis</strong></p>
      <div style="padding:0.9rem; border-radius:12px; background:#dbeafe; border:1px solid #93c5fd; cursor:pointer;">
        Diese Karte signalisiert über den Cursor: „Hier passiert etwas".
      </div>
      <p style="margin:0.55rem 0 0;">Der Hinweis ist sichtbar, aber über die echte Funktion sagt das allein noch nichts aus.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Overlay blockiert</strong></p>
      <div style="position:relative; padding:0.9rem; border-radius:12px; background:#dcfce7; border:1px solid #86efac;">
        <div style="position:absolute; inset:0; border-radius:12px; background:rgba(15,23,42,0.08);"></div>
        <div style="position:relative;">Die Karte sieht aktiv aus, aber eine obere Fläche kann Klicks abfangen.</div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier liegt das Problem in der Ereignisweitergabe, nicht im Cursor.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Overlay lässt durch</strong></p>
      <div style="position:relative; padding:0.9rem; border-radius:12px; background:#fef3c7; border:1px solid #fcd34d;">
        <div style="position:absolute; inset:0; border-radius:12px; background:rgba(245,158,11,0.12); pointer-events:none;"></div>
        <div style="position:relative;">Das Overlay bleibt sichtbar, stört die darunterliegende Interaktion aber nicht.</div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier zeigt <code>pointer-events: none</code> seine eigentliche Stärke.</p>
    </div>
  </div>
</div>

## `cursor` erklärt die Erwartung

Mit `cursor` kannst du anzeigen, welche Art von Oberfläche die Nutzenden gerade vor sich haben.

```css
.button-like {
  cursor: pointer;
}
```

Das ist sinnvoll, wenn ein Bereich wirklich wie eine Aktion behandelt werden soll. Problematisch wird es, wenn der Cursor eine Klickbarkeit signalisiert, die funktional gar nicht vorhanden ist.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Hinweis und Handlung sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Guter Einsatz</strong>
      <span>Der Hand-Cursor unterstützt eine echte Aktion wie Link, Button oder klickbare Karte.</span>
    </div>
    <div class="compare-item">
      <strong>Schwacher Einsatz</strong>
      <span>Der Cursor verspricht Interaktion, obwohl der Bereich gar nichts auslöst oder blockiert wird.</span>
    </div>
  </div>
</div>

## `pointer-events` betrifft die Ereignislogik

Mit `pointer-events` regelst du, ob ein Element auf Maus- oder Touch-Zeiger reagiert.

```css
.badge-overlay {
  pointer-events: none;
}
```

Das ist besonders nützlich für rein dekorative Ebenen. Sie bleiben sichtbar, aber sie sollen nicht verhindern, dass darunterliegende Links, Buttons oder Karten erreichbar bleiben.

## Typische Situationen

<div class="step-grid">
  <div class="step-item">
    <strong>Overlay auf Karte</strong>
    <span>Eine dekorative Fläche liegt oben. Dann ist oft <code>pointer-events: none</code> sinnvoll.</span>
  </div>
  <div class="step-item">
    <strong>Deaktivierte Aktion</strong>
    <span>Ein Bereich soll gerade nicht benutzt werden. Dann reicht Optik allein nicht, die Interaktionslogik muss mitgedacht werden.</span>
  </div>
  <div class="step-item">
    <strong>Nur Hinweisfläche</strong>
    <span>Ein Hand-Cursor kann Orientierung geben, ersetzt aber keine semantisch oder funktional saubere Aktion.</span>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. **Wirkt** das Element klickbar?
2. **Ist** es technisch oder logisch wirklich interaktiv?
3. Gibt es eine obere Fläche, die Ereignisse abfängt?
4. Passt der sichtbare Hinweis zur echten Funktion?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>cursor</code> betrifft vor allem die sichtbare Erwartung. <code>pointer-events</code> betrifft die tatsächliche Erreichbarkeit eines Elements für Zeigeraktionen.</p>
</div>

## Warum das wichtig ist

Gerade in kleinen Web-Demos oder UI-Komponenten wirken Probleme mit Klickbarkeit oft „mysteriös“. Häufig liegt die Ursache aber nicht in JavaScript, sondern in einer schlichten CSS-Entscheidung: sichtbarer Hinweis und echte Ereignislogik passen nicht sauber zusammen.
