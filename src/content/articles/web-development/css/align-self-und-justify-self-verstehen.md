---
title: Align-Self und Justify-Self verstehen
description: Verstehe, wie einzelne Elemente innerhalb eines Layouts anders ausgerichtet werden können, ohne gleich den ganzen Container umzubauen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - align-self-und-justify-self-verstehen
learningGoals:
  - Du erklärst die Grundidee von align-self und justify-self.
  - Du unterscheidest Container-Ausrichtung und Einzel-Ausrichtung sauber.
  - Du liest Ausrichtung eher über Achsen und Bezugspunkt als über bloßes Verschieben.
practiceIdeas:
  - Vergleiche einen Container mit gemeinsamer Ausrichtung und ein einzelnes Element mit Sonderrolle.
  - Prüfe in einem Grid, ob nur ein Element anders sitzen soll.
  - Lies auffällige Kacheln oder Call-to-Action-Elemente eher als Einzelausrichtung als als Margin-Hack.
commonMistakes:
  - align-self und justify-content gleichzusetzen.
  - zu denken, jede Einzelabweichung müsse mit margin gelöst werden.
  - horizontale und vertikale Ausrichtung durcheinanderzubringen.
keyTakeaways:
  - align-self und justify-self wirken auf einzelne Elemente.
  - Container-Regeln und Einzel-Regeln lösen unterschiedliche Probleme.
  - Wer die Achsen mitdenkt, liest Ausrichtungsfragen deutlich ruhiger.
recognizeSignals:
  - Es geht um ein einzelnes Element, das sich in einem Grid oder Layout anders verhalten soll.
  - Du sollst erklären, warum nicht alle Kacheln dieselbe Position im Feld haben.
  - In Beispielen ist der Bezug zum Container wichtiger als die Farbe des Elements.
selfCheckPoints:
  - Kann ich Container-Ausrichtung und Einzel-Ausrichtung trennen?
  - Kann ich erklären, wann align-self sinnvoller ist als eine globale Regel?
  - Kann ich Achse und Bezugspunkt bei einer Ausrichtung benennen?
tags:
  - css
  - alignment
  - grid
  - flex
level: mittel
draft: false
---

## Grundidee

Oft sollen sich Elemente in einem Container ähnlich verhalten. Manchmal braucht aber **ein einziges Element** eine andere Position, zum Beispiel eine hervorgehobene Karte oder ein besonderer Button. Genau dann sind `align-self` und `justify-self` interessant.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Kachel soll ausgerichtet hervorstechen</h3>
  <p>In einer kleinen Kartenübersicht stehen alle Elemente ordentlich im Raster. Eine Aktionskarte soll jedoch unten rechts sitzen, ohne dass die übrigen Karten ihre Position ändern. Hier wird nicht der ganze Container neu ausgerichtet, sondern ein einzelnes Element.</p>
</div>

## Erst die Grundfrage stellen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Regel für alle?</strong>
    <span>Dann geht es eher um Container-Eigenschaften wie `align-items` oder `justify-content`.</span>
  </div>
  <div class="visual-item">
    <strong>Ausnahme für eines?</strong>
    <span>Dann ist eine Einzelregel wie `align-self` oder `justify-self` oft passender.</span>
  </div>
</div>

## Mini-Demo: gemeinsame Regel oder Sonderrolle?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gleicher Container, aber eine Karte darf anders sitzen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Alle ähnlich ausgerichtet</strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.6rem; height:10rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1; align-items:start; justify-items:start;">
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Alle Elemente folgen derselben Grundausrichtung.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Eine Karte als Ausnahme</strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.6rem; height:10rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1; align-items:start; justify-items:start;">
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.6rem; background:#f59e0b; border-radius:10px; align-self:end; justify-self:end;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Nur eine Karte nutzt eine eigene Ausrichtung innerhalb ihres Feldes.</p>
    </div>
  </div>
</div>

## Die Rollen der beiden Eigenschaften

<div class="compare-card">
  <p class="card-kicker">Achsen ruhig lesen</p>
  <h3>Welche Richtung ist gemeint?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>align-self</strong>
      <span>Wirkt auf die Ausrichtung eines einzelnen Elements entlang der Querachse beziehungsweise Blockachse des Layouts.</span>
    </div>
    <div class="compare-item">
      <strong>justify-self</strong>
      <span>Wirkt auf die Ausrichtung eines einzelnen Elements entlang der Haupt- oder Inline-Achse seines Feldes, besonders gut sichtbar in Grid.</span>
    </div>
  </div>
</div>

```css
.kachel-besonders {
  align-self: end;
  justify-self: end;
}
```

## Warum das didaktisch nützlich ist

Viele Lernende lösen Sonderpositionen zuerst mit `margin`, obwohl eigentlich eine **Ausrichtungsregel innerhalb des Feldes** gemeint ist. Wer `self`-Eigenschaften kennt, sieht ruhiger:

- Was ist eine Container-Entscheidung?
- Was ist eine Ausnahme für ein einzelnes Element?
- Welche Achse ist betroffen?

## Eine ruhige Prüfstrategie

1. Soll sich der ganze Container anders verhalten?
2. Oder nur ein einzelnes Element?
3. Innerhalb welches Felds wird ausgerichtet?
4. Welche Achse ist betroffen?

<div class="note-panel">
  <p><strong>Merke:</strong> `align-self` und `justify-self` sind keine allgemeinen Verschiebe-Werkzeuge, sondern <strong>Einzel-Ausrichtung innerhalb eines bestehenden Layouts</strong>.</p>
</div>
