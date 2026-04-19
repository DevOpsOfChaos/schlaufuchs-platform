---
title: Musterlösung – XML-Struktur auf Wohlgeformtheit prüfen
description: Musterlösung zur Aufgabe INF-DATA-FORMAT-XML-001.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - xml-datenstruktur-verstehen
  - xml-wurzel-elemente-und-attribute-pruefen-loesung
taskId: INF-DATA-FORMAT-XML-001
relatedExercise: src/content/exercises/informatik/grundlagen/datenformate/xml-datenstruktur-verstehen/xml-wurzel-elemente-und-attribute-pruefen.md
tags:
  - informatik
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Elemente lesen

Das Wurzelelement ist <code>party</code>. Ein Attribut ist <code>datum="31.12.11"</code> oder <code>name="Albert"</code>. Ein Unterelement ist <code>getraenk</code>.

## Aufgabe 2: Wohlgeformtheit prüfen

Ein XML-Dokument braucht genau ein äußerstes Wurzelelement. Zwei getrennte äußerste Elemente verletzen diese Grundregel.

## Aufgabe 3: Verschachtelungsfehler finden

In <code>&lt;a&gt;&lt;b&gt;&lt;/a&gt;&lt;/b&gt;</code> wird <code>a</code> geschlossen, obwohl <code>b</code> noch offen ist. Die Ebenen sind also nicht paarig verschachtelt.
