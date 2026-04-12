---
title: CSS-Box-Modell – Grundlagen
description: Verstehe, wie Elemente in CSS aus Inhalt, Abstand, Rahmen und Außenraum aufgebaut sind.
subject: web-development
section: css
topicPath:
  - css
  - box-modell
learningGoals:
  - Du kannst die vier Bereiche einer CSS-Box richtig benennen.
  - Du unterscheidest padding und margin sicher voneinander.
  - Du kannst erklären, warum Elemente größer wirken als nur ihr sichtbarer Inhalt.
level: einfach
tags: [css, box-modell, layout, abstaende, margin, padding]
draft: false
---

Das Box-Modell gehört zu den wichtigsten Grundlagen in CSS. Es erklärt, warum Elemente Platz brauchen, wie Abstände entstehen und weshalb Layouts oft anders aussehen als erwartet. Wer das Box-Modell sauber versteht, liest CSS viel klarer und vermeidet viele Anfängerfehler.

## Was du hier lernst

Auf dieser Seite lernst du,

- aus welchen Bereichen eine CSS-Box besteht,
- wie diese Bereiche auf die Größe und Wirkung eines Elements einwirken,
- und warum Innen- und Außenabstand nicht dasselbe sind.

## Jedes Element wird als Box gedacht

In CSS wird ein HTML-Element nicht nur als Text oder Bild betrachtet, sondern als **Kasten mit mehreren Schichten**. Dieser Kasten besteht nicht nur aus dem sichtbaren Inhalt, sondern aus mehreren Bereichen, die gemeinsam beeinflussen, wie viel Platz das Element auf der Seite einnimmt.

## Die vier wichtigen Teile

Im Einstieg solltest du diese Begriffe sicher unterscheiden:

- **Content**: der eigentliche Inhalt,
- **Padding**: der Innenabstand zwischen Inhalt und Rahmen,
- **Border**: der Rahmen,
- **Margin**: der Außenabstand zu anderen Elementen.

## Warum das im Layout wichtig ist

Viele Layout-Probleme entstehen nicht durch „falsches CSS insgesamt“, sondern durch unklare Vorstellungen über diese vier Teile. Wenn ein Element zu groß wirkt, zu dicht an einem anderen klebt oder plötzlich zu viel Platz braucht, liegt das oft am Box-Modell.

### Beispiel

Ein Textblock kann optisch größer wirken als sein Text, weil zusätzlich gelten:

- Innenabstand oben, unten, links, rechts,
- Rahmenbreite,
- Außenabstand zum nächsten Element.

Der Inhalt ist also nur **ein Teil** der gesamten sichtbaren Wirkung.

## Padding und Margin werden oft verwechselt

Das ist einer der häufigsten Denkfehler am Anfang.

- **Padding** vergrößert den Raum **innerhalb** des Elements.
- **Margin** schafft Abstand **außerhalb** des Elements.

Wenn du diese Unterscheidung einmal sauber verinnerlichst, werden viele spätere Layout-Themen deutlich leichter.

## Warum das Box-Modell eine Grundlage ist

Fast jedes sichtbare Weblayout arbeitet mit Boxen. Selbst komplexe Layoutsysteme wie Flexbox oder Grid bauen letztlich darauf auf, dass Elemente zunächst Boxen mit Innen- und Außenabständen, Rahmen und Inhalt sind.

## Typische Fehler

- Padding und Margin verwechseln.
- Zu glauben, nur der Content bestimme die Größe eines Elements.
- Den Border bei der Gesamtwirkung zu vergessen.
- Layoutprobleme nur optisch statt strukturell zu analysieren.

## Merksätze

- Jedes HTML-Element wird in CSS als Box gedacht.
- Die vier Grundbereiche sind Content, Padding, Border und Margin.
- Padding liegt innen, Margin liegt außen.
- Das Box-Modell ist eine Grundlage für fast jedes Weblayout.
