---
title: "Grundlagen: Sortieren und Invariante"
description: "Allgemeiner Überblick über Sortierverfahren, Zwischenschritte und die Idee einer Invariante als Begründungshilfe."
subject: informatik
section: "Algorithmen"
topicPath:
  - algorithmen-klein-begruenden
  - sortieren-und-invariante
  - grundlagen-sortieren-und-invariante
learningGoals:
  - "Du beschreibst Sortieren als geordnetes Umstellen von Daten."
  - "Du erklärst, warum Zwischenschritte bei Sortierverfahren wichtig sind."
  - "Du ordnest Invarianten als Aussagen ein, die während eines Algorithmus erhalten bleiben."
practiceIdeas: []
commonMistakes:
  - "Nur das Endergebnis zu betrachten und den Ablauf zu ignorieren."
  - "Eine Invariante mit einer beliebigen Beobachtung zu verwechseln."
  - "Sortierverfahren nur auswendig zu lernen, ohne ihre Begründung zu verstehen."
keyTakeaways:
  - "Sortieren ist ein algorithmischer Prozess mit kontrollierten Zwischenschritten."
  - "Eine Invariante hilft zu begründen, warum ein Verfahren korrekt bleibt."
  - "Unterschiedliche Sortierverfahren unterscheiden sich in Strategie, Aufwand und Zwischeneigenschaften."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "informatik"
  - "algorithmen"
  - "sortieren"
  - "invariante"
draft: false
---

## Begriff

**Sortieren** bedeutet in der Informatik, Daten in eine gewünschte Reihenfolge zu bringen. Die Ordnung kann numerisch, alphabetisch, zeitlich oder durch ein anderes Vergleichskriterium festgelegt sein. Eine **Invariante** ist eine Aussage, die während bestimmter Schritte eines Algorithmus wahr bleibt.

Beide Begriffe gehören eng zusammen, weil Sortierverfahren nicht nur am Endergebnis beurteilt werden. Man möchte verstehen, warum ein Verfahren zuverlässig zu einer sortierten Folge führt.

## Sortieren als Algorithmus

Ein Sortierverfahren besteht aus wiederholbaren Schritten. Es vergleicht Elemente, vertauscht sie, fügt sie an passender Stelle ein oder teilt Datenbereiche auf. Bekannte Verfahren sind Bubble Sort, Selection Sort, Insertion Sort, Merge Sort und Quick Sort.

Für das Grundverständnis ist nicht der Name des Verfahrens entscheidend, sondern die Strategie: Wird das kleinste Element gesucht? Wird schrittweise eine sortierte Teilliste aufgebaut? Wird die Liste geteilt und später zusammengeführt?

## Invariante

Eine Invariante beschreibt eine Eigenschaft, die nach jedem wichtigen Schritt erhalten bleibt. Bei einem einfachen Einfügesortieren kann zum Beispiel gelten: Der linke Teil der Liste ist bereits sortiert. Nach jedem Einfügeschritt wird diese Aussage wieder hergestellt.

Invarianten sind keine Dekoration. Sie erklären, warum ein Algorithmus nicht nur zufällig funktioniert, sondern systematisch korrekt bleibt.

## Warum Zwischenschritte wichtig sind

Wer nur das Endergebnis betrachtet, kann schwer beurteilen, ob ein Verfahren immer funktioniert. Zwischenschritte zeigen, welche Ordnung bereits erreicht wurde und welcher Bereich noch unsortiert ist. Dadurch lassen sich Fehler, Abbruchbedingungen und Sonderfälle besser erkennen.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten können ein konkretes Verfahren Schritt für Schritt ausführen. Diese Überblicksseite erklärt den allgemeinen Rahmen: Sortieren ist geordnetes Umstellen von Daten, und Invarianten helfen, die Korrektheit eines solchen Ablaufs zu begründen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Sortierverfahren ist nicht nur dann interessant, wenn die Liste am Ende stimmt. Wichtig ist, welche Aussage während des Ablaufs immer erhalten bleibt.</p>
</div>
