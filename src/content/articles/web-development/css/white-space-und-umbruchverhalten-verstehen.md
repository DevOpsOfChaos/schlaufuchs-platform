---
title: White-Space und Umbruchverhalten verstehen
description: Verstehe, wie white-space bestimmt, ob Text normal umbrechen darf, in einer Zeile bleibt oder Leerraum besonders behandelt.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - white-space-und-umbruchverhalten-verstehen
learningGoals:
  - Du erklärst die Grundidee von white-space.
  - Du unterscheidest normales Umbrechen, Zeilenhalten und bewusst erhaltenen Leerraum.
  - Du beschreibst Umbruchverhalten eher als Leselogik als als bloße CSS-Liste.
practiceIdeas:
  - Vergleiche einen Buttontext, einen Codeausschnitt und einen normalen Absatz.
  - Prüfe, ob Text umbrechen, in einer Zeile bleiben oder Leerzeichen sichtbar bewahren soll.
  - Lies white-space immer mit dem Inhaltstyp zusammen.
commonMistakes:
  - white-space als rein dekorative Detailregel abzutun.
  - no-wrap für lange Texte zu verwenden und damit Layoutprobleme zu erzeugen.
  - normalen Fließtext wie einen Codeblock zu behandeln.
keyTakeaways:
  - white-space steuert, wie Text, Leerraum und Zeilenumbrüche behandelt werden.
  - Unterschiedliche Inhalte brauchen unterschiedliches Umbruchverhalten.
  - Besonders bei Buttons, Tabellen und Code ist white-space gut sichtbar.
recognizeSignals:
  - Es geht um Text, der plötzlich nicht umbrechen soll oder genau seinen Abstand behalten soll.
  - Du sollst erklären, warum ein Label in einer Zeile bleibt oder ein Block horizontal wächst.
  - In Beispielen ist die Textart wichtiger als die Hintergrundfarbe.
selfCheckPoints:
  - Kann ich normales Umbrechen und nowrap unterscheiden?
  - Kann ich erklären, wann erhaltene Leerzeichen sinnvoll sind?
  - Kann ich das Umbruchverhalten aus dem Inhalt heraus begründen?
tags:
  - css
  - white-space
  - text
  - umbruch
level: mittel
draft: false
---

## Grundidee

Nicht jeder Text soll sich gleich verhalten. Ein normaler Absatz darf umbrechen. Ein kurzer Buttontext soll oft kompakt in einer Zeile bleiben. Ein Codebeispiel soll Leerzeichen und Zeilenstruktur oft sichtbarer bewahren. `white-space` steuert genau dieses Verhalten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Texte, drei Anforderungen</h3>
  <p>Ein Fließtext soll gut lesbar umbrechen, ein kleines Statuslabel möglichst nicht auf zwei Zeilen brechen, und ein Terminalbeispiel soll eingerückte Struktur behalten. Dieselbe Standardlogik wäre hier für alle drei unpassend.</p>
</div>

## Mini-Demo: derselbe Raum, unterschiedliches Umbruchverhalten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Text lesen heißt auch, seine Umbruchlogik zu verstehen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(14rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px;">
      <p style="margin:0 0 0.45rem;"><strong>Normaler Absatz</strong></p>
      <div style="width:11rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Ein längerer Erklärungstext darf ruhig auf mehrere Zeilen umbrechen.
      </div>
    </div>
    <div style="padding:0.9rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px;">
      <p style="margin:0 0 0.45rem;"><strong>Statuslabel mit nowrap</strong></p>
      <div style="width:11rem; padding:0.7rem; border-radius:12px; background:white; border:1px solid #cbd5e1; white-space:nowrap; overflow:hidden;">
        Anmeldung erforderlich
      </div>
    </div>
    <div style="padding:0.9rem; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px;">
      <p style="margin:0 0 0.45rem;"><strong>Codeblock mit erhaltenem Leerraum</strong></p>
      <div style="width:11rem; padding:0.7rem; border-radius:12px; background:#0f172a; color:#e2e8f0; font-family:ui-monospace,monospace; border:1px solid #334155; white-space:pre-wrap;">if ok:
  show()
else:
  hide()</div>
    </div>
  </div>
</div>

## Typische Leselogik

<div class="compare-card">
  <p class="card-kicker">Ruhige Trennung</p>
  <h3>Nicht jeder Text ist Fließtext</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>normal</strong>
      <span>Gut für normalen Lesetext, der sich dem verfügbaren Raum anpasst.</span>
    </div>
    <div class="compare-item">
      <strong>nowrap</strong>
      <span>Nützlich für kurze Einheiten, die möglichst zusammenbleiben sollen.</span>
    </div>
    <div class="compare-item">
      <strong>pre / pre-wrap</strong>
      <span>Hilfreich, wenn Leerraum oder Zeilenstruktur selbst Teil der Information sind.</span>
    </div>
  </div>
</div>

```css
.label {
  white-space: nowrap;
}
```

## Warum White-Space oft eine Leseentscheidung ist

<div class="compare-card">
  <p class="card-kicker">Nicht nur Technik</p>
  <h3>Umbruch entscheidet mit darüber, wie ruhig eine Oberfläche gelesen wird</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Mehr Umbruch</strong>
      <span>Kann Inhalte vollständig zeigen, macht Flächen aber oft höher und unruhiger.</span>
    </div>
    <div class="compare-item">
      <strong>Weniger Umbruch</strong>
      <span>Kann kompakter wirken, braucht aber bewusstere Steuerung bei Enge und Überstand.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Ist das normaler Fließtext?
2. Soll der Inhalt möglichst zusammenbleiben?
3. Sind Leerzeichen oder Zeilenumbrüche selbst bedeutungsvoll?
4. Dann erst das passende white-space-Verhalten wählen.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>white-space</code> ist am verständlichsten als <strong>Regel für Textverhalten im Raum</strong> – nicht nur als kleine Sonderoption.</p>
</div>
