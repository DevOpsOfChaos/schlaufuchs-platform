---
title: "Pseudoklassen – Hover, Focus und Active verstehen"
description: "Verstehe, wie Zustände von Links, Buttons und Formularfeldern mit Pseudoklassen sichtbar gemacht werden."
subject: "web-development"
section: "CSS"
topicPath: ["css", "pseudoklassen-hover-focus-und-active-verstehen"]
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

Mit Pseudoklassen reagiert CSS auf **Zustände** eines Elements. Ein Link bleibt derselbe Link, aber sein Aussehen kann sich ändern,

- wenn man mit der Maus darübergeht,
- wenn er per Tastatur fokussiert ist,
- oder während er gerade gedrückt wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Button soll Rückmeldung geben</h3>
  <p>Ein Button wirkt ruhiger und klarer, wenn Nutzende sehen, dass sie ihn gerade ansteuern, fokussiert haben oder aktiv drücken. Pseudoklassen machen genau diese Rückmeldungen sichtbar.</p>
</div>

## Drei wichtige Zustände

<div class="visual-grid">
  <div class="visual-item">
    <strong>:hover</strong>
    <span>Zeigt meist eine Reaktion, wenn der Mauszeiger über dem Element liegt.</span>
  </div>
  <div class="visual-item">
    <strong>:focus</strong>
    <span>Zeigt, dass das Element gerade den Tastaturfokus hat oder aktiv angewählt wurde.</span>
  </div>
  <div class="visual-item">
    <strong>:active</strong>
    <span>Zeigt den Moment, in dem das Element gerade gedrückt oder aktiviert wird.</span>
  </div>
</div>

## Mini-Demo: ein Button in drei Zuständen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Dieselbe Aktion, aber unterschiedliche Rückmeldung</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(14rem,1fr)); gap:0.85rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ruhezustand</strong></p>
      <button type="button" style="padding:0.7rem 1rem; border-radius:12px; border:1px solid #cbd5e1; background:white; font-weight:700;">Konto öffnen</button>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Hover / Fokus</strong></p>
      <button type="button" style="padding:0.7rem 1rem; border-radius:12px; border:2px solid #2563eb; background:#dbeafe; box-shadow:0 0 0 3px rgba(37,99,235,0.15); font-weight:700;">Konto öffnen</button>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Active</strong></p>
      <button type="button" style="padding:0.7rem 1rem; border-radius:12px; border:2px solid #1d4ed8; background:#bfdbfe; transform:translateY(1px); font-weight:700;">Konto öffnen</button>
    </div>
  </div>
  <p>Hier wird sichtbar: Zustände sind nicht bloß Deko. Sie geben Rückmeldung darüber, <strong>was gerade mit dem Element passiert</strong>.</p>
</div>

## Hover ist nicht genug

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Mauszustand und Tastaturzustand nicht vermischen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>:hover</strong>
      <span>Hilft vor allem beim Überfahren mit der Maus.</span>
    </div>
    <div class="compare-item">
      <strong>:focus</strong>
      <span>Ist besonders wichtig für Tastaturbedienung und klare Orientierung auf der Seite.</span>
    </div>
    <div class="compare-item">
      <strong>:active</strong>
      <span>Zeigt einen sehr kurzen Klick- oder Druckmoment an.</span>
    </div>
  </div>
</div>

## Ein kleines CSS-Beispiel

```css
.button:hover,
.button:focus {
  background: #dbeafe;
  border-color: #2563eb;
}

.button:active {
  transform: translateY(1px);
}
```

Hier werden Maus- und Fokuszustand ähnlich sichtbar gemacht, während active nur den kurzen Druckmoment markiert.

## Eine ruhige Prüfstrategie

1. Welcher Zustand soll sichtbar werden?
2. Geht es um Maus, Tastatur oder Klickmoment?
3. Ist die Rückmeldung klar, aber nicht überladen?
4. Bleibt der Fokus gut erkennbar?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Pseudoklassen machen Bedienung sichtbarer. Besonders <code>:focus</code> ist keine Nebensache, sondern ein wichtiger Orientierungspunkt.</p>
</div>
