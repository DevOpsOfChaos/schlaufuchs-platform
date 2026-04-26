---
title: "Lösung – Font Loading und Layout Shift reduzieren"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "performance-und-laden"
  - "font-loading-und-layout-shift-reduzieren"
tags:
  - "web development"
  - "css"
  - "performance"
  - "fonts"
  - "layout shift"
  - "lösung"
taskId: "web-v103-font-loading-und-layout-shift-reduzieren"
relatedExercise: "web-development/css/performance-und-laden/font-loading-und-layout-shift-reduzieren"
draft: false
---

## Lösung

Text soll sofort mit Fallback lesbar sein; `font-display: swap` oder eine ähnliche Strategie vermeidet unsichtbaren Text, während passende Fallbacks Layoutsprünge reduzieren.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.

## Beispielhafte Begründung

Eine robuste Umsetzung beginnt mit verständlichem Markup, ergänzt Gestaltung nur dort, wo sie Verhalten nicht verdeckt, und nutzt JavaScript für klare Zustände statt für versteckte Magie. So bleibt die Seite auch dann nachvollziehbar, wenn Daten fehlen, ein Gerät klein ist oder eine Aktion nicht sofort gelingt.
