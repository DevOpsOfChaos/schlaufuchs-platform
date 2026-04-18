---
title: Tastaturfokus und sichtbare Orientierung begründen
description: Begründe an kleinen UI-Beispielen, wann ein sichtbarer Fokuszustand nötig ist und warum focus-visible dabei hilfreich sein kann.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - focus-visible-und-tastaturfokus-verstehen
  - tastaturfokus-und-sichtbare-orientierung-begruenden
level: mittel
draft: false
tags:
  - css
  - focus-visible
  - focus
  - keyboard
hintPoints:
  - "Frage zuerst, ob jemand das Element ohne Maus erreichen würde."
  - "Trenne Fokusmarkierung von Hover-Effekt."
  - "Beschreibe sichtbar, wie Orientierung entsteht oder verloren geht."
selfCheckPoints:
  - "Ist klar, warum Fokus sichtbar bleiben muss?"
  - "Verwechselst du Hover und Fokus nicht?"
transferIdeas:
  - "Übertrage die Aufgabe auf Links in einer Navigation oder Buttons in einem Dialog."
reflectionPrompt: "Warum ist eine gute Fokusmarkierung eher eine Bedienhilfe als ein Stil-Trick?"
---

## Aufgabe 1: Zustände vergleichen

Vergleiche einen Hover-Zustand und einen sichtbaren Tastaturfokus.

Erkläre in 3 bis 5 Sätzen, warum beide Zustände nicht dieselbe Aufgabe haben.

## Aufgabe 2: Beispiel bewerten

Eine Seite entfernt mit `outline: none;` alle Fokusmarkierungen, damit die Oberfläche „ruhiger“ wirkt.

Erkläre, warum das problematisch ist.

## Aufgabe 3: Wahl begründen

Begründe, warum `:focus-visible` in vielen Fällen sinnvoller ist als jede Fokusmarkierung für jede Mausinteraktion sichtbar zu machen.
