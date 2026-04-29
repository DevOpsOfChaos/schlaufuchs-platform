---
title: "Musterlösung – Elemente mit Flexbox ausrichten"
description: "Erste festgehaltene Musterlösung zur Aufgabe WEB-CSS-FLEXBOX-001."
subject: "web-development"
section: "CSS"
topicPath: ["css", "flexbox-grundidee-verstehen", "elemente-mit-flexbox-ausrichten"]
taskId: "WEB-CSS-FLEXBOX-001"
relatedExercise: "src/content/exercises/web-development/css/flexbox-grundidee-verstehen/elemente-mit-flexbox-ausrichten.md"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösungsidee

Die Aufgabe prüft vor allem drei Dinge: Richtung der Achse, sichtbare Verteilung auf der Hauptachse und die Frage, ob der Container oder die Einzelelemente verändert wurden.

## Aufgabe 1: Demo deuten

Bei `.leiste-a` liegen die Elemente als Flex-Reihe am Anfang der Hauptachse. Sie bleiben also nebeneinander, aber ohne großen verteilten Zwischenraum.  
Bei `.leiste-b` bleiben dieselben Elemente ebenfalls in einer Flex-Reihe, werden aber über die Breite verteilt, weil `justify-content: space-between` den freien Raum zwischen ihnen aufspannt.  
Gleich bleibt: Die Elemente selbst müssen dadurch weder breiter noch höher werden. Die sichtbare Veränderung betrifft zuerst die **Verteilung im Container**.

## Aufgabe 2: Verwechslung prüfen

Die Aussage ist falsch, weil `align-items` nicht die waagerechte Verteilung auf der Hauptachse beschreibt. In einer normalen Flex-Reihe steuert `justify-content` die Verteilung entlang der Hauptachse, während `align-items` eher die Ausrichtung auf der Querachse betrifft.  
Darum ist `align-items` nicht die richtige Erklärung für „über die ganze Breite verteilt“.

## Aufgabe 3: Container statt Einzelelemente

Wenn gleiche Buttons plötzlich mit großen Zwischenräumen über die Breite verteilt sind, ist das ein starkes Signal für eine Änderung am **gemeinsamen Container**. Typische Kandidaten wären `display: flex` zusammen mit `justify-content`.  
An den Buttons selbst würde man zuerst prüfen, wenn Größe, Innenabstand oder einzelne Boxen anders geworden wären. Hier geht es aber vor allem um die **Anordnung zwischen den Elementen**.

## Worauf man bei der Korrektur achten sollte

- Hauptachse und Querachse nicht verwechseln.
- Sichtbar beschreiben, **was sich verteilt** und **was gleich bleibt**.
- Den Container klar als ersten Prüfpunkt benennen.
