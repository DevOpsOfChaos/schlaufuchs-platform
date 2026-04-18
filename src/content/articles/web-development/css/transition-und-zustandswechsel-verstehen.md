---
title: Transition und Zustandswechsel verstehen
description: Verstehe, wie CSS-Transitions sichtbare Zustandswechsel ruhiger machen und warum sie Wirkung nur zwischen zwei Zuständen entfalten.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - transition-und-zustandswechsel-verstehen
learningGoals:
  - Du erklärst die Grundidee von CSS-Transitions.
  - Du beschreibst, warum eine Transition zwischen Zuständen und nicht einfach „immer“ wirkt.
  - Du liest Hover- oder Focus-Effekte eher als Übergang zwischen zwei Situationen.
practiceIdeas:
  - Vergleiche eine Karte mit abruptem Hover-Effekt und eine mit ruhigem Übergang.
  - Lies zuerst den Ausgangszustand und danach den Zielzustand.
  - Prüfe, ob eine Rückmeldung informativ oder nur dekorativ wirkt.
commonMistakes:
  - zu glauben, dass transition allein schon eine sichtbare Veränderung erzeugt.
  - Übergangsdauer mit Zielzustand zu verwechseln.
  - Effekte zu stark zu machen, obwohl nur eine kleine Rückmeldung nötig wäre.
keyTakeaways:
  - Transition beschreibt den Weg zwischen zwei Zuständen.
  - Ohne Zustandsänderung gibt es keinen sichtbaren Übergang.
  - Gute Transitions machen Interaktion lesbarer, nicht bloß bunter.
recognizeSignals:
  - Es geht um Hover, Focus, aktive Zustände oder kleine UI-Rückmeldungen.
  - Du sollst erklären, warum etwas weich statt abrupt reagiert.
  - In Beispielen zählt die Veränderung zwischen Ausgang und Ziel.
selfCheckPoints:
  - Kann ich erklären, welche zwei Zustände verbunden werden?
  - Kann ich benennen, was die Transition ruhiger macht?
  - Kann ich begründen, wann eine Transition sinnvoll ist und wann nicht?
tags:
  - css
  - transition
  - hover
  - focus
level: einfach
draft: false
---

## Grundidee

Eine Transition erzeugt keine neue Gestaltungsidee, sondern macht einen **bereits vorhandenen Zustandswechsel** sichtbar ruhiger. Genau deshalb ist die wichtigste Frage oft nicht „Welche Dauer nehme ich?“, sondern: **Zwischen welchen zwei Zuständen wird hier gewechselt?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Kartenfläche reagiert auf Hover</h3>
  <p>Wenn eine Lernkarte beim Darüberfahren leicht ansteigt oder ihre Schattenwirkung verändert, ist die eigentliche Information nicht „Animation“, sondern: Diese Karte ist gerade aktiv und anklickbar. Die Transition macht diesen Wechsel besser lesbar.</p>


## Mini-Demo: Sprung oder Übergang?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Zieländerung ist ähnlich – der Weg dorthin nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne Transition</strong></p>
      <div style="display:flex; align-items:center; justify-content:center; width:8rem; height:3rem; border-radius:999px; background:#c7d2fe; font-weight:700;">Hover</div>
      <p style="margin:0.55rem 0 0;">Der Zustand wechselt hart und ohne sichtbaren Übergang.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Transition</strong></p>
      <div style="display:flex; align-items:center; justify-content:center; width:8rem; height:3rem; border-radius:999px; background:#93c5fd; font-weight:700; box-shadow:0 0 0 6px rgba(147,197,253,.18);">Hover</div>
      <p style="margin:0.55rem 0 0;">Der Wechsel wird als Zustandsübergang lesbar statt als harter Sprung.</p>
    </div>
  </div>
</div>

## Transition liest man als Weg von A nach B

<div class="visual-grid">
  <div class="visual-item">
    <strong>Ausgangszustand</strong>
    <span>Wie sieht das Element vorher aus?</span>
  </div>
  <div class="visual-item">
    <strong>Zielzustand</strong>
    <span>Was ändert sich bei Hover, Focus oder Active?</span>
  </div>
  <div class="visual-item">
    <strong>Übergang</strong>
    <span>Wie ruhig oder abrupt wird die Veränderung dazwischen sichtbar?</span>
  </div>
</div>

## Mini-Demo: abrupt oder lesbar?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Veränderung ist ähnlich – der Weg dorthin nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne Transition</strong></p>
      <div style="padding:0.9rem; border-radius:14px; background:white; border:1px solid #e2e8f0; box-shadow:none;">
        <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#dbeafe; font-weight:700;">Karte springt direkt</div>
      </div>
      <p style="margin:0.55rem 0 0;">Der Wechsel wirkt plötzlich. Die Rückmeldung ist da, aber eher hart.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Transition</strong></p>
      <div style="padding:0.9rem; border-radius:14px; background:white; border:1px solid #e2e8f0;">
        <div style="padding:0.8rem 0.9rem; border-radius:12px; background:#c7d2fe; font-weight:700; box-shadow:0 10px 18px rgba(79,70,229,0.16); transform:translateY(-2px);">Karte reagiert ruhiger</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Veränderung lässt sich besser als Zustandswechsel lesen, nicht nur als Sprung.</p>
    </div>
  </div>
</div>

```css
.karte {
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.karte:hover,
.karte:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px rgba(15, 23, 42, 0.16);
}
```

## Was eine gute Transition leistet

<div class="compare-card">
  <p class="card-kicker">Ruhige Lesart</p>
  <h3>Nicht Effektshow, sondern Interaktionssignal</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sinnvoll</strong>
      <span>Kleine Zustandswechsel werden lesbarer und freundlicher.</span>
    </div>
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Zu starke Bewegung überdeckt die eigentliche Information und wirkt unruhig.</span>
    </div>
  </div>
</div>

## Transition arbeitet oft mit Darstellungsänderungen zusammen

Besonders gut lesbar wird Transition oft dort, wo Farben, Schatten oder kleine Transform-Effekte nicht hart springen, sondern als Zustand erkennbar ineinander übergehen.

## Eine ruhige Prüfstrategie

1. Welcher Zustand ist normal?
2. Welcher Zustand ist aktiv oder fokussiert?
3. Welche Eigenschaft soll sich sichtbar ändern?
4. Erst danach Dauer und Timing fein abstimmen.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Transition ist nicht die Interaktion selbst, sondern der <strong>sichtbare Übergang zwischen zwei Zuständen</strong>.</p>
</div>
