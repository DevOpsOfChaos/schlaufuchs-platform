---
title: "Eine Sonderkachel im Layout sauber ausrichten"
description: "Begründe, wann align-self und justify-self sinnvoller sind als globale Container-Regeln oder improvisierte Margin-Lösungen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "align-self-und-justify-self-verstehen", "eine-sonderkachel-im-layout-sauber-ausrichten"]
taskId: "WEB-CSS-LAYOUT-205"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
Gegeben sind diese drei CSS-Ausschnitte:

```css
/* Fall A */
.karten {
  display: grid;
  align-items: start;
  justify-items: start;
}
.karte--cta {
  align-self: end;
  justify-self: end;
}
```

```css
/* Fall B */
.leiste {
  display: flex;
}
.button--wichtig {
  justify-self: end;
}
```

```css
/* Fall C */
.leiste {
  display: flex;
  gap: 0.5rem;
}
.button--wichtig {
  margin-left: auto;
}
```

Außerdem gilt dieses Mini-Leitbild:

<pre><code>Vier Karten im Grid
Drei Karten: oben links im Feld
Eine CTA-Karte: unten rechts im eigenen Feld</code></pre>

## Aufgabe 1: Leitbild benennen

Welcher Ausschnitt passt fachlich ruhiger zu diesem Leitbild?

Begründe deine Entscheidung in 3 bis 5 Sätzen.

## Aufgabe 2: Problemart statt Eigenschaft merken

Erkläre, warum man nicht einfach sagen darf: „Da steht doch auch <code>justify-self</code>, also ist das dieselbe Geschichte.“

## Aufgabe 3: Margin-Hack bewerten

Jemand löst denselben Grid-Fall mit großen Margin-Werten, bis die Kachel ungefähr rechts unten sitzt.

Beschreibe, warum das fachlich unruhiger ist als eine echte Self-Regel.

## Aufgabe 4: Vier Mini-Fälle zuordnen

Ordne jeweils zu: **eher Container-Regel** oder **eher Self-Regel**.

- Alle Karten sollen tiefer sitzen.
- Nur ein CTA-Button in einer Karte soll unten stehen.
- Alle Grid-Kinder sollen mittig im Feld beginnen.
- Nur ein Badge soll innerhalb seines Felds rechts kleben.

## Aufgabe 5: Flex-Fall vorsichtig lesen

Formuliere in 2 bis 4 Sätzen, warum der Flex-Ausschnitt mit <code>justify-self</code> nicht einfach dieselbe Geschichte ist wie das Grid-Leitbild dieser Seite.

## Aufgabe 6: Zweiten Flex-Fall einordnen

Bewerte **Fall C** kurz: Warum ist das didaktisch der ruhigere Vergleich zu einer Flex-Leiste als **Fall B**, obwohl die Grundfrage „nur eine Ausnahme?“ ähnlich bleibt?

## Aufgabe 7: Umbau in ruhige CSS-Sprache

Schreibe den Grid-Fall in einem Satz so um, dass die Wörter **Container-Regel**, **Einzelausnahme** und **Feld** alle sinnvoll vorkommen.

## Aufgabe 8: Leitfrage formulieren

Schreibe eine kurze Prüffrage auf, mit der du vor jeder Ausrichtungsentscheidung zuerst die Problemart klärst.

## Aufgabe 9: Falschen Fix ersetzen

Ein Team schreibt für die CTA-Karte stattdessen:

```css
.karte--cta {
  margin-top: 4rem;
  margin-left: 4rem;
}
```

Erkläre kurz, was daran nur wie ein optischer Zufall wirkt und formuliere eine ruhigere fachliche Alternative.
