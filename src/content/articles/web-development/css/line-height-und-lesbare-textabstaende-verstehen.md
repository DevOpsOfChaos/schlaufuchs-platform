---
title: "Line-Height und lesbare Textabstände verstehen"
description: "Verstehe, wie line-height die Lesbarkeit von Text beeinflusst und warum gute Zeilenabstände weder zu eng noch zu luftig sein sollten."
subject: "web-development"
section: "CSS"
topicPath: ["css", "line-height-und-lesbare-textabstaende-verstehen"]
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

`line-height` bestimmt, wie viel vertikaler Raum eine Textzeile bekommt. Das klingt klein, hat aber große Wirkung: Schon bei gleicher Schriftgröße kann ein Absatz gedrängt, ruhig oder unnötig auseinandergezogen wirken.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Erklärtexte mit derselben Schriftgröße</h3>
  <p>Alle drei Texte sind gleich lang. Trotzdem wirkt einer hektisch eng, einer angenehm lesbar und einer unnötig luftig. Der Unterschied liegt nicht im Inhalt, sondern im Zeilenabstand.</p>
</div>

## Mini-Demo: derselbe Text, drei Wirkungen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Lesbarkeit entsteht auch zwischen den Zeilen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(14rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Zu eng</strong></p>
      <p style="margin:0; line-height:1.1;">Ein kurzer Erklärungstext mit mehreren Zeilen wirkt schnell gedrängt, wenn der Abstand zwischen den Zeilen zu klein wird und die Gedanken kaum Luft bekommen.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Ruhig lesbar</strong></p>
      <p style="margin:0; line-height:1.55;">Ein kurzer Erklärungstext mit mehreren Zeilen wirkt ruhig und gut lesbar, wenn die Zeilen genug Abstand haben, ohne dass der Text auseinanderfällt.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Zu luftig</strong></p>
      <p style="margin:0; line-height:2.2;">Ein kurzer Erklärungstext mit mehreren Zeilen wirkt schnell zerzogen, wenn zwischen den Zeilen so viel Raum liegt, dass der Zusammenhang schwächer wird.</p>
    </div>
  </div>
</div>

## Line-Height ist keine bloße Deko

<div class="compare-card">
  <p class="card-kicker">Wirklogik</p>
  <h3>Text lesen ist etwas anderes als Text nur sichtbar machen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu eng</strong>
      <span>Die Augen müssen dichter springen. Zeilen wirken gedrängt und Informationen stoßen aufeinander.</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig</strong>
      <span>Die Zeilen lassen sich gut verfolgen. Der Absatz bleibt als zusammenhängender Block erkennbar.</span>
    </div>
    <div class="compare-item">
      <strong>Zu luftig</strong>
      <span>Der Text verliert Dichte. Zeilen wirken eher wie einzelne Stücke als wie ein zusammenhängender Gedanke.</span>
    </div>
  </div>
</div>

```css
.textblock {
  line-height: 1.6;
}
```

## Wann line-height besonders wichtig wird

- bei längeren Absätzen,
- bei erklärenden Lerntexten,
- bei schmalen Textspalten,
- und überall dort, wo ein Text wirklich gelesen werden soll.

## Eine ruhige Prüfstrategie

1. Ist der Text nur ein kurzer Buttontext oder ein richtiger Absatz?
2. Wirkt der Absatz gedrängt?
3. Wirkt er zu luftig und zerzogen?
4. Suche einen Mittelweg, der Lesbarkeit und Zusammenhalt verbindet.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute <code>line-height</code> macht Text nicht nur „schöner“, sondern vor allem <strong>ruhiger lesbar</strong>.</p>
</div>
