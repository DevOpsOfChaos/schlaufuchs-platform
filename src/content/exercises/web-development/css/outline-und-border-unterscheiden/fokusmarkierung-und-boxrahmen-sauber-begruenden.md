---
title: Fokusmarkierung und Boxrahmen sauber begründen
description: Begründe, wann border und wann outline die passendere Umrandung für sichtbare Zustände und stabile Oberflächen ist.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - outline-und-border-unterscheiden
  - fokusmarkierung-und-boxrahmen-sauber-begruenden
level: mittel
draft: false
tags:
  - css
  - outline
  - border
  - focus
hintPoints:
  - "Frage zuerst, ob die Box selbst anders werden oder nur ein Zustand markiert werden soll."
  - "Denke bei Fokus immer auch an Orientierung mit Tastatur."
selfCheckPoints:
  - "Kannst du border und outline über ihre Rolle trennen?"
  - "Kannst du erklären, warum Fokusmarkierungen nicht bloß Deko sind?"
transferIdeas:
  - "Übertrage die Logik auf Buttons, Karten, Inputs oder Tabs."
reflectionPrompt: "Woran merkst du, dass eine Markierung die Box selbst verändert und nicht nur einen Zustand zusätzlich sichtbar macht?"
---

## Aufgabe 1: Aktives Formularfeld

Ein Eingabefeld soll bei Fokus klar hervorgehoben werden, ohne dass die Oberfläche unruhig springt.

Begründe, warum `outline` hier oft sinnvoller ist als ein stark veränderter `border`.

## Aufgabe 2: Dauerhafte Kartenrahmen

Ein Kartenlayout soll dauerhaft sichtbare Umrandungen haben, damit die Boxen klar voneinander getrennt sind.

Erkläre, warum hier `border` die passendere Grundidee ist.

## Aufgabe 3: Entfernte Fokusmarkierung

Jemand setzt global `outline: none`, weil ihm der Standardrahmen optisch nicht gefällt.

Begründe, warum das problematisch sein kann und was stattdessen ruhiger wäre.
