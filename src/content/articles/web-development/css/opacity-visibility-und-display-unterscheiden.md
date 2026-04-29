---
title: "Opacity, Visibility und Display unterscheiden"
description: "Verstehe, wie sich Elemente sichtbar ausblenden lassen und warum opacity, visibility und display trotz ähnlicher Wirkung fachlich Verschiedenes tun."
subject: "web-development"
section: "CSS"
topicPath: ["css", "opacity-visibility-und-display-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Nicht jedes "Ausblenden" funktioniert in CSS gleich. Manchmal soll ein Element nur **sichtbar verschwinden**, manchmal soll es **keinen Platz mehr belegen**. Genau an dieser Stelle muss man `opacity`, `visibility` und `display` sauber unterscheiden.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Fehlermeldung unter einem Formularfeld</h3>
  <p>Solange kein Fehler vorliegt, soll die Meldung vielleicht nicht sichtbar sein. Jetzt ist die fachliche Frage: Soll der Platz für die Zeile reserviert bleiben oder soll das ganze Element aus dem Layout verschwinden? Diese Entscheidung bestimmt, welcher CSS-Wert sinnvoll ist.</p>
</div>

## Drei unterschiedliche Fragen

<div class="visual-grid">
  <div class="visual-item">
    <strong>opacity</strong>
    <span>Wie transparent wirkt das Element?</span>
  </div>
  <div class="visual-item">
    <strong>visibility</strong>
    <span>Soll das Element sichtbar oder unsichtbar sein, aber seinen Platz behalten?</span>
  </div>
  <div class="visual-item">
    <strong>display</strong>
    <span>Soll das Element überhaupt noch im Layout mitgezählt werden?</span>
  </div>
</div>

## Mini-Demo: gleich unsichtbar, aber nicht gleich behandelt

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Drei Karten, drei verschiedene Wirkungen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>opacity: 0</strong></p>
      <div style="display:grid; gap:0.55rem;">
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#60a5fa; opacity:0;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Die mittlere Karte ist unsichtbar, ihr Platz bleibt aber sichtbar reserviert.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>visibility: hidden</strong></p>
      <div style="display:grid; gap:0.55rem;">
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#f59e0b; visibility:hidden;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Auch hier bleibt die Lücke erhalten, obwohl der Inhalt nicht sichtbar ist.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>display: none</strong></p>
      <div style="display:grid; gap:0.55rem;">
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#34d399; display:none;"></div>
        <div style="height:2.8rem; border-radius:12px; background:#cbd5e1;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Die mittlere Karte zählt im Layout nicht mehr mit. Der Rest rückt zusammen.</p>
    </div>
  </div>
</div>

## Die wichtigste Unterscheidung

<div class="compare-card">
  <p class="card-kicker">Layoutfrage</p>
  <h3>Unsichtbar sein ist nicht dasselbe wie nicht da sein</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>opacity / visibility</strong>
      <span>Das Element bleibt im normalen Layout meist vorhanden, auch wenn man es nicht sieht.</span>
    </div>
    <div class="compare-item">
      <strong>display: none</strong>
      <span>Das Element verschwindet aus dem Layoutfluss. Andere Elemente können den Platz übernehmen.</span>
    </div>
  </div>
</div>

```css
.hinweis {
  opacity: 0;
}

.hinweis-versteckt {
  visibility: hidden;
}

.hinweis-entfernt {
  display: none;
}
```

## Wann welche Lesart hilfreich ist

- `opacity`, wenn die sichtbare Wirkung im Vordergrund steht,
- `visibility`, wenn etwas unsichtbar sein soll, aber der Platz ruhig bleiben darf,
- `display`, wenn das Element im Layout gerade gar nicht mitspielen soll.

## Eine ruhige Prüfstrategie

1. Soll man das Element nur nicht sehen?
2. Soll sein Platz trotzdem erhalten bleiben?
3. Oder soll die Umgebung wirklich nachrücken?
4. Erst danach wählst du zwischen `opacity`, `visibility` und `display`.

<div class="note-panel">
  <p><strong>Merke:</strong> `display: none` ist keine stärkere Form von Unsichtbarkeit, sondern eine <strong>andere Layoutentscheidung</strong>.</p>
</div>
