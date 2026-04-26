---
title: "Grundlagen: Flexbox"
description: "Allgemeiner Überblick über Flexbox, Hauptachse, Querachse, Verteilung und typische Layout-Aufgaben."
subject: web-development
section: "CSS"
topicPath:
  - css
  - flexbox
  - grundlagen-flexbox
learningGoals:
  - "Du erklärst Flexbox als Layoutmodell für eine Achse."
  - "Du unterscheidest Hauptachse und Querachse."
  - "Du ordnest Ausrichtung, Verteilung und Umbruch als typische Flexbox-Aufgaben ein."
practiceIdeas: []
commonMistakes:
  - "Flexbox als Ersatz für jedes Layoutproblem zu sehen."
  - "Hauptachse und Querachse zu verwechseln."
  - "Eigenschaften für Container und Kinder durcheinanderzubringen."
keyTakeaways:
  - "Flexbox organisiert Elemente entlang einer Hauptachse."
  - "Der Container steuert viele Verteilungs- und Ausrichtungsregeln."
  - "Einzelne Flex-Items können zusätzlich eigenes Wachstum oder Ausrichtung erhalten."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "webentwicklung"
  - "css"
  - "flexbox"
  - "layout"
draft: false
---

## Begriff

**Flexbox** ist ein CSS-Layoutmodell zur Anordnung von Elementen entlang einer Hauptachse. Es eignet sich besonders für Reihen, Spalten, Navigationen, Kartenleisten, Button-Gruppen und flexible Verteilungen innerhalb eines begrenzten Bereichs.

Flexbox wurde entwickelt, um viele Layoutaufgaben einfacher zu machen, die mit klassischen Block- und Inline-Regeln umständlich waren.

## Container und Items

Flexbox beginnt mit einem Flex-Container. Wird auf einem Element display: flex gesetzt, werden seine direkten Kinder zu Flex-Items. Viele Flexbox-Eigenschaften wirken entweder auf den Container oder auf einzelne Items.

Diese Trennung ist wichtig. justify-content gehört zum Container und verteilt Items entlang der Hauptachse. align-self gehört zu einem einzelnen Item und kann dessen Ausrichtung auf der Querachse verändern.

## Hauptachse und Querachse

Die Hauptachse wird durch flex-direction bestimmt. Bei row verläuft sie horizontal, bei column vertikal. Die Querachse steht dazu senkrecht. Viele Missverständnisse entstehen, wenn Eigenschaften ohne diese Achsenlogik gelesen werden.

justify-content arbeitet entlang der Hauptachse. align-items arbeitet entlang der Querachse.

## Wachstum, Schrumpfen und Umbruch

Flex-Items können wachsen, schrumpfen oder eine Basisgröße erhalten. Dafür sind flex-grow, flex-shrink und flex-basis zuständig. Mit flex-wrap können Items in mehrere Zeilen oder Spalten umbrechen, wenn nicht genug Platz vorhanden ist.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Eigenschaften wie flex-grow, justify-content oder align-self. Diese Überblicksseite erklärt den gemeinsamen Rahmen: Flexbox ist ein achsenbasiertes Layoutmodell für flexible Verteilung von direkten Kindelementen.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Flexbox zuerst fragen: Was ist der Container, was sind die Items, und in welche Richtung läuft die Hauptachse?</p>
</div>
