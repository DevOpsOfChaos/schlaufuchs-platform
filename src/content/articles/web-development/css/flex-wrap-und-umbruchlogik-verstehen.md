---
title: Flex-Wrap und Umbruchlogik verstehen
description: Verstehe, warum Flex-Elemente ohne wrap oft in einer Zeile bleiben und wie flex-wrap den sichtbaren Umbruch in Karten- und Buttonreihen steuert.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - flex-wrap-und-umbruchlogik-verstehen
learningGoals:
  - Du erklärst die Rolle von flex-wrap in Flex-Containern.
  - Du beschreibst sichtbar den Unterschied zwischen einer einzigen Reihe und mehreren umbrochenen Reihen.
  - Du prüfst bei engen Layouts zuerst die Umbruchlogik und nicht sofort Einzelbreiten.
practiceIdeas:
  - Vergleiche eine Kartenreihe mit und ohne Umbruch.
  - Beobachte bei Buttons oder Badges, wann eine Zeile zu eng wird.
  - Prüfe bei einem kaputten Layout zuerst, ob der Container überhaupt umbrechen darf.
commonMistakes:
  - nur die Breite der Kinder zu ändern, obwohl der Container nicht umbrechen darf.
  - Flexbox automatisch mit Zeilenumbruch gleichzusetzen.
  - ein überfülltes Layout als Größenproblem zu lesen, obwohl die Umbruchregel fehlt.
keyTakeaways:
  - Flex-Elemente bleiben ohne wrap oft in einer Reihe.
  - flex-wrap erlaubt, dass Elemente bei Platzmangel in die nächste Zeile wechseln.
  - Gute Flex-Layouts brauchen nicht nur Ausrichtung, sondern auch eine ruhige Umbruchlogik.
recognizeSignals:
  - Es geht um Kartenreihen, Buttongruppen oder Filterchips, die in einer Zeile zu eng werden.
  - Du sollst erklären, warum Elemente zusammengedrückt wirken oder aus dem Container laufen.
  - In Beispielen ist der Container wichtiger als das einzelne Kind-Element.
selfCheckPoints:
  - Kann ich erklären, was flex-wrap sichtbar ändert?
  - Kann ich erkennen, ob ein Container nur eine Zeile oder mehrere Reihen bilden darf?
  - Kann ich begründen, wann wrap ruhiger ist als starres Zusammendrücken?
tags:
  - css
  - flexbox
  - wrap
  - layout
level: einfach
draft: false
---

## Grundidee

Ein Flex-Container richtet seine Kinder zunächst entlang einer Achse aus. Ohne weitere Regel bleiben diese Elemente oft **in einer einzigen Reihe**. Genau an dieser Stelle wird <code>flex-wrap</code> wichtig: Es entscheidet, ob Elemente bei Platzmangel in derselben Zeile bleiben oder **sichtbar in die nächste Zeile umbrechen dürfen**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Reihe von Filterchips wird auf dem Handy zu eng</h3>
  <p>Mehrere Filterchips sehen auf breiter Fläche ruhig nebeneinander aus. Auf schmaler Fläche wirken sie schnell gedrängt oder laufen aus dem Bereich heraus. Statt sofort jede einzelne Breite anzufassen, lohnt sich zuerst die Frage: <strong>Darf der Container überhaupt umbrechen?</strong></p>
</div>

## Was flex-wrap steuert

<div class="visual-grid">
  <div class="visual-item">
    <strong>nowrap</strong>
    <span>Die Elemente sollen möglichst in einer Reihe bleiben.</span>
  </div>
  <div class="visual-item">
    <strong>wrap</strong>
    <span>Die Elemente dürfen bei Platzmangel in eine neue Zeile wechseln.</span>
  </div>
  <div class="visual-item">
    <strong>Wichtige Denkfrage</strong>
    <span>Ist der Engpass ein Kind-Problem oder ein Zeilen-Problem des Containers?</span>
  </div>
</div>

## Mini-Demo: dieselben Karten, andere Umbruchlogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der Container entscheidet, ob eine zweite Zeile entstehen darf</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Ohne wrap gedacht</strong></p>
      <div style="display:flex; flex-wrap:nowrap; gap:0.55rem; overflow:hidden; padding:0.8rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">HTML</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">CSS</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#fde68a; font-weight:700;">JS</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#fecdd3; font-weight:700;">A11y</span>
      </div>
      <p style="margin:0.55rem 0 0;">Alles soll in eine Zeile. Der Container wird schnell eng und unruhig.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Mit wrap gedacht</strong></p>
      <div style="display:flex; flex-wrap:wrap; gap:0.55rem; padding:0.8rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">HTML</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">CSS</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#fde68a; font-weight:700;">JS</span>
        <span style="min-width:6rem; padding:0.65rem; border-radius:12px; background:#fecdd3; font-weight:700;">A11y</span>
      </div>
      <p style="margin:0.55rem 0 0;">Die Inhalte bleiben lesbar, weil eine zweite Reihe erlaubt ist.</p>
    </div>
  </div>
</div>

## Warum Breite allein nicht reicht

Wenn der Container kein Umbruchverhalten zulässt, kann es passieren, dass du Breiten, Innenabstände oder Schriftgrößen veränderst, ohne die eigentliche Ursache zu lösen. Dann behandelst du Symptome, nicht die Grundlogik des Layouts.

```css
.filterleiste {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

Mit dieser Regel sagst du nicht: „Alle Kinder werden kleiner.“  
Du sagst: „Wenn es zu eng wird, dürfen sie in eine neue Zeile gehen.“

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Wer ist zuständig?</strong>
    <span>Prüfe zuerst den Flex-Container, nicht nur das einzelne Kind.</span>
  </div>
  <div class="step-item">
    <strong>2. Eine Zeile oder mehrere?</strong>
    <span>Soll das Layout bewusst kompakt bleiben oder darf es Reihen bilden?</span>
  </div>
  <div class="step-item">
    <strong>3. Erst dann Breiten prüfen</strong>
    <span>Wenn die Umbruchlogik passt, lassen sich Kinder ruhiger dimensionieren.</span>
  </div>
  <div class="step-item">
    <strong>4. Sichtbar lesen</strong>
    <span>Wirken die Elemente ruhig gruppiert oder zusammengedrückt?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>flex-wrap</code> ist keine Kleinigkeit. Es entscheidet, ob ein Flex-Layout bei wenig Platz ruhig weiterarbeiten darf oder in einer Zeile festhängt.</p>
</div>
