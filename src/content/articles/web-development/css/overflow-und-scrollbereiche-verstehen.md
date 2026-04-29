---
title: "Overflow und Scrollbereiche verstehen"
description: "Verstehe, was passiert, wenn Inhalt größer ist als seine Box, und wie overflow sichtbar steuert, ob Inhalt herausragt, abgeschnitten wird oder in einem Scrollbereich bleibt."
subject: "web-development"
section: "CSS"
topicPath: ["css", "overflow-und-scrollbereiche-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Nicht jeder Inhalt passt automatisch in seine sichtbare Box. Genau dann wird <code>overflow</code> wichtig: Die Eigenschaft beschreibt, **was mit Inhalt passiert, der größer ist als der verfügbare Raum**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Codekasten ist schmaler als sein Inhalt</h3>
  <p>Ein Beispieltext oder ein langer Codeabschnitt passt nicht vollständig in eine kleine Karte. Jetzt stellt sich nicht nur die Frage nach Größe, sondern nach Verhalten: Darf der Inhalt überstehen, soll er abgeschnitten werden oder bekommt der Bereich eine eigene Scrollmöglichkeit?</p>
</div>

## Was overflow beantwortet

<div class="visual-grid">
  <div class="visual-item">
    <strong>Passt der Inhalt in die Box?</strong>
    <span>Wenn nein, muss die Darstellung bewusst geregelt werden.</span>
  </div>
  <div class="visual-item">
    <strong>Bleibt der Überstand sichtbar?</strong>
    <span>Dann ragt der Inhalt optisch über die gedachte Begrenzung hinaus.</span>
  </div>
  <div class="visual-item">
    <strong>Entsteht ein Scrollbereich?</strong>
    <span>Dann bleibt die Box begrenzt und der Inhalt wird innerhalb dieser Fläche bewegt.</span>
  </div>
</div>

## Mini-Demo: dieselbe Box, anderes Overflow-Verhalten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was bei zu viel Inhalt sichtbar anders wirkt</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante A – sichtbar überstehend</strong></p>
      <div style="height:5rem; overflow:visible; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Dieser Textblock ist absichtlich zu lang und ragt sichtbar aus seiner kleinen Box heraus, wenn keine Begrenzung eingreift.
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante B – verborgen</strong></p>
      <div style="height:5rem; overflow:hidden; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Dieser Textblock ist absichtlich zu lang und wird an der Boxgrenze abgeschnitten. Die Fläche bleibt sauber, aber nicht alles bleibt sichtbar.
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante C – scrollbar</strong></p>
      <div style="height:5rem; overflow:auto; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Dieser Textblock ist absichtlich zu lang und bleibt in einer begrenzten Fläche. Statt überzustehen oder abgeschnitten zu wirken, entsteht ein eigener Scrollbereich.
      </div>
    </div>
  </div>
</div>

## Zweite Mini-Demo: breite Tabelle oder horizontale Scrolllogik?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Nicht jeder Überstand ist ein vertikales Textproblem</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne eigene Begrenzung</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        <div style="display:flex; gap:0.35rem; font-weight:700; white-space:nowrap;">
          <span>Montag</span><span>08:00</span><span>Mathematik</span><span>Raum 214</span><span>Lehrkraft</span><span>Hausaufgabe</span>
        </div>
      </div>
      <p style="margin:0.55rem 0 0;">Breite Inhalte drücken sich einfach weiter nach rechts.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit horizontaler Scrolllogik</strong></p>
      <div style="overflow:auto; padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        <div style="display:flex; gap:0.35rem; font-weight:700; white-space:nowrap; min-width:max-content;">
          <span>Montag</span><span>08:00</span><span>Mathematik</span><span>Raum 214</span><span>Lehrkraft</span><span>Hausaufgabe</span>
        </div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Box bleibt ruhig, der breite Inhalt erhält innerhalb des Bereichs einen eigenen Bewegungsraum.</p>
    </div>
  </div>
</div>

## Overflow ändert nicht den Inhalt selbst

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Inhaltsmenge und Boxverhalten sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu viel Inhalt</strong>
      <span>Der Text, das Bild oder die Tabelle ist größer als die sichtbare Fläche.</span>
    </div>
    <div class="compare-item">
      <strong>Overflow-Regel</strong>
      <span>Sie entscheidet, wie diese Überfülle dargestellt wird.</span>
    </div>
  </div>
</div>

```css
.beispiel {
  height: 8rem;
  overflow: auto;
}
```

Diese Regel sagt nicht: „Der Inhalt wird kleiner.“  
Sie sagt: „Die Box bleibt begrenzt, der Rest wird innerhalb dieser Fläche scrollbar.“

## Wann Scrollbereiche sinnvoll sein können

Scrollbereiche können nützlich sein bei

- langen Codebeispielen,
- breiten Tabellen,
- kleinen Vorschaufenstern,
- oder bewusst begrenzten Seitenteilen.

Sie sind aber nicht automatisch immer gut. Manchmal sollte nicht die Box begrenzt werden, sondern das Layout selbst anders gedacht werden.

## Eine ruhige Prüfstrategie

1. Ist die Box bewusst begrenzt?
2. Passt der Inhalt sichtbar nicht hinein?
3. Soll der Überstand sichtbar bleiben, verborgen sein oder scrollbar werden?
4. Handelt es sich eher um zu viel Höhe oder zu viel Breite?
5. Erst dann ist <code>overflow</code> die passende Stellschraube.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>overflow</code> beantwortet nicht „Wie groß ist der Inhalt?“, sondern „Was passiert, wenn Inhalt größer ist als seine Box?“</p>
</div>
