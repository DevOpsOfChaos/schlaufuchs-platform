---
title: "em, rem und px vergleichen"
description: "Verstehe, wie sich px, em und rem als CSS-Einheiten unterscheiden und warum ihr Bezugspunkt für Größen und Abstände entscheidend ist."
subject: "web-development"
section: "CSS"
topicPath: ["css", "em-rem-und-px-vergleichen"]
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

CSS-Einheiten sind nicht nur Zahlen mit Anhängsel. Sie sagen auch etwas darüber aus, **woran sich eine Größe orientiert**. Genau deshalb ist der Unterschied zwischen `px`, `em` und `rem` didaktisch wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Karten mit scheinbar ähnlichem Abstand</h3>
  <p>Alle drei Karten bekommen ungefähr denselben Innenabstand. Trotzdem reagieren sie unterschiedlich, sobald Schriftgrößen oder Kontexte verändert werden. Der Grund liegt nicht in der Form, sondern im <strong>Bezugspunkt der Einheit</strong>.</p>
</div>

## Die drei Bezugspunkte

<div class="visual-grid">
  <div class="visual-item">
    <strong>px</strong>
    <span>Direkt und fest gedacht. Der Wert hängt nicht an einem Textkontext.</span>
  </div>
  <div class="visual-item">
    <strong>rem</strong>
    <span>Relativ zur Wurzel des Dokuments. Gut, wenn Größen global zusammenhängen sollen.</span>
  </div>
  <div class="visual-item">
    <strong>em</strong>
    <span>Relativ zum lokalen Kontext. Gut, wenn sich eine Komponente mit ihrer Umgebung mitbewegen soll.</span>
  </div>
</div>

## Mini-Demo: gleiche Idee, andere Bezugspunkte

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Zahl ist nicht alles – der Bezugspunkt macht den Unterschied</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:16px; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>px</strong></p>
      <div style="padding:16px; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Diese Karte hat 16px Innenabstand.
      </div>
      <p style="margin:0.55rem 0 0;">Der Wert ist direkt gesetzt und nicht an einen Schriftkontext gebunden.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc; font-size:1rem;">
      <p style="margin:0 0 0.5rem;"><strong>rem</strong></p>
      <div style="padding:1rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Diese Karte hat 1rem Innenabstand.
      </div>
      <p style="margin:0.55rem 0 0;">Der Abstand orientiert sich am globalen Wurzelwert.</p>
    </div>
    <div style="padding:1em; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc; font-size:1.25rem;">
      <p style="margin:0 0 0.5rem;"><strong>em</strong></p>
      <div style="padding:1em; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Diese Karte hat 1em Innenabstand.
      </div>
      <p style="margin:0.55rem 0 0;">Hier wächst der Abstand mit dem lokalen Textkontext mit.</p>
    </div>
  </div>
</div>

## Warum em manchmal stärker reagiert

Wenn eine Komponente selbst eine größere Schriftgröße hat, wächst bei `em` oft auch der Abstand in derselben Komponente. Das ist kein Fehler, sondern Teil der Logik.

<div class="compare-card">
  <p class="card-kicker">Wichtiger Vergleich</p>
  <h3>Globaler Bezug oder lokaler Bezug?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>rem</strong>
      <span>Gut, wenn mehrere Bereiche über dieselbe Grundgröße zusammenpassen sollen.</span>
    </div>
    <div class="compare-item">
      <strong>em</strong>
      <span>Gut, wenn eine Komponente mitsamt ihrer Typografie flexibel mitwachsen soll.</span>
    </div>
    <div class="compare-item">
      <strong>px</strong>
      <span>Gut, wenn ein Wert sehr direkt und unabhängig vom Textkontext gesetzt werden soll.</span>
    </div>
  </div>
</div>

```css
.card-global {
  padding: 1rem;
}

.card-lokal {
  font-size: 1.25rem;
  padding: 1em;
}
```

## Eine ruhige Prüfstrategie

1. Braucht der Wert einen festen oder einen relativen Bezug?
2. Soll sich die Größe global am Dokument oder lokal an der Komponente orientieren?
3. Würde ein lokaler Bezug bei verschachtelten Bereichen sichtbar mithelfen oder eher verwirren?
4. Erst dann die konkrete Einheit festlegen.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Einheiten ist nicht nur die Zahl wichtig, sondern die Frage: <em>Woran hängt sie?</em></p>
</div>
