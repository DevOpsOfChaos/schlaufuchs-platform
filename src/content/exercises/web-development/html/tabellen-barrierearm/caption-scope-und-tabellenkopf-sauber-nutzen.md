---
title: "HTML – eine Datentabelle semantisch verbessern"
description: "Verbessere eine Tabelle so, dass Beschriftung und Kopfzellen fachlich klar werden."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "tabellen-barrierearm"
  - "caption-scope-und-tabellenkopf-sauber-nutzen"
taskId: "wd-html-v95-caption-scope-tabellenkopf"
tags:
  - "web development"
  - "html"
  - "tabellen"
  - "accessibility"
  - "semantik"
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

Eine Preistabelle besteht nur aus td-Zellen. Die erste Zeile ist per CSS fett, aber es gibt keine caption und keine th-Elemente.

## Aufgabe 1: Problem erkennen

Beschreibe in zwei bis vier Sätzen, welches konkrete Nutzungsproblem entsteht. Benenne dabei nicht nur den Code, sondern auch die Wirkung auf Nutzerinnen und Nutzer.

## Aufgabe 2: Entscheidung begründen

Entscheide, welche HTML- oder CSS-Technik hier sinnvoll ist. Begründe kurz, warum diese Technik zur Situation passt und welche Alternative du bewusst nicht wählst.

## Aufgabe 3: Verbesserung skizzieren

Schreibe einen kleinen Codeausschnitt oder eine genaue Beschreibung, die den Ausgangszustand verbessert. Die Lösung muss nicht vollständig produktionsreif sein, aber die fachliche Richtung soll stimmen.
