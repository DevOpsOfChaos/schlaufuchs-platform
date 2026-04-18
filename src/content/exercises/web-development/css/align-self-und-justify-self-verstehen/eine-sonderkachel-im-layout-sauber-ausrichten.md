---
title: Eine Sonderkachel im Layout sauber ausrichten
description: Begründe, wann align-self und justify-self sinnvoller sind als globale Container-Regeln oder improvisierte Margin-Lösungen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - align-self-und-justify-self-verstehen
  - eine-sonderkachel-im-layout-sauber-ausrichten
level: mittel
draft: false
tags:
  - css
  - alignment
  - grid
hintPoints:
  - "Frage zuerst, ob alle Elemente oder nur eine Ausnahme gemeint ist."
  - "Achte darauf, innerhalb welches Felds das Element ausgerichtet werden soll."
selfCheckPoints:
  - "Kannst du Einzel-Ausrichtung und Container-Ausrichtung unterscheiden?"
  - "Kannst du begründen, warum ein Margin-Hack hier unnötig wäre?"
transferIdeas:
  - "Übertrage die Logik auf Buttons, Teaser-Karten oder Dashboard-Elemente."
reflectionPrompt: "Woran erkennst du, dass ein Problem eigentlich keine Verschiebung, sondern eine Ausrichtungsfrage ist?"
---

## Aufgabe 1: Ausnahme statt Globalregel

In einer Grid-Übersicht sollen alle Karten normal oben links stehen. Nur die letzte Karte soll unten rechts im eigenen Feld sitzen.

Erkläre, warum eine Einzelregel mit `align-self` und `justify-self` hier oft besser passt als eine Änderung für den ganzen Container.

## Aufgabe 2: Margin oder Ausrichtung?

Jemand löst dieselbe Aufgabe mit großen Margin-Werten, bis die Karte ungefähr an der richtigen Stelle sitzt.

Beschreibe, warum das fachlich unruhiger ist als eine echte Ausrichtungsregel.

## Aufgabe 3: Achse benennen

Erkläre in eigenen Worten, was bei der Ausrichtung an einer anderen Achse passiert als bei der Ausrichtung entlang derselben Achse wie die übrigen Elemente.
