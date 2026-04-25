---
title: Badge und Overlay über Bezugspunkt erklären
description: Erkläre, warum absolute Positionierung einen passenden Bezugspunkt braucht und wie relative dabei hilft.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - position-relative-und-absolute-verstehen
  - badge-und-overlay-ueber-bezugspunkt-erklaeren
taskId: WEB-CSS-POS-201
level: mittel
draft: false
tags:
  - css
  - position
  - overlay
hintPoints:
  - Frage zuerst, an welchem Element das Badge sichtbar haften soll.
  - Unterscheide Bezugspunkt und schwebendes Element.
  - Benenne nicht nur top und right, sondern auch den Anker.
selfCheckPoints:
  - Kannst du den Anker einer absoluten Positionierung benennen?
  - Kannst du relative als Bezugspunkt erklären?
transferIdeas:
  - Übertrage die Idee auf Status-Badges, Bild-Overlays oder kleine Eckelemente.
reflectionPrompt: "Warum hilft die Frage nach dem Bezugspunkt oft mehr als bloßes Verschieben mit top und right?"
---

Gegeben sind diese beiden Varianten:

```css
.badge {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
}
```

```css
.karte {
  position: relative;
}

.badge {
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
}
```

## Aufgabe 1: Situation erklären

Ein Badge „Neu“ soll oben rechts auf einer Karte sitzen.

Erkläre, warum die zweite Variante meist ruhiger und fachlich sauberer ist.

## Aufgabe 2: Denkfehler prüfen

Jemand setzt nur <code>position: absolute</code> auf das Badge und wundert sich, dass die Lage unruhig wirkt.

Erkläre, was in der Struktur fehlt.

## Aufgabe 3: top/right richtig einordnen

Beschreibe in 2 bis 4 Sätzen, warum <code>top</code> und <code>right</code> allein noch keinen guten Bezugspunkt schaffen.

## Aufgabe 4: Ecke der Karte oder Ecke des größeren Kontexts?

Erkläre kurz, warum dieselben Werte für <code>top</code> und <code>right</code> sichtbar anders wirken können, wenn sich der Bezugspunkt ändert.

## Aufgabe 5: Eigene Begründung

Formuliere in einem Satz, was der wichtigste Bezugspunkt bei absoluten Eckelementen ist.

## Aufgabe 6: Umbau statt Herumschieben

Jemand versucht das Badge nur mit zusätzlichen Außenabständen ungefähr in die Ecke zu schieben.

Erkläre, warum das fachlich unruhiger ist als eine Lösung über einen klaren Bezugspunkt.

## Aufgabe 7: Zwei Leitfragen trennen

Warum hilft die Frage **„bezogen auf was?“** beim Verstehen oft mehr als die Frage **„wie weit von oben/rechts?“**?

## Aufgabe 8: Gegenbeispiel prüfen

Bewerte diesen Umbau kurz:

```css
.badge {
  margin-left: 11rem;
  margin-top: -2rem;
}
```

Erkläre in 2 bis 4 Sätzen, warum diese Lösung optisch vielleicht ähnlich wirken kann, fachlich aber weniger ruhig ist.
