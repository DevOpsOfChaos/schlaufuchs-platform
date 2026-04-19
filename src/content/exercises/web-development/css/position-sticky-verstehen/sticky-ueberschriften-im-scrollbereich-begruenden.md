---
title: Sticky-Überschriften im Scrollbereich begründen
description: Begründe, wann position sticky für Bereichsüberschriften sinnvoll ist und wodurch es sich von fixed unterscheidet.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - position-sticky-verstehen
  - sticky-ueberschriften-im-scrollbereich-begruenden
taskId: WEB-CSS-POS-202
level: mittel
draft: false
tags:
  - css
  - sticky
  - scroll
hintPoints:
  - Frage zuerst, in welchem Bereich überhaupt gescrollt wird.
  - Vergleiche bereichsbezogenes Haften mit globalem Festsetzen am Viewport.
selfCheckPoints:
  - Kannst du sticky und fixed fachlich trennen?
  - Kannst du den relevanten Scrollbereich benennen?
transferIdeas:
  - Übertrage die Logik auf Filterleisten, Inhaltsverzeichnisse oder Bereichstitel.
reflectionPrompt: Woran merkst du, dass ein Element Orientierung im Scrollverlauf geben soll und nicht dauerhaft global sichtbar sein muss?
---

## Aufgabe 1: Haftlogik beschreiben

Eine Kapitelüberschrift soll beim Scrollen oben im Inhaltsbereich sichtbar bleiben, aber nicht dauerhaft den ganzen Bildschirm blockieren.

Erkläre, warum `position: sticky` dazu besser passt als `position: fixed`.

## Aufgabe 2: Scrollbereich mitdenken

Ein Element hat `position: sticky` und `top: 0`, scheint aber keinen sichtbaren Effekt zu zeigen.

Nenne zwei plausible Gründe, die mit Scrollbereich oder fehlender Scrollstrecke zu tun haben können.

## Aufgabe 3: Wirkung begründen

Beschreibe in eigenen Worten, was an Sticky „zuerst normal und später haftend“ ist.
