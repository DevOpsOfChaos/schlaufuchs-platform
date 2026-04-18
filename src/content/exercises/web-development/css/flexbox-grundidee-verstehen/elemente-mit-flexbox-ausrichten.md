---
title: Elemente mit Flexbox ausrichten
description: Beschreibe bei einfachen Layoutgruppen, welche Flexbox-Idee Richtung, Verteilung und Ausrichtung steuert.
subject: web-development
section: CSS
topicPath:
  - css
  - flexbox
  - flexbox-grundidee-verstehen
  - elemente-mit-flexbox-ausrichten
taskId: WEB-CSS-FLEXBOX-001
level: einfach
draft: false
tags:
  - css
  - flexbox
  - layout
hintPoints:
  - "Frage zuerst, ob die Elemente in einer Reihe oder Spalte liegen."
  - "Trenne danach Verteilung auf der Hauptachse und Ausrichtung auf der Querachse."
  - "Achte darauf, ob sich die Elemente selbst geändert haben oder nur ihr gemeinsamer Container."
selfCheckPoints:
  - "Hast du die Achsen richtig zugeordnet?"
  - "Hast du Verteilung und Ausrichtung nicht miteinander verwechselt?"
  - "Beschreibst du sichtbar, was auf der Seite anders wirkt?"
transferIdeas:
  - "Übertrage die Aufgabe auf Navigationsleisten, Kartenreihen oder Button-Gruppen."
  - "Vergleiche zwei Layouts mit unterschiedlicher Richtung."
reflectionPrompt: "Warum hilft es bei Flexbox, zuerst in Achsen statt in Einzelwerten zu denken?"
---

## Aufgabe 1: Demo deuten

Gegeben ist derselbe HTML-Inhalt mit zwei CSS-Varianten:

```css
.leiste-a {
  display: flex;
  justify-content: flex-start;
}

.leiste-b {
  display: flex;
  justify-content: space-between;
}
```

Beschreibe in 3 bis 5 Sätzen, was sich auf der Seite sichtbar verändert und was gleich bleibt.

## Aufgabe 2: Verwechslung prüfen

Jemand sagt: „`align-items` verteilt die Elemente waagerecht über die ganze Breite.“

Erkläre, warum diese Aussage nicht stimmt.

## Aufgabe 3: Container statt Einzelelemente

Drei Buttons sind gleich groß. Nach einer CSS-Änderung sitzen sie plötzlich mit viel Abstand über die Breite verteilt.

Begründe, warum du zuerst den Container und nicht die einzelnen Buttons prüfen würdest.
