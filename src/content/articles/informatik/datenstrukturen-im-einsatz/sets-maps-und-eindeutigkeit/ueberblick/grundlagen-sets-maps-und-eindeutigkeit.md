---
title: "Grundlagen: Sets, Maps und Eindeutigkeit"
description: "Allgemeiner Überblick über Mengen, Zuordnungen und die Frage, wann Daten eindeutig sein sollen."
subject: informatik
section: "Datenstrukturen im Einsatz"
topicPath:
  - datenstrukturen-im-einsatz
  - sets-maps-und-eindeutigkeit
  - grundlagen-sets-maps-und-eindeutigkeit
learningGoals:
  - "Du unterscheidest Listen, Sets und Maps nach ihrem Zweck."
  - "Du erklärst Eindeutigkeit als zentrale Eigenschaft eines Sets."
  - "Du beschreibst Maps als Zuordnung von Schlüsseln zu Werten."
practiceIdeas: []
commonMistakes:
  - "Ein Set wie eine sortierte Liste zu behandeln."
  - "Schlüssel und Wert in einer Map zu vertauschen."
  - "Eindeutigkeit erst nachträglich statt bei der Datenstruktur mitzudenken."
keyTakeaways:
  - "Sets speichern Elemente ohne doppelte Einträge."
  - "Maps speichern Werte unter eindeutigen Schlüsseln."
  - "Die Datenstruktur sollte zum Zugriffsmuster passen."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - informatik
  - datenstrukturen
  - set
  - map
draft: false
---
## Begriff

**Sets** und **Maps** sind Datenstrukturen für spezielle Ordnungsfragen. Ein Set beantwortet vor allem: Ist ein Element vorhanden? Eine Map beantwortet: Welcher Wert gehört zu einem Schlüssel?

## Sets

Ein Set ist eine Menge. Es speichert ein Element höchstens einmal. Dadurch eignet es sich gut, wenn Eindeutigkeit wichtig ist: doppelte Namen vermeiden, bereits besuchte Knoten merken oder bekannte Werte schnell prüfen.

## Maps

Eine Map arbeitet mit Paaren aus Schlüssel und Wert. Der Schlüssel ist eindeutig und führt zum gespeicherten Wert. Beispiele sind Benutzername zu Profil, Artikelnummer zu Preis oder Dateiendung zu Dateityp.

## Unterschied zu Listen

Eine Liste bewahrt Reihenfolge und Positionen. Ein Set betont Eindeutigkeit. Eine Map betont Zuordnung. Deshalb ist die Frage nicht, welche Datenstruktur „besser“ ist, sondern welche Frage das Programm häufig stellt.

<div class="note-panel">
  <p><strong>Merke:</strong> Sets und Maps sind keine komplizierteren Listen. Sie lösen andere Fragen: Eindeutigkeit und Zuordnung.</p>
</div>
