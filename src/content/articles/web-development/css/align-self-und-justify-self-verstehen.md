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

Manchmal soll sich ein ganzes Layout ändern. Manchmal soll aber nur **ein einziges Element** eine Sonderrolle bekommen, etwa eine CTA-Karte oder ein Badge. Genau dann helfen `align-self` und `justify-self`, weil sie **nicht die Gruppenregel**, sondern **die Ausnahme** beschreiben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Sonderkachel im ruhigen Raster</h3>
  <p>Vier Karten liegen in einem Grid. Drei sollen oben links in ihrem Feld beginnen. Nur die CTA-Karte soll unten rechts im eigenen Feld sitzen. Dann ist nicht das ganze Layout falsch, sondern nur die Ausrichtung eines einzelnen Elements im vorhandenen Raster anders.</p>
</div>

## Erst die Problemart lesen, dann die Eigenschaft

<div class="step-grid">
  <div class="step-item">
    <strong>1. Alle oder nur eine Ausnahme?</strong>
    <span>Wenn sich alle Kinder ändern sollen, suchst du zuerst bei Container-Regeln. Wenn nur ein Element auffällt, ist eine Self-Regel wahrscheinlicher.</span>
  </div>
  <div class="step-item">
    <strong>2. Innerhalb welches Felds?</strong>
    <span>Self-Regeln richten ein einzelnes Element innerhalb seines bereits vorhandenen Platzes aus.</span>
  </div>
  <div class="step-item">
    <strong>3. Welche Achse?</strong>
    <span>Erst wenn die Richtung klar ist, wird aus „verschieben“ eine sauber benannte Ausrichtungsentscheidung.</span>
  </div>
</div>

## Mini-Demo: Grundregel und Ausnahme sichtbar trennen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein ruhiges Grid und eine absichtliche Sonderrolle</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Alle Karten folgen der Container-Regel</strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.55rem; height:10rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1; align-items:start; justify-items:start;">
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Der Container gibt allen Kindern dieselbe Grundausrichtung.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Eine Karte bekommt eine Sonderrolle</strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.55rem; height:10rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1; align-items:start; justify-items:start;">
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#dbeafe; border-radius:10px;"></div>
        <div style="height:2.7rem; background:#f59e0b; border-radius:10px; align-self:end; justify-self:end;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Nur die orange Karte wird innerhalb ihres eigenen Felds anders ausgerichtet.</p>
    </div>
  </div>
</div>

## Code ruhig lesen

```css
.karten {
  display: grid;
  align-items: start;
  justify-items: start;
}

.karte--cta {
  align-self: end;
  justify-self: end;
}
```

Die ruhige Lesart ist:

- `align-items` und `justify-items` beschreiben die **Grundordnung für alle Kinder**,
- `align-self` und `justify-self` beschreiben die **Ausnahme für genau dieses eine Kind**.

## Vier Lesefragen statt Eigenschafts-Merksätze

<div class="compare-card">
  <p class="card-kicker">Diagnose-Raster</p>
  <h3>Erst die Situation klären, dann die konkrete CSS-Regel</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur ein Element?</strong>
      <span>Dann ist eine Self-Regel wahrscheinlicher als eine globale Container-Regel.</span>
    </div>
    <div class="compare-item">
      <strong>Im klaren Grid-Feld?</strong>
      <span>Dann lassen sich <code>align-self</code> und <code>justify-self</code> besonders ruhig lesen.</span>
    </div>
    <div class="compare-item">
      <strong>Flex-Leiste statt Grid?</strong>
      <span>Dann wird zuerst geprüft, ob dieselbe Eigenschaft dort überhaupt die gesuchte Sonderrolle beschreibt.</span>
    </div>
    <div class="compare-item">
      <strong>Nur optisch verschoben?</strong>
      <span>Dann riecht das eher nach Margin-Notlösung als nach klarer Ausrichtungslogik.</span>
    </div>
  </div>
</div>

