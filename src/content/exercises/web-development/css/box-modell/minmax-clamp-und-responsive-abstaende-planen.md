---
title: "CSS – starre Abstände in flexible Werte übersetzen"
description: "Verbessere ein Kartenlayout mit minmax und clamp, damit es ruhiger reagiert."
subject: web-development
section: "CSS"
topicPath:
  - "css"
  - "box-modell"
  - "minmax-clamp-und-responsive-abstaende-planen"
taskId: "wd-css-v95-minmax-clamp-responsive"
tags:
  - "web development"
  - "css"
  - "responsive"
  - "clamp"
  - "grid"
hintPoints:
  - "Trenne zuerst sichtbares Verhalten, semantische Bedeutung und technische Umsetzung."
  - "Begründe deine Entscheidung aus Nutzerperspektive, nicht nur aus Code-Sicht."
  - "Prüfe am Ende, ob die Lösung ohne Ratespiel verständlich bleibt."
selfCheckPoints:
  - "Ist der betroffene UI-Baustein eindeutig benannt?"
  - "Ist die technische Entscheidung fachlich begründet?"
  - "Gibt es eine klare Verbesserung gegenüber dem Ausgangszustand?"
transferIdeas:
  - "Übertrage die Entscheidung auf eine zweite Komponente derselben Seite."
  - "Formuliere eine kurze Prüfregel, die ein Team beim Review verwenden könnte."
reflectionPrompt: "Welche kleine Änderung hätte hier die größte Wirkung auf Verständlichkeit oder Zugänglichkeit?"
level: mittel
draft: false
---
## Ausgangslage

Ein Kartenraster hat drei Breakpoints nur, um gap und padding leicht zu ändern. Zwischen den Breakpoints wirkt das Layout sprunghaft.

## Aufgabe 1: Problem erkennen

Beschreibe in zwei bis vier Sätzen, welches konkrete Nutzungsproblem entsteht. Benenne dabei nicht nur den Code, sondern auch die Wirkung auf Nutzerinnen und Nutzer.

## Aufgabe 2: Entscheidung begründen

Entscheide, welche HTML- oder CSS-Technik hier sinnvoll ist. Begründe kurz, warum diese Technik zur Situation passt und welche Alternative du bewusst nicht wählst.

## Aufgabe 3: Verbesserung skizzieren

Schreibe einen kleinen Codeausschnitt oder eine genaue Beschreibung, die den Ausgangszustand verbessert. Die Lösung muss nicht vollständig produktionsreif sein, aber die fachliche Richtung soll stimmen.
