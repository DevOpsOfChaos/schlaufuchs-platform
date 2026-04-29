---
title: "Grundlagen: Kaskade und Spezifität"
description: "Allgemeiner Überblick darüber, wie CSS-Regeln ausgewählt, überschrieben und gewichtet werden."
subject: "web-development"
section: "CSS"
topicPath: ["css", "kaskade-und-spezifitaet", "ueberblick", "grundlagen-kaskade-und-spezifitaet"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Begriff

Die **Kaskade** ist der Mechanismus, mit dem CSS entscheidet, welche Regel angewendet wird, wenn mehrere Regeln dasselbe Element betreffen. **Spezifität** beschreibt, wie stark oder genau ein Selektor ist.

## Warum Regeln konkurrieren

Ein Element kann von vielen CSS-Regeln betroffen sein: von allgemeinen Elementselektoren, Klassen, Layoutregeln, Komponentenstilen oder Zuständen. Die Kaskade löst diesen Wettbewerb nach festen Prinzipien auf.

## Spezifität und Reihenfolge

Ein Klassenselektor ist normalerweise spezifischer als ein Elementselektor. Eine ID ist spezifischer als eine Klasse. Wenn zwei Regeln gleich stark sind, entscheidet oft die spätere Regel. Deshalb ist nicht nur wichtig, was ein Selektor auswählt, sondern auch, wo die Regel steht.

## Gute Praxis

Gutes CSS versucht, Spezifität kontrolliert niedrig zu halten. Wer ständig mit immer genaueren Selektoren gegen alte Regeln kämpft, macht Stylesheets schwer wartbar.

<div class="note-panel">
  <p><strong>Merke:</strong> Die Kaskade ist kein Zufall. Sie ist das Regelwerk, das entscheidet, welcher Stil am Ende sichtbar wird.</p>
</div>
