---
title: Fokusreihenfolge in kleinen Oberflächen begründen
description: Begründe an Formular- und Navigationsbeispielen, warum eine Fokusreihenfolge ruhig und nachvollziehbar sein sollte.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
  - tabindex-und-fokusreihenfolge-verstehen
  - fokusreihenfolge-in-kleinen-oberflaechen-begruenden
level: mittel
draft: false
tags:
  - html
  - tabindex
  - focus
hintPoints:
  - "Frage zuerst, in welcher Reihenfolge man die Oberfläche sichtbar lesen würde."
  - "Achte darauf, ob die Tastaturreihenfolge dazu passt."
  - "Begründe tabindex eher als Eingriff als als Standard."
selfCheckPoints:
  - "Ist klar, warum eine Reihenfolge ruhig oder unruhig wirkt?"
  - "Trennst du Strukturproblem und tabindex-Eingriff?"
transferIdeas:
  - "Übertrage die Aufgabe auf Dialoge oder mehrspaltige Formulare."
reflectionPrompt: "Warum kann eine Oberfläche optisch ordentlich wirken und trotzdem eine schlechte Tastaturreihenfolge haben?"
---

## Aufgabe 1: Reihenfolge deuten

Ein Formular zeigt sichtbar diese Reihenfolge:

1. Name
2. E-Mail
3. Nachricht
4. Senden

Beim Tabben springt der Fokus aber zuerst auf „Senden“.

Erkläre, warum das unruhig wirkt.

## Aufgabe 2: Tabindex bewerten

Begründe, warum `tabindex` nicht einfach überall gesetzt werden sollte, um eine Seite „kontrollierter“ zu machen.

## Aufgabe 3: Struktur statt Notlösung

Beschreibe in 2 bis 4 Sätzen, warum eine gute Struktur oft besser ist als viele manuelle Fokuskorrekturen.
