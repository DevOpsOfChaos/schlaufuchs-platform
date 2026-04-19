---
title: Vererbung in CSS verstehen
description: Verstehe, warum manche CSS-Eigenschaften an Kindelemente weitergegeben werden und andere nicht.
subject: web-development
section: CSS
topicPath:
  - css
  - vererbung-in-css-verstehen
learningGoals:
  - Du erklärst die Grundidee der CSS-Vererbung.
  - Du unterscheidest typische vererbbare und nicht vererbbare Eigenschaften.
  - Du beschreibst, warum Vererbung an manchen Stellen unterbrochen wird.
practiceIdeas:
  - Prüfe, ob eine Textfarbe vom Elternelement übernommen wird.
  - Vergleiche Farbe mit Rahmen oder Abstand.
  - Erkläre, warum eine eigene Regel am Kindelement die Vererbung praktisch unterbricht.
commonMistakes:
  - Zu denken, dass alle CSS-Eigenschaften automatisch weitergegeben werden.
  - Abstand und Rahmen wie Textfarbe zu behandeln.
  - Vererbung und Selektorwirkung zu vermischen.
keyTakeaways:
  - Manche Eigenschaften werden vererbt, andere nicht.
  - Textnahe Eigenschaften wie Farbe vererben sich häufig leichter.
  - Eigene Regeln am Kindelement können die geerbte Wirkung überschreiben.
recognizeSignals:
  - Es geht um Eltern- und Kindelemente im DOM.
  - Du sollst erklären, warum ein Kind dieselbe Farbe oder Schrift übernimmt.
  - In Beispielen wird ein Container formatiert und die Wirkung auf innere Elemente beobachtet.
selfCheckPoints:
  - Kann ich Vererbung in CSS mit Eltern- und Kindelementen erklären?
  - Kann ich Farbe und Border sauber unterscheiden?
  - Kann ich sagen, wann die geerbte Wirkung praktisch endet?
tags:
  - css
  - vererbung
  - dom
  - farbe
level: einfach
draft: false
---

## Grundidee

Im DOM stehen Elemente in Beziehungen zueinander. Ein Container kann Kinder enthalten, diese wiederum weitere Kinder. Genau hier spielt CSS-Vererbung eine Rolle: Manche Eigenschaften werden vom Elternelement an innere Elemente weitergegeben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein ganzer Textblock wird rot</h3>
  <p>Wenn ein Absatz rot formatiert ist, übernehmen Links oder <code>span</code>-Elemente darin oft zunächst dieselbe Schriftfarbe. Der Rahmen des Absatzes wird dagegen nicht automatisch an alle Kinder vererbt. Genau dieser Unterschied ist die Kernidee.</p>
</div>

## Was sich oft leichter vererbt

Textnahe Eigenschaften wie <code>color</code> oder oft auch Schrifteinstellungen wirken eher entlang des Inhaltsbaums weiter. Eigenschaften wie <code>border</code>, <code>margin</code> oder <code>padding</code> betreffen eher die konkrete Box des Elements und werden deshalb nicht einfach an alle Kinder weitergereicht.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Eher vererbbar</p>
    <h3>Textwirkung</h3>
    <p>Farbe, Schriftfamilie oder ähnliche Texteigenschaften wirken oft auch in Kindelementen weiter.</p>
  </section>
  <section>
    <p class="card-kicker">Eher nicht vererbbar</p>
    <h3>Boxwirkung</h3>
    <p>Rahmen, Außenabstände oder Innenabstände gehören zur konkreten Box eines Elements und werden nicht einfach weitergegeben.</p>
  </section>
</div>

## Mini-Demo: Farbe geht weiter, Border nicht einfach mit

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Text und Box getrennt sehen</h3>
  <div style="padding:1rem; border-radius:18px; background:#f8fafc; border:1px solid #cbd5e1;">
    <div style="color:#b91c1c; border:3px solid #16a34a; padding:0.9rem; border-radius:12px; background:white;">
      Eltern-Element mit roter Schrift und grünem Rahmen
      <p style="margin:0.65rem 0 0;">Dieser Absatz übernimmt die rote Schriftfarbe.</p>
      <span>Auch dieses span-Element wirkt rot.</span>
    </div>
    <p style="margin:0.75rem 0 0; color:#475569;">Der grüne Rahmen gehört aber zur Box des Elternelements und umrahmt nicht automatisch jedes Kind extra.</p>
  </div>
</div>

## Vererbung kann unterbrochen werden

Wenn ein Kindelement selbst eine eigene Farbe erhält, wird die bisher geerbte Farbe dort praktisch überschrieben. Die Vererbung ist dann nicht verschwunden, aber die spezifischere Regel am Kindelement ist sichtbarer.

```css
.info {
  color: darkred;
}

.info a {
  color: navy;
}
```

Hier erben Texte in <code>.info</code> zunächst rot. Der Link bekommt aber eine eigene Farbe und sieht deshalb blau aus.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Eltern-Kind-Struktur sehen</strong>
    <span>Welches Element enthält welches?</span>
  </div>
  <div class="step-item">
    <strong>2. Eigenschaft einordnen</strong>
    <span>Geht es um Textwirkung oder eher um eine Boxeigenschaft?</span>
  </div>
  <div class="step-item">
    <strong>3. Eigene Regel am Kind suchen</strong>
    <span>Gibt es dort eine gezieltere Anweisung?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Vererbung heißt in CSS nicht „alles wird weitergereicht“, sondern nur bestimmte Eigenschaften wirken entlang der Struktur weiter.</p>
</div>
