---
title: Restflächen und feste Anteile in Layouts begründen
description: Begründe, wann calc in CSS die Größenlogik eines Layouts sichtbar und nachvollziehbar macht.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - calc-fuer-zusammengesetzte-groessen-verstehen
  - restflaechen-und-feste-anteile-in-layouts-begruenden
level: mittel
draft: false
tags:
  - css
  - calc
  - breite
  - layout
hintPoints:
  - "Trenne flexible Fläche und feste Anteile bewusst voneinander."
  - "Begründe calc über die sichtbare Restlogik, nicht nur über die Syntax."
selfCheckPoints:
  - "Kannst du feste und flexible Größenanteile in einem Ausdruck lesen?"
  - "Kannst du erklären, wann calc wirklich hilfreich ist?"
transferIdeas:
  - "Übertrage die Idee auf Kopfzeilen, Sidebars, Inhaltsbereiche oder eingebettete Widgets."
reflectionPrompt: "Woran merkst du, dass eine Fläche nicht einfach „100 Prozent“ sein soll, sondern als Rest nach festen Anteilen gedacht werden muss?"
---

## Aufgabe 1: Hauptbereich neben Sidebar

Eine Seitenleiste ist 16rem breit. Daneben soll der Hauptbereich die restliche Breite nutzen.

Erkläre, warum eine Logik wie `calc(100% - 16rem)` hier sinnvoll beschrieben sein kann.

## Aufgabe 2: Höhe unter fester Kopfzeile

Eine App hat oben eine feste Kopfzeile mit 4rem Höhe. Der darunterliegende Inhaltsbereich soll den restlichen sichtbaren Raum einnehmen.

Begründe, warum `calc` hier helfen kann, die sichtbare Restfläche klar zu beschreiben.

## Aufgabe 3: Zu viel Rechnung

Jemand verwendet `calc`, obwohl das Layout mit einer klaren Grid- oder Flex-Struktur bereits sauber beschrieben wäre.

Erkläre, warum `calc` nicht automatisch die beste Lösung ist.
