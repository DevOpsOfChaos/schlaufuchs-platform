---
title: Gap in Flex und Grid verstehen
description: Verstehe, warum gap Abstände zwischen Elementen ruhiger steuert als Einzelränder und wie sich dieselbe Regel in Flex- und Grid-Layouts sichtbar auswirkt.
subject: web-development
section: CSS
topicPath:
  - css
  - flexbox
  - gap-in-flex-und-grid-verstehen
learningGoals:
  - Du erklärst, was gap in Layout-Containern steuert.
  - Du unterscheidest Abstand zwischen Elementen von Außenabständen am Element.
  - Du beschreibst, warum gap oft ruhiger ist als viele einzelne margin-Regeln.
practiceIdeas:
  - Vergleiche eine Kartenzeile mit und ohne gap.
  - Prüfe bei Flex- oder Grid-Beispielen, ob der Abstand vom Container oder von den Kind-Elementen kommt.
  - Erkläre, warum gleichmäßige Zwischenräume oft mit gap leichter lesbar werden.
commonMistakes:
  - gap mit margin am einzelnen Element gleichzusetzen.
  - zu glauben, gap mache dasselbe wie padding.
  - Abstände am Anfang und Ende einer Reihe mit Zwischenabständen zu verwechseln.
keyTakeaways:
  - gap steuert den Raum zwischen Kind-Elementen eines Layout-Containers.
  - gap gehört zur Logik des Containers, nicht zum einzelnen Kind.
  - Für gleichmäßige Zwischenräume ist gap oft ruhiger und wartbarer als viele margin-Einzelregeln.
recognizeSignals:
  - Es geht um Kartenreihen, Button-Gruppen, Grid-Layouts oder gleichmäßige Abstände.
  - Du sollst erklären, warum Elemente zwar getrennt, aber nicht vom Container weggerückt wirken.
  - In Beispielen ist die Frage wichtig, ob der Abstand zwischen Kindern oder außen am Baustein entsteht.
selfCheckPoints:
  - Kann ich gap von margin und padding unterscheiden?
  - Kann ich erklären, warum gap am Container steht?
  - Kann ich sichtbar beschreiben, was sich mit größerem gap ändert und was gleich bleibt?
tags:
  - css
  - gap
  - flexbox
  - grid
  - abstand
level: einfach
draft: false
---

## Grundidee

Mit `gap` steuerst du den **Zwischenraum zwischen Kind-Elementen eines Containers**. Das ist besonders hilfreich bei Flexbox und Grid, weil der Abstand dadurch als Teil der Layoutlogik gelesen werden kann.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Karten brauchen Luft, aber keine Sonderregeln pro Karte</h3>
  <p>Eine Kartenreihe soll gleichmäßige Zwischenräume bekommen. Statt jeder Karte einzeln rechts einen Rand zu geben, lässt sich der Abstand am Container steuern. Genau dort wird <code>gap</code> ruhig und stark: Du beschreibst den Raum zwischen den Elementen an einer zentralen Stelle.</p>
</div>

## Was gap sichtbar steuert

<div class="visual-grid">
  <div class="visual-item">
    <strong>Zwischenraum</strong>
    <span>Gap legt fest, wie viel Luft zwischen benachbarten Kindern liegt.</span>
  </div>
  <div class="visual-item">
    <strong>Containerlogik</strong>
    <span>Die Regel gehört an den übergeordneten Layout-Container, nicht an jede Karte einzeln.</span>
  </div>
  <div class="visual-item">
    <strong>Gleichmäßigkeit</strong>
    <span>Alle Zwischenräume folgen derselben Regel und wirken dadurch ruhiger.</span>
  </div>
</div>

## Mini-Demo: dieselben Karten, nur anderer Zwischenraum

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was <code>gap</code> direkt sichtbar verändert</h3>
  <div style="display:grid; gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante A – kleiner gap</strong></p>
      <div style="display:flex; gap:0.45rem;">
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#dbeafe;">Karte A</div>
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#dcfce7;">Karte B</div>
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#fde68a;">Karte C</div>
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante B – großer gap</strong></p>
      <div style="display:flex; gap:1.25rem;">
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#dbeafe;">Karte A</div>
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#dcfce7;">Karte B</div>
        <div style="flex:1; min-width:0; padding:0.8rem; border-radius:12px; background:#fde68a;">Karte C</div>
      </div>
    </div>
  </div>
  <p>Die Karten selbst bleiben gleich. Sichtbar ändert sich nur der <strong>Raum zwischen ihnen</strong>.</p>
</div>

## Gap ist nicht dasselbe wie Margin

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Abstand zwischen Kindern oder Außenabstand am Element?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>gap</strong>
      <span>Der Container steuert den Raum zwischen seinen Kindern gleichmäßig.</span>
    </div>
    <div class="compare-item">
      <strong>margin</strong>
      <span>Ein einzelnes Element bekommt einen Außenabstand zu seiner Umgebung.</span>
    </div>
    <div class="compare-item">
      <strong>padding</strong>
      <span>Der Innenabstand entsteht innerhalb der Box zwischen Inhalt und Rand.</span>
    </div>
  </div>
</div>

## Mini-Demo: Flexbox und Grid lesen denselben Gedanken

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gap gehört nicht zu einer einzigen Layoutart</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Flex mit gap</strong></p>
      <div style="display:flex; gap:0.7rem;">
        <span style="padding:0.55rem 0.75rem; border-radius:12px; background:#dbeafe; font-weight:700;">Neu</span>
        <span style="padding:0.55rem 0.75rem; border-radius:12px; background:#dcfce7; font-weight:700;">Hilfe</span>
        <span style="padding:0.55rem 0.75rem; border-radius:12px; background:#fde68a; font-weight:700;">Kontakt</span>
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Grid mit gap</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.7rem;">
        <div style="padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">1</div>
        <div style="padding:0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">2</div>
        <div style="padding:0.65rem; border-radius:12px; background:#fde68a; font-weight:700;">3</div>
      </div>
    </div>
  </div>
  <p>Ob Reihe oder Raster: In beiden Fällen beschreibt <code>gap</code> die <strong>Luft zwischen Layout-Kindern</strong>.</p>
</div>

```css
.leiste {
  display: flex;
  gap: 0.75rem;
}

.karten {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

## Eine ruhige Prüfstrategie

1. Welcher Container ordnet die Kinder an?
2. Geht es um Luft *zwischen* Kindern oder außen an einem Baustein?
3. Soll der Abstand überall gleichmäßig wirken?
4. Dann ist <code>gap</code> oft der ruhigere erste Gedanke.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>gap</code> beantwortet die Frage „Wie weit stehen die Layout-Kinder voneinander weg?“ – nicht „Wie viel Rand hat dieses einzelne Element?“</p>
</div>
