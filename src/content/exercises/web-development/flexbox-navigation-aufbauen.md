---
title: "Flexbox-Navigation aufbauen"
description: "Diese Aufgabe verbindet eine kleine HTML-Struktur mit passenden Flexbox-Regeln für eine ruhige, saubere Navigationsleiste."
subject: "web-development"
section: "CSS und Layout"
topicPath: ["flexbox-navigation-aufbauen"]
taskId: "AUTO-FLEXBOX-NAVIGATION-AUFBAUEN"
tags: ["web-development", "CSS und Layout", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Arbeitsauftrag

Baue aus der vorgegebenen HTML-Struktur eine einfache, ruhige Navigationsleiste. Der Schwerpunkt liegt nicht auf Dekoration, sondern auf sauberer Struktur und passenden Flexbox-Regeln.

## Ausgangscode

```html
<nav class="topbar">
  <a href="#" class="brand">Schlaufuchs</a>
  <ul class="menu">
    <li><a href="#">Start</a></li>
    <li><a href="#">Wissen</a></li>
    <li><a href="#">Aufgaben</a></li>
    <li><a href="#">Kontakt</a></li>
  </ul>
</nav>
```

## Aufgabe 1

Schreibe CSS-Regeln, mit denen:

- die `.topbar` als Flex-Container arbeitet,
- die Marke links steht,
- das Menü rechts steht,
- zwischen den Menüpunkten ein ruhiger Abstand entsteht.

## Aufgabe 2

Sorge dafür, dass:

- die Liste keine Aufzählungszeichen zeigt,
- Standardabstände der Liste entfernt werden,
- die Links sauber und lesbar wirken.

## Aufgabe 3

Ergänze eine Regel, mit der die Elemente der `.topbar` vertikal zentriert ausgerichtet werden.

## Aufgabe 4

Die Navigation soll auf kleineren Breiten umbrechen dürfen, statt unsauber aus dem Bereich zu laufen.

1. Welche Eigenschaft am Container ist dafür sinnvoll?
2. Ergänze eine passende CSS-Regel.

## Aufgabe 5

Erkläre kurz in eigenen Worten:

1. Warum `display: flex;` auf die `.topbar` gehört und nicht auf ein einzelnes Link-Element.
2. Wofür `gap` in dieser Aufgabe nützlich ist.
3. Was der Unterschied zwischen `justify-content` und `align-items` ist.

## Hinweise

- Flexbox wirkt immer auf die direkten Kindelemente eines Containers.
- Für horizontale Verteilungen ist `justify-content` oft die erste wichtige Eigenschaft.
- Für gleichmäßige Abstände ist `gap` meist klarer als viele einzelne Margins.
- Ein `ul`-Element bringt standardmäßig Listenabstände mit, die hier oft entfernt werden.

## Selbstkontrolle

Eine passende Lösung sollte mindestens diese Punkte enthalten:

- `display: flex;`
- eine saubere Verteilung zwischen Marke und Menü,
- `align-items: center;`
- eine listenfreie Menüstruktur,
- eine sinnvolle Umbruch- oder Reaktionsstrategie für kleinere Breiten.
