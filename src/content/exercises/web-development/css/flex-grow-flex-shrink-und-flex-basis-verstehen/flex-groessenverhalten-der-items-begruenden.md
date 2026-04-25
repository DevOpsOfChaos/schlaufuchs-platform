---
title: Flex-Größenverhalten der Items begründen
description: Begründe, wie flex-grow, flex-shrink und flex-basis zusammenwirken und warum gleiche Startgrößen zu unterschiedlichen Ergebnissen führen können.
subject: web-development
section: CSS
topicPath:
  - css
  - flex-grow-flex-shrink-und-flex-basis-verstehen
  - flex-groessenverhalten-der-items-begruenden
taskId: WEB-CSS-FLEX-206
level: einfach
draft: false
tags:
  - css
  - flexbox
  - größe
hintPoints:
  - Trenne Ausgangsgröße, Wachsen und Schrumpfen sauber.
  - Lies die Kurzschreibweise als drei Rollen und nicht als Zahlencode.
  - Rechne freien Platz oder Platzmangel ruhig einmal mit.
selfCheckPoints:
  - Kannst du flex-basis und Endgröße unterscheiden?
  - Kannst du erklären, warum ein Item mehr Platz bekommt als ein anderes?
transferIdeas:
  - Übertrage die Logik auf Kartenreihen, Preisboxen oder Navigationsleisten.
reflectionPrompt: "Warum hilft ein kleiner Zahlenblick oft mehr als ein reiner Merksatz?"
---

Gegeben ist dieser Fall:

```css
.container {
  display: flex;
  width: 420px;
  gap: 0;
}

.item-a {
  flex: 1 1 120px;
}

.item-b {
  flex: 2 1 120px;
}
```

## Aufgabe 1: Ausgangspunkt benennen

Erkläre, mit welcher Größe beide Items zunächst starten und warum das noch nicht die endgültige Breite ist.

## Aufgabe 2: Freien Platz verteilen

Berechne kurz, wie viel freier Platz im Container nach den beiden Basisgrößen übrig bleibt.

Begründe dann, warum <code>item-b</code> am Ende breiter wird als <code>item-a</code>.

## Aufgabe 3: Kurzschreibweise lesen

Erkläre die drei Teile der Schreibweise <code>flex: 0 1 auto</code> in eigenen Worten.

## Aufgabe 4: Platzmangel einordnen

Angenommen, zwei Items stehen in einem nur <code>280px</code> breiten Container und starten beide mit <code>flex-basis: 160px</code>.

Erkläre kurz, warum hier <code>flex-shrink</code> relevant wird.

## Aufgabe 5: Fehlersatz prüfen

Jemand sagt:

> „Wenn beide Items mit 120px starten, müssen sie am Ende auch beide 120px breit bleiben.“

Erkläre, warum diese Aussage zu kurz gedacht ist.

## Aufgabe 6: Umbau-Fall

Du möchtest, dass ein Item bei freiem Platz nicht zusätzlich wächst, bei Platzmangel aber kleiner werden darf.

Welche Kurzschreibweise passt dafür besser: <code>flex: 0 1 auto</code> oder <code>flex: 2 0 120px</code>?

Begründe deine Wahl.

## Aufgabe 7: Wachstumsfall und Schrumpffall unterscheiden

Formuliere in 2 bis 4 Sätzen, warum derselbe Container einmal ein Wachstumsfall und ein anderes Mal ein Schrumpffall sein kann.

## Aufgabe 8: Zahlenblick ergänzen

Eine zweite Flex-Zeile ist nur <code>300px</code> breit. Zwei Items starten wieder jeweils mit <code>120px</code> Basisgröße.

Erkläre kurz, warum das noch kein Schrumpffall ist und woran du das erkennst.
