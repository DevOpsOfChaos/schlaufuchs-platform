---
title: "flex-grow, flex-shrink und flex-basis verstehen"
description: "Verstehe, wie Flex-Items wachsen, schrumpfen und von welcher Basisgröße sie ausgehen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "flex-grow-flex-shrink-und-flex-basis-verstehen"]
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

Bei Flexbox entscheidet nicht nur die Position, sondern auch das **Größenverhalten** der Items. Dafür sind drei Begriffe besonders wichtig: <code>flex-grow</code>, <code>flex-shrink</code> und <code>flex-basis</code>.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Karten starten gleich und enden trotzdem verschieden breit</h3>
  <p>Beide Karten beginnen mit derselben Basisgröße. Trotzdem wird eine am Ende sichtbar breiter. Die ruhige Frage lautet also nicht nur „Wie breit ist das Element?“, sondern zuerst: <strong>Wovon startet es und wie darf es sich danach verändern?</strong></p>
</div>

## Die drei Rollen ruhig trennen

<div class="visual-grid">
  <div class="visual-item"><strong>flex-basis</strong><span>Die Ausgangsgröße, von der aus das Item gedacht wird.</span></div>
  <div class="visual-item"><strong>flex-grow</strong><span>Wie stark ein Item zusätzlichen freien Platz mitnutzen darf.</span></div>
  <div class="visual-item"><strong>flex-shrink</strong><span>Wie ein Item bei Platzmangel kleiner werden darf.</span></div>
</div>

## Mini-Demo: gleicher Start, anderer Zielraum

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gleiche Basis, aber ungleiche Verteilung von freiem Platz</h3>
  <div style="display:flex; gap:0.6rem; padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
    <div style="flex:1 1 120px; padding:0.7rem; border-radius:12px; background:#dbeafe;"><strong>flex: 1 1 120px</strong></div>
    <div style="flex:2 1 120px; padding:0.7rem; border-radius:12px; background:#dcfce7;"><strong>flex: 2 1 120px</strong></div>
  </div>
  <p style="margin:0.6rem 0 0;">Beide Items starten mit derselben Basis. Das zweite Item wächst stärker, weil sein <code>flex-grow</code> größer ist.</p>
</div>

## Der Zahlenblick zum Leitbeispiel

Gegeben ist dieser Container:

```css
.container {
  display: flex;
  width: 420px;
}

.item-a {
  flex: 1 1 120px;
}

.item-b {
  flex: 2 1 120px;
}
```

Die ruhige Lesart ist:

- beide Items starten mit einer Basis von `120px`,
- zusammen sind das zunächst `240px`,
- im Container bleiben also noch `180px` frei,
- dieser freie Platz wird im Verhältnis `1 : 2` verteilt.

Das bedeutet:

```text
freier Platz = 420px - 120px - 120px = 180px

item-a bekommt 1/3 von 180px  = 60px zusätzlich
item-b bekommt 2/3 von 180px  = 120px zusätzlich
```

Die Endbreiten sind damit:

```text
item-a = 120px + 60px  = 180px
item-b = 120px + 120px = 240px
```

Gerade dieser Zahlenblick macht klar: **Gleiche Basisgröße heißt noch nicht gleiche Endgröße.**

## Kurzschreibweise flex

```css
.item {
  flex: 0 1 auto;
}
```

Das ist eine Kurzform für:

- <code>flex-grow: 0</code>
- <code>flex-shrink: 1</code>
- <code>flex-basis: auto</code>

Ruhig gelesen heißt das also:

- nicht zusätzlich wachsen,
- bei Platzmangel kleiner werden dürfen,
- und mit einer automatischen Ausgangsgröße starten.

## Zweites Mini-Demo: diesmal fehlt Platz

<div class="figure-card">
  <p class="card-kicker">Gegenfall</p>
  <h3>Schrumpfen wird erst wichtig, wenn der Platz knapp wird</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Genug Platz</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>Container: 420px
Items: 160px + 160px</code></pre>
      <p style="margin:0.55rem 0 0;">Hier muss nichts kleiner werden. <code>flex-shrink</code> bleibt im Hintergrund.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Zu wenig Platz</strong></p>
      <pre style="margin:0; white-space:pre-wrap;"><code>Container: 280px
Items: 160px + 160px</code></pre>
      <p style="margin:0.55rem 0 0;">Jetzt reichen die Basisgrößen zusammen nicht mehr aus. Genau hier wird <code>flex-shrink</code> fachlich wichtig.</p>
    </div>
  </div>
</div>

## Noch ruhiger gelesen: Basisgröße ist keine Garantie

Ein häufiger Fehlersatz lautet: **„Wenn beide mit 120px starten, müssen sie am Ende doch auch 120px breit bleiben.“**

Gerade das ist bei Flexbox zu grob. Die Basisgröße ist nur der Startpunkt. Danach wird geprüft,

- ob noch freier Platz verteilt werden kann,
- oder ob Platzmangel ausgeglichen werden muss.

Deshalb ist `flex-basis` eher eine **Ausgangsmarke** als ein fertiges Endmaß.

## Drei ähnlich klingende Aussagen bewusst trennen

<div class="compare-card">
  <p class="card-kicker">Typische Verwechslung</p>
  <h3>Startgröße, Wachstum und Endgröße nicht in einen Topf werfen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>flex-basis</strong><span>Der Startpunkt der Größenberechnung.</span></div>
    <div class="compare-item"><strong>flex-grow</strong><span>Die Regel für zusätzlichen freien Platz.</span></div>
    <div class="compare-item"><strong>endgültige Breite</strong><span>Das Ergebnis nach Wachsen, Schrumpfen und Verteilung.</span></div>
  </div>
</div>

## Wachstumsfall und Schrumpffall bewusst gegenüberstellen

<div class="compare-card">
  <p class="card-kicker">Zwei Lagebilder</p>
  <h3>Die gleiche Flex-Zeile kann je nach Containergröße anders gelesen werden</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Wachstumsfall</strong>
      <span>Nach den Basisgrößen bleibt noch Platz übrig. Dann entscheidet <code>flex-grow</code>, wie dieser zusätzliche Raum verteilt wird.</span>
    </div>
    <div class="compare-item">
      <strong>Schrumpffall</strong>
      <span>Die Basisgrößen passen zusammen nicht mehr hinein. Dann entscheidet <code>flex-shrink</code>, wie die Verkleinerung abgefangen wird.</span>
    </div>
  </div>
</div>

## Diese Seite erklärt bewusst nur Größenverhalten

Achsenrichtung und Ausrichtung gehören zu einer anderen Flexbox-Frage. Diese Seite behandelt nur, **wie Platz verteilt oder entzogen wird**, nicht wie Items auf Haupt- und Querachse ausgerichtet sind.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Basis lesen</strong><span>Mit welcher Größe startet das Item?</span></div>
  <div class="step-item"><strong>2. Freien Platz prüfen</strong><span>Darf das Item wachsen? Dann wird <code>flex-grow</code> wichtig.</span></div>
  <div class="step-item"><strong>3. Platzmangel prüfen</strong><span>Fehlt Platz? Dann wird <code>flex-shrink</code> wichtig.</span></div>
  <div class="step-item"><strong>4. Endbreite begründen</strong><span>Nicht nur das Ergebnis nennen, sondern den Weg dorthin ruhig erklären.</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>flex-basis</code> ist der Startpunkt, nicht automatisch das fertige Endmaß.</p>
</div>
