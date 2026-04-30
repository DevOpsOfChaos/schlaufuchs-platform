---
title: "Musterlösung – Eine Sonderkachel im Layout sauber ausrichten"
description: "Musterlösung zur Aufgabe WEB-CSS-LAYOUT-205."
subject: "web-development"
section: "CSS"
topicPath: ["css", "align-self-und-justify-self-verstehen", "eine-sonderkachel-im-layout-sauber-ausrichten"]
taskId: "WEB-CSS-LAYOUT-205"
relatedExercise: "src/content/exercises/web-development/css/align-self-und-justify-self-verstehen/eine-sonderkachel-im-layout-sauber-ausrichten"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Aufgabe 1

Zum Leitbild passt ruhiger **Fall A**, also der Grid-Fall mit <code>align-self: end</code> und <code>justify-self: end</code>. Dort sitzt die Sonderkachel in einem klaren Feld und beide Einzelregeln lassen sich fachlich sauber zusammen lesen. Im zweiten und dritten Ausschnitt geht es zwar ebenfalls um Ausnahmen, aber nicht mehr um dieselbe Grid-Situation. Genau deshalb wäre es didaktisch zu unscharf, die Fälle einfach gleichzusetzen.

## Aufgabe 2

Man darf die Ausschnitte nicht einfach gleich behandeln, weil zuerst die Layoutart gelesen werden muss. Im Grid ist klar, dass das Element in einem Feld sitzt und dort anders ausgerichtet werden soll. Im Flex-Beispiel taucht zwar ein ähnlicher Eigenschaftsname auf, aber er beschreibt nicht automatisch dieselbe ruhige Sonderrolle wie im Grid-Leitbild.

## Aufgabe 3

Große Margin-Werte wirken hier wie ein improvisiertes Verschieben. Das Ergebnis hängt dann stärker an Zufallsabständen als an einer klaren Layout-Regel. Eine echte Self-Regel beschreibt dagegen direkt, wie das einzelne Element in seinem Feld ausgerichtet werden soll.

## Aufgabe 4

- **Alle Karten sollen tiefer sitzen** → eher Container-Regel, weil alle Kinder gleich betroffen sind.
- **Nur ein CTA-Button in einer Karte soll unten stehen** → eher Self-Regel, weil nur ein einzelnes Element eine Sonderrolle bekommt.
- **Alle Grid-Kinder sollen mittig im Feld beginnen** → eher Container-Regel, weil wieder alle Elemente gleich gemeint sind.
- **Nur ein Badge soll innerhalb seines Felds rechts kleben** → eher Self-Regel, weil nur dieses eine Kind abweicht.

## Aufgabe 5

Die Denkweise ist zu schnell, weil hier nur ein Eigenschaftsname wiederverwendet wird, ohne zuerst die Layoutart zu prüfen. Im Grid passt <code>justify-self</code> zum Leitbild dieser Seite. Im Flex-Fall ist das nicht einfach dieselbe Geschichte unter anderem Namen.

## Aufgabe 6

**Fall C** ist als Vergleich ruhiger, weil dort zumindest eine echte Flex-Mechanik für eine Einzelausnahme benutzt wird. Die Grundfrage bleibt ähnlich: Nur ein Element soll anders liegen als die übrigen. Trotzdem bleibt es ein anderer Layoutkontext als das Grid-Leitbild. Genau deshalb ist Fall C der didaktisch bessere Flex-Vergleich, ohne dass daraus „also ist es dasselbe“ werden darf.

## Aufgabe 7

Eine ruhige Formulierung wäre zum Beispiel:

> Der Container gibt allen Karten dieselbe Grundausrichtung, aber eine Einzelausnahme richtet genau eine CTA-Karte innerhalb ihres eigenen Felds anders aus.

## Aufgabe 8

Eine ruhige Einstiegsfrage wäre zum Beispiel:

> Soll sich der ganze Container anders verhalten oder nur ein einzelnes Element in seinem Feld?

## Aufgabe 9

Der falsche Fix wirkt wie ein optischer Zufall, weil nur feste Abstände aufaddiert werden, bis die Karte ungefähr passt. Die eigentliche Ausrichtungslogik wird damit nicht beschrieben. Ruhiger wäre zum Beispiel:

```css
.karte--cta {
  align-self: end;
  justify-self: end;
}
```

Diese Variante beschreibt direkt die Einzelausnahme im Feld statt nur eine zufällige Verschiebung.
