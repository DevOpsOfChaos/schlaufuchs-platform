---
title: "Grundlagen: Suchverfahren"
description: "Allgemeiner Überblick über lineare Suche, binäre Suche, Voraussetzungen und typische Abwägungen."
subject: informatik
section: "Algorithmen"
topicPath:
  - algorithmen-klein-begruenden
  - suchverfahren
  - grundlagen-suchverfahren
learningGoals:
  - "Du erklärst Suche als systematisches Finden in einer Datenmenge."
  - "Du unterscheidest einfache Suche und Suche mit Vorbedingungen."
  - "Du beschreibst, warum Ordnung eine Suche stark beschleunigen kann."
practiceIdeas: []
commonMistakes:
  - "Binäre Suche auf unsortierte Daten anzuwenden."
  - "Nur die Anzahl der Codezeilen statt die Anzahl der geprüften Elemente zu betrachten."
  - "Nicht zu klären, was bei keinem Treffer passieren soll."
keyTakeaways:
  - "Suchverfahren brauchen eine klare Suchfrage und eine definierte Datenmenge."
  - "Lineare Suche funktioniert fast immer, kann aber langsam werden."
  - "Binäre Suche ist schnell, benötigt aber eine passende Sortierung."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "informatik"
  - "algorithmen"
  - "suche"
  - "datenstrukturen"
draft: false
---

## Begriff

Ein **Suchverfahren** ist ein Algorithmus, der in einer Datenmenge nach einem bestimmten Wert, Eintrag oder Zustand sucht. Die Datenmenge kann eine Liste, eine Tabelle, ein Text, ein Dateisystem oder eine strukturierte Sammlung sein.

Die einfachste Form ist die lineare Suche: Man prüft Eintrag für Eintrag. Schnellere Verfahren nutzen zusätzliche Eigenschaften, zum Beispiel eine Sortierung.

## Warum Suchverfahren wichtig sind

Suchen gehört zu den häufigsten Aufgaben in der Informatik. Programme suchen Benutzernamen, Dateien, Produkte, Messwerte, Zustände oder passende Regeln. Je größer die Datenmenge wird, desto wichtiger wird die Frage, wie systematisch gesucht wird.

Ein Suchverfahren ist deshalb nicht nur ein Stück Code. Es beschreibt eine Entscheidung: Welche Informationen stehen vorher zur Verfügung, und wie kann man sie nutzen?

## Lineare Suche

Bei der linearen Suche wird jedes Element nacheinander geprüft. Sie ist leicht verständlich und funktioniert auch dann, wenn die Daten unsortiert sind. Der Nachteil ist, dass im ungünstigen Fall sehr viele Elemente geprüft werden müssen.

Lineare Suche ist deshalb oft eine gute erste Strategie, aber nicht immer die effizienteste Lösung.

## Binäre Suche

Die binäre Suche halbiert den Suchbereich Schritt für Schritt. Dafür müssen die Daten in einer passenden Reihenfolge sortiert sein. Ohne Sortierung verliert die Methode ihre Grundlage.

Der zentrale Gedanke lautet: Wenn man weiß, dass die Daten geordnet sind, kann man viele Möglichkeiten auf einmal ausschließen.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Schleifen, Rekursion, Sortierung oder Datenstrukturen. Diese Überblicksseite erklärt den allgemeinen Rahmen: Suchen heißt, eine Datenmenge kontrolliert zu durchsuchen und die Voraussetzungen des Verfahrens bewusst zu prüfen.

<div class="note-panel">
  <p><strong>Merke:</strong> Schnelle Suche ist selten Magie. Sie nutzt zusätzliche Ordnung oder Struktur in den Daten.</p>
</div>