## Grid und Flex nicht in einen Topf werfen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Grid denkt in Feldern, Flex stärker in Fluss und Verteilung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Grid-Fall</strong>
      <span>Ein Element sitzt in einem klaren Feld. Dort lassen sich <code>align-self</code> und <code>justify-self</code> als ruhige Einzelausrichtung benennen.</span>
    </div>
    <div class="compare-item">
      <strong>Flex-Fall</strong>
      <span><code>align-self</code> kann weiter eine Einzelausnahme auf der Querachse beschreiben. <code>justify-self</code> löst bei Flex-Items die Hauptachsen-Ausnahme aber nicht auf dieselbe Weise wie im Grid-Leitbild.</span>
    </div>
  </div>
</div>

## Mini-Gegenbild: gleicher Name, andere Tragfähigkeit

<div class="figure-card">
  <p class="card-kicker">Diagnose statt Schlagwort</p>
  <h3>Warum ein Flex-Beispiel mit <code>justify-self</code> nicht automatisch passt</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Grid-Leitbild</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>.karte--cta {
  align-self: end;
  justify-self: end;
}</code></pre>
      <p style="margin:0.6rem 0 0;">Das Element sitzt in einem klaren Feld und bekommt dort bewusst eine Sonderrolle.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Flex-Gegenbild</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>.leiste {
  display: flex;
}
.button--wichtig {
  justify-self: end;
}</code></pre>
      <p style="margin:0.6rem 0 0;">Der gleiche Eigenschaftsname macht daraus noch keine saubere Hauptachsen-Lösung für eine Flex-Leiste.</p>
    </div>
  </div>
</div>

## Drei ähnlich aussehende Fälle bewusst auseinanderhalten

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fall A</p>
    <h3>Grid plus Self-Regeln</h3>
    <p>Das ist das eigentliche Leitbild dieser Seite: eine Einzelausnahme in einem klaren Feld.</p>
  </section>
  <section>
    <p class="card-kicker">Fall B</p>
    <h3>Flex plus gleicher Eigenschaftsname</h3>
    <p>Der wiederkehrende Name allein beweist noch nicht, dass dieselbe didaktische Geschichte erzählt wird.</p>
  </section>
  <section>
    <p class="card-kicker">Fall C</p>
    <h3>Flex plus <code>margin-left: auto</code></h3>
    <p>Das kann als Flex-Vergleich für eine Einzelausnahme nützlich sein, bleibt aber ein anderer Layoutkontext.</p>
  </section>
</div>

## Margin-Hack oder echte Ausrichtung?

Ein häufiger Fehlstart ist, eine Sonderkachel mit großen Margin-Werten „ungefähr passend“ zu verschieben. Das Ergebnis kann optisch ähnlich wirken, ist aber fachlich unruhiger, weil nicht mehr klar beschrieben wird, **warum** das Element genau dort sitzt.

```css
.leiste {
  display: flex;
  gap: 0.5rem;
}

.button--wichtig {
  margin-left: auto;
}
```

Dieses Beispiel ist didaktisch nützlich, weil es zeigt: Die Grundfrage **„nur eine Ausnahme?“** kann bleiben, aber die **passende Mechanik** hängt vom Layoutkontext ab.

## Kurztest: Welche ruhige Lesart passt?

<pre><code>Alle Kinder sollen gleich sitzen            → erst Container-Regel prüfen
Nur ein Kind weicht ab                     → Self-Regel oder passende Einzelmechanik prüfen
Klares Grid-Feld sichtbar                  → Self-Regeln lassen sich besonders ruhig lesen
Flex-Leiste in Hauptachse                  → nicht automatisch dieselbe Geschichte wie Grid
Mit Margins zurechtgeschoben               → eher optischer Workaround als saubere Diagnose</code></pre>

## Eine ruhige Prüfstrategie

1. Geht es um alle Kinder oder nur um eine Ausnahme?
2. Liegt ein klares Grid-Feld vor oder eine Flex-Leiste?
3. Welche Achse ist betroffen?
4. Beschreibt die Regel echte Ausrichtung oder nur optisches Schieben?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>align-self</code> und <code>justify-self</code> sind keine allgemeinen Verschiebe-Werkzeuge. Im Grid beschreiben sie ruhig eine Einzelausnahme im Feld. Ein ähnlicher Eigenschaftsname in einem anderen Layoutkontext erzählt noch nicht dieselbe fachliche Geschichte.</p>
</div>
