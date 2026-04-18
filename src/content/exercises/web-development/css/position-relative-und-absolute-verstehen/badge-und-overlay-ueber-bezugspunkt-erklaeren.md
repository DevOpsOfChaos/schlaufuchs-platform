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
level: mittel
draft: false
tags:
  - css
  - position
  - overlay
hintPoints:
  - Frage zuerst, an welchem Element das Badge sichtbar „haften“ soll.
  - Unterscheide Bezugspunkt und schwebendes Element.
selfCheckPoints:
  - Kannst du den Anker einer absoluten Positionierung benennen?
  - Kannst du relative als Bezugspunkt erklären?
transferIdeas:
  - Übertrage die Idee auf Status-Badges, Bild-Overlays oder kleine Eckelemente.
reflectionPrompt: Warum hilft die Frage nach dem Bezugspunkt oft mehr als bloßes Verschieben mit top und right?
---

## Aufgabe 1: Situation erklären

Ein Badge „Neu“ soll oben rechts auf einer Karte sitzen.

Erkläre, warum die Karte dafür oft <code>position: relative</code> braucht.

## Aufgabe 2: Denkfehler prüfen

Jemand setzt nur <code>position: absolute</code> auf das Badge und wundert sich, dass die Lage unruhig wirkt.

Erkläre, was in der Struktur fehlt.

## Aufgabe 3: Eigene Begründung

Formuliere in einem Satz, was der wichtigste Bezugspunkt bei absoluten Eckelementen ist.
