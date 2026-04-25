---
title: Lösung – Flex-Größenverhalten der Items begründen
description: Musterlösung zur Aufgabe über flex-grow, flex-shrink und flex-basis.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-grow-flex-shrink-und-flex-basis-verstehen
taskId: WEB-CSS-FLEX-206
relatedExercise: web-development/css/flex-grow-flex-shrink-und-flex-basis-verstehen/flex-groessenverhalten-der-items-begruenden
tags:
  - css
  - flexbox
  - lösung
draft: false
---

## Musterlösung

### Aufgabe 1

Beide Items starten mit einer Basisgröße von jeweils `120px`, weil in beiden Fällen `flex-basis: 120px` gesetzt ist. Das ist aber noch nicht die endgültige Breite, weil danach noch geprüft wird, ob freier Platz verteilt oder bei Platzmangel geschrumpft werden muss.

### Aufgabe 2

Zunächst werden die beiden Basisgrößen zusammengezählt:

```text
120px + 120px = 240px
```

Im `420px` breiten Container bleiben also noch `180px` frei.

Da `item-a` mit `flex-grow: 1` und `item-b` mit `flex-grow: 2` definiert ist, wird dieser freie Platz im Verhältnis `1 : 2` verteilt. Deshalb bekommt `item-b` mehr zusätzlichen Platz und endet breiter.

### Aufgabe 3

`flex: 0 1 auto` bedeutet:

- nicht zusätzlich wachsen,
- bei Platzmangel schrumpfen dürfen,
- als Ausgangspunkt von einer automatischen Basisgröße ausgehen.

### Aufgabe 4

Zwei Basisgrößen von jeweils `160px` ergeben zusammen schon `320px`. In einem nur `280px` breiten Container reicht der Platz also nicht aus. Genau dann wird `flex-shrink` relevant, weil die Elemente kleiner werden dürfen, um in den Container zu passen.

### Aufgabe 5

Die Aussage ist zu kurz gedacht, weil `120px` hier nur die Basisgröße beschreibt. Wenn im Container noch freier Platz übrig ist, kann dieser zusätzliche Raum verteilt werden. Genau deshalb müssen zwei Items mit derselben Basis nicht automatisch gleich breit enden.

### Aufgabe 6

Passender ist hier `flex: 0 1 auto`.

Diese Kurzschreibweise sagt aus, dass das Item nicht zusätzlich wachsen soll, bei Platzmangel aber schrumpfen darf. `flex: 2 0 120px` würde dagegen zusätzliches Wachsen erlauben und gleichzeitig Schrumpfen verhindern. Das passt also nicht zu der beschriebenen Zielsetzung.

### Aufgabe 7

Ob ein Fall Wachstum oder Schrumpfen auslöst, hängt nicht vom Eigenschaftsnamen allein ab, sondern vom Verhältnis zwischen Containerbreite und Basisgrößen der Items. Ist nach den Basisgrößen noch Platz frei, kommt `flex-grow` ins Spiel. Reicht der Platz dagegen nicht aus, wird `flex-shrink` relevant.

### Aufgabe 8

Zwei Basisgrößen von jeweils `120px` ergeben zusammen `240px`. In einem `300px` breiten Container ist damit noch Platz übrig. Gerade deshalb liegt hier noch kein Schrumpffall vor. Ein Schrumpffall beginnt erst dann, wenn die Summe der Basisgrößen größer ist als der verfügbare Platz im Container.
