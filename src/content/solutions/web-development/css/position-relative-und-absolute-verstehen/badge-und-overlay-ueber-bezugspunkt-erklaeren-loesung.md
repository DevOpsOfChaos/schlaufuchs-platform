---
title: "Lösung – Badge und Overlay über Bezugspunkt erklären"
description: "Musterlösung zur Aufgabe über relative und absolute Positionierung."
subject: "web-development"
section: "CSS"
topicPath: ["css", "position-relative-und-absolute-verstehen", "badge-und-overlay-ueber-bezugspunkt-erklaeren"]
taskId: "WEB-CSS-POS-201"
relatedExercise: "web-development/css/position-relative-und-absolute-verstehen/badge-und-overlay-ueber-bezugspunkt-erklaeren"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Die zweite Variante ist ruhiger, weil die Karte mit `position: relative` zum klaren Bezugspunkt wird. Dann beziehen sich `top` und `right` auf genau diese Karte und nicht auf irgendeinen äußeren Kontext.

### Aufgabe 2

Es fehlt der passende Anker in der Struktur. Nur `position: absolute` auf dem Badge zu setzen beschreibt die Lage des schwebenden Elements, aber noch nicht, woran diese Lage festgemacht wird.

### Aufgabe 3

`top` und `right` sagen nur, wie weit ein absolut positioniertes Element von einer Kante entfernt sitzt. Diese Kanten müssen aber zu einem sinnvollen Bezugssystem gehören. Genau deshalb reicht die Verschiebung allein nicht, wenn der Anker nicht sauber benannt ist.

### Aufgabe 4

Die Werte selbst bleiben gleich, aber der Bezugspunkt kann größer oder kleiner sein. Wenn sich `top` und `right` auf die Karte beziehen, sitzt das Badge an der Kartenecke. Wenn der Bezugspunkt ein anderer oder größerer Kontext ist, wirkt dieselbe Position schnell verrutscht oder zufällig.

### Aufgabe 5

Der wichtigste Bezugspunkt ist meist der Container, an dessen Ecke oder Kante das Badge sichtbar haften soll.

### Aufgabe 6

Das ist fachlich unruhiger, weil die sichtbare Lage dann eher über optisches Schieben als über eine saubere Struktur entsteht. Ein klarer Bezugspunkt erklärt dagegen logisch, warum das Badge genau an dieser Kartenecke sitzt.

### Aufgabe 7

Die erste Frage beschreibt nur den Abstand innerhalb eines bereits vorhandenen Bezugssystems. Die zweite Frage klärt erst, welches Bezugssystem überhaupt gilt. Genau diese zweite Frage ist meist die wichtigere Grundlage.

### Aufgabe 8

Die Lösung kann optisch vielleicht ungefähr an der richtigen Stelle landen, erklärt die Lage aber nicht sauber über einen Bezugspunkt. Statt „Das Badge sitzt an der Ecke dieser Karte“ bleibt nur „Mit diesen Abständen sieht es ungefähr passend aus“. Genau dadurch wird die Struktur schwächer und die Lösung brüchiger, sobald sich Breite oder Inhalt ändern.
